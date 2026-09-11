---
title: API Updates
pr_link: https://github.com/stripe/stripe-node/pull/1381
is_stripe_api_change: true
released_in_version: 8.212.0
---

* Add support for PayNow and US Bank Accounts Debits payments
    * **Charge** ([API ref](https://stripe.com/docs/api/charges/object#charge_object-payment_method_details))
        * Add support for `paynow` and `us_bank_account` on `Charge.payment_method_details`
    * **Customer** ([API ref](https://stripe.com/docs/api/payment_methods/customer_list#list_customer_payment_methods-type))
        * Add support for new values `paynow` and `us_bank_account` on enum `CustomerListPaymentMethodsParams.type`
    * **Payment Intent** ([API ref](https://stripe.com/docs/api/payment_intents/object#payment_intent_object-payment_method_options))
        * Add support for `paynow` and `us_bank_account` on `payment_method_options` on `PaymentIntent`, `PaymentIntentCreateParams`, `PaymentIntentUpdateParams`, and `PaymentIntentConfirmParams`
        * Add support for `paynow` and `us_bank_account` on `payment_method_data` on `PaymentIntentCreateParams`, `PaymentIntentUpdateParams`, and `PaymentIntentConfirmParams`
        * Add support for `paynow_display_qr_code` on `PaymentIntent.next_action`
        * Add support for new values `paynow` and `us_bank_account` on enums `payment_method_data.type` on `PaymentIntentCreateParams`, and `PaymentIntentUpdateParams`, and `PaymentIntentConfirmParams`
    * **Setup Intent** ([API ref](https://stripe.com/docs/api/setup_intents/object#setup_intent_object-payment_method_options))
        * Add support for `us_bank_account` on `payment_method_options` on `SetupIntent`, `SetupIntentCreateParams`, `SetupIntentUpdateParams`, and `SetupIntentConfirmParams`
    * **Setup Attempt** ([API ref](https://stripe.com/docs/api/setup_attempts/object#setup_attempt_object-payment_method_details))
        * Add support for `us_bank_account` on `SetupAttempt.payment_method_details`
    * **Payment Method** ([API ref](https://stripe.com/docs/api/payment_methods/object#payment_method_object-paynow))
        * Add support for `paynow` and `us_bank_account` on `PaymentMethod` and `PaymentMethodCreateParams`
        * Add support for `us_bank_account` on `PaymentMethodUpdateParams`
        * Add support for new values `paynow` and `us_bank_account` on enums `PaymentMethod.type`, `PaymentMethodCreateParams.type`. and `PaymentMethodListParams.type`
    * **Checkout Session** ([API ref](https://stripe.com/docs/api/checkout/sessions/create#create_checkout_session-payment_method_types))
        * Add support for `us_bank_account` on `payment_method_options` on `Checkout.Session` and `Checkout.SessionCreateParams`
        * Add support for new values `paynow` and `us_bank_account` on enum `Checkout.SessionCreateParams.payment_method_types[]`
    * **Invoice** ([API ref](https://stripe.com/docs/api/invoices/object#invoice_object-payment_settings-payment_method_types))
        * Add support for `us_bank_account` on `payment_settings.payment_method_options` on `Invoice`, `InvoiceCreateParams`, and `InvoiceUpdateParams`
        * Add support for new values `paynow` and `us_bank_account` on enums `payment_settings.payment_method_types[]` on `Invoice`, `InvoiceCreateParams`, and `InvoiceUpdateParams`
    * **Subscription** ([API ref](https://stripe.com/docs/api/subscriptions/object#subscription_object-payment_settings-payment_method_types))
        * Add support for `us_bank_account` on `Subscription.payment_settings.payment_method_options`, `SubscriptionCreateParams.payment_settings.payment_method_options`, and `SubscriptionUpdateParams.payment_settings.payment_method_options`
        * Add support for new values `paynow` and `us_bank_account` on enums `payment_settings.payment_method_types[]` on `Subscription`, `SubscriptionCreateParams`, and `SubscriptionUpdateParams`
    * **Account capabilities** ([API ref](https://stripe.com/docs/api/accounts/object#account_object-capabilities))
        * Add support for `paynow_payments` on `capabilities` on `Account`, `AccountCreateParams`, and `AccountUpdateParams`
* Add support for `failure_balance_transaction` on `Charge`
* Add support for `capture_method` on `afterpay_clearpay`, `card`, and `klarna` on `payment_method_options` on
`PaymentIntent`, `PaymentIntentCreateParams`, `PaymentIntentUpdateParams`, and `PaymentIntentConfirmParams` ([API ref](https://stripe.com/docs/api/payment_intents/object#payment_intent_object-payment_method_options-afterpay_clearpay-capture_method))
* Add additional support for verify microdeposits on Payment Intent and Setup Intent ([API ref](https://stripe.com/docs/api/payment_intents/verify_microdeposits))
    * Add support for `microdeposit_type` on `next_action.verify_with_microdeposits` on `PaymentIntent` and `SetupIntent`
    * Add support for `descriptor_code` on `PaymentIntentVerifyMicrodepositsParams` and `SetupIntentVerifyMicrodepositsParams`
* Add support for `test_clock` on `SubscriptionListParams` ([API ref](https://stripe.com/docs/api/subscriptions/list#list_subscriptions-test_clock))
