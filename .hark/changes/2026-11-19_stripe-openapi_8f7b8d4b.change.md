---
title: Update generated code
pr_url: https://github.com/stripe/stripe-node/pull/2920
semver_level: major
is_stripe_api_change: true
released_in_version: 23.3.0-beta.1
---

* ⚠️ Remove support for resource `V2.Billing.Cadence`
* Add support for `create` and `refill` test helper methods on resource `Capital.FinancingOffer`
* ⚠️ Remove support for `cancel`, `create`, `list`, `retrieve`, and `update` methods on resource `V2.Billing.Cadence`
* Add support for `export_tax_transactions`, `product_tax_code_selector`, and `tax_threshold_monitoring` on `AccountSession.components`
* Add support for `custom` on `CouponCreateParams` and `Coupon`
* Add support for `type` on `CouponCreateParams` and `CustomerCreateCustomerBalanceTransactionParams`
* Add support for new value `custom` on enum `Coupon.type`
* Add support for `applied_to_invoice` on `CustomerCreateCustomerBalanceTransactionParams`
* Add support for `customer_balance` on `Invoice` and `QuotePreviewInvoice`
* ⚠️ Change type of `PaymentIntent.next_action.verify_with_microdeposits.arrival_date` and `SetupIntent.next_action.verify_with_microdeposits.arrival_date` from `DateTime` to `DateTime | null`
* Add support for `connect`, `data_export`, `event_destination`, `radar`, and `user_access` on `V2.Iam.ActivityLog.details`
* Add support for new values `app`, `connect`, `data_export`, `event_destination`, `radar`, and `user_access` on enum `V2.Iam.ActivityLog.details.type`
* Add support for new values `apps.install`, `v2.core.event_destination`, and `webhook_endpoint` on enum `V2.Iam.ActivityLog.related_object.type`
* Add support for new values `app_installed`, `app_uninstalled`, `application_authorized`, `application_created`, `application_deauthorized`, `connect_express_branding_updated`, `connect_oauth_disabled`, `connect_oauth_enabled`, `connect_settings_updated`, `connect_site_link_updated`, `data_export_requested`, `event_destination_added`, `event_destination_removed`, `event_destination_updated`, `payout_schedule_updated`, `radar_adaptive_3ds_disabled`, `radar_dynamic_risk_thresholds_disabled`, `radar_early_fraud_warning_disabled`, `radar_for_setup_intents_disabled`, `radar_fraud_dispute_protection_disabled`, `radar_rule_added`, `radar_rule_disabled`, `radar_rule_enabled`, `radar_rule_removed`, `radar_rule_updated`, and `user_access_started` on enum `V2.Iam.ActivityLog.type`
* Add support for `apple_pay` on `V2.MoneyManagement.OutboundSetupIntentCreateParams.payout_method_data` and `V2.MoneyManagement.PayoutMethod`
* Add support for new value `apple_pay` on enums `V2.MoneyManagement.OutboundSetupIntentCreateParams.payout_method_data.type`, `V2.MoneyManagement.OutboundSetupIntentUpdateParams.payout_method_data.type`, and `V2.MoneyManagement.PayoutMethod.type`
* Add support for `network` and `originating_bank_account` on `V2.MoneyManagement.ReceivedDebit.bank_transfer`
* Add support for `created` on `V2.MoneyManagement.ReceivedDebitListParams`
* Add support for `logs_from` on `V2.Iam.ActivityLogListParams`
* Add support for new values `app`, `connect`, `data_export`, `event_destination`, `radar`, and `user_access` on enum `V2.Iam.ActivityLogListParams.action_groups`
* Add support for new values `app_installed`, `app_uninstalled`, `application_authorized`, `application_created`, `application_deauthorized`, `connect_express_branding_updated`, `connect_oauth_disabled`, `connect_oauth_enabled`, `connect_settings_updated`, `connect_site_link_updated`, `data_export_requested`, `event_destination_added`, `event_destination_removed`, `event_destination_updated`, `payout_schedule_updated`, `radar_adaptive_3ds_disabled`, `radar_dynamic_risk_thresholds_disabled`, `radar_early_fraud_warning_disabled`, `radar_for_setup_intents_disabled`, `radar_fraud_dispute_protection_disabled`, `radar_rule_added`, `radar_rule_disabled`, `radar_rule_enabled`, `radar_rule_removed`, `radar_rule_updated`, and `user_access_started` on enum `V2.Iam.ActivityLogListParams.actions`
* Add support for `severity` on `EventsV2CoreHealthEventGenerationFailureResolvedEvent`
* Add support for error code `inactive_api_operation_confirmation_required` on `QuotePreviewInvoice.last_finalization_error`
