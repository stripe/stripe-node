---
title: Update generated code for private-preview
pr_url: https://github.com/stripe/stripe-node/pull/2520
is_stripe_api_change: true
released_in_version: 20.2.0-alpha.1
---

* Add support for new resources `SharedPayment.GrantedToken`, `V2.Iam.ApiKey`, `V2.Payments.SettlementAllocationIntentSplit`, `V2.Payments.SettlementAllocationIntent`, and `V2.Tax.ManualRule`
* Add support for `retrieve` method on resource `SharedPayment.GrantedToken`
* Add support for `create` and `update` test helper methods on resource `SharedPayment.GrantedToken`
* Add support for `create`, `deactivate`, `list`, `retrieve`, and `update` methods on resource `V2.Tax.ManualRule`
* Add support for `cancel`, `create`, `retrieve`, `submit`, and `update` methods on resource `V2.Payments.SettlementAllocationIntent`
* Add support for `cancel`, `create`, and `retrieve` methods on resource `V2.Payments.SettlementAllocationIntentSplit`
* Add support for `create`, `expire`, `list`, `retrieve`, `rotate`, and `update` methods on resource `V2.Iam.ApiKey`
* Add support for `check_scanning` on `AccountSessionCreateParams.components`
* Add support for `tax_details` on `Checkout.SessionCreateParams.line_items[].price_data.product_data`, `Checkout.SessionUpdateParams.line_items[].price_data.product_data`, `InvoiceAddLinesParams.lines[].price_data.product_data`, `InvoiceLineItemUpdateParams.price_data.product_data`, `InvoiceUpdateLinesParams.lines[].price_data.product_data`, `PaymentLinkCreateParams.line_items[].price_data.product_data`, `ProductCreateParams`, and `ProductUpdateParams`
* Add support for `payment_method_data` on `DelegatedCheckout.RequestedSessionConfirmParams`
* Add support for `product_details` on `DelegatedCheckout.RequestedSession.line_item_details[]`
* Add support for `wallets` on `Issuing.CardListParams`
* Add support for `primary_account_identifier` on `Issuing.Card.wallets.apple_pay` and `Issuing.Card.wallets.google_pay`
* Add support for `shared_payment_granted_token` on `PaymentIntentConfirmParams`, `PaymentIntentCreateParams`, and `PaymentIntent`
* Change `ProductCatalog.TrialOffer.duration.relative` to be optional
* Add support for new values `al_bank_account`, `am_bank_account`, `bn_bank_account`, `bw_bank_account`, `dz_bank_account`, `gy_bank_account`, `jm_bank_account`, `jo_bank_account`, `kw_bank_account`, `lk_bank_account`, `ma_bank_account`, `om_bank_account`, and `tz_bank_account` on enum `V2.Account.configuration.recipient_data.default_outbound_destination.type`
* Add support for `instant` on `V2.Account.configuration.recipient_data.features.bank_accounts`, `V2.AccountCreateParams.configuration.recipient_data.features.bank_accounts`, `V2.AccountUpdateParams.configuration.recipient_data.features.bank_accounts`, `V2.Core.Account.configuration.recipient.capabilities.bank_accounts`, `V2.Core.AccountCreateParams.configuration.recipient.capabilities.bank_accounts`, and `V2.Core.AccountUpdateParams.configuration.recipient.capabilities.bank_accounts`
* Add support for new value `bank_accounts.instant` on enum `V2.Account.requirements[].impact.required_for_features`
* Add support for `collect_at` on `V2.Billing.IntentAction.deactivate`, `V2.Billing.IntentAction.modify`, `V2.Billing.IntentAction.subscribe`, `V2.Billing.IntentCreateParams.actions[].deactivate`, `V2.Billing.IntentCreateParams.actions[].modify`, and `V2.Billing.IntentCreateParams.actions[].subscribe`
* Remove support for `billing_details` on `V2.Billing.IntentAction.deactivate`, `V2.Billing.IntentAction.modify`, `V2.Billing.IntentAction.subscribe`, `V2.Billing.IntentCreateParams.actions[].deactivate`, `V2.Billing.IntentCreateParams.actions[].modify`, and `V2.Billing.IntentCreateParams.actions[].subscribe`
* Add support for `overrides` on `V2.Billing.IntentAction.deactivate.pricing_plan_subscription_details`, `V2.Billing.IntentAction.modify.pricing_plan_subscription_details`, `V2.Billing.IntentAction.subscribe.pricing_plan_subscription_details`, `V2.Billing.IntentCreateParams.actions[].deactivate.pricing_plan_subscription_details`, `V2.Billing.IntentCreateParams.actions[].modify.pricing_plan_subscription_details`, and `V2.Billing.IntentCreateParams.actions[].subscribe.pricing_plan_subscription_details`
* Remove support for `requested` on `V2.Core.Account.configuration.card_creator.capabilities.commercial.celtic.charge_card`, `V2.Core.Account.configuration.card_creator.capabilities.commercial.celtic.spend_card`, `V2.Core.Account.configuration.card_creator.capabilities.commercial.cross_river_bank.charge_card`, `V2.Core.Account.configuration.card_creator.capabilities.commercial.cross_river_bank.spend_card`, `V2.Core.Account.configuration.card_creator.capabilities.commercial.lead.prepaid_card`, `V2.Core.Account.configuration.card_creator.capabilities.commercial.stripe.charge_card`, `V2.Core.Account.configuration.card_creator.capabilities.commercial.stripe.prepaid_card`, `V2.Core.Account.configuration.recipient.capabilities.crypto_wallets`, `V2.Core.Account.configuration.storer.capabilities.financial_addresses.crypto_wallets`, `V2.Core.Account.configuration.storer.capabilities.holds_currencies.usdc`, `V2.Core.Account.configuration.storer.capabilities.outbound_payments.crypto_wallets`, and `V2.Core.Account.configuration.storer.capabilities.outbound_transfers.crypto_wallets`
* Add support for new value `bank_accounts.instant` on enums `V2.Core.Account.future_requirements.entries[].impact.restricts_capabilities[].capability` and `V2.Core.Account.requirements.entries[].impact.restricts_capabilities[].capability`
* Add support for `alternative_reference` on `V2.Core.Vault.GbBankAccount`, `V2.Core.Vault.UsBankAccount`, and `V2.MoneyManagement.PayoutMethod`
* Add support for `managed_by` and `payments` on `V2.MoneyManagement.FinancialAccount`
* Add support for new value `payments` on enum `V2.MoneyManagement.FinancialAccount.type`
* Add support for `speed` on `V2.MoneyManagement.OutboundPayment.delivery_options`, `V2.MoneyManagement.OutboundPaymentCreateParams.delivery_options`, `V2.MoneyManagement.OutboundPaymentQuote.delivery_options`, and `V2.MoneyManagement.OutboundPaymentQuoteCreateParams.delivery_options`
* Add support for new value `real_time_payout_fee` on enum `V2.MoneyManagement.OutboundPaymentQuote.estimated_fees[].type`
* Add support for `types` on `V2.MoneyManagement.FinancialAccountListParams`
* Change type of `V2.Core.AccountListParams.applied_configurations` from `string` to `enum`
* Add support for new value `bank_accounts.instant` on enum `EventsV2CoreAccountIncludingConfigurationRecipientCapabilityStatusUpdatedEvent.updated_capability`
* Add support for `top_impacted_accounts` on `EventsV2CoreHealthApiErrorFiringEvent.impact`, `EventsV2CoreHealthApiErrorResolvedEvent.impact`, `EventsV2CoreHealthApiLatencyFiringEvent.impact`, `EventsV2CoreHealthApiLatencyResolvedEvent.impact`, `EventsV2CoreHealthPaymentMethodErrorFiringEvent.impact`, and `EventsV2CoreHealthPaymentMethodErrorResolvedEvent.impact`
* Add support for event notifications `V2CoreHealthSepaDebitDelayedFiringEvent`, `V2CoreHealthSepaDebitDelayedResolvedEvent`, and `V2PaymentsSettlementAllocationIntentNotFoundEvent`
* Add support for event notifications `V2PaymentsSettlementAllocationIntentCanceledEvent`, `V2PaymentsSettlementAllocationIntentCreatedEvent`, `V2PaymentsSettlementAllocationIntentErroredEvent`, `V2PaymentsSettlementAllocationIntentFundsNotReceivedEvent`, `V2PaymentsSettlementAllocationIntentMatchedEvent`, `V2PaymentsSettlementAllocationIntentSettledEvent`, and `V2PaymentsSettlementAllocationIntentSubmittedEvent` with related object `V2.Payments.SettlementAllocationIntent`
* Add support for event notifications `V2PaymentsSettlementAllocationIntentSplitCanceledEvent`, `V2PaymentsSettlementAllocationIntentSplitCreatedEvent`, and `V2PaymentsSettlementAllocationIntentSplitSettledEvent` with related object `V2.Payments.SettlementAllocationIntentSplit`
* Remove support for error code `account_rate_limit_exceeded` on `RateLimitError`
