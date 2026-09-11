---
title: Update generated code for beta
pr_link: https://github.com/stripe/stripe-node/pull/2226
is_stripe_api_change: true
released_in_version: 17.4.0-beta.3
---

* Add support for `account_holder_address` and `bank_address` on `FundingInstructions.bank_transfer.financial_addresses[].iban`, `FundingInstructions.bank_transfer.financial_addresses[].sort_code`, `FundingInstructions.bank_transfer.financial_addresses[].spei`, `FundingInstructions.bank_transfer.financial_addresses[].zengin`, `PaymentIntent.next_action.display_bank_transfer_instructions.financial_addresses[].iban`, `PaymentIntent.next_action.display_bank_transfer_instructions.financial_addresses[].sort_code`, `PaymentIntent.next_action.display_bank_transfer_instructions.financial_addresses[].spei`, and `PaymentIntent.next_action.display_bank_transfer_instructions.financial_addresses[].zengin`
* Add support for `account_holder_name` on `FundingInstructions.bank_transfer.financial_addresses[].spei` and `PaymentIntent.next_action.display_bank_transfer_instructions.financial_addresses[].spei`
* Add support for new value `subscribe` on enum `PaymentLinkUpdateParams.submit_type`
