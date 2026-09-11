---
title: Remove empty resources created for service groupings
pr_link: https://github.com/stripe/stripe-node/pull/2215
released_in_version: 17.4.0
---

* Remove `Stripe.V2.BillingResource`, `Stripe.V2.CoreResource`, and `Stripe.V2Resource` types from the public interface as they are no longer needed.  SDK usage will not be affected but any references to these types in your application will need to be removed.
