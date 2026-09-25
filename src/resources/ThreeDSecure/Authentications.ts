// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {PaymentMethod} from './../PaymentMethods.js';
import {
  Emptyable,
  MetadataParam,
  AddressParam,
  OtherString,
  PaginationParams,
  RangeQueryParam,
  Metadata,
} from '../../shared.js';
import {RequestOptions, ApiListPromise, Response} from '../../lib.js';

export class AuthenticationResource extends StripeResource {
  /**
   * Returns a list of 3D Secure Authentications.
   */
  list(
    params?: ThreeDSecure.AuthenticationListParams,
    options?: RequestOptions
  ): ApiListPromise<Authentication> {
    return this._makeRequest(
      'GET',
      '/v1/three_d_secure/authentications',
      params,
      options,
      {
        methodType: 'list',
      }
    ) as any;
  }
  /**
   * This endpoint creates a 3DS Authentication. Refer to the [Create a 3DS Authentication object section of the Standalone 3DS guide](https://docs.stripe.com/payments/3d-secure/standalone-3d-secure#create-a-3ds-authentication-object) for more information.
   *
   * You can pass the submit parameter to automatically submit the 3DS Authentication object when you create it. Refer to the [Submit at creation section of the Standalone 3DS guide](https://docs.stripe.com/payments/3d-secure/standalone-3d-secure#submit-at-creation) for more information.
   */
  create(
    params: ThreeDSecure.AuthenticationCreateParams,
    options?: RequestOptions
  ): Promise<Response<Authentication>> {
    return this._makeRequest(
      'POST',
      '/v1/three_d_secure/authentications',
      params,
      options
    ) as any;
  }
  /**
   * This endpoint retrieves a 3DS Authentication.
   */
  retrieve(
    id: string,
    params?: ThreeDSecure.AuthenticationRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<Authentication>> {
    return this._makeRequest(
      'GET',
      `/v1/three_d_secure/authentications/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
  /**
   * This endpoint cancels a 3DS Authentication. You can cancel a 3DS Authentication object when it's in a non-final status:
   * requires_submission or requires_challenge.
   */
  cancel(
    id: string,
    params?: ThreeDSecure.AuthenticationCancelParams,
    options?: RequestOptions
  ): Promise<Response<Authentication>> {
    return this._makeRequest(
      'POST',
      `/v1/three_d_secure/authentications/${encodeURIComponent(id)}/cancel`,
      params,
      options
    ) as any;
  }
  /**
   * This endpoint submits a 3DS Authentication. You can submit a 3DS Authentication object when it has status requires_submission. Refer to the [Submit the 3DS Authentication object section of the Standalone 3DS guide](https://docs.stripe.com/payments/3d-secure/standalone-3d-secure#submit-the-3ds-authentication-object) for more information.
   */
  submit(
    id: string,
    params?: ThreeDSecure.AuthenticationSubmitParams,
    options?: RequestOptions
  ): Promise<Response<Authentication>> {
    return this._makeRequest(
      'POST',
      `/v1/three_d_secure/authentications/${encodeURIComponent(id)}/submit`,
      params,
      options
    ) as any;
  }
}
export interface Authentication {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'three_d_secure.authentication';

  /**
   * Contains additional details about the acquirer for a 3DS Authentication.
   */
  acquirer_details?: Authentication.AcquirerDetails;

  /**
   * The amount for this 3DS Authentication.
   */
  amount?: number;

  /**
   * The URL for presenting a challenge to your cardholder, present if status is requires_challenge.
   */
  challenge_url?: string;

  /**
   * Contains details on the channel used (browser, 3RI) for a standalone 3DS Authentication.
   */
  channel: Authentication.Channel;

  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;

  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency?: string;

  /**
   * The 3DS directory server with which this 3DS Authentication was processed.
   */
  directory_server: Authentication.DirectoryServer;

  /**
   * The URL for performing issuer fingerprinting, present if fingerprinting is supported for the given payment method.
   */
  fingerprinting_url?: string;

  /**
   * Contains details of the flow preference used for a standalone 3DS Authentication.
   */
  flow_preference?: Authentication.FlowPreference;

  /**
   * Contains information about the future authorisations related to this authentication
   */
  future_usage?: Authentication.FutureUsage;

  /**
   * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
   */
  livemode: boolean;

  /**
   * Indicates whether this 3DS Authentication is being performed for a payment or non-payment use case.
   */
  message_category: Authentication.MessageCategory;

  /**
   * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: Metadata | null;

  /**
   * The outcome of this 3DS Authentication.
   */
  outcome?: Authentication.Outcome;

  /**
   * Contains details on the result for a standalone 3DS Authentication.
   */
  outcome_details?: Authentication.OutcomeDetails;

  /**
   * ID of the payment method (a PaymentMethod object) to attach to this 3DS Authentication.
   */
  payment_method: string | PaymentMethod;

  /**
   * The reason for invoking this 3DS Authentication.
   */
  reason?: Authentication.Reason;

  /**
   * Contains details about the shipping address for a 3DS Authentication.
   */
  shipping_address?: Authentication.ShippingAddress;

  /**
   * Status of this Authentication.
   */
  status: Authentication.Status;
}
export namespace Authentication {
  export interface AcquirerDetails {
    /**
     * The Acquirer BIN (specific to the directory_server).
     */
    acquirer_bin?: string;

    /**
     * The two-letter country code of the acquirer ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
     */
    acquirer_country?: string;

    /**
     * The Merchant ID (or Card Acceptor ID) that your acquirer assigned you (specific to the directory_server).
     */
    acquirer_merchant_id?: string;

    /**
     * The [merchant category code](https://en.wikipedia.org/wiki/Merchant_category_code) as defined by each payment system or directory server.
     */
    mcc?: string;

    /**
     * The merchant name assigned by the acquirer or payment system. Same name used in the authorization message as defined in [ISO 8583](https://en.wikipedia.org/wiki/ISO_8583).
     */
    merchant_name?: string;

    /**
     * Requestor ID if you're enrolled in the card network's 3DS program. Otherwise, you can omit this field because Stripe assigns a Requestor ID with the card networks.
     */
    requestor_id?: string;
  }

  export interface Channel {
    /**
     * Contains details on the browser for a standalone 3DS Authentication.
     */
    browser?: Channel.Browser;

    /**
     * Contains details for a 3RI standalone 3DS Authentication.
     */
    three_r_i?: Channel.ThreeRI;

    /**
     * Type of channel you would prefer to use for this 3DS Authentication. Only browser.
     */
    type: Channel.Type;
  }

  export type DirectoryServer =
    | 'american_express'
    | 'cartes_bancaires'
    | 'discover'
    | 'mastercard'
    | 'visa'
    | OtherString;

  export interface FlowPreference {
    challenge?: FlowPreference.Challenge;

    data_share?: FlowPreference.DataShare;

    frictionless?: FlowPreference.Frictionless;

    /**
     * Type of flow you requested for this 3DS Authentication.
     */
    type: FlowPreference.Type;
  }

  export interface FutureUsage {
    /**
     * Details about installment payments
     */
    installment?: FutureUsage.Installment;

    /**
     * Details about recurring payments
     */
    recurring?: FutureUsage.Recurring;

    /**
     * The type of future usage declared for this 3DS Authentication.
     */
    type: FutureUsage.Type;
  }

  export type MessageCategory =
    | 'non_payment_authentication'
    | 'payment_authentication'
    | OtherString;

  export type Outcome =
    | 'abandoned'
    | 'attempt_acknowledged'
    | 'authenticated'
    | 'canceled'
    | 'denied'
    | 'informational'
    | 'internal_error'
    | 'not_supported'
    | 'not_triggered'
    | 'processing_error'
    | 'rejected'
    | OtherString;

  export interface OutcomeDetails {
    /**
     * Universally unique transaction identifier assigned by the issuer to identify the transaction.
     */
    acs_transaction_id?: string;

    /**
     * The Authentication Response Message (ARes) is the issuer's response to the AReq message.
     */
    ares?: string;

    /**
     * TransStatus field on the ARes
     */
    ares_trans_status?: OutcomeDetails.AresTransStatus;

    /**
     * A 28-character Base64 string proving that 3DS was completed. Store this value securely, and don't reuse it for multiple authorizations.
     */
    cryptogram?: string;

    /**
     * The 3DS2 Directory Server Transaction ID.
     */
    ds_transaction_id?: string;

    /**
     * Electronic Commerce Indicator provided by the issuer to indicate the result of this 3DS Authentication.
     */
    eci?: string;

    /**
     * Contains details specific to the individual network.
     */
    network_details?: OutcomeDetails.NetworkDetails;

    /**
     * The 3DS protocol version used for this 3DS Authentication.
     */
    protocol_version: OutcomeDetails.ProtocolVersion;

    /**
     * The indicator provided to the issuer by Stripe in the AReq that indicates whether a challenge is requested for this Authentication. This indicator should match the flow_preference you specified but may be overridden (for compliance reasons for example).
     */
    requestor_challenge_indicator?: OutcomeDetails.RequestorChallengeIndicator;

    /**
     * The Results Request Message (RReq) communicates the results of the authentication or verification.
     */
    rreq?: string;

    /**
     * TransStatus field on the RReq
     */
    rreq_trans_status?: OutcomeDetails.RreqTransStatus;

    /**
     * Universally unique transaction identifier assigned by Stripe to identify the transaction.
     */
    three_ds_server_transaction_id: string;
  }

  export type Reason =
    | 'cardholder_authentication'
    | 'issuer_requested'
    | 'liability_shift'
    | 'processing_costs'
    | 'regulatory_compliance'
    | OtherString;

  export interface ShippingAddress {
    /**
     * City, district, suburb, town, or village.
     */
    city?: string;

    /**
     * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
     */
    country?: string;

    /**
     * Address line 1, such as the street, PO Box, or company name.
     */
    line1?: string;

    /**
     * Address line 2, such as the apartment, suite, unit, or building.
     */
    line2?: string;

    /**
     * ZIP or postal code.
     */
    postal_code?: string;

    /**
     * State, county, province, or region ([ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2)).
     */
    state?: string;
  }

  export type Status =
    | 'canceled'
    | 'error'
    | 'failed'
    | 'requires_challenge'
    | 'requires_submission'
    | 'succeeded'
    | OtherString;

  export namespace Channel {
    export interface Browser {
      /**
       * The HTTP accept headers from the cardholder's browser.
       */
      accept_header: string;

      /**
       * The color depth of the cardholder's screen.
       */
      color_depth?: number;

      /**
       * The IP address of the browser.
       */
      ip_address: string;

      /**
       * The cardholder browser's ability to execute Java.
       */
      java_enabled?: boolean;

      /**
       * The cardholder browser's ability to execute JavaScript.
       */
      javascript_enabled: boolean;

      /**
       * An IETF BCP 47 language tag representing the browser language.
       */
      language: string;

      /**
       * The total height of the cardholder's screen in pixels.
       */
      screen_height?: number;

      /**
       * The total width of the cardholder's screen in pixels.
       */
      screen_width?: number;

      /**
       * The time difference between UTC time and the local time of the cardholder's browser, in minutes.
       */
      timezone_offset?: number;

      /**
       * The browser user agent.
       */
      user_agent: string;
    }

    export interface ThreeRI {
      /**
       * ID of the previous initial authenticated 3DS Authentication object.
       */
      previous_authentication: string;

      /**
       * Type of the 3RI Authentication.
       */
      type: ThreeRI.Type;
    }

    export type Type = 'browser' | 'three_r_i' | OtherString;

    export namespace ThreeRI {
      export type Type =
        | 'delayed_shipment'
        | 'other_payment'
        | 'recurring'
        | 'split_shipment'
        | OtherString;
    }
  }

  export namespace FlowPreference {
    export interface Challenge {
      /**
       * Type of challenge flow you requested for this 3DS Authentication.
       */
      type: Challenge.Type;
    }

    export interface DataShare {
      /**
       * Type of data share flow you requested for this 3DS Authentication.
       */
      type: DataShare.Type;
    }

    export interface Frictionless {
      /**
       * Type of frictionless flow you requested for this 3DS Authentication.
       */
      type: Frictionless.Type;
    }

    export type Type =
      | 'challenge'
      | 'data_share'
      | 'frictionless'
      | OtherString;

    export namespace Challenge {
      export type Type = 'mandated' | 'preferred' | OtherString;
    }

    export namespace DataShare {
      export type Type = 'ds_specific' | 'emv_standard' | OtherString;
    }

    export namespace Frictionless {
      export type Type = 'low_risk' | 'none' | OtherString;
    }
  }

  export namespace FutureUsage {
    export interface Installment {
      /**
       * A non-negative integer representing the amount in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal).
       */
      amount?: number;

      /**
       * Information about recurring payment expiry
       */
      expiry: Installment.Expiry;

      /**
       * The unit of time for `interval_count`.
       */
      interval: 'day';

      /**
       * The minimum number of time intervals between authorizations.
       */
      interval_count: number;

      /**
       * The maximum number of installments.
       */
      number: number;
    }

    export interface Recurring {
      /**
       * A non-negative integer representing the amount in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal).
       */
      amount?: number;

      /**
       * Information about recurring payment expiry
       */
      expiry: Recurring.Expiry;

      /**
       * The unit of time for `interval_count`.
       */
      interval: 'day';

      /**
       * The minimum number of time intervals between authorizations.
       */
      interval_count: number;
    }

    export type Type =
      | 'card_on_file'
      | 'installment'
      | 'recurring'
      | OtherString;

    export namespace Installment {
      export interface Expiry {
        date?: string;

        type: Expiry.Type;
      }

      export namespace Expiry {
        export type Type = 'date' | 'never' | OtherString;
      }
    }

    export namespace Recurring {
      export interface Expiry {
        date?: string;

        type: Expiry.Type;
      }

      export namespace Expiry {
        export type Type = 'date' | 'never' | OtherString;
      }
    }
  }

  export namespace OutcomeDetails {
    export type AresTransStatus =
      | 'A'
      | 'C'
      | 'D'
      | 'I'
      | 'N'
      | 'R'
      | 'S'
      | 'U'
      | 'Y'
      | OtherString;

    export interface NetworkDetails {
      /**
       * Contains details for Cartes Bancaires specific fields in the authentication outcomes.
       */
      cartes_bancaires?: NetworkDetails.CartesBancaires;
    }

    export type ProtocolVersion = '2.1.0' | '2.2.0' | '2.3.1' | OtherString;

    export type RequestorChallengeIndicator =
      | '01'
      | '02'
      | '03'
      | '04'
      | '05'
      | '06'
      | OtherString;

    export type RreqTransStatus =
      | 'A'
      | 'C'
      | 'D'
      | 'I'
      | 'N'
      | 'R'
      | 'S'
      | 'U'
      | 'Y'
      | OtherString;

    export namespace NetworkDetails {
      export interface CartesBancaires {
        /**
         * The cryptogram calculation algorithm used by the card Issuer's ACS to calculate the Authentication cryptogram. Also known as cavvAlgorithm. ARes/RReq messageExtension: `CB-AVALGO`
         */
        avalgo: string;

        /**
         * The exemption indicator returned from Cartes Bancaires in the ARes. This is a 3 byte bitmap (lowest significant byte first and most significant bit first) that has been Base64 encoded. String (4 characters). ARes message extension: `CB-EXEMPTION`
         */
        cb_exemption: string | null;

        /**
         * The risk score returned from Cartes Bancaires in the ARes. Numeric value 0-99. ARes/RReq message extension: `CB-SCORE`
         */
        cb_score: string | null;
      }
    }
  }
}
export namespace ThreeDSecure {
  export interface AuthenticationCreateParams {
    /**
     * Contains additional details on the channel used for this 3DS Authentication.
     */
    channel: AuthenticationCreateParams.Channel;

    /**
     * Indicates whether this 3DS Authentication is being performed for a payment or non-payment use case.
     */
    message_category: AuthenticationCreateParams.MessageCategory;

    /**
     * Contains additional details about the acquirer for this 3DS Authentication.
     *
     * Refer to the [Pass acquirer details and directory server section of the standalone 3DS guide](https://docs.stripe.com/payments/3d-secure/standalone-3d-secure#pass-acquirer-details-and-directory-server) for more information.
     */
    acquirer_details?: AuthenticationCreateParams.AcquirerDetails;

    /**
     * A non-negative integer representing the amount in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal). You can't include this parameter if `message_category` is `non_payment_authentication`
     */
    amount?: number;

    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency?: string;

    /**
     * The 3DS directory server with which this 3DS Authentication was processed.
     */
    directory_server?: AuthenticationCreateParams.DirectoryServer;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Contains additional details on your flow preference for this 3DS Authentication.
     *
     * Refer to the [Specify a flow preference section of the standalone 3DS guide](https://docs.stripe.com/payments/3d-secure/standalone-3d-secure#specify-a-flow-preference) for more information.
     */
    flow_preference?: AuthenticationCreateParams.FlowPreference;

    /**
     * Contains information about future usage of this 3DS Authentication
     */
    future_usage?: AuthenticationCreateParams.FutureUsage;

    /**
     * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: Emptyable<MetadataParam>;

    /**
     * ID of the payment method (a PaymentMethod object) to attach to this 3DS Authentication.
     */
    payment_method?: string;

    /**
     * Hash used to generate the PaymentMethod to be used for this Authentication. This is mutually exclusive with the `payment_method` parameter.
     */
    payment_method_data?: AuthenticationCreateParams.PaymentMethodData;

    /**
     * The reason for invoking standalone 3DS. This is tailored specifically for cases when you want Stripe to help determine the standalone 3DS flow to fit your use case instead of needing to select a specific 3DS flow.
     *
     * This parameter is exclusive with `flow_preference`. You can either use `reason` for controlling 3DS according to your business requirements, or use `flow_preference` for having fine-grained control over your 3DS flow preference.
     */
    reason?: AuthenticationCreateParams.Reason;

    /**
     * The shipping address requested by the cardholder. You should try to include as complete address information as possible.
     */
    shipping_address?: AddressParam;

    /**
     * Set to `always` to skip the fingerprinting step and submit this Authentication immediately or `if_fingerprinting_not_supported` to submit this Authentication only if fingerprinting is not available. This parameter defaults to `never`.
     *
     * Refer to the [Submit at creation section of the standalone 3DS guide](https://docs.stripe.com/payments/3d-secure/standalone-3d-secure#submit-at-creation) for more information.
     */
    submit?: AuthenticationCreateParams.Submit;
  }

  export namespace AuthenticationCreateParams {
    export interface Channel {
      /**
       * Contains additional details about the browser details you collected.
       */
      browser?: Channel.Browser;

      /**
       * Contains additional details about the 3DS Requestor Initiated (3RI) channel.
       */
      three_r_i?: Channel.ThreeRI;

      /**
       * Type of channel you would prefer to use for this 3DS Authentication.
       */
      type: Channel.Type;
    }

    export type MessageCategory =
      | 'non_payment_authentication'
      | 'payment_authentication'
      | OtherString;

    export interface AcquirerDetails {
      /**
       * The Acquirer BIN (specific to the directory_server).
       */
      acquirer_bin: string;

      /**
       * The two-letter country code of the acquirer ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
       */
      acquirer_country: string;

      /**
       * The Merchant ID (or Card Acceptor ID) that your acquirer assigned you (specific to the directory_server).
       */
      acquirer_merchant_id: string;

      /**
       * The [merchant category code](https://en.wikipedia.org/wiki/Merchant_category_code) as defined by each payment system or directory server.
       */
      mcc?: string;

      /**
       * The merchant name assigned by the acquirer or payment system. Same name used in the authorization message as defined in [ISO 8583](https://en.wikipedia.org/wiki/ISO_8583).
       */
      merchant_name?: string;

      /**
       * Requestor ID if you're enrolled in the card network's 3DS program. Otherwise, you can omit this field because Stripe assigns a Requestor ID with the card networks.
       */
      requestor_id?: string;
    }

    export type DirectoryServer =
      | 'american_express'
      | 'cartes_bancaires'
      | 'discover'
      | 'mastercard'
      | 'visa'
      | OtherString;

    export interface FlowPreference {
      /**
       * Contains additional details about your challenge flow preference for this 3DS Authentication.
       */
      challenge?: FlowPreference.Challenge;

      /**
       * Contains additional details about your data share only flow preference for this 3DS Authentication.
       */
      data_share?: FlowPreference.DataShare;

      /**
       * Contains additional details about your frictionless flow preference for this 3DS Authentication.
       */
      frictionless?: FlowPreference.Frictionless;

      /**
       * Type of flow you requested for this 3DS Authentication.
       */
      type: FlowPreference.Type;
    }

    export interface FutureUsage {
      /**
       * Parameters related to an installment payment.
       */
      installment?: FutureUsage.Installment;

      /**
       * Parameters related to a recurring payment.
       */
      recurring?: FutureUsage.Recurring;

      /**
       * The type of future usage declared for this 3DS Authentication
       */
      type: FutureUsage.Type;
    }

    export interface PaymentMethodData {
      /**
       * Billing information associated with the PaymentMethod that may be used or required by particular types of payment methods.
       */
      billing_details?: PaymentMethodData.BillingDetails;

      card: PaymentMethodData.Card;

      /**
       * The type of the PaymentMethod. An additional hash is included on the PaymentMethod with a name matching this value. It contains additional information specific to the PaymentMethod type.
       */
      type: 'card';
    }

    export type Reason =
      | 'cardholder_authentication'
      | 'issuer_requested'
      | 'liability_shift'
      | 'processing_costs'
      | 'regulatory_compliance'
      | OtherString;

    export type Submit =
      | 'always'
      | 'if_fingerprinting_not_supported'
      | 'never'
      | OtherString;

    export namespace Channel {
      export interface Browser {
        /**
         * The HTTP accept headers from the cardholder's browser. Collected server-side.
         */
        accept_header: string;

        /**
         * The color depth of the cardholder's screen.
         *
         * Returned from the `screen.colorDepth` property.
         */
        color_depth?: number;

        /**
         * Unique and immutable identifier linked to a device that is consistent across 3DS transactions for the specific user device. For example: hardware device ID or a platform-calculated device fingerprint.
         */
        device_id?: string;

        /**
         * The IP address of the browser. Included in the HTTP request to your server before you create the 3DS Authentication.
         *
         * Collected server-side.
         */
        ip_address: string;

        /**
         * The cardholder browser's ability to execute Java. Returned from the navigator.javaEnabled property.
         */
        java_enabled?: boolean;

        /**
         * The cardholder browser's ability to execute JavaScript.
         */
        javascript_enabled: boolean;

        /**
         * An IETF BCP 47 language tag representing the browser language. Typically returned from the `navigator.language` property, but might also be returned from `navigator.languages` or `navigator.browserLanguage`.
         *
         *  In some cases, this value might be an array. To cast it to a string or null value, you can use the `getBrowserLanguage()` [example function](https://docs.stripe.com/payments/3d-secure/standalone-3d-secure#pass-client-side-collected-channel-information).
         */
        language: string;

        /**
         * The total height of the cardholder's screen in pixels.
         *
         * Returned from the `screen.height` property.
         */
        screen_height?: number;

        /**
         * The total width of the cardholder's screen in pixels.
         *
         * Returned from the `screen.width` property.
         */
        screen_width?: number;

        /**
         * The time difference between UTC time and the local time of the cardholder's browser, in minutes.
         *
         * Returned by `new Date().getTimezoneOffset()`
         */
        timezone_offset?: number;

        /**
         * The browser user agent. You can retrieve this value on the client side using the `navigator.userAgent` property, or in the HTTP request to your server before you create the 3DS Authentication.
         */
        user_agent: string;
      }

      export interface ThreeRI {
        /**
         * ID of a prior `Authentication`. For example, the first recurring transaction that was authenticated by the cardholder.
         */
        previous_authentication: string;

        /**
         * It provides additional information to the ACS to determine the best approach for handling a 3RI request.
         */
        type: ThreeRI.Type;
      }

      export type Type = 'browser' | 'three_r_i' | OtherString;

      export namespace ThreeRI {
        export type Type =
          | 'delayed_shipment'
          | 'other_payment'
          | 'recurring'
          | 'split_shipment'
          | OtherString;
      }
    }

    export namespace FlowPreference {
      export interface Challenge {
        /**
         * Type of challenge flow you requested for this 3DS Authentication.
         */
        type: Challenge.Type;
      }

      export interface DataShare {
        /**
         * Type of data share only flow you requested for this 3DS Authentication.
         */
        type: DataShare.Type;
      }

      export interface Frictionless {
        /**
         * Type of frictionless flow you requested for this 3DS Authentication.
         */
        type: Frictionless.Type;
      }

      export type Type =
        | 'challenge'
        | 'data_share'
        | 'frictionless'
        | OtherString;

      export namespace Challenge {
        export type Type = 'mandated' | 'preferred' | OtherString;
      }

      export namespace DataShare {
        export type Type = 'ds_specific' | 'emv_standard' | OtherString;
      }

      export namespace Frictionless {
        export type Type = 'low_risk' | 'none' | OtherString;
      }
    }

    export namespace FutureUsage {
      export interface Installment {
        /**
         * A non-negative integer representing the future authorizations' amount in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal).
         */
        amount: number;

        /**
         * Information about the expiry of the future usage of this authentication.
         */
        expiry: Installment.Expiry;

        /**
         * The unit of time for `interval_count`.
         */
        interval?: 'day';

        /**
         * The minimum number of time intervals between authorizations. Must be greater than 0, and defaults to 1.
         */
        interval_count?: number;

        /**
         * The maximum number of installments. Must be greater than 1.
         */
        number: number;
      }

      export interface Recurring {
        /**
         * A non-negative integer representing the future authorizations' amount in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal).
         */
        amount: number;

        /**
         * Information about the expiry of the future usage of this authentication.
         */
        expiry: Recurring.Expiry;

        /**
         * The unit of time for `interval_count`.
         */
        interval?: 'day';

        /**
         * The minimum number of time intervals between authorizations. Must be greater than 0, and defaults to 1.
         */
        interval_count?: number;
      }

      export type Type =
        | 'card_on_file'
        | 'installment'
        | 'recurring'
        | OtherString;

      export namespace Installment {
        export interface Expiry {
          /**
           * The date before which the last authorization related to this authentication will occur.
           */
          date?: string;

          /**
           * The type of expiry for the future use of this authentication.
           */
          type: Expiry.Type;
        }

        export namespace Expiry {
          export type Type = 'date' | 'never' | OtherString;
        }
      }

      export namespace Recurring {
        export interface Expiry {
          /**
           * The date before which the last authorization related to this authentication will occur.
           */
          date?: string;

          /**
           * The type of expiry for the future use of this authentication.
           */
          type: Expiry.Type;
        }

        export namespace Expiry {
          export type Type = 'date' | 'never' | OtherString;
        }
      }
    }

    export namespace PaymentMethodData {
      export interface BillingDetails {
        /**
         * Billing address.
         */
        address?: AddressParam;

        /**
         * Email address.
         */
        email?: string;

        /**
         * Full name.
         */
        name?: string;

        /**
         * Billing phone number (including extension).
         */
        phone?: string;
      }

      export interface Card {
        cvc?: string;

        exp_month?: number;

        exp_year?: number;

        number?: string;

        token?: string;
      }
    }
  }
}
export namespace ThreeDSecure {
  export interface AuthenticationRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
export namespace ThreeDSecure {
  export interface AuthenticationListParams extends PaginationParams {
    /**
     * A filter on the list, based on the object `created` field. The value can be a string with an integer Unix timestamp or a dictionary with a number of different query options.
     */
    created?: RangeQueryParam | number;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Only return 3D Secure Authentications for specified status.
     */
    status?: AuthenticationListParams.Status;
  }

  export namespace AuthenticationListParams {
    export type Status =
      | 'canceled'
      | 'error'
      | 'failed'
      | 'requires_challenge'
      | 'requires_submission'
      | 'succeeded'
      | OtherString;
  }
}
export namespace ThreeDSecure {
  export interface AuthenticationCancelParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: Emptyable<MetadataParam>;
  }
}
export namespace ThreeDSecure {
  export interface AuthenticationSubmitParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * The fingerprinting result of the issuer fingerprinting step.
     *
     * Refer to the [Issuer fingerprinting section of the Standalone 3DS guide](https://docs.stripe.com/payments/3d-secure/standalone-3d-secure#issuer-fingerprinting) for more information.
     */
    fingerprinting_result?: string;

    /**
     * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: Emptyable<MetadataParam>;
  }
}
