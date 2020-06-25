# CHANGELOG

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
