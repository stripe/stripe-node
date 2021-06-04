# CHANGELOG

## 8.153.0 - 2021-06-04
* [#1168](https://github.com/stripe/stripe-node/pull/1168) API Updates
  * Add support for `controller` on `Account`.

## 8.152.0 - 2021-06-04
* [#1167](https://github.com/stripe/stripe-node/pull/1167) API Updates
  * Add support for new resource `TaxCode`.
  * Add support for `tax_code` on `Product`, `ProductCreateParams`, `ProductUpdateParams`, `PriceCreateParams.product_data`, `PlanCreateParams.product`, and Checkout `SessionCreateParams.line_items[].price_data.product_data`.
  * Add support for `tax` to `Customer`, `CustomerCreateParams`, `CustomerUpdateParams`.
  * Add support for `default_settings[automatic_tax]` and `phases[].automatic_tax` on `SubscriptionSchedule`, `SubscriptionScheduleCreateParams`, and `SubscriptionScheduleUpdateParams`.
  * Add support for `automatic_tax` on `Subscription`, `SubscriptionCreateParams`, `SubscriptionUpdateParams`; `Invoice`, `InvoiceCreateParams`, `InvoiceRetrieveUpcomingParams` and `InvoiceLineItemListUpcomingParams`; Checkout `Session` and Checkout `SessionCreateParams`.
  * Add support for `tax_behavior` to `Price`, `PriceCreateParams`, `PriceUpdateParams` and to the many Param objects that contain `price_data`:
      - `SubscriptionScheduleCreateParams` and `SubscriptionScheduleUpdateParams`, beneath `phases[].add_invoice_items[]` and `phases[].items[]`
      - `SubscriptionItemCreateParams` and `SubscriptionItemUpdateParams`, on the top-level
      - `SubscriptionCreateParams` create and `UpdateCreateParams`, beneath `items[]` and `add_invoice_items[]`
      - `InvoiceItemCreateParams` and `InvoiceItemUpdateParams`,  on the top-level
      - `InvoiceRetrieveUpcomingParams` and `InvoiceLineItemListUpcomingParams` beneath `subscription_items[]` and `invoice_items[]`.
      - Checkout `SessionCreateParams`, beneath `line_items[]`.
  * Add support for `customer_update` to Checkout `SessionCreateParams`.
  * Add support for `customer_details` to `InvoiceRetrieveUpcomingParams` and `InvoiceLineItemListUpcomingParams`.
  * Add support for `tax_type` to `TaxRate`, `TaxRateCreateParams`, and `TaxRateUpdateParams`.

## 8.151.0 - 2021-06-02
* [#1166](https://github.com/stripe/stripe-node/pull/1166) API Updates
  * Added support for `llc`, `free_zone_llc`, `free_zone_establishment` and `sole_establishment` to the `structure` enum on `Account.company`, `AccountCreateParams.company`, `AccountUpdateParams.company` and `TokenCreateParams.account.company`.

## 8.150.0 - 2021-05-26
* [#1163](https://github.com/stripe/stripe-node/pull/1163) API Updates
  * Added support for `documents` on `PersonUpdateParams`, `PersonCreateParams` and `TokenCreateParams.person`

## 8.149.0 - 2021-05-19
* [#1159](https://github.com/stripe/stripe-node/pull/1159) API Updates
  * Add support for Identity VerificationSupport and VerificationReport APIs
  * Update Typescript for `CouponCreateParams.duration` and `CouponCreateParams.products` to be optional.
* [#1158](https://github.com/stripe/stripe-node/pull/1158) API Updates
  * `AccountUpdateParams.business_profile.support_url` and `AccountCreatParams.business_profile.support_url` changed from `string` to `Stripe.Emptyable<string>`
  * `File.purpose` added new enum members: `finance_report_run`, `document_provider_identity_document`, and `sigma_scheduled_query` 

## 8.148.0 - 2021-05-06
* [#1154](https://github.com/stripe/stripe-node/pull/1154) API Updates
  * Added support for `reference` on `Charge.payment_method_details.afterpay_clearpay`
  * Added support for `afterpay_clearpay` on `PaymentIntent.payment_method_options`.

## 8.147.0 - 2021-05-05
* [#1153](https://github.com/stripe/stripe-node/pull/1153) API Updates
  * Add support for `payment_intent` on `Radar.EarlyFraudWarning`

## 8.146.0 - 2021-05-04
* Add support for `card_present` on `PaymentIntent#confirm.payment_method_options`, `PaymentIntent#update.payment_method_options`, `PaymentIntent#create.payment_method_options` and `PaymentIntent.payment_method_options`
* `SubscriptionItem#create.payment_behavior`, `Subscription#update.payment_behavior`, `Subscription#create.payment_behavior` and `SubscriptionItem#update.payment_behavior` added new enum members: `default_incomplete`

## 8.145.0 - 2021-04-21
* [#1143](https://github.com/stripe/stripe-node/pull/1143) API Updates
  * Add support for `single_member_llc` as an enum member of `Account.company.structure` and `TokenCreateParams.account.company.structure` added new enum members: 
  * Add support for `dhl` and `royal_mail` as enum members of `Issuing.Card.shipping.carrier`.
* [#1142](https://github.com/stripe/stripe-node/pull/1142) Improve type definition for for `AccountCreateParams.external_account`

## 8.144.0 - 2021-04-16
* [#1140](https://github.com/stripe/stripe-node/pull/1140) API Updates
  * Add support for `currency` on `Checkout.Session.PaymentMethodOptions.AcssDebit`

## 8.143.0 - 2021-04-12
* [#1139](https://github.com/stripe/stripe-node/pull/1139) API Updates
  * Add support for `acss_debit_payments` on `Account.capabilities`
  * Add support for `payment_method_options` on `Checkout.Session`
  * Add support for `acss_debit` on `SetupIntent.payment_method_options`, `SetupAttempt.payment_method_details`, `PaymentMethod`, `PaymentIntent.payment_method_options`,  `PaymentIntentUpdateParams.payment_method_options`, `PaymentIntentCreateParams.payment_method_options`, `PaymentIntentConfirmParams.payment_method_data`, `PaymentIntentUpdateParams.payment_method_data`, `PaymentIntentCreateParams.payment_method_data`, `Mandate.payment_method_details` and `SetupIntent.payment_method_options`
  * Add support for `verify_with_microdeposits` on `PaymentIntent.next_action` and `SetupIntent.next_action`
  * Add support for `acss_debit` as member of the `type` enum on `PaymentMethod` and `PaymentIntent`, and inside `Checkout.SessionCreateParams.payment_method_types[]`.

## 8.142.0 - 2021-04-02
* [#1138](https://github.com/stripe/stripe-node/pull/1138) API Updates
  * Add support for `subscription_pause` on `BillingPortal.ConfigurationUpdateParams.features`, `BillingPortal.ConfigurationCreateParams.features` and `BillingPortal.Configuration.features`

## 8.141.0 - 2021-03-31
* [#1137](https://github.com/stripe/stripe-node/pull/1137) API Updates
  * Add support for `transfer_data` on `SessionCreateParams.subscription_data`
* [#1134](https://github.com/stripe/stripe-node/pull/1134) API Updates
  * Added support for `card_issuing` on `AccountUpdateParams.settings` and `Account.settings`

## 8.140.0 - 2021-03-25
* [#1133](https://github.com/stripe/stripe-node/pull/1133) API Updates
  * `Capability.requirements.errors[].code`, `Account.requirements.errors[].code` and `Person.requirements.errors[].code` added new enum members: `verification_missing_owners, verification_missing_executives and verification_requires_additional_memorandum_of_associations`
  * `SessionCreateParams.locale` and `CheckoutSession.locale` added new enum members: `th`

## 8.139.0 - 2021-03-22
* [#1132](https://github.com/stripe/stripe-node/pull/1132) API Updates
  * Added support for `shipping_rates` on `SessionCreateOptions`
  * Added support for `amount_shipping` on `Checkout.SessionTotalDetails`
* [#1131](https://github.com/stripe/stripe-node/pull/1131) types: export StripeRawError type

## 8.138.0 - 2021-03-10
* [#1124](https://github.com/stripe/stripe-node/pull/1124) API Updates
  * Added support for `BillingPortal.Configuration` API.
  * `Terminal.LocationUpdateParams.country` is now optional.

## 8.137.0 - 2021-02-17
* [#1123](https://github.com/stripe/stripe-node/pull/1123) API Updates
  * Add support for on_behalf_of to Invoice
  * Add support for enum member revolut on PaymentIntent.payment_method_data.ideal.bank, PaymentMethod.ideal.bank, Charge.payment_method_details.ideal.bank and SetupAttempt.payment_method_details.ideal.bank
  * Added support for enum member REVOLT21 on PaymentMethod.ideal.bic, Charge.payment_method_details.ideal.bic and SetupAttempt.payment_method_details.ideal.bic

## 8.136.0 - 2021-02-16
* [#1122](https://github.com/stripe/stripe-node/pull/1122) API Updates
  * Add support for `afterpay_clearpay` on `PaymentMethod`, `PaymentIntent.payment_method_data`, and `Charge.payment_method_details`.
  * Add support for `afterpay_clearpay` as a payment method type on `PaymentMethod`, `PaymentIntent` and `Checkout.Session`
  * Add support for `adjustable_quantity` on `SessionCreateParams.LineItem`
  * Add support for `bacs_debit`, `au_becs_debit` and `sepa_debit` on `SetupAttempt.payment_method_details`

## 8.135.0 - 2021-02-08
* [#1119](https://github.com/stripe/stripe-node/pull/1119) API Updates
  * Add support for `afterpay_clearpay_payments` on `Account.capabilities`
  * Add support for `payment_settings` on `Invoice`

## 8.134.0 - 2021-02-05
* [#1118](https://github.com/stripe/stripe-node/pull/1118) API Updates
  * `LineItem.amount_subtotal` and `LineItem.amount_total` changed from `nullable(integer)` to `integer`
  * Improve error message for `EphemeralKeys.create`

## 8.133.0 - 2021-02-03
* [#1115](https://github.com/stripe/stripe-node/pull/1115) API Updates
  * Added support for `nationality` on `Person`, `PersonUpdateParams`, `PersonCreateParams` and `TokenCreateParams.person`
  * Added `gb_vat` to `TaxId.type` enum.

## 8.132.0 - 2021-01-21
* [#1112](https://github.com/stripe/stripe-node/pull/1112) API Updates
  * `Issuing.Transaction.type` dropped enum members: 'dispute'
  * `LineItem.price` can now be null.

## 8.131.1 - 2021-01-15
* [#1104](https://github.com/stripe/stripe-node/pull/1104) Make request timeout errors eligible for retry

## 8.131.0 - 2021-01-14
* [#1108](https://github.com/stripe/stripe-node/pull/1108) Multiple API Changes
  * Added support for `dynamic_tax_rates` on `Checkout.SessionCreateParams.line_items`
  * Added support for `customer_details` on `Checkout.Session`
  * Added support for `type` on `Issuing.TransactionListParams`
  * Added support for `country` and `state` on `TaxRateUpdateParams`, `TaxRateCreateParams` and `TaxRate`
* [#1107](https://github.com/stripe/stripe-node/pull/1107) More consistent type definitions

## 8.130.0 - 2021-01-07
* [#1105](https://github.com/stripe/stripe-node/pull/1105) API Updates
  * Added support for `company_registration_verification`, `company_ministerial_decree`, `company_memorandum_of_association`, `company_license` and `company_tax_id_verification` on AccountUpdateParams.documents and AccountCreateParams.documents
* [#1100](https://github.com/stripe/stripe-node/pull/1100) implement/fix reverse iteration when iterating with ending_before
* [#1096](https://github.com/stripe/stripe-node/pull/1096) typo receieved -> received

## 8.129.0 - 2020-12-15
* [#1093](https://github.com/stripe/stripe-node/pull/1093) API Updates
  * Added support for card_present on SetupAttempt.payment_method_details

## 8.128.0 - 2020-12-10
* [#1088](https://github.com/stripe/stripe-node/pull/1088) Multiple API changes
  * Add newlines for consistency.
  * Prefix deleted references with `Stripe.` for consistency.
  * Add support for `bank` on `PaymentMethod[eps]`.
  * Add support for `tos_shown_and_accepted` to `payment_method_options[p24]` on `PaymentMethod`.

## 8.127.0 - 2020-12-03
* [#1084](https://github.com/stripe/stripe-node/pull/1084) Add support for `documents` on `Account` create and update
* [#1080](https://github.com/stripe/stripe-node/pull/1080) fixed promises example

## 8.126.0 - 2020-11-24
* [#1079](https://github.com/stripe/stripe-node/pull/1079) Multiple API changes
  * Add support for `account_tax_ids` on `Invoice`
  * Add support for `payment_method_options[sepa_debit]` on `PaymentIntent`

## 8.125.0 - 2020-11-20
* [#1075](https://github.com/stripe/stripe-node/pull/1075) Add support for `capabilities[grabpay_payments]` on `Account`

## 8.124.0 - 2020-11-19
* [#1074](https://github.com/stripe/stripe-node/pull/1074)
  * Add support for mandate_options on SetupIntent.payment_method_options.sepa_debit.
  * Add support for card_present and interact_present as values for PaymentMethod.type.
* [#1073](https://github.com/stripe/stripe-node/pull/1073) More consistent namespacing for shared types

## 8.123.0 - 2020-11-18
* [#1072](https://github.com/stripe/stripe-node/pull/1072) Add support for `grabpay` on `PaymentMethod`

## 8.122.1 - 2020-11-17
* Identical to 8.122.0. Published to resolve a release issue.

## 8.122.0 - 2020-11-17
* [#1070](https://github.com/stripe/stripe-node/pull/1070)
  * Add support for `sepa_debit` on `SetupIntent.PaymentMethodOptions`
  * `Invoice.tax_amounts` and `InvoiceLineItem.tax_rates` are no longer nullable
  * `Invoice.default_tax_rates` and `InvoiceLineItem.tax_amounts` are no longer nullable

## 8.121.0 - 2020-11-09
* [#1064](https://github.com/stripe/stripe-node/pull/1064) Add `invoice.finalization_error` as a `type` on `Event`
* [#1063](https://github.com/stripe/stripe-node/pull/1063) Multiple API changes
  * Add support for `last_finalization_error` on `Invoice`
  * Add support for deserializing Issuing `Dispute` as a `source` on `BalanceTransaction`
  * Add support for `payment_method_type` on `StripeError` used by other API resources

## 8.120.0 - 2020-11-04
* [#1061](https://github.com/stripe/stripe-node/pull/1061) Add support for `company[registration_number]` on `Account`

## 8.119.0 - 2020-10-27
* [#1056](https://github.com/stripe/stripe-node/pull/1056) Add  `payment_method_details[interac_present][preferred_locales]` on `Charge`
* [#1057](https://github.com/stripe/stripe-node/pull/1057) Standardize on CRULD order for method definitions
* [#1055](https://github.com/stripe/stripe-node/pull/1055) Added requirements to README

## 8.118.0 - 2020-10-26
* [#1053](https://github.com/stripe/stripe-node/pull/1053) Multiple API changes
  * Improving Typescript types for nullable parameters and introduced `Stripe.Emptyable` as a type
  * Add support for `payment_method_options[card][cvc_token]` on `PaymentIntent`
  * Add support for `cvc_update[cvc]` on `Token` creation
* [#1052](https://github.com/stripe/stripe-node/pull/1052) Add Stripe.Emptyable type definition

## 8.117.0 - 2020-10-23
* [#1050](https://github.com/stripe/stripe-node/pull/1050) Add support for passing `p24[bank]` for P24 on `PaymentIntent` or `PaymentMethod`

## 8.116.0 - 2020-10-22
* [#1049](https://github.com/stripe/stripe-node/pull/1049) Support passing `tax_rates` when creating invoice items through `Subscription` or `SubscriptionSchedule`

## 8.115.0 - 2020-10-20
* [#1048](https://github.com/stripe/stripe-node/pull/1048) Add support for `jp_rn` and `ru_kpp` as a `type` on `TaxId`
* [#1046](https://github.com/stripe/stripe-node/pull/1046) chore: replace recommended extension sublime babel with babel javascript

## 8.114.0 - 2020-10-15
* [#1045](https://github.com/stripe/stripe-node/pull/1045) Make `original_payout` and `reversed_by` not optional anymore

## 8.113.0 - 2020-10-14
* [#1044](https://github.com/stripe/stripe-node/pull/1044) Add support for `discounts` on `Session.create`

## 8.112.0 - 2020-10-14
* [#1042](https://github.com/stripe/stripe-node/pull/1042) Add support for the Payout Reverse API
* [#1041](https://github.com/stripe/stripe-node/pull/1041) Do not mutate user-supplied opts

## 8.111.0 - 2020-10-12
* [#1038](https://github.com/stripe/stripe-node/pull/1038) Add support for `description`, `iin` and `issuer` in `payment_method_details[card_present]` and `payment_method_details[interac_present]` on `Charge`

## 8.110.0 - 2020-10-12
* [#1035](https://github.com/stripe/stripe-node/pull/1035) Add support for `setup_intent.requires_action` on Event

## 8.109.0 - 2020-10-09
* [#1033](https://github.com/stripe/stripe-node/pull/1033) Add support for internal-only `description`, `iin`, and `issuer` for `card_present` and `interac_present` on `Charge.payment_method_details` 

## 8.108.0 - 2020-10-08
* [#1028](https://github.com/stripe/stripe-node/pull/1028) Add support for `Bancontact/iDEAL/Sofort -> SEPA`
  * Add support for `generated_sepa_debit` and `generated_sepa_debit_mandate` on `Charge.payment_method_details.ideal`, `Charge.payment_method_details.bancontact` and `Charge.payment_method_details.sofort`
  * Add support for `generated_from` on `PaymentMethod.sepa_debit`
  * Add support for `ideal`, `bancontact` and `sofort` on `SetupAttempt.payment_method_details`

## 8.107.0 - 2020-10-02
* [#1026](https://github.com/stripe/stripe-node/pull/1026) Add support for `tos_acceptance[service_agreement]` on `Account`
* [#1025](https://github.com/stripe/stripe-node/pull/1025) Add support for new payments capabilities on `Account`

## 8.106.0 - 2020-09-29
* [#1024](https://github.com/stripe/stripe-node/pull/1024) Add support for the `SetupAttempt` resource and List API

## 8.105.0 - 2020-09-29
* [#1023](https://github.com/stripe/stripe-node/pull/1023) Add support for `contribution` in `reporting_category` on `ReportRun`

## 8.104.0 - 2020-09-28
* [#1022](https://github.com/stripe/stripe-node/pull/1022) Add support for `oxxo_payments` capability on `Account`

## 8.103.0 - 2020-09-28
* [#1021](https://github.com/stripe/stripe-node/pull/1021) Add VERSION constant to instantiated Stripe client.

## 8.102.0 - 2020-09-25
* [#1019](https://github.com/stripe/stripe-node/pull/1019) Add support for `oxxo` as a valid `type` on the List PaymentMethod API

## 8.101.0 - 2020-09-25
* [#1018](https://github.com/stripe/stripe-node/pull/1018) More idiomatic types

## 8.100.0 - 2020-09-24
* [#1016](https://github.com/stripe/stripe-node/pull/1016) Multiple API changes
  * Add support for OXXO on `PaymentMethod` and `PaymentIntent`
  * Add support for `contribution` on `BalanceTransaction`

## 8.99.0 - 2020-09-24
* [#1011](https://github.com/stripe/stripe-node/pull/1011) Add type definition for Stripe.StripeResource

## 8.98.0 - 2020-09-23
* [#1014](https://github.com/stripe/stripe-node/pull/1014) Multiple API changes
  * Add support for `issuing_dispute.closed` and `issuing_dispute.submitted` events
  * Add support for `instant_available` on `Balance`

## 8.97.0 - 2020-09-21
* [#1012](https://github.com/stripe/stripe-node/pull/1012) Multiple API changes
  * `metadata` is now always nullable on all resources
  * Add support for `amount_captured` on `Charge`
  * Add `checkout_session` on `Discount`

## 8.96.0 - 2020-09-13
* [#1003](https://github.com/stripe/stripe-node/pull/1003) Add support for `promotion_code.created` and `promotion_code.updated` on `Event`

## 8.95.0 - 2020-09-10
* [#999](https://github.com/stripe/stripe-node/pull/999) Add support for SEPA debit on Checkout

## 8.94.0 - 2020-09-09
* [#998](https://github.com/stripe/stripe-node/pull/998) Multiple API changes
  * Add support for `sofort` as a `type` on the List PaymentMethods API
  * Add back support for `invoice.payment_succeeded`

## 8.93.0 - 2020-09-08
* [#995](https://github.com/stripe/stripe-node/pull/995) Add support for Sofort on `PaymentMethod` and `PaymentIntent`

## 8.92.0 - 2020-09-02
* [#993](https://github.com/stripe/stripe-node/pull/993) Multiple API changes
  * Add support for the Issuing `Dispute` submit API
  * Add support for evidence details on Issuing `Dispute` creation, update and the resource.
  * Add `available_payout_methods` on `BankAccount`
  * Add `payment_status` on Checkout `Session`

## 8.91.0 - 2020-08-31
* [#992](https://github.com/stripe/stripe-node/pull/992) Add support for `payment_method.automatically_updated` on `WebhookEndpoint`

## 8.90.0 - 2020-08-28
* [#991](https://github.com/stripe/stripe-node/pull/991) Multiple API changes
* [#990](https://github.com/stripe/stripe-node/pull/990) Typescript: add 'lastResponse' to return types

## 8.89.0 - 2020-08-19
* [#988](https://github.com/stripe/stripe-node/pull/988) Multiple API changes
  * `tax_ids` on `Customer` can now be nullable
  * Added support for `expires_at` on `File`

## 8.88.0 - 2020-08-17
* [#987](https://github.com/stripe/stripe-node/pull/987) Add support for `amount_details` on Issuing `Authorization` and `Transaction`

## 8.87.0 - 2020-08-17
* [#984](https://github.com/stripe/stripe-node/pull/984) Multiple API changes
  * Add `alipay` on `type` for the List PaymentMethods API
  * Add `payment_intent.requires_action` as a new `type` on `Event`

## 8.86.0 - 2020-08-13
* [#981](https://github.com/stripe/stripe-node/pull/981) Add support for Alipay on Checkout `Session`

## 8.85.0 - 2020-08-13
* [#980](https://github.com/stripe/stripe-node/pull/980) [codegen] Multiple API Changes
  * Added support for bank_name on `Charge.payment_method_details.acss_debit`
  * `Issuing.dispute.balance_transactions` is now nullable.

## 8.84.0 - 2020-08-07
* [#975](https://github.com/stripe/stripe-node/pull/975) Add support for Alipay on `PaymentMethod` and `PaymentIntent`

## 8.83.0 - 2020-08-05
* [#973](https://github.com/stripe/stripe-node/pull/973) Multiple API changes
  * Add support for the `PromotionCode` resource and APIs
  * Add support for `allow_promotion_codes` on Checkout `Session`
  * Add support for `applies_to[products]` on `Coupon`
  * Add support for `promotion_code` on `Customer` and `Subscription`
  * Add support for `promotion_code` on `Discount`

## 8.82.0 - 2020-08-04
* [#972](https://github.com/stripe/stripe-node/pull/972) Multiple API changes
  * Add `zh-HK` and `zh-TW` as `locale` on Checkout `Session`
  * Add `payment_method_details[card_present][receipt][account_type]` on `Charge`

## 8.81.0 - 2020-07-30
* [#970](https://github.com/stripe/stripe-node/pull/970) Improve types for `customer` on `CreditNote` to support `DeletedCustomer`

## 8.80.0 - 2020-07-29
* [#969](https://github.com/stripe/stripe-node/pull/969) Multiple API changes
  * Add support for `id`, `invoice` and `invoice_item` on `Discount` and `DeletedDiscount`
  * Add support for `discount_amounts` on `CreditNote`, `CreditNoteLineItem`, `InvoiceLineItem`
  * Add support for `discounts` on `InvoiceItem`, `InvoiceLineItem` and `Invoice`
  * Add support for `total_discount_amounts` on `Invoice`
  * Make `customer` and `verification` on `TaxId` optional as the resource will be re-used for `Account` in the future.

## 8.79.0 - 2020-07-24
* [#967](https://github.com/stripe/stripe-node/pull/967) Multiple API changes
  * Make all properties from `Discount` available on `DeletedDiscount`
  * Add `capabilities[fpx_payments]` on `Account` create and update

## 8.78.0 - 2020-07-22
* [#965](https://github.com/stripe/stripe-node/pull/965) Add support for `cartes_bancaires_payments` as a `Capability`

## 8.77.0 - 2020-07-20
* [#963](https://github.com/stripe/stripe-node/pull/963) Add support for `capabilities` as a parameter on `Account` create and update

## 8.76.0 - 2020-07-17
* [#962](https://github.com/stripe/stripe-node/pull/962) Add support for `political_exposure` on `Person`

## 8.75.0 - 2020-07-16
* [#961](https://github.com/stripe/stripe-node/pull/961) Add support for `account_onboarding` and `account_update` as `type` on `AccountLink`

## 8.74.0 - 2020-07-16
* [#959](https://github.com/stripe/stripe-node/pull/959) Refactor remaining 'var' to 'let/const' usages
* [#960](https://github.com/stripe/stripe-node/pull/960) Use strict equality check for 'protocol' field for consistency
* [#952](https://github.com/stripe/stripe-node/pull/952) Add new fields to lastResponse: apiVersion, stripeAccount, idempotencyKey

## 8.73.0 - 2020-07-15
* [#958](https://github.com/stripe/stripe-node/pull/958) Multiple API changes
  * Add support for `en-GB`, `fr-CA` and `id` as `locale` on Checkout `Session`
  * Move `purpose` to an enum on `File`
* [#957](https://github.com/stripe/stripe-node/pull/957) Bump lodash from 4.17.15 to 4.17.19

## 8.72.0 - 2020-07-15
* [#956](https://github.com/stripe/stripe-node/pull/956) Add support for `amount_total`, `amount_subtotal`, `currency` and `total_details` on Checkout `Session`

## 8.71.0 - 2020-07-14
* [#955](https://github.com/stripe/stripe-node/pull/955) Change from string to enum value for `billing_address_collection` on Checkout `Session`

## 8.70.0 - 2020-07-13
* [#953](https://github.com/stripe/stripe-node/pull/953) Multiple API changes
  * Adds `es-419` as a `locale` to Checkout `Session`
  * Adds `billing_cycle_anchor` to `default_settings` and `phases` for `SubscriptionSchedule`

## 8.69.0 - 2020-07-06
* [#946](https://github.com/stripe/stripe-node/pull/946) Fix `assert_capabilities` type definition
* [#920](https://github.com/stripe/stripe-node/pull/920) Expose StripeResource on instance

## 8.68.0 - 2020-07-01
* [#940](https://github.com/stripe/stripe-node/pull/940) Document but discourage `protocol` config option
* [#933](https://github.com/stripe/stripe-node/pull/933) Fix tests for `Plan` and `Price` to not appear as amount can be updated.

## 8.67.0 - 2020-06-24
* [#929](https://github.com/stripe/stripe-node/pull/929) Add support for `invoice.paid` event

## 8.66.0 - 2020-06-23
* [#927](https://github.com/stripe/stripe-node/pull/927) Add support for `payment_method_data` on `PaymentIntent`

## 8.65.0 - 2020-06-23
* [#926](https://github.com/stripe/stripe-node/pull/926) Multiple API changes
  * Add `discounts` on `LineItem`
  * Add `document_provider_identity_document` as a `purpose` on `File`
  * Support nullable `metadata` on Issuing `Dispute`
  * Add `klarna[shipping_delay]` on `Source`

## 8.64.0 - 2020-06-18
* [#924](https://github.com/stripe/stripe-node/pull/924) Multiple API changes
  * Add support for `refresh_url` and `return_url` on `AccountLink`
  * Add support for `issuing_dispute.*` events

## 8.63.0 - 2020-06-11
* [#919](https://github.com/stripe/stripe-node/pull/919) Multiple API changes
  * Add `transaction` on Issuing `Dispute`
  * Add `payment_method_details[acss_debit][mandate]` on `Charge`

## 8.62.0 - 2020-06-10
* [#918](https://github.com/stripe/stripe-node/pull/918) Add support for Cartes Bancaires payments on `PaymentIntent` and `Pay…

## 8.61.0 - 2020-06-09
* [#917](https://github.com/stripe/stripe-node/pull/917) Add support for `id_npwp` and `my_frp` as `type` on `TaxId`

## 8.60.0 - 2020-06-03
* [#911](https://github.com/stripe/stripe-node/pull/911) Add support for `payment_intent_data[transfer_group]` on Checkout `Session`

## 8.59.0 - 2020-06-03
* [#910](https://github.com/stripe/stripe-node/pull/910) Add support for Bancontact, EPS, Giropay and P24 on Checkout `Session`

## 8.58.0 - 2020-06-03
* [#909](https://github.com/stripe/stripe-node/pull/909) Multiple API changes
  * Add `bacs_debit_payments` as a `Capability`
  * Add support for BACS Debit on Checkout `Session`
  * Add support for `checkout.session.async_payment_failed` and `checkout.session.async_payment_succeeded` as `type` on `Event`

## 8.57.0 - 2020-06-03
* [#908](https://github.com/stripe/stripe-node/pull/908) Multiple API changes
  * Add support for bg, cs, el, et, hu, lt, lv, mt, ro, ru, sk, sl and tr as new locale on Checkout `Session`
  * Add `settings[sepa_debit_payments][creditor_id]` on `Account`
  * Add support for Bancontact, EPS, Giropay and P24 on `PaymentMethod`, `PaymentIntent` and `SetupIntent`
  * Add support for `order_item[parent]` on `Source` for Klarna
* [#905](https://github.com/stripe/stripe-node/pull/905) Add support for BACS Debit as a `PaymentMethod`

## 8.56.0 - 2020-05-28
* [#904](https://github.com/stripe/stripe-node/pull/904) Multiple API changes
  * Add `payment_method_details[card][three_d_secure][authentication_flow]` on `Charge`
  * Add `line_items[][price_data][product_data]` on Checkout `Session` creation

## 8.55.0 - 2020-05-22
* [#899](https://github.com/stripe/stripe-node/pull/899) Multiple API changes
  * Add support for `ae_trn`, `cl_tin` and `sa_vat` as `type` on `TaxId`
  * Add `result` and `result_reason` inside `payment_method_details[card][three_d_secure]` on `Charge`

## 8.54.0 - 2020-05-20
* [#897](https://github.com/stripe/stripe-node/pull/897) Multiple API changes
  * Add `anticipation_repayment` as a `type` on `BalanceTransaction`
  * Add `interac_present` as a `type` on `PaymentMethod`
  * Add `payment_method_details[interac_present]` on `Charge`
  * Add `transfer_data` on `SubscriptionSchedule`

## 8.53.0 - 2020-05-18
* [#895](https://github.com/stripe/stripe-node/pull/895) Multiple API changes
  * Add support for `issuing_dispute` as a `type` on `BalanceTransaction`
  * Add `balance_transactions` as an array of `BalanceTransaction` on Issuing `Dispute`
  * Add `fingerprint` and `transaction_id` in `payment_method_details[alipay]` on `Charge`
  * Add `transfer_data[amount]` on `Invoice`
  * Add `transfer_data[amount_percent]` on `Subscription`
  * Add `price.created`, `price.deleted` and `price.updated` on `Event`

## 8.52.0 - 2020-05-13
* [#891](https://github.com/stripe/stripe-node/pull/891) Add support for `purchase_details` on Issuing `Transaction`

## 8.51.0 - 2020-05-11
* [#890](https://github.com/stripe/stripe-node/pull/890) Add support for the `LineItem` resource and APIs

## 8.50.0 - 2020-05-07
* [#888](https://github.com/stripe/stripe-node/pull/888) Multiple API changes
  * Remove parameters in `price_data[recurring]` across APIs as they were never supported
  * Move `payment_method_details[card][three_d_secure]` to a list of enum values on `Charge`
  * Add support for for `business_profile[support_adress]` on `Account` create and update

## 8.49.0 - 2020-05-01
* [#883](https://github.com/stripe/stripe-node/pull/883) Multiple API changes
  * Add `issuing` on `Balance`
  * Add `br_cnpj` and `br_cpf` as `type` on `TaxId`
  * Add `price` support in phases on `SubscriptionSchedule`
  * Make `quantity` nullable on `SubscriptionSchedule` for upcoming API version change

## 8.48.0 - 2020-04-29
* [#881](https://github.com/stripe/stripe-node/pull/881) Add support for the `Price` resource and APIs

## 8.47.1 - 2020-04-28
* [#880](https://github.com/stripe/stripe-node/pull/880) Make `display_items` on Checkout `Session` optional

## 8.47.0 - 2020-04-24
* [#876](https://github.com/stripe/stripe-node/pull/876) Add support for `jcb_payments` as a `Capability`

## 8.46.0 - 2020-04-22
* [#875](https://github.com/stripe/stripe-node/pull/875) Add support for `coupon` when for subscriptions on Checkout

## 8.45.0 - 2020-04-22
* [#874](https://github.com/stripe/stripe-node/pull/874) Add support for `billingPortal` namespace and `session` resource and APIs

## 8.44.0 - 2020-04-17
* [#873](https://github.com/stripe/stripe-node/pull/873) Multiple API changes
  * Add support for `cardholder_name` in `payment_method_details[card_present]` on `Charge`
  * Add new enum values for `company.structure` on `Account`

## 8.43.0 - 2020-04-16
* [#868](https://github.com/stripe/stripe-node/pull/868) Multiple API changes

## 8.42.0 - 2020-04-15
* [#867](https://github.com/stripe/stripe-node/pull/867) Clean up deprecated features in our Typescript definitions for Issuing and other resources

## 8.41.0 - 2020-04-14
* [#866](https://github.com/stripe/stripe-node/pull/866) Add support for `settings[branding][secondary_color]` on `Account`

## 8.40.0 - 2020-04-13
* [#865](https://github.com/stripe/stripe-node/pull/865) Add support for `description` on `WebhookEndpoint`

## 8.39.2 - 2020-04-10
* [#864](https://github.com/stripe/stripe-node/pull/864) Multiple API changes
  * Make `payment_intent` expandable on `Charge`
  * Add support for `sg_gst` as a value for `type` on `TaxId` and related APIs
  * Add `cancellation_reason` and new enum values for `replacement_reason` on Issuing `Card`

## 8.39.1 - 2020-04-08
* [#848](https://github.com/stripe/stripe-node/pull/848) Fix TS return type for autoPagingEach

## 8.39.0 - 2020-04-03
* [#859](https://github.com/stripe/stripe-node/pull/859) Add support for `calculatedStatementDescriptor` on `Charge`

## 8.38.0 - 2020-03-27

- [#853](https://github.com/stripe/stripe-node/pull/853) Improve StripeError.generate()
  - Add `doc_url` field to StripeError.
  - Expose `Stripe.errors.generate()` as a convenience for `Stripe.errors.StripeError.generate()`.
  - Fix several TS types related to StripeErrors.
  - Add types for `StripeInvalidGrantError`.
  - Add support for `authentication_error` and `rate_limit_error` in `.generate()`.

## 8.37.0 - 2020-03-26

- [#851](https://github.com/stripe/stripe-node/pull/851) Add support for `spending_controls` on Issuing `Card` and `Cardholder`

## 8.36.0 - 2020-03-25

- [#850](https://github.com/stripe/stripe-node/pull/850) Multiple API changes
  - Add support for `pt-BR` as a `locale` on Checkout `Session`
  - Add support for `company` as a `type` on Issuing `Cardholder`

## 8.35.0 - 2020-03-24

- [#849](https://github.com/stripe/stripe-node/pull/849) Add support for `pause_collection` on `Subscription`

## 8.34.0 - 2020-03-24

- [#847](https://github.com/stripe/stripe-node/pull/847) Add new capabilities for AU Becs Debit and tax reporting

## 8.33.0 - 2020-03-20

- [#842](https://github.com/stripe/stripe-node/pull/842) Multiple API changes for Issuing:
  - Add `amount`, `currency`, `merchant_amount` and `merchant_currency` on `Authorization`
  - Add `amount`, `currency`, `merchant_amount` and `merchant_currency` inside `request_history` on `Authorization`
  - Add `pending_request` on `Authorization`
  - Add `amount` when approving an `Authorization`
  - Add `replaced_by` on `Card`

## 8.32.0 - 2020-03-13

- [#836](https://github.com/stripe/stripe-node/pull/836) Multiple API changes for Issuing:
  - Rename `speed` to `service` on Issuing `Card`
  - Rename `wallet_provider` to `wallet` and `address_zip_check` to `address_postal_code_check` on Issuing `Authorization`
  - Mark `is_default` as deprecated on Issuing `Cardholder`

## 8.31.0 - 2020-03-12

- [#835](https://github.com/stripe/stripe-node/pull/835) Add support for `shipping` and `shipping_address_collection` on Checkout `Session`

## 8.30.0 - 2020-03-12

- [#834](https://github.com/stripe/stripe-node/pull/834) Add support for `ThreeDSecure` on Issuing `Authorization`

## 8.29.0 - 2020-03-05

- [#833](https://github.com/stripe/stripe-node/pull/833) Make metadata nullable in many endpoints

## 8.28.1 - 2020-03-05

- [#827](https://github.com/stripe/stripe-node/pull/827) Allow `null`/`undefined` to be passed for `options` arg.

## 8.28.0 - 2020-03-04

- [#830](https://github.com/stripe/stripe-node/pull/830) Add support for `metadata` on `WebhookEndpoint`

## 8.27.0 - 2020-03-04

- [#829](https://github.com/stripe/stripe-node/pull/829) Multiple API changes
  - Add support for `account` as a parameter on `Token` to create Account tokens
  - Add support for `verification_data.expiry_check` on Issuing `Authorization`
  - Add support for `incorrect_cvc` and `incorrect_expiry` as a value for `request_history.reason` on Issuing `Authorization`

## 8.26.0 - 2020-03-04

- [#828](https://github.com/stripe/stripe-node/pull/828) Multiple API changes
  - Add support for `errors` in `requirements` on `Account`, `Capability` and `Person`
  - Add support for `payment_intent.processing` as a new `type` on `Event`.

## 8.25.0 - 2020-03-03

⚠️ This is a breaking change for TypeScript users.

- [#826](https://github.com/stripe/stripe-node/pull/826) Multiple API changes:
  - ⚠️ Types are now for the API version `2020-03-02`. This is a breaking change for TypeScript users
  - Remove `uob_regional` as a value on `bank` for FPX as this is deprecated and was never used
  - Add support for `next_invoice_sequence` on `Customer`
  - Add support for `proration_behavior` on `SubscriptionItem` delete

## 8.24.1 - 2020-03-02

- [#824](https://github.com/stripe/stripe-node/pull/824) Update type for StripeError to extend Error

## 8.24.0 - 2020-02-28

- [#822](https://github.com/stripe/stripe-node/pull/822) Add `my_sst` as a valid value for `type` on `TaxId`

## 8.23.0 - 2020-02-27

- [#821](https://github.com/stripe/stripe-node/pull/821) Make `type` on `AccountLink` an enum

## 8.22.0 - 2020-02-24

- [#820](https://github.com/stripe/stripe-node/pull/820) Add new enum values in `reason` for Issuing `Dispute` creation

## 8.21.0 - 2020-02-24

- [#819](https://github.com/stripe/stripe-node/pull/819) Add support for listing Checkout `Session` and passing tax rate information

## 8.20.0 - 2020-02-21

- [#813](https://github.com/stripe/stripe-node/pull/813) Multiple API changes
  - Add support for `timezone` on `ReportRun`
  - Add support for `proration_behavior` on `SubscriptionSchedule`

## 8.19.0 - 2020-02-18

- [#807](https://github.com/stripe/stripe-node/pull/807) Change timeout default to constant 80000 instead Node default

## 8.18.0 - 2020-02-14

- [#802](https://github.com/stripe/stripe-node/pull/802) TS Fixes
  - Correctly type `Array<CustomField>`
  - More consistently describe nullable fields as `| null`, vs `| ''`.

## 8.17.0 - 2020-02-12

- [#804](https://github.com/stripe/stripe-node/pull/804) Add support for `payment_intent_data[transfer_data][amount]` on Checkout `Session`

## 8.16.0 - 2020-02-12

- [#803](https://github.com/stripe/stripe-node/pull/803) Multiple API changes reflect in Typescript definitions
  - Add `fpx` as a valid `source_type` on `Balance`, `Payout` and `Transfer`
  - Add `fpx` support on Checkout `Session`
  - Fields inside `verification_data` on Issuing `Authorization` are now enums
  - Support updating `payment_method_options` on `PaymentIntent` and `SetupIntent`

## 8.15.0 - 2020-02-10

- [#801](https://github.com/stripe/stripe-node/pull/801) Multiple API changes
  - Add support for new `type` values for `TaxId`.
  - Add support for `payment_intent_data[statement_descriptor_suffix]` on Checkout `Session`.

## 8.14.0 - 2020-02-04

- [#793](https://github.com/stripe/stripe-node/pull/793) Rename `sort_code` to `sender_sort_code` on `SourceTransaction` for BACS debit.

## 8.13.0 - 2020-02-03

- [#792](https://github.com/stripe/stripe-node/pull/792) Multiple API changes
  - Add new `purpose` for `File`: `additional_verification`
  - Add `error_on_requires_action` as a parameter for `PaymentIntent` creation and confirmation

## 8.12.0 - 2020-01-31

- [#790](https://github.com/stripe/stripe-node/pull/790) Add new type of `TaxId`

## 8.11.0 - 2020-01-30

- [#789](https://github.com/stripe/stripe-node/pull/789) Add support for `company.structure` on `Account` and other docs changes

## 8.10.0 - 2020-01-30

- [#788](https://github.com/stripe/stripe-node/pull/788) Make typescript param optional

## 8.9.0 - 2020-01-30

- [#787](https://github.com/stripe/stripe-node/pull/787) Add support for FPX as a `PaymentMethod`
- [#769](https://github.com/stripe/stripe-node/pull/769) Fix Typescript definition on `Token` creation for bank accounts

## 8.8.2 - 2020-01-30

- [#785](https://github.com/stripe/stripe-node/pull/785) Fix file uploads with nested params

## 8.8.1 - 2020-01-29

- [#784](https://github.com/stripe/stripe-node/pull/784) Allow @types/node 8.1

## 8.8.0 - 2020-01-28

- [#780](https://github.com/stripe/stripe-node/pull/780) Add new type for `TaxId` and `sender_account_name` on `SourceTransaction`

## 8.7.0 - 2020-01-24

- [#777](https://github.com/stripe/stripe-node/pull/777) Add support for `shipping[speed]` on Issuing `Card`

## 8.6.0 - 2020-01-23

- [#775](https://github.com/stripe/stripe-node/pull/775) Gracefully handle a missing `subprocess` module

## 8.5.0 - 2020-01-23

- [#776](https://github.com/stripe/stripe-node/pull/776) Add support for new `type` on `CustomerTaxId`

## 8.4.1 - 2020-01-21

- [#774](https://github.com/stripe/stripe-node/pull/774) Improve docstrings for many properties and parameters

## 8.4.0 - 2020-01-17

- [#771](https://github.com/stripe/stripe-node/pull/771) Add `metadata` on Checkout `Session` and remove deprecated features
- [#764](https://github.com/stripe/stripe-node/pull/764) Added typescript webhook example

## 8.3.0 - 2020-01-15

- [#767](https://github.com/stripe/stripe-node/pull/767) Adding missing events for pending updates on `Subscription`

## 8.2.0 - 2020-01-15

- [#765](https://github.com/stripe/stripe-node/pull/765) Add support for `pending_update` on `Subscription` to the Typescript definitions

## 8.1.0 - 2020-01-14

- [#763](https://github.com/stripe/stripe-node/pull/763) Add support for listing line items on a `CreditNote`
- [#762](https://github.com/stripe/stripe-node/pull/762) Improve docs for core fields such as `metadata` on Typescript definitions

## 8.0.1 - 2020-01-09

- [#757](https://github.com/stripe/stripe-node/pull/757) [bugfix] Add types dir to npmignore whitelist and stop warning when instantiating stripe with no args

## 8.0.0 - 2020-01-09

Major version release, adding TypeScript definitions and dropping support for Node 6. [The migration guide](https://github.com/stripe/stripe-node/wiki/Migration-guide-for-v8) contains a detailed list of backwards-incompatible changes with upgrade instructions.

Major pull requests included in this release (cf. [#742](https://github.com/stripe/stripe-node/pull/742)) (⚠️ = breaking changes):

- [#736](https://github.com/stripe/stripe-node/pull/736) Add TypeScript definitions
- [#744](https://github.com/stripe/stripe-node/pull/744) Remove deprecated resources and methods
- [#752](https://github.com/stripe/stripe-node/pull/752) Deprecate many library api's, unify others

## 7.63.1 - 2020-11-17
- Identical to 7.15.0.

## 7.63.0 - 2020-11-17
- Published in error. Do not use. This is identical to 8.122.0.

## 7.15.0 - 2019-12-30

- [#745](https://github.com/stripe/stripe-node/pull/745) Bump handlebars from 4.1.2 to 4.5.3
- [#737](https://github.com/stripe/stripe-node/pull/737) Fix flows test

## 7.14.0 - 2019-11-26

- [#732](https://github.com/stripe/stripe-node/pull/732) Add support for CreditNote preview

## 7.13.1 - 2019-11-22

- [#728](https://github.com/stripe/stripe-node/pull/728) Remove duplicate export

## 7.13.0 - 2019-11-06

- [#703](https://github.com/stripe/stripe-node/pull/703) New config object

## 7.12.0 - 2019-11-05

- [#724](https://github.com/stripe/stripe-node/pull/724) Add support for `Mandate`

## 7.11.0 - 2019-10-31

- [#719](https://github.com/stripe/stripe-node/pull/719) Define 'type' as a property on errors rather than a getter
- [#709](https://github.com/stripe/stripe-node/pull/709) README: imply context of stripe-node
- [#717](https://github.com/stripe/stripe-node/pull/717) Contributor Convenant

## 7.10.0 - 2019-10-08

- [#699](https://github.com/stripe/stripe-node/pull/699) Add request-specific fields from raw error to top level error

## 7.9.1 - 2019-09-17

- [#692](https://github.com/stripe/stripe-node/pull/692) Retry based on `Stripe-Should-Retry` and `Retry-After` headers

## 7.9.0 - 2019-09-09

- [#691](https://github.com/stripe/stripe-node/pull/691) GET and DELETE requests data: body->queryParams
- [#684](https://github.com/stripe/stripe-node/pull/684) Bump eslint-utils from 1.3.1 to 1.4.2

## 7.8.0 - 2019-08-12

- [#678](https://github.com/stripe/stripe-node/pull/678) Add `subscriptionItems.createUsageRecord()` method

## 7.7.0 - 2019-08-09

- [#675](https://github.com/stripe/stripe-node/pull/675) Remove subscription schedule revisions
  - This is technically a breaking change. We've chosen to release it as a minor vesion bump because the associated API is unused.

## 7.6.2 - 2019-08-09

- [#674](https://github.com/stripe/stripe-node/pull/674) Refactor requestDataProcessor for File out into its own file

## 7.6.1 - 2019-08-08

- [#673](https://github.com/stripe/stripe-node/pull/673) Add request start and end time to request and response events

## 7.6.0 - 2019-08-02

- [#661](https://github.com/stripe/stripe-node/pull/661) Refactor errors to ES6 classes.
- [#672](https://github.com/stripe/stripe-node/pull/672) Refinements to error ES6 classes.

## 7.5.5 - 2019-08-02

- [#665](https://github.com/stripe/stripe-node/pull/665) Remove `lodash.isplainobject`.

## 7.5.4 - 2019-08-01

- [#671](https://github.com/stripe/stripe-node/pull/671) Include a prefix in generated idempotency keys and remove uuid dependency.

## 7.5.3 - 2019-07-31

- [#667](https://github.com/stripe/stripe-node/pull/667) Refactor request headers, allowing any header to be overridden.

## 7.5.2 - 2019-07-30

- [#664](https://github.com/stripe/stripe-node/pull/664) Expose and use `once`

## 7.5.1 - 2019-07-30

- [#662](https://github.com/stripe/stripe-node/pull/662) Remove `safe-buffer` dependency
- [#666](https://github.com/stripe/stripe-node/pull/666) Bump lodash from 4.17.11 to 4.17.15
- [#668](https://github.com/stripe/stripe-node/pull/668) Move Balance History to /v1/balance_transactions

## 7.5.0 - 2019-07-24

- [#660](https://github.com/stripe/stripe-node/pull/660) Interpret any string in args as API Key instead of a regex
  - ⚠️ Careful: passing strings which are not API Keys as as the final argument to a request previously would have ignored those strings, and would now result in the request failing with an authentication error.
  - ⚠️ Careful: The private api `utils.isAuthKey` was removed.
- [#658](https://github.com/stripe/stripe-node/pull/658) Update README retry code sample to use two retries
- [#653](https://github.com/stripe/stripe-node/pull/653) Reorder customer methods

## 7.4.0 - 2019-06-27

- [#652](https://github.com/stripe/stripe-node/pull/652) Add support for the `SetupIntent` resource and APIs

## 7.3.0 - 2019-06-24

- [#649](https://github.com/stripe/stripe-node/pull/649) Enable request latency telemetry by default

## 7.2.0 - 2019-06-17

- [#608](https://github.com/stripe/stripe-node/pull/608) Add support for `CustomerBalanceTransaction` resource and APIs

## 7.1.0 - 2019-05-23

- [#632](https://github.com/stripe/stripe-node/pull/632) Add support for `radar.early_fraud_warning` resource

## 7.0.1 - 2019-05-22

- [#631](https://github.com/stripe/stripe-node/pull/631) Make autopagination functions work for `listLineItems` and `listUpcomingLineItems`

## 7.0.0 - 2019-05-14

Major version release. [The migration guide](https://github.com/stripe/stripe-node/wiki/Migration-guide-for-v7) contains a detailed list of backwards-incompatible changes with upgrade instructions.

Pull requests included in this release (cf. [#606](https://github.com/stripe/stripe-node/pull/606)) (⚠️ = breaking changes):

- ⚠️ Drop support for Node 4, 5 and 7 ([#606](https://github.com/stripe/stripe-node/pull/606))
- Prettier formatting ([#604](https://github.com/stripe/stripe-node/pull/604))
- Alphabetize “basic” methods ([#610](https://github.com/stripe/stripe-node/pull/610))
- Use `id` for single positional arguments ([#611](https://github.com/stripe/stripe-node/pull/611))
- Modernize ES5 to ES6 with lebab ([#607](https://github.com/stripe/stripe-node/pull/607))
- ⚠️ Remove deprecated methods ([#613](https://github.com/stripe/stripe-node/pull/613))
- Add VSCode and EditorConfig files ([#620](https://github.com/stripe/stripe-node/pull/620))
- ⚠️ Drop support for Node 9 and bump dependencies to latest versions ([#614](https://github.com/stripe/stripe-node/pull/614))
- Misc. manual formatting ([#623](https://github.com/stripe/stripe-node/pull/623))
- ⚠️ Remove legacy parameter support in `invoices.retrieveUpcoming()` ([#621](https://github.com/stripe/stripe-node/pull/621))
- ⚠️ Remove curried urlData and manually specified urlParams ([#625](https://github.com/stripe/stripe-node/pull/625))
- Extract resources file ([#626](https://github.com/stripe/stripe-node/pull/626))

## 6.36.0 - 2019-05-14

- [#622](https://github.com/stripe/stripe-node/pull/622) Add support for the `Capability` resource and APIs

## 6.35.0 - 2019-05-14

- [#627](https://github.com/stripe/stripe-node/pull/627) Add `listLineItems` and `listUpcomingLineItems` methods to `Invoice`

## 6.34.0 - 2019-05-08

- [#619](https://github.com/stripe/stripe-node/pull/619) Move `generateTestHeaderString` to stripe.webhooks (fixes a bug in 6.33.0)

## 6.33.0 - 2019-05-08 - UNRELEASED

**Important**: This version is non-functional and has been yanked in favor of 6.32.0.

- [#609](https://github.com/stripe/stripe-node/pull/609) Add `generateWebhookHeaderString` to make it easier to mock webhook events

## 6.32.0 - 2019-05-07

- [#612](https://github.com/stripe/stripe-node/pull/612) Add `balanceTransactions` resource

## 6.31.2 - 2019-05-03

- [#602](https://github.com/stripe/stripe-node/pull/602) Handle errors from the oauth/token endpoint

## 6.31.1 - 2019-04-26

- [#600](https://github.com/stripe/stripe-node/pull/600) Fix encoding of nested parameters in multipart requests

## 6.31.0 - 2019-04-24

- [#588](https://github.com/stripe/stripe-node/pull/588) Add support for the `TaxRate` resource and APIs

## 6.30.0 - 2019-04-22

- [#589](https://github.com/stripe/stripe-node/pull/589) Add support for the `TaxId` resource and APIs
- [#593](https://github.com/stripe/stripe-node/pull/593) `retrieveUpcoming` on `Invoice` can now take one hash as parameter instead of requiring a customer id.

## 6.29.0 - 2019-04-18

- [#585](https://github.com/stripe/stripe-node/pull/585) Add support for the `CreditNote` resource and APIs

## 6.28.0 - 2019-03-18

- [#570](https://github.com/stripe/stripe-node/pull/570) Add support for the `PaymentMethod` resource and APIs
- [#578](https://github.com/stripe/stripe-node/pull/578) Add support for retrieving a Checkout `Session`

## 6.27.0 - 2019-03-15

- [#581](https://github.com/stripe/stripe-node/pull/581) Add support for deleting Terminal `Location` and `Reader`

## 6.26.1 - 2019-03-14

- [#580](https://github.com/stripe/stripe-node/pull/580) Fix support for HTTPS proxies

## 6.26.0 - 2019-03-11

- [#574](https://github.com/stripe/stripe-node/pull/574) Encode `Date`s as Unix timestamps

## 6.25.1 - 2019-02-14

- [#565](https://github.com/stripe/stripe-node/pull/565) Always encode arrays as integer-indexed hashes

## 6.25.0 - 2019-02-13

- [#559](https://github.com/stripe/stripe-node/pull/559) Add `stripe.setMaxNetworkRetries(n)` for automatic network retries

## 6.24.0 - 2019-02-12

- [#562](https://github.com/stripe/stripe-node/pull/562) Add support for `SubscriptionSchedule` and `SubscriptionScheduleRevision`

## 6.23.1 - 2019-02-04

- [#560](https://github.com/stripe/stripe-node/pull/560) Enable persistent connections by default

## 6.23.0 - 2019-01-30

- [#557](https://github.com/stripe/stripe-node/pull/557) Add configurable telemetry to gather information on client-side request latency

## 6.22.0 - 2019-01-25

- [#555](https://github.com/stripe/stripe-node/pull/555) Add support for OAuth methods

## 6.21.0 - 2019-01-23

- [#551](https://github.com/stripe/stripe-node/pull/551) Rename `CheckoutSession` to `Session` and move it under the `checkout` namespace. This is a breaking change, but we've reached out to affected merchants and all new merchants would use the new approach.

## 6.20.1 - 2019-01-17

- [#552](https://github.com/stripe/stripe-node/pull/552) Fix `Buffer` deprecation warnings

## 6.20.0 - 2018-12-21

- [#539](https://github.com/stripe/stripe-node/pull/539) Add support for the `CheckoutSession` resource

## 6.19.0 - 2018-12-10

- [#535](https://github.com/stripe/stripe-node/pull/535) Add support for account links

## 6.18.1 - 2018-12-07

- [#534](https://github.com/stripe/stripe-node/pull/534) Fix iterating on `files.list` method

## 6.18.0 - 2018-12-06

- [#530](https://github.com/stripe/stripe-node/pull/530) Export errors on root Stripe object

## 6.17.0 - 2018-11-28

- [#527](https://github.com/stripe/stripe-node/pull/527) Add support for the `Review` APIs

## 6.16.0 - 2018-11-27

- [#515](https://github.com/stripe/stripe-node/pull/515) Add support for `ValueLists` and `ValueListItems` for Radar

## 6.15.2 - 2018-11-26

- [#526](https://github.com/stripe/stripe-node/pull/526) Fixes an accidental mutation of input in rare cases

## 6.15.1 - 2018-11-23

- [#523](https://github.com/stripe/stripe-node/pull/523) Handle `Buffer` instances in `Webhook.constructEvent`

## 6.15.0 - 2018-11-12

- [#474](https://github.com/stripe/stripe-node/pull/474) Add support for `partner_id` in `setAppInfo`

## 6.14.0 - 2018-11-09

- [#509](https://github.com/stripe/stripe-node/pull/509) Add support for new `Invoice` methods

## 6.13.0 - 2018-10-30

- [#507](https://github.com/stripe/stripe-node/pull/507) Add support for persons
- [#510](https://github.com/stripe/stripe-node/pull/510) Add support for webhook endpoints

## 6.12.1 - 2018-09-24

- [#502](https://github.com/stripe/stripe-node/pull/502) Fix test suite

## 6.12.0 - 2018-09-24

- [#498](https://github.com/stripe/stripe-node/pull/498) Add support for Stripe Terminal
- [#500](https://github.com/stripe/stripe-node/pull/500) Rename `FileUploads` to `Files`. For backwards compatibility, `Files` is aliased to `FileUploads`. `FileUploads` is deprecated and will be removed from the next major version.

## 6.11.0 - 2018-09-18

- [#496](https://github.com/stripe/stripe-node/pull/496) Add auto-pagination

## 6.10.0 - 2018-09-05

- [#491](https://github.com/stripe/stripe-node/pull/491) Add support for usage record summaries

## 6.9.0 - 2018-09-05

- [#493](https://github.com/stripe/stripe-node/pull/493) Add support for reporting resources

## 6.8.0 - 2018-08-27

- [#488](https://github.com/stripe/stripe-node/pull/488) Remove support for `BitcoinReceivers` write-actions

## 6.7.0 - 2018-08-03

- [#485](https://github.com/stripe/stripe-node/pull/485) Add support for `cancel` on topups

## 6.6.0 - 2018-08-02

- [#483](https://github.com/stripe/stripe-node/pull/483) Add support for file links

## 6.5.0 - 2018-07-28

- [#482](https://github.com/stripe/stripe-node/pull/482) Add support for Sigma scheduled query runs

## 6.4.0 - 2018-07-26

- [#481](https://github.com/stripe/stripe-node/pull/481) Add support for Stripe Issuing

## 6.3.0 - 2018-07-18

- [#471](https://github.com/stripe/stripe-node/pull/471) Add support for streams in file uploads

## 6.2.1 - 2018-07-03

- [#475](https://github.com/stripe/stripe-node/pull/475) Fixes array encoding of subscription items for the upcoming invoices endpoint.

## 6.2.0 - 2018-06-28

- [#473](https://github.com/stripe/stripe-node/pull/473) Add support for payment intents

## 6.1.1 - 2018-06-07

- [#469](https://github.com/stripe/stripe-node/pull/469) Add `.npmignore` to create a lighter package (minus examples and tests)

## 6.1.0 - 2018-06-01

- [#465](https://github.com/stripe/stripe-node/pull/465) Warn when unknown options are passed to functions

## 6.0.0 - 2018-05-14

- [#453](https://github.com/stripe/stripe-node/pull/453) Re-implement usage record's `create` so that it correctly passes all arguments (this is a very minor breaking change)

## 5.10.0 - 2018-05-14

- [#459](https://github.com/stripe/stripe-node/pull/459) Export error types on `stripe.errors` so that errors can be matched with `instanceof` instead of comparing the strings generated by `type`

## 5.9.0 - 2018-05-09

- [#456](https://github.com/stripe/stripe-node/pull/456) Add support for issuer fraud records

## 5.8.0 - 2018-04-04

- [#444](https://github.com/stripe/stripe-node/pull/444) Introduce flexible billing primitives for subscriptions

## 5.7.0 - 2018-04-02

- [#441](https://github.com/stripe/stripe-node/pull/441) Write directly to a connection that's known to be still open

## 5.6.1 - 2018-03-25

- [#437](https://github.com/stripe/stripe-node/pull/437) Fix error message when passing invalid parameters to some API methods

## 5.6.0 - 2018-03-24

- [#439](https://github.com/stripe/stripe-node/pull/439) Drop Bluebird dependency and use native ES6 promises

## 5.5.0 - 2018-02-21

- [#425](https://github.com/stripe/stripe-node/pull/425) Add support for topups

## 5.4.0 - 2017-12-05

- [#412](https://github.com/stripe/stripe-node/pull/412) Add `StripeIdempotencyError` type for new kind of stripe error

## 5.3.0 - 2017-10-31

- [#405](https://github.com/stripe/stripe-node/pull/405) Support for exchange rates APIs

## 5.2.0 - 2017-10-26

- [#404](https://github.com/stripe/stripe-node/pull/404) Support for listing source transactions

## 5.1.1 - 2017-10-04

- [#394](https://github.com/stripe/stripe-node/pull/394) Fix improper warning for requests that have options but no parameters

## 5.1.0 - 2017-09-25

- Add check for when options are accidentally included in an arguments object
- Use safe-buffer package instead of building our own code
- Remove dependency on object-assign package
- Bump required versions of bluebird and qs

## 5.0.0 - 2017-09-12

- Drop support for Node 0.x (minimum required version is now >= 4)

## 4.25.0 - 2017-09-05

- Switch to Bearer token authentication on API requests

## 4.24.1 - 2017-08-25

- Specify UTF-8 encoding when verifying HMAC-SHA256 payloads

## 4.24.0 - 2017-08-10

- Support informational events with `Stripe.on` (see README for details)

## 4.23.2 - 2017-08-03

- Handle `Buffer.from` incompatibility for Node versions prior to 4.5.x

## 4.23.1 - 2017-06-24

- Properly encode subscription items when retrieving upcoming invoice

## 4.23.0 - 2017-06-20

- Add support for ephemeral keys

## 4.22.1 - 2017-06-20

- Fix usage of hasOwnProperty in utils

## 4.22.0 - 2017-05-25

- Make response headers accessible on error objects

## 4.21.0 - 2017-05-25

- Add support for account login links

## 4.20.0 - 2017-05-24

- Add `stripe.setAppInfo` for plugin authors to register app information

## 4.19.1 - 2017-05-18

- Tweak class initialization for compatibility with divergent JS engines

## 4.19.0 - 2017-05-11

- Support for checking webhook signatures

## 4.18.0 - 2017-04-12

- Reject ID parameters that don't look like strings

## 4.17.1 - 2017-04-05

- Fix paths in error messages on bad arguments

## 4.17.0 - 2017-03-31

- Add support for payouts

## 4.16.1 - 2017-03-30

- Fix bad reference to `requestId` when initializing errors

## 4.16.0 - 2017-03-22

- Make `requestId` available on resource `lastResponse` objects

## 4.15.1 - 2017-03-08

- Update required version of "qs" dependency to 6.0.4+

## 4.15.0 - 2017-01-18

- Add support for updating sources

## 4.14.0 - 2016-12-01

- Add support for verifying sources

## 4.13.0 - 2016-11-21

- Add retrieve method for 3-D Secure resources

## 4.12.0 - 2016-10-18

- Support for 403 status codes (permission denied)

## 4.11.0 - 2016-09-16

- Add support for Apple Pay domains

## 4.10.0 - 2016-08-29

- Refactor deprecated uses of Bluebird's `Promise.defer`

## 4.9.1 - 2016-08-22

- URI-encode unames for Stripe user agents so we don't fail on special characters

## 4.9.0 - 2016-07-19

- Add `Source` model for generic payment sources support (experimental)

## 4.8.0 - 2016-07-14

- Add `ThreeDSecure` model for 3-D secure payments

## 4.7.0 - 2016-05-25

- Add support for returning Relay orders

## 4.6.0 - 2016-05-04

- Add `update`, `create`, `retrieve`, `list` and `del` methods to `stripe.subscriptions`

## 4.5.0 - 2016-03-15

- Add `reject` on `Account` to support the new API feature

## 4.4.0 - 2016-02-08

- Add `CountrySpec` model for looking up country payment information

## 4.3.0 - 2016-01-26

- Add support for deleting Relay SKUs and products

## 4.2.0 - 2016-01-13

- Add `lastResponse` property on `StripeResource` objects
- Return usage errors of `stripeMethod` through callback instead of raising
- Use latest year for expiry years in tests to avoid new year problems

## 4.1.0 - 2015-12-02

- Add a verification routine for external accounts

## 4.0.0 - 2015-09-17

- Remove ability for API keys to be passed as 1st param to acct.retrieve
- Rename StripeInvalidRequest to StripeInvalidRequestError

## 3.9.0 - 2015-09-14

- Add Relay resources: Products, SKUs, and Orders

## 3.8.0 - 2015-09-11

- Added rate limiting responses

## 3.7.1 - 2015-08-17

- Added refund object with listing, retrieval, updating, and creation.

## 3.7.0 - 2015-08-03

- Added managed account deletion
- Added dispute listing and retrieval

## 3.6.0 - 2015-07-07

- Added request IDs to all Stripe errors

## 3.5.2 - 2015-06-30

- [BUGFIX] Fixed issue with uploading binary files (Gabriel Chagas Marques)

## 3.5.1 - 2015-06-30

- [BUGFIX] Fixed issue with passing arrays of objects

## 3.5.0 - 2015-06-11

- Added support for optional parameters when retrieving an upcoming invoice
  (Matthew Arkin)

## 3.4.0 - 2015-06-10

- Added support for bank accounts and debit cards in managed accounts

## 3.3.4 - 2015-04-02

- Remove SSL revocation tests and check

## 3.3.3 - 2015-03-31

- [BUGFIX] Fix support for both stripe.account and stripe.accounts

## 3.3.2 - 2015-02-24

- Support transfer reversals.

## 3.3.1 - 2015-02-21

- [BUGFIX] Fix passing in only a callback to the Account resource. (Matthew Arkin)

## 3.3.0 - 2015-02-19

- Support BitcoinReceiver update & delete actions
- Add methods for manipulating customer sources as per 2015-02-18 API version
- The Account resource will now take an account ID. However, legacy use of the resource (without an account ID) will still work.

## 3.2.0 - 2015-02-05

- [BUGFIX] Fix incorrect failing tests for headers support
- Update all dependencies (remove mocha-as-promised)
- Switch to bluebird for promises

## 3.1.0 - 2015-01-21

- Support making bitcoin charges through BitcoinReceiver source object

## 3.0.3 - 2014-12-23

- Adding file uploads as a resource.

## 3.0.2 - 2014-11-26

- [BUGFIX] Fix issue where multiple expand params were not getting passed through (#130)

## 3.0.1 - 2014-11-26

- (Version skipped due to npm mishap)

## 3.0.0 - 2014-11-18

- [BUGFIX] Fix `stringifyRequestData` to deal with nested objs correctly
- Bump MAJOR as we're no longer supporting Node 0.8

## 2.9.0 - 2014-11-12

- Allow setting of HTTP agent (proxy) (issue #124)
- Add stack traces to all Stripe Errors

## 2.8.0 - 2014-07-26

- Make application fee refunds a list instead of array

## 2.7.4 - 2014-07-17

- [BUGFIX] Fix lack of subscription param in `invoices#retrieveUpcoming` method
- Add support for an `optional!` annotation on `urlParams`

## 2.7.3 - 2014-06-17

- Add metadata to disputes and refunds

## 2.6.3 - 2014-05-21

- Support cards for recipients.

## 2.5.3 - 2014-05-16

- Allow the `update` method on coupons for metadata changes

## 2.5.2 - 2014-04-28

- [BUGFIX] Fix when.js version string in package.json to support older npm versions

## 2.5.1 - 2014-04-25

- [BUGFIX] Fix revoked-ssl check
- Upgrade when.js to 3.1.0

## 2.5.0 - 2014-04-09

- Ensure we prevent requests using revoked SSL certs

## 2.4.5 - 2014-04-08

- Add better checks for incorrect arguments (throw exceptions accordingly).
- Validate the Connect Auth key, if passed

## 2.4.4 - 2014-03-27

- [BUGFIX] Fix URL encoding issue (not encoding interpolated URL params, see issue #93)

## 2.4.3 - 2014-03-27

- Add more debug information to the case of a failed `JSON.parse()`

## 2.4.2 - 2014-02-20

- Add binding for `transfers/{tr_id}/transactions` endpoint

## 2.4.1 - 2014-02-07

- Ensure raw error object is accessible on the generated StripeError

## 2.4.0 - 2014-01-29

- Support multiple subscriptions per customer

## 2.3.4 - 2014-01-11

- [BUGFIX] Fix #76, pass latest as version to api & fix constructor arg signature

## 2.3.3 - 2014-01-10

- Document cancelSubscription method params and add specs for `at_period_end`

## 2.3.2 - 2013-12-02

- Add application fees API

## 2.2.2 - 2013-11-20

- [BUGFIX] Fix incorrect deleteDiscount method & related spec(s)

### 2.2.1

- [BUGFIX] Fix user-agent header issue (see issue #75)

## 2.2.0 - 2013-11-09

- Add support for setTimeout
- Add specs for invoice-item listing/querying via timestamp

## 2.1.0 - 2013-11-07

- Support single key/value setting on setMetadata method
- [BUGFIX] Fix Windows url-path issue
- Add missing stripe.charges.update method
- Support setting auth_token per request (useful in Connect)
- Remove global 'resources' variable

## 2.0.0 - 2013-10-18

- API overhaul and refactor, including addition of promises.
- Release of version 2.0.0

## 1.3.0 - 2013-01-30

- Requests return Javascript Errors (Guillaume Flandre)

## 1.2.0 - 2012-08-03

- Added events API (Jonathan Hollinger)
- Added plans update API (Pavan Kumar Sunkara)
- Various test fixes, node 0.8.x tweaks (Jan Lehnardt)

## 1.1.0 - 2012-02-01

- Add Coupons API (Ryan)
- Pass a more robust error object to the callback (Ryan)
- Fix duplicate callbacks from some functions when called incorrectly (bug #24, reported by Kishore Nallan)

## 1.0.0 - 2011-12-06

- Add APIs and tests for Plans and "Invoice Items"
  (both changes by Ryan Ettipio)

## 0.0.5 - 2011-11-26

- Add Subscription API (John Ku, #3)
- Add Invoices API (Chris Winn, #6)
- [BUGFIX] Fix a bug where callback could be called twice, if the callback() threw an error itself (Peteris Krumins)
- [BUGFIX] Fix bug in tokens.retrieve API (Xavi)
- Change documentation links (Stripe changed their URL structure)
- Make tests pass again (error in callback is null instead of 0 if all is well)
- Amount in stripe.charges.refund is optional (Branko Vukelic)
- Various documentation fixes (Xavi)
- Only require node 0.4.0

## 0.0.3 - 2011-10-05

- Add Charges API (issue #1, brackishlake)
- Add customers.list API

## 0.0.2 - 2011-09-28

- Initial release with customers and tokens APIs
