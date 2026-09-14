---
title: Pin latest API version as the default
pr_url: https://github.com/stripe/stripe-node/pull/1743
released_in_version: 12.0.0
---

**⚠️ ACTION REQUIRED: the breaking change in this release likely affects you ⚠️**

In this release, Stripe API Version `2022-11-15` (the latest at time of release) will be sent by default on all requests.
The previous default was to use your [Stripe account's default API version](https://stripe.com/docs/development/dashboard/request-logs#view-your-default-api-version).

To successfully upgrade to stripe-node v12, you must either

1. **(Recommended) Upgrade your integration to be compatible with API Version `2022-11-15`.**

   Please read the API Changelog carefully for each API Version from `2022-11-15` back to your [Stripe account's default API version](https://stripe.com/docs/development/dashboard/request-logs#view-your-default-api-version). Determine if you are using any of the APIs that have changed in a breaking way, and adjust your integration accordingly. Carefully test your changes with Stripe [Test Mode](https://stripe.com/docs/keys#test-live-modes) before deploying them to production.

   You can read the [v12 migration guide](https://github.com/stripe/stripe-node/wiki/Migration-guide-for-v12) for more detailed instructions.
2. **(Alternative option) Specify a version other than `2022-11-15` when initializing `stripe-node`.**

   If you were previously initializing stripe-node without an explicit API Version, you can postpone modifying your integration by specifying a version equal to your [Stripe account's default API version](https://stripe.com/docs/development/dashboard/request-logs#view-your-default-api-version). For example:

   ```diff
   - const stripe = require('stripe')('sk_test_...');
   + const stripe = require('stripe')('sk_test_...', {
   +   apiVersion: 'YYYY-MM-DD' // Determine your default version from https://dashboard.stripe.com/developers
   + })
   ```

   If you were already initializing stripe-node with an explicit API Version, upgrading to v12 will not affect your integration.

   Read the [v12 migration guide](https://github.com/stripe/stripe-node/wiki/Migration-guide-for-v12) for more details.

Going forward, each major release of this library will be *pinned* by default to the latest Stripe API Version at the time of release.
That is, instead of upgrading stripe-node and separately upgrading your Stripe API Version through the Stripe Dashboard. whenever you upgrade major versions of stripe-node, you should also upgrade your integration to be compatible with the latest Stripe API version.
