---
title: Add workload identity authentication for AWS (private preview)
semver_level: minor
---

- Add `Stripe.forWorkloadIdentity(clientId, provider)`, which authenticates with a
  short-lived restricted key obtained by exchanging a cloud-provider identity
  assertion, instead of a long-lived secret API key.
- Add `@stripe/stripe-aws-workload-identity`, a separately published adapter that
  obtains an AWS assertion via `sts:GetWebIdentityToken`. The core `stripe` package
  does not depend on the AWS SDK.
- Add `Stripe.errors.StripeWorkloadIdentityError` for workload identity setup and
  token-exchange failures.
- Fix authenticator failures never reaching the caller: `_request` threw inside a
  `.catch`, which left the request pending forever instead of reporting the error.
