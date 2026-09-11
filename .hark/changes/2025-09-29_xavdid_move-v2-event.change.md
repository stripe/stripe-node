---
title: Move `V2.Event` API resources to `V2.Core.Events`
pr_link: https://github.com/stripe/stripe-node/pull/2427
is_breaking: true
released_in_version: 19.0.0
---

- ⚠️ Move the below event related interfaces and types from `Stripe.V2` to `Stripe.V2.Core`. This enables us to correctly match the API path to the namespace
     - `Stripe.V2.EventDestination` -> `Stripe.V2.Core.EventDestination`
     - `Stripe.V2.Event` -> `Stripe.V2.Core.Event`
     - `Stripe.V2.EventBase` ->  `Stripe.V2.Core.EventBase`
     - `Stripe.V2.Events.RelatedObject`  ->  `Stripe.V2.Core.Events.RelatedObject`
