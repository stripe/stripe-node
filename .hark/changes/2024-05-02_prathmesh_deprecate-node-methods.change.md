---
title: Deprecate Node methods and params based on OpenAPI spec
pr_link: https://github.com/stripe/stripe-node/pull/2077
released_in_version: 15.5.0
---

- Mark as deprecated the `approve` and `decline` methods on `Issuing.Authorization`. Instead, [respond directly to the webhook request to approve an authorization](https://stripe.com/docs/issuing/controls/real-time-authorizations#authorization-handling).
- Mark as deprecated the `persistent_token` property on `ConfirmationToken.PaymentMethodPreview.Link`, `PaymentIntent.PaymentMethodOptions.Link`, `PaymentIntentResource.PaymentMethodOptions.Link`, `PaymentMethod.Link.persistent_token`. `SetupIntents.PaymentMethodOptions.Card.Link.persistent_token`, `SetupIntentsResource.persistent_token`. This is a legacy parameter that no longer has any function.
