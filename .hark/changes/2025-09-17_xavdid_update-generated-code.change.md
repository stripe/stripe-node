---
title: Update generated code for private-preview
pr_url: https://github.com/stripe/stripe-node/pull/2404
is_stripe_api_change: true
released_in_version: 18.6.0-alpha.2
---

* Add support for `retrieve` method on resource `V2.Core.ClaimableSandbox`
* Add support for `month_of_year` on `V2.Billing.Cadence.billing_cycle.month` and `V2.Billing.CadenceCreateParams.billing_cycle.month`
* Add support for `claimed_at`, `expires_at`, `sandbox_details`, and `status` on `V2.Core.ClaimableSandbox`
* Remove support for `api_keys` on `V2.Core.ClaimableSandbox`
* Change type of `V2.Core.ClaimableSandbox.claim_url` from `string` to `string | null`
* Add support for new value `current_billing_period_end` on enums `V2.Billing.IntentAction.deactivate.effective_at.type` and `V2.Billing.IntentCreateParams.actions[].deactivate.effective_at.type`
* Add support for `will_activate_at` and `will_cancel_at` on `V2.Billing.PricingPlanSubscription.servicing_status_transitions` and `V2.Billing.RateCardSubscription.servicing_status_transitions`
* Add support for `category` and `priority` on `V2.Billing.ServiceAction.credit_grant_per_tenant`, `V2.Billing.ServiceAction.credit_grant`, `V2.Billing.ServiceActionCreateParams.credit_grant_per_tenant`, and `V2.Billing.ServiceActionCreateParams.credit_grant`
* Change `V2.Billing.LicenseFeeUpdateParams.display_name` to be optional
* Add support for `invoices` on `EventsV2BillingCadenceBilledEvent`
* Add support for thin events `V2CoreClaimableSandboxClaimedEvent`, `V2CoreClaimableSandboxExpiredEvent`, `V2CoreClaimableSandboxExpiringEvent`, and `V2CoreClaimableSandboxSandboxDetailsOwnerAccountUpdatedEvent` with related object `V2.Core.ClaimableSandbox`
* Remove support for thin event `V2BillingCadenceErroredEvent` with related object `V2.Billing.Cadence`
