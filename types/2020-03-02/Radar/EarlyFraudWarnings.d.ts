declare module 'stripe' {
  namespace Stripe {
    namespace Radar {
      /**
       * The EarlyFraudWarning object.
       */
      interface EarlyFraudWarning {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'radar.early_fraud_warning';

        /**
         * An EFW is actionable if it has not received a dispute and has not been fully refunded. You may wish to proactively refund a charge that receives an EFW, in order to avoid receiving a dispute later.
         */
        actionable: boolean;

        /**
         * ID of the charge this early fraud warning is for, optionally expanded.
         */
        charge: string | Stripe.Charge;

        /**
         * Time at which the object was created. Measured in seconds since the Unix epoch.
         */
        created: number;

        /**
         * The type of fraud labelled by the issuer. One of `card_never_received`, `fraudulent_card_application`, `made_with_counterfeit_card`, `made_with_lost_card`, `made_with_stolen_card`, `misc`, `unauthorized_use_of_card`.
         */
        fraud_type: string;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;
      }

      interface EarlyFraudWarningRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface EarlyFraudWarningListParams extends PaginationParams {
        /**
         * Only return early fraud warnings for the charge specified by this charge ID.
         */
        charge?: string;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      class EarlyFraudWarningsResource {
        /**
         * Retrieves the details of an early fraud warning that has previously been created.
         *
         * Please refer to the [early fraud warning](https://stripe.com/docs/api#early_fraud_warning_object) object reference for more details.
         */
        retrieve(
          id: string,
          params?: EarlyFraudWarningRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Radar.EarlyFraudWarning>;
        retrieve(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Radar.EarlyFraudWarning>;

        /**
         * Returns a list of early fraud warnings.
         */
        list(
          params?: EarlyFraudWarningListParams,
          options?: RequestOptions
        ): ApiListPromise<Stripe.Radar.EarlyFraudWarning>;
        list(
          options?: RequestOptions
        ): ApiListPromise<Stripe.Radar.EarlyFraudWarning>;
      }
    }
  }
}
