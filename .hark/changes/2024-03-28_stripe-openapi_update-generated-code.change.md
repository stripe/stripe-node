---
title: Update generated code for beta
pr_url: https://github.com/stripe/stripe-node/pull/2047
is_stripe_api_change: true
released_in_version: 14.24.0-beta.1
---

* Add support for `financial_account_transactions`, `financial_account`, `issuing_card`, and `issuing_cards_list` on `AccountSessionCreateParams.components`
* Remove support for `subscription_billing_cycle_anchor`, `subscription_cancel_at_period_end`, `subscription_cancel_at`, `subscription_cancel_now`, `subscription_default_tax_rates`, `subscription_items`, `subscription_prebilling`, `subscription_proration_behavior`, `subscription_proration_date`, `subscription_resume_at`, `subscription_start_date`, and `subscription_trial_end` on `InvoiceCreatePreviewParams`
