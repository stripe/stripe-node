// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * The Source object.
     */
    interface Source {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'source';

      ach_credit_transfer?: Source.AchCreditTransfer;

      ach_debit?: Source.AchDebit;

      acss_debit?: Source.AcssDebit;

      alipay?: Source.Alipay;

      /**
       * A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a zero-decimal currency) representing the total amount associated with the source. This is the amount for which the source will be chargeable once ready. Required for `single_use` sources.
       */
      amount: number | null;

      au_becs_debit?: Source.AuBecsDebit;

      bancontact?: Source.Bancontact;

      card?: Source.Card;

      card_present?: Source.CardPresent;

      /**
       * The client secret of the source. Used for client-side retrieval using a publishable key.
       */
      client_secret: string;

      code_verification?: Source.CodeVerification;

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * Three-letter [ISO code for the currency](https://stripe.com/docs/currencies) associated with the source. This is the currency for which the source will be chargeable once ready. Required for `single_use` sources.
       */
      currency: string | null;

      /**
       * The ID of the customer to which this source is attached. This will not be present when the source has not been attached to a customer.
       */
      customer?: string;

      eps?: Source.Eps;

      /**
       * The authentication `flow` of the source. `flow` is one of `redirect`, `receiver`, `code_verification`, `none`.
       */
      flow: string;

      giropay?: Source.Giropay;

      ideal?: Source.Ideal;

      klarna?: Source.Klarna;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata: Stripe.Metadata | null;

      multibanco?: Source.Multibanco;

      /**
       * Information about the owner of the payment instrument that may be used or required by particular source types.
       */
      owner: Source.Owner | null;

      p24?: Source.P24;

      receiver?: Source.Receiver;

      redirect?: Source.Redirect;

      sepa_credit_transfer?: Source.SepaCreditTransfer;

      sepa_debit?: Source.SepaDebit;

      sofort?: Source.Sofort;

      source_order?: Source.SourceOrder;

      /**
       * Extra information about a source. This will appear on your customer's statement every time you charge the source.
       */
      statement_descriptor: string | null;

      /**
       * The status of the source, one of `canceled`, `chargeable`, `consumed`, `failed`, or `pending`. Only `chargeable` sources can be used to create a charge.
       */
      status: string;

      three_d_secure?: Source.ThreeDSecure;

      /**
       * The `type` of the source. The `type` is a payment method, one of `ach_credit_transfer`, `ach_debit`, `alipay`, `bancontact`, `card`, `card_present`, `eps`, `giropay`, `ideal`, `multibanco`, `klarna`, `p24`, `sepa_debit`, `sofort`, `three_d_secure`, or `wechat`. An additional hash is included on the source with a name matching this value. It contains additional information specific to the [payment method](https://stripe.com/docs/sources) used.
       */
      type: Source.Type;

      /**
       * Either `reusable` or `single_use`. Whether this source should be reusable or not. Some source types may or may not be reusable by construction, while others may leave the option at creation. If an incompatible value is passed, an error will be returned.
       */
      usage: string | null;

      wechat?: Source.Wechat;
    }

    namespace Source {
      interface AchCreditTransfer {
        account_number?: string | null;

        bank_name?: string | null;

        fingerprint?: string | null;

        refund_account_holder_name?: string | null;

        refund_account_holder_type?: string | null;

        refund_routing_number?: string | null;

        routing_number?: string | null;

        swift_code?: string | null;
      }

      interface AchDebit {
        bank_name?: string | null;

        country?: string | null;

        fingerprint?: string | null;

        last4?: string | null;

        routing_number?: string | null;

        type?: string | null;
      }

      interface AcssDebit {
        bank_address_city?: string | null;

        bank_address_line_1?: string | null;

        bank_address_line_2?: string | null;

        bank_address_postal_code?: string | null;

        bank_name?: string | null;

        category?: string | null;

        country?: string | null;

        fingerprint?: string | null;

        last4?: string | null;

        routing_number?: string | null;
      }

      interface Alipay {
        data_string?: string | null;

        native_url?: string | null;

        statement_descriptor?: string | null;
      }

      interface AuBecsDebit {
        bsb_number?: string | null;

        fingerprint?: string | null;

        last4?: string | null;
      }

      interface Bancontact {
        bank_code?: string | null;

        bank_name?: string | null;

        bic?: string | null;

        iban_last4?: string | null;

        preferred_language?: string | null;

        statement_descriptor?: string | null;
      }

      interface Card {
        address_line1_check?: string | null;

        address_zip_check?: string | null;

        brand?: string | null;

        country?: string | null;

        cvc_check?: string | null;

        description?: string;

        dynamic_last4?: string | null;

        exp_month?: number | null;

        exp_year?: number | null;

        fingerprint?: string;

        funding?: string | null;

        iin?: string;

        issuer?: string;

        last4?: string | null;

        name?: string | null;

        three_d_secure?: string;

        tokenization_method?: string | null;
      }

      interface CardPresent {
        application_cryptogram?: string;

        application_preferred_name?: string;

        authorization_code?: string | null;

        authorization_response_code?: string;

        brand?: string | null;

        country?: string | null;

        cvm_type?: string;

        data_type?: string | null;

        dedicated_file_name?: string;

        description?: string;

        emv_auth_data?: string;

        evidence_customer_signature?: string | null;

        evidence_transaction_certificate?: string | null;

        exp_month?: number | null;

        exp_year?: number | null;

        fingerprint?: string;

        funding?: string | null;

        iin?: string;

        issuer?: string;

        last4?: string | null;

        pos_device_id?: string | null;

        pos_entry_mode?: string;

        read_method?: string | null;

        reader?: string | null;

        terminal_verification_results?: string;

        transaction_status_information?: string;
      }

      interface CodeVerification {
        /**
         * The number of attempts remaining to authenticate the source object with a verification code.
         */
        attempts_remaining: number;

        /**
         * The status of the code verification, either `pending` (awaiting verification, `attempts_remaining` should be greater than 0), `succeeded` (successful verification) or `failed` (failed verification, cannot be verified anymore as `attempts_remaining` should be 0).
         */
        status: string;
      }

      interface Eps {
        reference?: string | null;

        statement_descriptor?: string | null;
      }

      interface Giropay {
        bank_code?: string | null;

        bank_name?: string | null;

        bic?: string | null;

        statement_descriptor?: string | null;
      }

      interface Ideal {
        bank?: string | null;

        bic?: string | null;

        iban_last4?: string | null;

        statement_descriptor?: string | null;
      }

      interface Klarna {
        background_image_url?: string;

        client_token?: string | null;

        first_name?: string;

        last_name?: string;

        locale?: string;

        logo_url?: string;

        page_title?: string;

        pay_later_asset_urls_descriptive?: string;

        pay_later_asset_urls_standard?: string;

        pay_later_name?: string;

        pay_later_redirect_url?: string;

        pay_now_asset_urls_descriptive?: string;

        pay_now_asset_urls_standard?: string;

        pay_now_name?: string;

        pay_now_redirect_url?: string;

        pay_over_time_asset_urls_descriptive?: string;

        pay_over_time_asset_urls_standard?: string;

        pay_over_time_name?: string;

        pay_over_time_redirect_url?: string;

        payment_method_categories?: string;

        purchase_country?: string;

        purchase_type?: string;

        redirect_url?: string;

        shipping_delay?: number;

        shipping_first_name?: string;

        shipping_last_name?: string;
      }

      interface Multibanco {
        entity?: string | null;

        reference?: string | null;

        refund_account_holder_address_city?: string | null;

        refund_account_holder_address_country?: string | null;

        refund_account_holder_address_line1?: string | null;

        refund_account_holder_address_line2?: string | null;

        refund_account_holder_address_postal_code?: string | null;

        refund_account_holder_address_state?: string | null;

        refund_account_holder_name?: string | null;

        refund_iban?: string | null;
      }

      interface Owner {
        /**
         * Owner's address.
         */
        address: Stripe.Address | null;

        /**
         * Owner's email address.
         */
        email: string | null;

        /**
         * Owner's full name.
         */
        name: string | null;

        /**
         * Owner's phone number (including extension).
         */
        phone: string | null;

        /**
         * Verified owner's address. Verified values are verified or provided by the payment method directly (and if supported) at the time of authorization or settlement. They cannot be set or mutated.
         */
        verified_address: Stripe.Address | null;

        /**
         * Verified owner's email address. Verified values are verified or provided by the payment method directly (and if supported) at the time of authorization or settlement. They cannot be set or mutated.
         */
        verified_email: string | null;

        /**
         * Verified owner's full name. Verified values are verified or provided by the payment method directly (and if supported) at the time of authorization or settlement. They cannot be set or mutated.
         */
        verified_name: string | null;

        /**
         * Verified owner's phone number (including extension). Verified values are verified or provided by the payment method directly (and if supported) at the time of authorization or settlement. They cannot be set or mutated.
         */
        verified_phone: string | null;
      }

      interface P24 {
        reference?: string | null;
      }

      interface Receiver {
        /**
         * The address of the receiver source. This is the value that should be communicated to the customer to send their funds to.
         */
        address: string | null;

        /**
         * The total amount that was moved to your balance. This is almost always equal to the amount charged. In rare cases when customers deposit excess funds and we are unable to refund those, those funds get moved to your balance and show up in amount_charged as well. The amount charged is expressed in the source's currency.
         */
        amount_charged: number;

        /**
         * The total amount received by the receiver source. `amount_received = amount_returned + amount_charged` should be true for consumed sources unless customers deposit excess funds. The amount received is expressed in the source's currency.
         */
        amount_received: number;

        /**
         * The total amount that was returned to the customer. The amount returned is expressed in the source's currency.
         */
        amount_returned: number;

        /**
         * Type of refund attribute method, one of `email`, `manual`, or `none`.
         */
        refund_attributes_method: string;

        /**
         * Type of refund attribute status, one of `missing`, `requested`, or `available`.
         */
        refund_attributes_status: string;
      }

      interface Redirect {
        /**
         * The failure reason for the redirect, either `user_abort` (the customer aborted or dropped out of the redirect flow), `declined` (the authentication failed or the transaction was declined), or `processing_error` (the redirect failed due to a technical error). Present only if the redirect status is `failed`.
         */
        failure_reason: string | null;

        /**
         * The URL you provide to redirect the customer to after they authenticated their payment.
         */
        return_url: string;

        /**
         * The status of the redirect, either `pending` (ready to be used by your customer to authenticate the transaction), `succeeded` (succesful authentication, cannot be reused) or `not_required` (redirect should not be used) or `failed` (failed authentication, cannot be reused).
         */
        status: string;

        /**
         * The URL provided to you to redirect a customer to as part of a `redirect` authentication flow.
         */
        url: string;
      }

      interface SepaCreditTransfer {
        bank_name?: string | null;

        bic?: string | null;

        iban?: string | null;

        refund_account_holder_address_city?: string | null;

        refund_account_holder_address_country?: string | null;

        refund_account_holder_address_line1?: string | null;

        refund_account_holder_address_line2?: string | null;

        refund_account_holder_address_postal_code?: string | null;

        refund_account_holder_address_state?: string | null;

        refund_account_holder_name?: string | null;

        refund_iban?: string | null;
      }

      interface SepaDebit {
        bank_code?: string | null;

        branch_code?: string | null;

        country?: string | null;

        fingerprint?: string | null;

        last4?: string | null;

        mandate_reference?: string | null;

        mandate_url?: string | null;
      }

      interface Sofort {
        bank_code?: string | null;

        bank_name?: string | null;

        bic?: string | null;

        country?: string | null;

        iban_last4?: string | null;

        preferred_language?: string | null;

        statement_descriptor?: string | null;
      }

      interface SourceOrder {
        /**
         * A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a zero-decimal currency) representing the total amount for the order.
         */
        amount: number;

        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string;

        /**
         * The email address of the customer placing the order.
         */
        email?: string;

        /**
         * List of items constituting the order.
         */
        items: Array<SourceOrder.Item> | null;

        shipping?: SourceOrder.Shipping;
      }

      namespace SourceOrder {
        interface Item {
          /**
           * The amount (price) for this order item.
           */
          amount: number | null;

          /**
           * This currency of this order item. Required when `amount` is present.
           */
          currency: string | null;

          /**
           * Human-readable description for this order item.
           */
          description: string | null;

          /**
           * The ID of the associated object for this line item. Expandable if not null (e.g., expandable to a SKU).
           */
          parent: string | null;

          /**
           * The quantity of this order item. When type is `sku`, this is the number of instances of the SKU to be ordered.
           */
          quantity?: number;

          /**
           * The type of this order item. Must be `sku`, `tax`, or `shipping`.
           */
          type: string | null;
        }

        interface Shipping {
          address?: Stripe.Address;

          /**
           * The delivery service that shipped a physical product, such as Fedex, UPS, USPS, etc.
           */
          carrier?: string | null;

          /**
           * Recipient name.
           */
          name?: string | null;

          /**
           * Recipient phone (including extension).
           */
          phone?: string | null;

          /**
           * The tracking number for a physical product, obtained from the delivery service. If multiple tracking numbers were generated for this purchase, please separate them with commas.
           */
          tracking_number?: string | null;
        }
      }

      interface ThreeDSecure {
        address_line1_check?: string | null;

        address_zip_check?: string | null;

        authenticated?: boolean | null;

        brand?: string | null;

        card?: string | null;

        country?: string | null;

        customer?: string | null;

        cvc_check?: string | null;

        description?: string;

        dynamic_last4?: string | null;

        exp_month?: number | null;

        exp_year?: number | null;

        fingerprint?: string;

        funding?: string | null;

        iin?: string;

        issuer?: string;

        last4?: string | null;

        name?: string | null;

        three_d_secure?: string;

        tokenization_method?: string | null;
      }

      type Type =
        | 'ach_credit_transfer'
        | 'ach_debit'
        | 'acss_debit'
        | 'alipay'
        | 'au_becs_debit'
        | 'bancontact'
        | 'card'
        | 'card_present'
        | 'eps'
        | 'giropay'
        | 'ideal'
        | 'klarna'
        | 'multibanco'
        | 'p24'
        | 'sepa_credit_transfer'
        | 'sepa_debit'
        | 'sofort'
        | 'three_d_secure'
        | 'wechat';

      interface Wechat {
        prepay_id?: string;

        qr_code_url?: string | null;

        statement_descriptor?: string;
      }
    }

    interface SourceCreateParams {
      /**
       * Amount associated with the source. This is the amount for which the source will be chargeable once ready. Required for `single_use` sources. Not supported for `receiver` type sources, where charge amount may not be specified until funds land.
       */
      amount?: number;

      /**
       * Three-letter [ISO code for the currency](https://stripe.com/docs/currencies) associated with the source. This is the currency for which the source will be chargeable once ready.
       */
      currency?: string;

      /**
       * The `Customer` to whom the original source is attached to. Must be set when the original source is not a `Source` (e.g., `Card`).
       */
      customer?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * The authentication `flow` of the source to create. `flow` is one of `redirect`, `receiver`, `code_verification`, `none`. It is generally inferred unless a type supports multiple flows.
       */
      flow?: SourceCreateParams.Flow;

      /**
       * Information about a mandate possibility attached to a source object (generally for bank debits) as well as its acceptance status.
       */
      mandate?: SourceCreateParams.Mandate;

      metadata?: Stripe.MetadataParam;

      /**
       * The source to share.
       */
      original_source?: string;

      /**
       * Information about the owner of the payment instrument that may be used or required by particular source types.
       */
      owner?: SourceCreateParams.Owner;

      /**
       * Optional parameters for the receiver flow. Can be set only if the source is a receiver (`flow` is `receiver`).
       */
      receiver?: SourceCreateParams.Receiver;

      /**
       * Parameters required for the redirect flow. Required if the source is authenticated by a redirect (`flow` is `redirect`).
       */
      redirect?: SourceCreateParams.Redirect;

      /**
       * Information about the items and shipping associated with the source. Required for transactional credit (for example Klarna) sources before you can charge it.
       */
      source_order?: SourceCreateParams.SourceOrder;

      /**
       * An arbitrary string to be displayed on your customer's statement. As an example, if your website is `RunClub` and the item you're charging for is a race ticket, you may want to specify a `statement_descriptor` of `RunClub 5K race ticket.` While many payment types will display this information, some may not display it at all.
       */
      statement_descriptor?: string;

      /**
       * An optional token used to create the source. When passed, token properties will override source parameters.
       */
      token?: string;

      /**
       * The `type` of the source to create. Required unless `customer` and `original_source` are specified (see the [Cloning card Sources](https://stripe.com/docs/sources/connect#cloning-card-sources) guide)
       */
      type?: string;

      usage?: SourceCreateParams.Usage;
    }

    namespace SourceCreateParams {
      type Flow = 'code_verification' | 'none' | 'receiver' | 'redirect';

      interface Mandate {
        /**
         * The parameters required to notify Stripe of a mandate acceptance or refusal by the customer.
         */
        acceptance?: Mandate.Acceptance;

        /**
         * The amount specified by the mandate. (Leave null for a mandate covering all amounts)
         */
        amount?: Stripe.Emptyable<number>;

        /**
         * The currency specified by the mandate. (Must match `currency` of the source)
         */
        currency?: string;

        /**
         * The interval of debits permitted by the mandate. Either `one_time` (just permitting a single debit), `scheduled` (with debits on an agreed schedule or for clearly-defined events), or `variable`(for debits with any frequency)
         */
        interval?: Mandate.Interval;

        /**
         * The method Stripe should use to notify the customer of upcoming debit instructions and/or mandate confirmation as required by the underlying debit network. Either `email` (an email is sent directly to the customer), `manual` (a `source.mandate_notification` event is sent to your webhooks endpoint and you should handle the notification) or `none` (the underlying debit network does not require any notification).
         */
        notification_method?: Mandate.NotificationMethod;
      }

      namespace Mandate {
        interface Acceptance {
          /**
           * The Unix timestamp (in seconds) when the mandate was accepted or refused by the customer.
           */
          date?: number;

          /**
           * The IP address from which the mandate was accepted or refused by the customer.
           */
          ip?: string;

          /**
           * The parameters required to store a mandate accepted offline. Should only be set if `mandate[type]` is `offline`
           */
          offline?: Acceptance.Offline;

          /**
           * The parameters required to store a mandate accepted online. Should only be set if `mandate[type]` is `online`
           */
          online?: Acceptance.Online;

          /**
           * The status of the mandate acceptance. Either `accepted` (the mandate was accepted) or `refused` (the mandate was refused).
           */
          status: Acceptance.Status;

          /**
           * The type of acceptance information included with the mandate. Either `online` or `offline`
           */
          type?: Acceptance.Type;

          /**
           * The user agent of the browser from which the mandate was accepted or refused by the customer.
           */
          user_agent?: string;
        }

        namespace Acceptance {
          interface Offline {
            /**
             * An email to contact you with if a copy of the mandate is requested, required if `type` is `offline`.
             */
            contact_email: string;
          }

          interface Online {
            /**
             * The Unix timestamp (in seconds) when the mandate was accepted or refused by the customer.
             */
            date?: number;

            /**
             * The IP address from which the mandate was accepted or refused by the customer.
             */
            ip?: string;

            /**
             * The user agent of the browser from which the mandate was accepted or refused by the customer.
             */
            user_agent?: string;
          }

          type Status = 'accepted' | 'pending' | 'refused' | 'revoked';

          type Type = 'offline' | 'online';
        }

        type Interval = 'one_time' | 'scheduled' | 'variable';

        type NotificationMethod =
          | 'deprecated_none'
          | 'email'
          | 'manual'
          | 'none'
          | 'stripe_email';
      }

      interface Owner {
        /**
         * Owner's address.
         */
        address?: Owner.Address;

        /**
         * Owner's email address.
         */
        email?: string;

        /**
         * Owner's full name.
         */
        name?: string;

        /**
         * Owner's phone number.
         */
        phone?: string;
      }

      namespace Owner {
        interface Address extends Omit<Stripe.AddressParam, 'line1'> {
          line1?: string;
        }
      }

      interface Receiver {
        /**
         * The method Stripe should use to request information needed to process a refund or mispayment. Either `email` (an email is sent directly to the customer) or `manual` (a `source.refund_attributes_required` event is sent to your webhooks endpoint). Refer to each payment method's documentation to learn which refund attributes may be required.
         */
        refund_attributes_method?: Receiver.RefundAttributesMethod;
      }

      namespace Receiver {
        type RefundAttributesMethod = 'email' | 'manual' | 'none';
      }

      interface Redirect {
        /**
         * The URL you provide to redirect the customer back to you after they authenticated their payment. It can use your application URI scheme in the context of a mobile application.
         */
        return_url: string;
      }

      interface SourceOrder {
        /**
         * List of items constituting the order.
         */
        items?: Array<SourceOrder.Item>;

        /**
         * Shipping address for the order. Required if any of the SKUs are for products that have `shippable` set to true.
         */
        shipping?: SourceOrder.Shipping;
      }

      namespace SourceOrder {
        interface Item {
          amount?: number;

          currency?: string;

          description?: string;

          /**
           * The ID of the SKU being ordered.
           */
          parent?: string;

          /**
           * The quantity of this order item. When type is `sku`, this is the number of instances of the SKU to be ordered.
           */
          quantity?: number;

          type?: Item.Type;
        }

        namespace Item {
          type Type = 'discount' | 'shipping' | 'sku' | 'tax';
        }

        interface Shipping {
          /**
           * Shipping address.
           */
          address: Stripe.AddressParam;

          /**
           * The delivery service that shipped a physical product, such as Fedex, UPS, USPS, etc.
           */
          carrier?: string;

          /**
           * Recipient name.
           */
          name?: string;

          /**
           * Recipient phone (including extension).
           */
          phone?: string;

          /**
           * The tracking number for a physical product, obtained from the delivery service. If multiple tracking numbers were generated for this purchase, please separate them with commas.
           */
          tracking_number?: string;
        }
      }

      type Usage = 'reusable' | 'single_use';
    }

    interface SourceRetrieveParams {
      /**
       * The client secret of the source. Required if a publishable key is used to retrieve the source.
       */
      client_secret?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface SourceUpdateParams {
      /**
       * Amount associated with the source.
       */
      amount?: number;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Information about a mandate possibility attached to a source object (generally for bank debits) as well as its acceptance status.
       */
      mandate?: SourceUpdateParams.Mandate;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.Emptyable<Stripe.MetadataParam>;

      /**
       * Information about the owner of the payment instrument that may be used or required by particular source types.
       */
      owner?: SourceUpdateParams.Owner;

      /**
       * Information about the items and shipping associated with the source. Required for transactional credit (for example Klarna) sources before you can charge it.
       */
      source_order?: SourceUpdateParams.SourceOrder;
    }

    namespace SourceUpdateParams {
      interface Mandate {
        /**
         * The parameters required to notify Stripe of a mandate acceptance or refusal by the customer.
         */
        acceptance?: Mandate.Acceptance;

        /**
         * The amount specified by the mandate. (Leave null for a mandate covering all amounts)
         */
        amount?: Stripe.Emptyable<number>;

        /**
         * The currency specified by the mandate. (Must match `currency` of the source)
         */
        currency?: string;

        /**
         * The interval of debits permitted by the mandate. Either `one_time` (just permitting a single debit), `scheduled` (with debits on an agreed schedule or for clearly-defined events), or `variable`(for debits with any frequency)
         */
        interval?: Mandate.Interval;

        /**
         * The method Stripe should use to notify the customer of upcoming debit instructions and/or mandate confirmation as required by the underlying debit network. Either `email` (an email is sent directly to the customer), `manual` (a `source.mandate_notification` event is sent to your webhooks endpoint and you should handle the notification) or `none` (the underlying debit network does not require any notification).
         */
        notification_method?: Mandate.NotificationMethod;
      }

      namespace Mandate {
        interface Acceptance {
          /**
           * The Unix timestamp (in seconds) when the mandate was accepted or refused by the customer.
           */
          date?: number;

          /**
           * The IP address from which the mandate was accepted or refused by the customer.
           */
          ip?: string;

          /**
           * The parameters required to store a mandate accepted offline. Should only be set if `mandate[type]` is `offline`
           */
          offline?: Acceptance.Offline;

          /**
           * The parameters required to store a mandate accepted online. Should only be set if `mandate[type]` is `online`
           */
          online?: Acceptance.Online;

          /**
           * The status of the mandate acceptance. Either `accepted` (the mandate was accepted) or `refused` (the mandate was refused).
           */
          status: Acceptance.Status;

          /**
           * The type of acceptance information included with the mandate. Either `online` or `offline`
           */
          type?: Acceptance.Type;

          /**
           * The user agent of the browser from which the mandate was accepted or refused by the customer.
           */
          user_agent?: string;
        }

        namespace Acceptance {
          interface Offline {
            /**
             * An email to contact you with if a copy of the mandate is requested, required if `type` is `offline`.
             */
            contact_email: string;
          }

          interface Online {
            /**
             * The Unix timestamp (in seconds) when the mandate was accepted or refused by the customer.
             */
            date?: number;

            /**
             * The IP address from which the mandate was accepted or refused by the customer.
             */
            ip?: string;

            /**
             * The user agent of the browser from which the mandate was accepted or refused by the customer.
             */
            user_agent?: string;
          }

          type Status = 'accepted' | 'pending' | 'refused' | 'revoked';

          type Type = 'offline' | 'online';
        }

        type Interval = 'one_time' | 'scheduled' | 'variable';

        type NotificationMethod =
          | 'deprecated_none'
          | 'email'
          | 'manual'
          | 'none'
          | 'stripe_email';
      }

      interface Owner {
        /**
         * Owner's address.
         */
        address?: Owner.Address;

        /**
         * Owner's email address.
         */
        email?: string;

        /**
         * Owner's full name.
         */
        name?: string;

        /**
         * Owner's phone number.
         */
        phone?: string;
      }

      namespace Owner {
        interface Address extends Omit<Stripe.AddressParam, 'line1'> {
          line1?: string;
        }
      }

      interface SourceOrder {
        /**
         * List of items constituting the order.
         */
        items?: Array<SourceOrder.Item>;

        /**
         * Shipping address for the order. Required if any of the SKUs are for products that have `shippable` set to true.
         */
        shipping?: SourceOrder.Shipping;
      }

      namespace SourceOrder {
        interface Item {
          amount?: number;

          currency?: string;

          description?: string;

          /**
           * The ID of the SKU being ordered.
           */
          parent?: string;

          /**
           * The quantity of this order item. When type is `sku`, this is the number of instances of the SKU to be ordered.
           */
          quantity?: number;

          type?: Item.Type;
        }

        namespace Item {
          type Type = 'discount' | 'shipping' | 'sku' | 'tax';
        }

        interface Shipping {
          /**
           * Shipping address.
           */
          address: Stripe.AddressParam;

          /**
           * The delivery service that shipped a physical product, such as Fedex, UPS, USPS, etc.
           */
          carrier?: string;

          /**
           * Recipient name.
           */
          name?: string;

          /**
           * Recipient phone (including extension).
           */
          phone?: string;

          /**
           * The tracking number for a physical product, obtained from the delivery service. If multiple tracking numbers were generated for this purchase, please separate them with commas.
           */
          tracking_number?: string;
        }
      }
    }

    interface SourceListSourceTransactionsParams extends PaginationParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface SourceVerifyParams {
      /**
       * The values needed to verify the source.
       */
      values: Array<string>;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    class SourcesResource {
      /**
       * Creates a new source object.
       */
      create(
        params?: SourceCreateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Source>>;
      create(options?: RequestOptions): Promise<Stripe.Response<Stripe.Source>>;

      /**
       * Retrieves an existing source object. Supply the unique source ID from a source creation request and Stripe will return the corresponding up-to-date source object information.
       */
      retrieve(
        id: string,
        params?: SourceRetrieveParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Source>>;
      retrieve(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Source>>;

      /**
       * Updates the specified source by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
       *
       * This request accepts the metadata and owner as arguments. It is also possible to update type specific information for selected payment methods. Please refer to our [payment method guides](https://stripe.com/docs/sources) for more detail.
       */
      update(
        id: string,
        params?: SourceUpdateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Source>>;

      /**
       * List source transactions for a given source.
       */
      listSourceTransactions(
        id: string,
        params?: SourceListSourceTransactionsParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.SourceTransaction>;
      listSourceTransactions(
        id: string,
        options?: RequestOptions
      ): ApiListPromise<Stripe.SourceTransaction>;

      /**
       * Verify a given source.
       */
      verify(
        id: string,
        params: SourceVerifyParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Source>>;
    }
  }
}
