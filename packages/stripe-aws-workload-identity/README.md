# @stripe/stripe-aws-workload-identity

> **Private preview.** This package and the Stripe workload identity API it
> depends on are in private preview and may change.

AWS workload identity adapter for [stripe-node](https://github.com/stripe/stripe-node).

It lets an application running on AWS authenticate to Stripe without holding a
long-lived Stripe secret key. The application proves where it is running instead
of storing a credential.

## Installation

```sh
npm install stripe @stripe/stripe-aws-workload-identity
```

### Node.js version

This package supports Node.js 18 or newer, matching stripe-node. Its dependency
does not: `@aws-sdk/client-sts` requires `sts:GetWebIdentityToken` support, which
first shipped in `3.952.0` (the version this package declares as its floor), and
AWS raised that package's own requirement to **Node.js 20** shortly afterwards.

A fresh `npm install` resolves `^3.952.0` to a current AWS SDK, so in practice
**Node.js 20 or newer is required** unless you pin the dependency yourself:

```json
{"dependencies": {"@aws-sdk/client-sts": "3.952.x"}}
```

Pinning is verified to work: this package is built and tested against both
`3.952.0` and the latest release.

## Usage

```js
import Stripe from 'stripe';
import {awsWorkloadIdentity} from '@stripe/stripe-aws-workload-identity';

const client = Stripe.forWorkloadIdentity(
  'oacli_live_...',
  awsWorkloadIdentity()
);

const customers = await client.customers.list();
```

Once constructed, the client behaves like any other Stripe client: resources,
request options, retries, idempotency, and error handling all work the same way.

## What it does

`awsWorkloadIdentity()` returns a provider object that Stripe's SDK calls when it
needs a credential. On each call it asks AWS STS for a freshly signed JSON Web
Token via `sts:GetWebIdentityToken`, using:

| | |
| --- | --- |
| Audience | `https://access.stripe.com/wif` |
| Signing algorithm | `ES384` |

Stripe exchanges that token for a short-lived restricted key. This package never
sees the Stripe credential — it only produces the AWS assertion.

AWS region and credentials come from the AWS SDK's normal resolution. You can
override the STS client configuration if you need to:

```js
awsWorkloadIdentity({stsClientConfig: {region: 'us-west-2'}});
```

Note that `GetWebIdentityToken` is not available on the STS global endpoint, so a
region must be resolvable.

## Local development, tests, and CI

`GetWebIdentityToken` only works on AWS infrastructure with an identity allowed to
call it. Anywhere else — a laptop, a unit test, a CI runner that is not on AWS —
use a normal Stripe test API key or a fully mocked Stripe client instead:

```js
const client = new Stripe(process.env.STRIPE_TEST_API_KEY);
```

## Troubleshooting

| Error | What to check |
| --- | --- |
| `sts:GetWebIdentityToken failed (CredentialsProviderError: ...)` | The process is not running on AWS, or no credentials are resolvable. |
| `sts:GetWebIdentityToken failed (AccessDeniedException: ...)` | The AWS identity is not allowed to call `sts:GetWebIdentityToken`. |
| `returned no WebIdentityToken` | AWS answered without a token. Retry; if it persists, contact Stripe support. |
| `Stripe rejected the workload identity token exchange` | The Stripe client ID is wrong or not enabled for workload identity, or the Dashboard configuration does not trust this workload. |

See the [workload identity documentation](../../docs/workload-identity.md) for the
full guide.

## Releasing

This package is versioned and released independently of the core `stripe` package,
so core releases never republish it and a fix here does not require a core release.

1. Bump `version` in this directory's `package.json` and merge that PR.
2. Push a matching tag: `aws-wif-v<version>`, e.g.

   ```sh
   git tag aws-wif-v0.1.0-alpha.1
   git push origin aws-wif-v0.1.0-alpha.1
   ```

CI then builds, typechecks, tests, and publishes. The job refuses to publish if the
tag and `package.json` versions disagree, and is a no-op if that version is already
on npm, so re-running it is safe. An `alpha` version publishes under the
`private-preview` dist-tag, `beta` under `public-preview`, anything else `latest`.

## License

MIT
