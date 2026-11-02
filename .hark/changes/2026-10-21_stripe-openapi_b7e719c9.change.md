---
title: Update generated code
pr_url: https://github.com/stripe/stripe-node/pull/2894
semver_level: major
is_stripe_api_change: true
released_in_version: 23.1.0-alpha.4
---

* Add support for new resources `Risk.Form` and `V2.Data.SearchResultList`
* Add support for `retrieve` and `update` methods on resource `Risk.Form`
* Add support for `search` method on resource `V2.Data.SearchResultList`
* Add support for `business_profile_management` and `reporting_chart` on `AccountSession.components`
* Change type of `AccountSession.components.terminal_hardware_orders` from `ConnectEmbeddedBaseConfig | null` to `ConnectEmbeddedBaseConfig`
* Change type of `AccountSession.components.terminal_hardware_shop` from `ConnectEmbeddedBaseConfig | null` to `ConnectEmbeddedBaseConfig`
* Change `AccountSession.components.terminal_hardware_orders` to be required
* Change `AccountSession.components.terminal_hardware_shop` to be required
* Add support for `subscription_pause` on `BillingPortal.Configuration.features`
* Change `BillingPortal.Session.flow.subscription_pause` to be required
* Add support for new value `mandiri` on enums `Charge.payment_method_details.id_bank_transfer.bank`, `ConfirmationToken.payment_method_preview.id_bank_transfer.bank`, `PaymentAttemptRecord.payment_method_details.id_bank_transfer.bank`, `PaymentMethod.id_bank_transfer.bank`, `PaymentRecord.payment_method_details.id_bank_transfer.bank`, and `SetupAttempt.payment_method_details.id_bank_transfer.bank`
* Add support for `marketing_attributions` on `Checkout.SessionCreateParams` and `Checkout.Session`
* Add support for `metronome_commit` on `Checkout.Session.items[]` and `Checkout.SessionCreateParams.items[]`
* Add support for `adjustable_quantity` on `Checkout.SessionCreateParams.items[].subscription.items[]`
* Add support for new value `metronome_commit` on enums `Checkout.Session.items[].type` and `Checkout.SessionCreateParams.items[].type`
* Add support for new values `au_acn`, `au_wpn`, `cz_dic`, `fr_siren`, `fr_siret`, `fr_spi`, `is_kt`, `md_cf`, `mu_vat`, `mz_nuit`, `nz_bn`, `pt_nif`, `sm_coe`, `tt_bir`, and `tt_vat` on enums `Checkout.Session.collected_information.tax_id.type`, `Checkout.Session.customer_details.tax_ids[].type`, `Invoice.customer_tax_ids[].type`, `Order.tax_details.tax_ids[].type`, `QuotePreviewInvoice.customer_tax_ids[].type`, `Tax.Calculation.customer_details.tax_ids[].type`, and `Tax.Transaction.customer_details.tax_ids[].type`
* Add support for `mandate_options` on `Checkout.Session.payment_method_options.card`
* ⚠️ Change type of `Dispute.evidence.appeal` from `DisputeAppeal` to `DisputeAppeal | null`
* Change `Dispute.evidence_details.submission_method` to be required
* ⚠️ Remove support for value `email` from enums `Identity.VerificationReportListParams.type`, `Identity.VerificationSessionCreateParams.type`, and `Identity.VerificationSessionUpdateParams.type`
* ⚠️ Remove support for `details` on `Identity.VerificationReport.email`
* ⚠️ Remove support for value `email` from enums `Identity.VerificationReport.type` and `Identity.VerificationSession.type`
* Add support for `merchant_amount_exchange_rate` on `Issuing.AuthorizationCaptureParams.testHelpers`, `Issuing.AuthorizationCreateParams.testHelpers`, and `Issuing.TransactionCreateForceCaptureParams.testHelpers`
* Add support for `type` on `Issuing.AuthorizationCreateParams.testHelpers` and `Issuing.Authorization`
* Add support for `settlement_details` on `Issuing.AuthorizationCaptureParams.testHelpers` and `Issuing.TransactionCreateForceCaptureParams.testHelpers`
* ⚠️ Remove support for `healthcare` on `Issuing.AuthorizationCaptureParams.testHelpers.purchase_details`, `Issuing.TransactionCreateForceCaptureParams.testHelpers.purchase_details`, and `Issuing.TransactionCreateUnlinkedRefundParams.testHelpers.purchase_details`
* Add support for `product_eligibility_inquiry` on `Issuing.Authorization`
* Add support for `account_tax_ids`, `custom_fields`, `description`, and `footer` on `PaymentLink.subscription_data.invoice_settings`
* Change type of `Radar.PaymentEvaluation.signals.early_fraud_warning` from `Payment Evaluation Signal | null` to `Payment Evaluation Signal`
* ⚠️ Change `Radar.PaymentEvaluation.signals.early_fraud_warning` to be optional
* Add support for `reference_status` and `reference` on `Refund.destination_details.afterpay_clearpay`, `Refund.destination_details.klarna`, and `Refund.destination_details.paypal`
* Add support for `bw`, `ci`, `gh`, and `mu` on `Tax.Registration.country_options`
* Add support for new value `account_takeover` on enum `V2.Core.AccountEvaluation.evaluations_triggered`
* Add support for `czk`, `nok`, `pln`, and `sek` on `V2.Core.Account.configuration.money_manager.capabilities.business_storage.inbound`, `V2.Core.Account.configuration.money_manager.capabilities.business_storage.outbound`, `V2.Core.AccountCreateParams.configuration.money_manager.capabilities.business_storage.inbound`, `V2.Core.AccountCreateParams.configuration.money_manager.capabilities.business_storage.outbound`, `V2.Core.AccountUpdateParams.configuration.money_manager.capabilities.business_storage.inbound`, and `V2.Core.AccountUpdateParams.configuration.money_manager.capabilities.business_storage.outbound`
* Add support for `stablecoin_custodial` on `V2.Core.Account.configuration.recipient.capabilities.stripe_balance`, `V2.Core.AccountCreateParams.configuration.recipient.capabilities.stripe_balance`, and `V2.Core.AccountUpdateParams.configuration.recipient.capabilities.stripe_balance`
* Add support for new value `stripe_balance.stablecoin_custodial` on enums `V2.Core.Account.future_requirements.entries[].impact.restricts_capabilities[].capability` and `V2.Core.Account.requirements.entries[].impact.restricts_capabilities[].capability`
* Add support for `account_takeover_confirmation`, `account_takeover_report`, `credential_change`, `mfa_addition`, and `mfa_removal` on `V2.Signals.AccountActivityCreateParams`, `V2.Signals.AccountActivity`, and `V2.Signals.AccountEvaluationCreateParams.account_activity_details.data`
* Add support for new values `account_takeover_confirmation`, `account_takeover_mitigation`, `account_takeover_report`, `credential_change`, `mfa_addition`, and `mfa_removal` on enums `V2.Signals.AccountActivity.type`, `V2.Signals.AccountActivityCreateParams.type`, and `V2.Signals.AccountEvaluationCreateParams.account_activity_details.data.type`
* Add support for `account_takeover` on `V2.Signals.AccountEvaluation.evaluated_signals` and `V2.Signals.AccountSignal`
* Add support for new value `account_takeover` on enum `V2.Signals.AccountEvaluation.pending_signals`
* Add support for new value `account_takeover` on enums `V2.Signals.AccountEvaluation.requested_signals` and `V2.Signals.AccountEvaluationCreateParams.requested_signals`
* Add support for `customer_risk` on `V2.Signals.AccountSignal`
* Add support for new values `account_takeover` and `customer_risk` on enums `V2.Signals.AccountSignal.type` and `V2.Signals.AccountSignalListParams.type`
* Add support for new value `account_takeover` on enum `V2.Core.AccountEvaluationCreateParams.signals`
* Add support for new values `business_storage.inbound.czk`, `business_storage.inbound.nok`, `business_storage.inbound.pln`, `business_storage.inbound.sek`, `business_storage.outbound.czk`, `business_storage.outbound.nok`, `business_storage.outbound.pln`, and `business_storage.outbound.sek` on enum `EventsV2CoreAccountIncludingConfigurationMoneyManagerCapabilityStatusUpdatedEvent.updated_capability`
* Add support for new value `stripe_balance.stablecoin_custodial` on enum `EventsV2CoreAccountIncludingConfigurationRecipientCapabilityStatusUpdatedEvent.updated_capability`
* Add support for event notification `V2SignalsAccountSignalCustomerRiskReadyEvent` with related object `V2.Signals.AccountSignal`
