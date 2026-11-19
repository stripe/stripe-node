---
title: Update generated code
pr_url: https://github.com/stripe/stripe-node/pull/2919
semver_level: minor
is_stripe_api_change: true
---

* Add support for new resource `V2.Core.ClaimableSandbox`
* Add support for `create`, `renew_onboarding_link`, and `retrieve` methods on resource `V2.Core.ClaimableSandbox`
* Add support for `funding_sources` on `Charge.payment_method_details.card.wallet.link` and `Charge.payment_method_details.link`
* Add support for new value `tron` on enums `Charge.payment_method_details.crypto.network`, `PaymentAttemptRecord.payment_method_details.crypto.network`, and `PaymentRecord.payment_method_details.crypto.network`
* Add support for `fingerprint` on `Charge.payment_method_details.paypay`, `PaymentAttemptRecord.payment_method_details.paypay`, and `PaymentRecord.payment_method_details.paypay`
* Add support for `address_collection_precision` on `Checkout.Session.automatic_tax` and `Checkout.SessionCreateParams.automatic_tax`
* Change `Dispute.evidence.appeal` to be required
* Change `Issuing.Card.shipping.delivered_at` to be required
* Change `Issuing.Card.shipping.shipped_at` to be required
* Change `PaymentAttemptRecord.payment_method_details.card.stored_credential_usage` and `PaymentRecord.payment_method_details.card.stored_credential_usage` to be required
* Add support for `car_rental_data` and `lodging_data` on `PaymentIntent.payment_details`, `PaymentIntentCaptureParams.payment_details`, `PaymentIntentConfirmParams.payment_details`, `PaymentIntentCreateParams.payment_details`, and `PaymentIntentUpdateParams.payment_details`
* Change type of `PaymentLinkCreateParams.payment_intent_data.capture_method` from `enum('automatic'|'automatic_async'|'manual')` to `emptyable(enum('automatic'|'automatic_async'|'manual'))`
* Add support for `capture_method` on `PaymentLinkUpdateParams.payment_intent_data`
* Add support for `loss_message` on `Product.marketing_features[]`, `ProductCreateParams.marketing_features[]`, and `ProductUpdateParams.marketing_features[]`
* Add support for `application` on `Refund`
* Add support for `bizum` and `upi` on `Refund.destination_details`
* Add support for `tax_invoice_month` on `Reporting.ReportRun.parameters` and `Reporting.ReportRunCreateParams.parameters`
* Add support for `igic` on `Tax.Registration.country_options.es` and `Tax.RegistrationCreateParams.country_options.es`
* Add support for new value `igic` on enums `Tax.Registration.country_options.es.type` and `Tax.RegistrationCreateParams.country_options.es.type`
* Add support for new values `stripe_s700_devkit`, `stripe_s710_devkit`, `stripe_t600_devkit`, `verifone_ux700_devkit`, and `verifone_v660p_devkit` on enums `Terminal.Reader.device_type` and `Terminal.ReaderListParams.device_type`
* Add support for `network_details` on `Treasury.InboundTransfer.failure_details`, `Treasury.InboundTransferFailParams.testHelpers.failure_details`, `Treasury.OutboundPayment.returned_details`, and `Treasury.OutboundTransfer.returned_details`
* Add support for `failure_details` on `Treasury.InboundTransferReturnInboundTransferParams.testHelpers`
* Add support for new value `2026-11-18.endive` on enum `WebhookEndpointCreateParams.api_version`
* Add support for `account_dashboard` on `V2.Core.AccountLink.use_case` and `V2.Core.AccountLinkCreateParams.use_case`
* Add support for new value `account_dashboard` on enums `V2.Core.AccountLink.use_case.type` and `V2.Core.AccountLinkCreateParams.use_case.type`
* Add support for `paypay_payments` on `V2.Core.Account.configuration.merchant.capabilities`, `V2.Core.Account.configuration.merchant`, `V2.Core.AccountCreateParams.configuration.merchant.capabilities`, `V2.Core.AccountCreateParams.configuration.merchant`, `V2.Core.AccountUpdateParams.configuration.merchant.capabilities`, and `V2.Core.AccountUpdateParams.configuration.merchant`
* Add support for `billie_payments`, `mb_way_payments`, `nz_bank_account_becs_debit_payments`, and `pix_payments` on `V2.Core.Account.configuration.merchant.capabilities`, `V2.Core.AccountCreateParams.configuration.merchant.capabilities`, and `V2.Core.AccountUpdateParams.configuration.merchant.capabilities`
* Add support for `additional_material` on `V2.Core.Account.configuration.merchant.konbini_payments`, `V2.Core.AccountCreateParams.configuration.merchant.konbini_payments`, and `V2.Core.AccountUpdateParams.configuration.merchant.konbini_payments`
* Add support for new values `billie_payments`, `mb_way_payments`, `nz_bank_account_becs_debit_payments`, `paypay_payments`, and `pix_payments` on enums `V2.Core.Account.future_requirements.entries[].impact.restricts_capabilities[].capability` and `V2.Core.Account.requirements.entries[].impact.restricts_capabilities[].capability`
* Add support for new values `billie_payments`, `mb_way_payments`, `nz_bank_account_becs_debit_payments`, `paypay_payments`, and `pix_payments` on enum `EventsV2CoreAccountIncludingConfigurationMerchantCapabilityStatusUpdatedEvent.updated_capability`
* Add support for event notifications `V2CoreClaimableSandboxClaimedEvent`, `V2CoreClaimableSandboxCreatedEvent`, `V2CoreClaimableSandboxExpiredEvent`, `V2CoreClaimableSandboxExpiringEvent`, and `V2CoreClaimableSandboxUpdatedEvent` with related object `V2.Core.ClaimableSandbox`
* Add support for error code `inactive_api_operation_confirmation_required` on `Invoice.last_finalization_error`, `PaymentIntent.last_payment_error`, `SetupAttempt.setup_error`, `SetupIntent.last_setup_error`, `StripeError`, and `Terminal.Reader.action.api_error`
* Add support for error codes `claimable_sandbox_creation_rate_limit_exceeded` and `claimable_sandbox_testing_creation_rate_limit_exceeded` on `RateLimitError`
