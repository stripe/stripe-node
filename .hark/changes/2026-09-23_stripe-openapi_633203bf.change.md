---
title: Update generated code
pr_url: https://github.com/stripe/stripe-node/pull/2854
semver_level: major
is_stripe_api_change: true
released_in_version: 22.7.0-alpha.5
---

* Add support for new resources `FinancialConnections.Consent`, `V2.MoneyManagement.FinancialAccountWalletExportCredentials`, `V2.MoneyManagement.FinancialAccountWalletExport`, `V2.Provisioning.Eligibility`, `V2.Provisioning.PaymentMethodRequest`, `V2.Provisioning.PaymentProfile`, `V2.Provisioning.Project`, `V2.Provisioning.ProviderConnectionRequest`, `V2.Provisioning.ProviderConnection`, `V2.Provisioning.ProviderServiceDetail`, `V2.Provisioning.Provider`, and `V2.Provisioning.Resource`
* ⚠️ Remove support for resource `Radar.BillingEvaluation`
* Add support for `create` and `retrieve` methods on resource `FinancialConnections.Consent`
* ⚠️ Remove support for `create` method on resource `Radar.BillingEvaluation`
* Add support for `create`, `link`, `remove`, `retrieve`, `rotate_credentials`, `submit_information`, `unlink`, and `update` methods on resource `V2.Provisioning.Resource`
* Add support for `create`, `retrieve`, and `submit_information` methods on resource `V2.Provisioning.ProviderConnectionRequest`
* Add support for `list` and `unlink` methods on resource `V2.Provisioning.ProviderConnection`
* Add support for `create` method on resources `V2.Provisioning.PaymentMethodRequest` and `V2.Provisioning.Project`
* Add support for `retrieve` and `update_limit` methods on resource `V2.Provisioning.PaymentProfile`
* Add support for `retrieve` method on resource `V2.Provisioning.Eligibility`
* Add support for `export_credentials` and `retrieve` methods on resource `V2.MoneyManagement.FinancialAccountWalletExport`
* Add support for `blik_recurring_payments` on `Account.capabilities`
* ⚠️ Add support for new values `invalid_address_cmra_address` and `invalid_address_registered_agent_address` on enums `Account.future_requirements.errors[].code`, `Account.requirements.errors[].code`, `BankAccount.future_requirements.errors[].code`, `BankAccount.requirements.errors[].code`, `Capability.future_requirements.errors[].code`, `Capability.requirements.errors[].code`, `Person.future_requirements.errors[].code`, and `Person.requirements.errors[].code`
* Add support for `capital` on `Account.settings`
* Change `Account.business_profile.specified_commercial_transactions_act_url` to be required
* Add support for new values `digital_excise_tax`, `recycling_fee`, and `utility_users_tax` on enums `Tax.Calculation.shipping_cost.tax_breakdown[].tax_rate_details.tax_type`, `Tax.Calculation.tax_breakdown[].tax_rate_details.tax_type`, `Tax.CalculationLineItem.tax_breakdown[].tax_rate_details.tax_type`, and `Tax.Transaction.shipping_cost.tax_breakdown[].tax_rate_details.tax_type`
* Change type of `Apps.Install.content_security_policy_granted.connect_src` and `Apps.Install.content_security_policy_pending.connect_src` from `array(string) | null` to `array(string)`
* Change type of `Apps.Install.content_security_policy_granted.image_src` and `Apps.Install.content_security_policy_pending.image_src` from `array(string) | null` to `array(string)`
* Add support for `payout_method` on `Balance.instant_available[].net_available[]`
* Add support for `destination_currency` on `BalanceSettingUpdateParams.payments.payouts.automatic_transfer_rules_by_currency.value[]` and `BalanceSettings.payments.payouts.automatic_transfer_rules_by_currency.value[]`
* Add support for `total_due_amount` on `Capital.FinancingOffer.accepted_terms` and `Capital.FinancingSummary.details`
* Add support for `incremental_interval_target_amount` and `starts_at` on `Capital.FinancingSummary.details.current_repayment_interval`
* Add support for `setup_credential_usage` on `Charge.payment_method_details.card`, `PaymentIntent.payment_method_options.card`, and `SetupIntent.payment_method_options.card`
* Add support for `stored_credential_usage` on `Charge.payment_method_details.card`, `PaymentAttemptRecord.payment_method_details.card`, `PaymentIntent.payment_method_options.card`, and `PaymentRecord.payment_method_details.card`
* Change `Charge.payment_method_details.card.electronic_commerce_indicator` to be required
* Add support for `payment_method_options` on `Checkout.SessionApproveParams`
* Add support for `payment_reservation` on `Checkout.Session`
* Add support for `custom` on `Checkout.Session.current_attempt.payment_method_details`
* Change type of `Checkout.Session.items[].subscription` from `PaymentPagesCheckoutSessionSubscription | null` to `PaymentPagesCheckoutSessionSubscription`
* Add support for `payment_method_preselect` on `CustomerSession.components.payment_element.features` and `CustomerSessionCreateParams.components.payment_element.features`
* Add support for `bic`, `iban_last4`, and `network` on `CustomerCashBalanceTransaction.funded.bank_transfer.gb_bank_transfer`
* Add support for new values `apps.install.created`, `apps.install.deleted`, and `apps.install.updated` on enum `Event.type`
* Add support for new values `expired` and `pending` on enum `FinancialConnections.Account.account_numbers[].status`
* Add support for `pre_collected_consent` on `FinancialConnections.Session`
* Add support for `financial_activity` on `FinancialConnections.Transaction.classifications[]`
* ⚠️ Remove support for `credit` on `FinancialConnections.Transaction.classifications[]`
* Add support for new value `touch_n_go` on enums `Invoice.payment_settings.payment_method_types`, `InvoiceCreateParams.payment_settings.payment_method_types`, `InvoiceUpdateParams.payment_settings.payment_method_types`, `QuotePreviewInvoice.payment_settings.payment_method_types`, `Subscription.payment_settings.payment_method_types`, `SubscriptionCreateParams.payment_settings.payment_method_types`, and `SubscriptionUpdateParams.payment_settings.payment_method_types`
* Add support for `fuels` on `Issuing.Authorization`
* ⚠️ Change type of `Mandate.payment_method_details.blik.type` from `enum('off_session'|'on_session')` to `literal('off_session')`
* Add support for new values `additive_dosage`, `additized_diesel_2`, `additized_diesel_3`, `air_filter`, `antifreeze`, `automotive_merchandise`, `batteries`, `biodiesel_b100`, `biodiesel_b10`, `biodiesel_b11`, `biodiesel_b15`, `biodiesel_b1`, `biodiesel_b20`, `biodiesel_b2`, `biodiesel_b5`, `biodiesel_b75`, `biodiesel_b99`, `blended_diesel_1_and_2`, `body_work`, `brake_fluid`, `brake_service`, `car_wash`, `def_at_pump`, `e85`, `engine_service`, `ethanol_e16_to_e84`, `exhaust_service`, `federal_tire_excise_tax`, `fuel_additive_treatment`, `fuel_system`, `heating_oil`, `hoses`, `hydrogen_h35`, `hydrogen_h70`, `inspection`, `kerosene_low_sulfur_non_taxable`, `kerosene_low_sulfur`, `kerosene_ultra_low_sulfur_non_taxable`, `kerosene_ultra_low_sulfur`, `labor`, `lamps`, `low_octane_unleaded`, `lube`, `marine_fuel_1`, `marine_fuel_2`, `marine_fuel_3`, `marine_fuel_4`, `marine_fuel_5`, `marine_other`, `mid_plus_2_10`, `mid_plus_2_e15`, `mid_plus_2_reformulated`, `mid_plus_2`, `mid_plus_e10`, `mid_plus_e15`, `mid_plus_reformulated`, `motor_oil`, `off_road_b100`, `off_road_b10`, `off_road_b11`, `off_road_b15`, `off_road_b1`, `off_road_b20`, `off_road_b2`, `off_road_b5`, `off_road_b75`, `off_road_b99`, `off_road_biodiesel`, `off_road_diesel_1`, `off_road_diesel_2`, `off_road_mid_plus_2`, `off_road_mid_plus`, `off_road_premium_diesel_1`, `off_road_premium_diesel_2`, `off_road_premium_super_2`, `off_road_premium_super`, `off_road_regular`, `off_road_renewable_diesel_b6_to_b20`, `off_road_renewable_diesel_r95`, `oil_change`, `oil_filter`, `other_lubricants`, `premium_diesel_2`, `premium_diesel_b20_plus`, `premium_diesel_under_b20`, `premium_super_2_10`, `premium_super_2_e15`, `premium_super_2_reformulated`, `premium_super_2`, `premium_super_e10`, `premium_super_e15`, `premium_super_reformulated`, `racing_fuel`, `recreational_fuel_90_octane`, `regular_diesel_2`, `regular_e10`, `regular_e15`, `regular_reformulated`, `renewable_diesel_b6_to_b20`, `renewable_diesel_r95`, `road_service`, `rv_dump_fee`, `scales`, `service_package`, `synthetic_oil`, `tire_related`, `tire_repair`, `tire_rotation`, `tires`, `toll_payments`, `towing`, `trailer_wash`, `transmission_service`, `truck_tank_cleaning`, `vehicle_glass`, `vehicle_prep`, `vehicle_rental`, `vehicle_work_order`, `washer_fluid`, `white_gas`, and `wipers` on enums `PaymentIntentCaptureParams.amount_details.line_items[].payment_method_options.card.fleet_data.product_type`, `PaymentIntentConfirmParams.amount_details.line_items[].payment_method_options.card.fleet_data.product_type`, `PaymentIntentCreateParams.amount_details.line_items[].payment_method_options.card.fleet_data.product_type`, `PaymentIntentDecrementAuthorizationParams.amount_details.line_items[].payment_method_options.card.fleet_data.product_type`, `PaymentIntentIncrementAuthorizationParams.amount_details.line_items[].payment_method_options.card.fleet_data.product_type`, and `PaymentIntentUpdateParams.amount_details.line_items[].payment_method_options.card.fleet_data.product_type`
* Add support for `mandate_options` on `PaymentIntent.payment_method_options.blik`
* ⚠️ Change type of `PaymentIntent.payment_method_options.blik.setup_future_usage` from `literal('none')` to `enum('none'|'off_session')`
* Add support for `payout_method_options` on `Payout`
* Add support for new value `rerouted` on enum `Radar.PaymentEvaluation.outcome.type`
* Add support for `blik` on `SetupAttempt.payment_method_details` and `SetupIntent.payment_method_options`
* Add support for `cancel_at_period_end` on `Subscription.pending_update`
* Change `TaxCode.requirements.performance_location` to be required
* Add support for `tamper_state` on `Terminal.ReaderListParams`
* Add support for `origin_payment_method_options` on `Treasury.InboundTransferCreateParams`
* Add support for `ach` on `Treasury.InboundTransfer.origin_payment_method_details.us_bank_account`
* Add support for new values `apps.install.created`, `apps.install.deleted`, and `apps.install.updated` on enums `WebhookEndpointCreateParams.enabled_events` and `WebhookEndpointUpdateParams.enabled_events`
* Add support for `collection_status_transitions` and `collection_status` on `V2.Billing.Contract`
* ⚠️ Change `V2.Billing.Contract.pricing_lines.data[].ends_at`, `V2.Billing.Contract.pricing_lines.data[].pricing.price_details.pricing_overrides.data[].ends_at`, and `V2.Billing.Contract.pricing_overrides.data[].ends_at` to be optional
* Add support for new value `developer` on enums `EventsV2CoreAccountLinkReturnedEvent.configurations`, `V2.Core.AccountLink.use_case.account_onboarding.configurations`, `V2.Core.AccountLink.use_case.account_update.configurations`, `V2.Core.AccountLinkCreateParams.use_case.account_onboarding.configurations`, and `V2.Core.AccountLinkCreateParams.use_case.account_update.configurations`
* ⚠️ Add support for new value `developer` on enum `V2.Core.Account.applied_configurations`
* Add support for `developer` on `V2.Core.Account.configuration`, `V2.Core.AccountCreateParams.configuration`, and `V2.Core.AccountUpdateParams.configuration`
* ⚠️ Add support for new value `apple_pay` on enum `V2.Core.Account.configuration.recipient.default_outbound_destination.type`
* Add support for new value `projects` on enums `V2.Core.Account.future_requirements.entries[].impact.restricts_capabilities[].capability` and `V2.Core.Account.requirements.entries[].impact.restricts_capabilities[].capability`
* Add support for new value `developer` on enums `V2.Core.Account.future_requirements.entries[].impact.restricts_capabilities[].configuration` and `V2.Core.Account.requirements.entries[].impact.restricts_capabilities[].configuration`
* Add support for `skip_exportable_balances` on `V2.MoneyManagement.FinancialAccount.status_details.closed.forwarding_settings` and `V2.MoneyManagement.FinancialAccountCloseParams.forwarding_settings`
* Add support for `crypto` on `V2.MoneyManagement.FinancialAccount.storage`, `V2.MoneyManagement.FinancialAccountCreateParams.storage`, and `V2.MoneyManagement.FinancialAccountUpdateParams.storage`
* Add support for `addenda` on `V2.MoneyManagement.OutboundPayment.to.payout_method_options.bank_account.preferred_network_options.ach`, `V2.MoneyManagement.OutboundPaymentCreateParams.to.payout_method_options.bank_account.preferred_network_options.ach`, `V2.MoneyManagement.OutboundPaymentQuote.to.payout_method_options.bank_account.preferred_network_options.ach`, `V2.MoneyManagement.OutboundPaymentQuoteCreateParams.to.payout_method_options.bank_account.preferred_network_options.ach`, `V2.MoneyManagement.PayoutIntent.to.payout_method_options.bank_account.preferred_network_options.ach`, `V2.MoneyManagement.PayoutIntentCreateParams.to.payout_method_options.bank_account.preferred_network_options.ach`, and `V2.MoneyManagement.PayoutIntentUpdateParams.to.payout_method_options.bank_account.preferred_network_options.ach`
* Add support for `preferred_network_options` on `V2.MoneyManagement.OutboundTransfer.to.payout_method_options.bank_account` and `V2.MoneyManagement.OutboundTransferCreateParams.to.payout_method_options.bank_account`
* Add support for `apple_pay` on `V2.MoneyManagement.OutboundSetupIntentCreateParams.payout_method_data` and `V2.MoneyManagement.PayoutMethod`
* Add support for new value `apple_pay` on enums `V2.MoneyManagement.OutboundSetupIntentCreateParams.payout_method_data.type`, `V2.MoneyManagement.OutboundSetupIntentUpdateParams.payout_method_data.type`, and `V2.MoneyManagement.PayoutMethod.type`
* Add support for `network_details` on `V2.MoneyManagement.ReceivedCredit.bank_transfer`
* Add support for new value `crypto_wallet_export` on enums `V2.MoneyManagement.Transaction.category` and `V2.MoneyManagement.TransactionEntry.transaction_details.category`
* Change type of `V2.MoneyManagement.FinancialAccountListParams.include` and `V2.MoneyManagement.FinancialAccountRetrieveParams.include` from `literal('payments.balance_by_funds_type')` to `enum('payments.balance_by_funds_type'|'storage.crypto')`
* Add support for `forwarding_settings` on `V2.MoneyManagement.FinancialAccountUpdateParams`
* Add support for new value `developer` on enums `V2.Core.AccountCloseParams.applied_configurations` and `V2.Core.AccountListParams.applied_configurations`
* Add support for new value `configuration.developer` on enums `V2.Core.AccountCreateParams.include`, `V2.Core.AccountRetrieveParams.include`, and `V2.Core.AccountUpdateParams.include`
* Add support for new value `never` on enums `V2.Billing.ContractCreateParams.pricing_lines[].ends_at.type`, `V2.Billing.ContractCreateParams.pricing_lines[].pricing.price_details.pricing_overrides[].ends_at.type`, `V2.Billing.ContractCreateParams.pricing_overrides[].ends_at.type`, and `V2.Billing.ContractUpdateParams.pricing_line_actions[].add.pricing.price_details.pricing_overrides[].ends_at.type`
* Change `V2.Billing.ContractCreateParams.pricing_lines[].ends_at`, `V2.Billing.ContractCreateParams.pricing_overrides[].ends_at`, `V2.Billing.ContractUpdateParams.pricing_line_actions[].add.ends_at`, `V2.Billing.ContractUpdateParams.pricing_line_actions[].update.pricing.price_details.pricing_override_actions[].add.ends_at`, and `V2.Billing.ContractUpdateParams.pricing_override_actions[].add.ends_at` to be optional
* Add support for new values `never` and `now` on enums `V2.Billing.ContractUpdateParams.pricing_line_actions[].add.ends_at.type`, `V2.Billing.ContractUpdateParams.pricing_line_actions[].update.ends_at.type`, `V2.Billing.ContractUpdateParams.pricing_line_actions[].update.pricing.price_details.pricing_override_actions[].add.ends_at.type`, `V2.Billing.ContractUpdateParams.pricing_line_actions[].update.pricing.price_details.pricing_override_actions[].update.ends_at.type`, `V2.Billing.ContractUpdateParams.pricing_override_actions[].add.ends_at.type`, and `V2.Billing.ContractUpdateParams.pricing_override_actions[].update.ends_at.type`
* Add support for snapshot events `AppsInstallCreatedEvent`, `AppsInstallDeletedEvent`, and `AppsInstallUpdatedEvent` with resource `Apps.Install`
* Add support for event notifications `V2BillingContractCollectionBlockedEvent`, `V2BillingContractCollectionCurrentEvent`, `V2BillingContractCollectionPastDueEvent`, and `V2BillingContractCollectionUnpaidEvent` with related object `V2.Billing.Contract`
* Add support for event notifications `V2CoreVaultNetworkTokenActivatedEvent`, `V2CoreVaultNetworkTokenAuthorizationRequirementsChangedEvent`, `V2CoreVaultNetworkTokenDeactivatedEvent`, `V2CoreVaultNetworkTokenDetailsUpdatedEvent`, and `V2CoreVaultNetworkTokenSuspendedEvent` with related object `V2.Core.Vault.NetworkToken`
* Add support for event notifications `V2MoneyManagementFinancialAccountWalletExportCompletedEvent`, `V2MoneyManagementFinancialAccountWalletExportPendingEvent`, and `V2MoneyManagementFinancialAccountWalletExportReadyEvent` with related object `V2.MoneyManagement.FinancialAccount`
* Add support for error type `ServiceUnavailableError`
