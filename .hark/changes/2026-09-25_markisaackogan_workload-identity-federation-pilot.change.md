---
title: Add alternate Stripe constructor using AWS workload identity
pr_url: https://github.com/stripe/stripe-node/pull/2869
---

This PR adds a new constructor to the top level client creating an alternative to a long-term stripe api key. Instead, users can provide their client id and a provider hint which helps guide the correct cloud provider OAuth workflow.

```
// Main flow:
const stripe = Stripe('sk_test_...')

//Alternate flow for users on AWS hardware
const stripe = Stripe.forWorkloadIdentity('oacli_live_...', "aws")
```