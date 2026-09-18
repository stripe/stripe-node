# Workload identity authentication

> **Private preview.** Workload identity is in private preview. The API and this
> SDK surface may change. It currently supports **AWS only**.

Workload identity lets an application call the Stripe API without holding a
long-lived secret API key. The application obtains a signed assertion from its
cloud provider proving where it is running; the SDK exchanges that assertion for a
short-lived restricted key and uses it as the normal authentication credential.

This is conceptually similar to trusted publishing: you prove where the code runs
instead of storing a Stripe secret.

**API keys remain the default.** Nothing about `new Stripe(apiKey)` changes, and
workload identity is never selected implicitly.

## Usage

```sh
npm install stripe @stripe/stripe-aws-workload-identity
```

```js
import Stripe from 'stripe';
import {awsWorkloadIdentity} from '@stripe/stripe-aws-workload-identity';

const client = Stripe.forWorkloadIdentity(
  'oacli_live_...',
  awsWorkloadIdentity()
);

const customers = await client.customers.list();
```

The first request acquires an AWS assertion, exchanges it for a restricted key,
caches that key, and then makes the request. After that the client behaves like
any other Stripe client: resources, helpers, request options, telemetry, retries,
idempotency, and error handling are unchanged. `Stripe.forWorkloadIdentity` accepts
the same configuration object as the normal constructor, except `authenticator`.

## Requirements

| | |
| --- | --- |
| Cloud providers | AWS only |
| Client type | `StripeClient` (the default `Stripe` client) |
| Client ID shape | `oacli_live_...` or `oacli_test_...` |
| Adapter | [`@stripe/stripe-aws-workload-identity`](../packages/stripe-aws-workload-identity) |
| Assertion audience | `https://access.stripe.com/wif` (fixed) |
| Signing algorithm | `ES384` |
| Runtime | Node.js 20+ in practice (see below) |

The client ID is a Stripe OAuth client ID, found on the workload identity settings
page in the Stripe Dashboard. It is not an API key, and passing a `sk_...` or
`rk_...` key to `Stripe.forWorkloadIdentity` is rejected.

The adapter obtains the assertion through AWS STS `GetWebIdentityToken`, using the
AWS SDK's normal region and credential resolution. That operation is not available
on the STS global endpoint, so a region must be resolvable.

The core `stripe` package still supports Node.js 18. The AWS adapter's dependency
does not: `@aws-sdk/client-sts` gained `GetWebIdentityToken` in `3.952.0` and then
raised its own requirement to Node.js 20, so a default install of the adapter needs
Node.js 20 or newer. Node.js 18 users can pin `@aws-sdk/client-sts` to `3.952.x`,
which is tested and works. Nothing about API key authentication is affected.

## Local development, tests, and CI

An AWS workload identity assertion can only be obtained on AWS infrastructure with
an identity allowed to request one. Anywhere else — a laptop, a unit test, a CI
runner that is not on AWS — use a normal Stripe test API key or a fully mocked
client:

```js
const client = new Stripe(process.env.STRIPE_TEST_API_KEY);
```

Do not try to stand in a fake assertion: Stripe's token service is the
authoritative validator, and it will reject one.

## Token lifetime

Granted restricted keys normally last 3,600 seconds. The SDK:

- caches the key in memory on the client, and never persists it;
- refreshes it proactively about five minutes before it expires (roughly 55
  minutes into a one-hour key);
- collapses concurrent acquisitions into a single token exchange, so a burst of
  requests produces one assertion and one exchange;
- refreshes and replays a request **once** if a cached key is nonetheless
  rejected with a `401`, preserving the body, request options, and idempotency key.

A key is never refreshed more than once per API operation, independently of the
SDK's ordinary network retries.

## Errors

Workload identity setup and exchange failures are reported as
`Stripe.errors.StripeWorkloadIdentityError`, so they can be distinguished from
ordinary resource API errors:

```js
try {
  await client.customers.list();
} catch (err) {
  if (err instanceof Stripe.errors.StripeWorkloadIdentityError) {
    // Credential could not be established.
  }
}
```

| Message contains | What to check |
| --- | --- |
| `requires a Stripe OAuth client ID` | The first argument was empty or missing. |
| `A Stripe API key was passed` | Use `new Stripe(apiKey)`, not `Stripe.forWorkloadIdentity`. |
| `must start with oacli_live_ or oacli_test_` | The client ID is malformed. |
| `requires a workload identity provider` / `getIdentityAssertion()` | The second argument is not an adapter. Pass `awsWorkloadIdentity()`. |
| `Unsupported workload identity cloud provider` | Only AWS is supported in this preview. |
| `Unable to obtain a aws workload identity assertion` | The process is not on suitable AWS infrastructure, or lacks `sts:GetWebIdentityToken` permission. Use a test API key locally. |
| `Unable to reach the Stripe workload identity token exchange` | Network or egress problem reaching `api.stripe.com`. |
| `Stripe rejected the workload identity token exchange` | The client ID is invalid or not enabled for workload identity, the Dashboard configuration does not trust this workload, or the exchange is temporarily unavailable. |
| `without a usable access_token` | The exchange answered unexpectedly. Retry; if it persists, contact Stripe support. |
| A `401` after a refresh and replay | The granted key is being rejected by the API. Check the client's Dashboard configuration and permissions. |

The SDK does not fall back to any other authentication mode when workload identity
fails.

## Going back to an API key

If you reached this feature by accident, the normal constructor is unchanged:

```js
import Stripe from 'stripe';

const client = new Stripe('sk_test_...');
```

You can remove the `@stripe/stripe-aws-workload-identity` dependency; the core
`stripe` package never depends on it or on the AWS SDK.

## Security notes

- **Trust boundary.** The SDK trusts the adapter only to acquire an identity
  assertion. Stripe's token service performs the authoritative validation.
- **Fixed destination.** Assertions are sent only over HTTPS to
  `https://api.stripe.com/stripe-workload/oauth2/token`. The client's `host`,
  `port`, `protocol`, and `httpClient` settings are deliberately **not** applied to
  the exchange, and there is no public option to redirect it. Redirects are not
  followed, and no configured proxy agent is used, so TLS always authenticates
  `api.stripe.com`.
- **Secret handling.** Assertions, restricted keys, API keys, and the exchange
  request body never appear in error messages, telemetry, or emitted request and
  response events. Server-supplied error text is length-bounded and scrubbed
  before being relayed.
- **Cache scope.** Restricted keys are held in memory on the client only.
