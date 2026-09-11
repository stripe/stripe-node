---
title: Update generated code
pr_link: https://github.com/stripe/stripe-node/pull/2046
is_stripe_api_change: true
released_in_version: 14.23.0
---

* Add support for new resources `Billing.MeterEventAdjustment`, `Billing.MeterEvent`, and `Billing.Meter`
* Add support for `create`, `deactivate`, `list`, `reactivate`, `retrieve`, and `update` methods on resource `Meter`
* Add support for `create` method on resources `MeterEventAdjustment` and `MeterEvent`
* Add support for `amazon_pay_payments` on `Account.capabilities`, `AccountCreateParams.capabilities`, and `AccountUpdateParams.capabilities`
* Add support for new value `verification_failed_representative_authority` on enums `Account.future_requirements.errors[].code`, `Account.requirements.errors[].code`, `BankAccount.future_requirements.errors[].code`, and `BankAccount.requirements.errors[].code`
* Add support for `destination_on_behalf_of_charge_management` on `AccountSession.components.payment_details.features`, `AccountSession.components.payments.features`, `AccountSessionCreateParams.components.payment_details.features`, and `AccountSessionCreateParams.components.payments.features`
* Add support for `mandate` on `Charge.payment_method_details.us_bank_account`, `Treasury.InboundTransfer.origin_payment_method_details.us_bank_account`, `Treasury.OutboundPayment.destination_payment_method_details.us_bank_account`, and `Treasury.OutboundTransfer.destination_payment_method_details.us_bank_account`
* Add support for `second_line` on `Issuing.CardCreateParams`
* Add support for `meter` on `PlanCreateParams`, `Plan`, `Price.recurring`, `PriceCreateParams.recurring`, and `PriceListParams.recurring`
