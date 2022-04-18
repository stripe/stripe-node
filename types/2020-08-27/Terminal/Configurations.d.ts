// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Terminal {
      /**
       * The Configuration object.
       */
      interface Configuration {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'terminal.configuration';

        bbpos_wisepos_e?: Configuration.BbposWiseposE;

        deleted?: void;

        /**
         * Whether this Configuration is the default for your account
         */
        is_account_default: boolean | null;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        tipping?: Configuration.Tipping;

        verifone_p400?: Configuration.VerifoneP400;
      }

      namespace Configuration {
        interface BbposWiseposE {
          /**
           * A File ID representing an image you would like displayed on the reader.
           */
          splashscreen?: string | Stripe.File;
        }

        interface Tipping {
          aud?: Tipping.Aud;

          cad?: Tipping.Cad;

          chf?: Tipping.Chf;

          dkk?: Tipping.Dkk;

          eur?: Tipping.Eur;

          gbp?: Tipping.Gbp;

          hkd?: Tipping.Hkd;

          myr?: Tipping.Myr;

          nok?: Tipping.Nok;

          nzd?: Tipping.Nzd;

          sek?: Tipping.Sek;

          sgd?: Tipping.Sgd;

          usd?: Tipping.Usd;
        }

        namespace Tipping {
          interface Aud {
            /**
             * Fixed amounts displayed when collecting a tip
             */
            fixed_amounts: Array<number> | null;

            /**
             * Percentages displayed when collecting a tip
             */
            percentages: Array<number> | null;

            /**
             * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
             */
            smart_tip_threshold?: number;
          }

          interface Cad {
            /**
             * Fixed amounts displayed when collecting a tip
             */
            fixed_amounts: Array<number> | null;

            /**
             * Percentages displayed when collecting a tip
             */
            percentages: Array<number> | null;

            /**
             * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
             */
            smart_tip_threshold?: number;
          }

          interface Chf {
            /**
             * Fixed amounts displayed when collecting a tip
             */
            fixed_amounts: Array<number> | null;

            /**
             * Percentages displayed when collecting a tip
             */
            percentages: Array<number> | null;

            /**
             * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
             */
            smart_tip_threshold?: number;
          }

          interface Dkk {
            /**
             * Fixed amounts displayed when collecting a tip
             */
            fixed_amounts: Array<number> | null;

            /**
             * Percentages displayed when collecting a tip
             */
            percentages: Array<number> | null;

            /**
             * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
             */
            smart_tip_threshold?: number;
          }

          interface Eur {
            /**
             * Fixed amounts displayed when collecting a tip
             */
            fixed_amounts: Array<number> | null;

            /**
             * Percentages displayed when collecting a tip
             */
            percentages: Array<number> | null;

            /**
             * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
             */
            smart_tip_threshold?: number;
          }

          interface Gbp {
            /**
             * Fixed amounts displayed when collecting a tip
             */
            fixed_amounts: Array<number> | null;

            /**
             * Percentages displayed when collecting a tip
             */
            percentages: Array<number> | null;

            /**
             * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
             */
            smart_tip_threshold?: number;
          }

          interface Hkd {
            /**
             * Fixed amounts displayed when collecting a tip
             */
            fixed_amounts: Array<number> | null;

            /**
             * Percentages displayed when collecting a tip
             */
            percentages: Array<number> | null;

            /**
             * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
             */
            smart_tip_threshold?: number;
          }

          interface Myr {
            /**
             * Fixed amounts displayed when collecting a tip
             */
            fixed_amounts: Array<number> | null;

            /**
             * Percentages displayed when collecting a tip
             */
            percentages: Array<number> | null;

            /**
             * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
             */
            smart_tip_threshold?: number;
          }

          interface Nok {
            /**
             * Fixed amounts displayed when collecting a tip
             */
            fixed_amounts: Array<number> | null;

            /**
             * Percentages displayed when collecting a tip
             */
            percentages: Array<number> | null;

            /**
             * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
             */
            smart_tip_threshold?: number;
          }

          interface Nzd {
            /**
             * Fixed amounts displayed when collecting a tip
             */
            fixed_amounts: Array<number> | null;

            /**
             * Percentages displayed when collecting a tip
             */
            percentages: Array<number> | null;

            /**
             * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
             */
            smart_tip_threshold?: number;
          }

          interface Sek {
            /**
             * Fixed amounts displayed when collecting a tip
             */
            fixed_amounts: Array<number> | null;

            /**
             * Percentages displayed when collecting a tip
             */
            percentages: Array<number> | null;

            /**
             * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
             */
            smart_tip_threshold?: number;
          }

          interface Sgd {
            /**
             * Fixed amounts displayed when collecting a tip
             */
            fixed_amounts: Array<number> | null;

            /**
             * Percentages displayed when collecting a tip
             */
            percentages: Array<number> | null;

            /**
             * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
             */
            smart_tip_threshold?: number;
          }

          interface Usd {
            /**
             * Fixed amounts displayed when collecting a tip
             */
            fixed_amounts: Array<number> | null;

            /**
             * Percentages displayed when collecting a tip
             */
            percentages: Array<number> | null;

            /**
             * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
             */
            smart_tip_threshold?: number;
          }
        }

        interface VerifoneP400 {
          /**
           * A File ID representing an image you would like displayed on the reader.
           */
          splashscreen?: string | Stripe.File;
        }
      }

      /**
       * The DeletedConfiguration object.
       */
      interface DeletedConfiguration {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'terminal.configuration';

        /**
         * Always true for a deleted object
         */
        deleted: true;
      }

      interface ConfigurationCreateParams {
        /**
         * An object containing device type specific settings for BBPOS WisePOS E readers
         */
        bbpos_wisepos_e?: ConfigurationCreateParams.BbposWiseposE;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Tipping configurations for readers supporting on-reader tips
         */
        tipping?: Stripe.Emptyable<ConfigurationCreateParams.Tipping>;

        /**
         * An object containing device type specific settings for Verifone P400 readers
         */
        verifone_p400?: ConfigurationCreateParams.VerifoneP400;
      }

      namespace ConfigurationCreateParams {
        interface BbposWiseposE {
          /**
           * A File ID representing an image you would like displayed on the reader.
           */
          splashscreen?: Stripe.Emptyable<string>;
        }

        interface Tipping {
          /**
           * Tipping configuration for AUD
           */
          aud?: Tipping.Aud;

          /**
           * Tipping configuration for CAD
           */
          cad?: Tipping.Cad;

          /**
           * Tipping configuration for CHF
           */
          chf?: Tipping.Chf;

          /**
           * Tipping configuration for DKK
           */
          dkk?: Tipping.Dkk;

          /**
           * Tipping configuration for EUR
           */
          eur?: Tipping.Eur;

          /**
           * Tipping configuration for GBP
           */
          gbp?: Tipping.Gbp;

          /**
           * Tipping configuration for HKD
           */
          hkd?: Tipping.Hkd;

          /**
           * Tipping configuration for MYR
           */
          myr?: Tipping.Myr;

          /**
           * Tipping configuration for NOK
           */
          nok?: Tipping.Nok;

          /**
           * Tipping configuration for NZD
           */
          nzd?: Tipping.Nzd;

          /**
           * Tipping configuration for SEK
           */
          sek?: Tipping.Sek;

          /**
           * Tipping configuration for SGD
           */
          sgd?: Tipping.Sgd;

          /**
           * Tipping configuration for USD
           */
          usd?: Tipping.Usd;
        }

        namespace Tipping {
          interface Aud {
            /**
             * Fixed amounts displayed when collecting a tip
             */
            fixed_amounts?: Array<number>;

            /**
             * Percentages displayed when collecting a tip
             */
            percentages?: Array<number>;

            /**
             * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
             */
            smart_tip_threshold?: number;
          }

          interface Cad {
            /**
             * Fixed amounts displayed when collecting a tip
             */
            fixed_amounts?: Array<number>;

            /**
             * Percentages displayed when collecting a tip
             */
            percentages?: Array<number>;

            /**
             * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
             */
            smart_tip_threshold?: number;
          }

          interface Chf {
            /**
             * Fixed amounts displayed when collecting a tip
             */
            fixed_amounts?: Array<number>;

            /**
             * Percentages displayed when collecting a tip
             */
            percentages?: Array<number>;

            /**
             * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
             */
            smart_tip_threshold?: number;
          }

          interface Dkk {
            /**
             * Fixed amounts displayed when collecting a tip
             */
            fixed_amounts?: Array<number>;

            /**
             * Percentages displayed when collecting a tip
             */
            percentages?: Array<number>;

            /**
             * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
             */
            smart_tip_threshold?: number;
          }

          interface Eur {
            /**
             * Fixed amounts displayed when collecting a tip
             */
            fixed_amounts?: Array<number>;

            /**
             * Percentages displayed when collecting a tip
             */
            percentages?: Array<number>;

            /**
             * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
             */
            smart_tip_threshold?: number;
          }

          interface Gbp {
            /**
             * Fixed amounts displayed when collecting a tip
             */
            fixed_amounts?: Array<number>;

            /**
             * Percentages displayed when collecting a tip
             */
            percentages?: Array<number>;

            /**
             * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
             */
            smart_tip_threshold?: number;
          }

          interface Hkd {
            /**
             * Fixed amounts displayed when collecting a tip
             */
            fixed_amounts?: Array<number>;

            /**
             * Percentages displayed when collecting a tip
             */
            percentages?: Array<number>;

            /**
             * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
             */
            smart_tip_threshold?: number;
          }

          interface Myr {
            /**
             * Fixed amounts displayed when collecting a tip
             */
            fixed_amounts?: Array<number>;

            /**
             * Percentages displayed when collecting a tip
             */
            percentages?: Array<number>;

            /**
             * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
             */
            smart_tip_threshold?: number;
          }

          interface Nok {
            /**
             * Fixed amounts displayed when collecting a tip
             */
            fixed_amounts?: Array<number>;

            /**
             * Percentages displayed when collecting a tip
             */
            percentages?: Array<number>;

            /**
             * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
             */
            smart_tip_threshold?: number;
          }

          interface Nzd {
            /**
             * Fixed amounts displayed when collecting a tip
             */
            fixed_amounts?: Array<number>;

            /**
             * Percentages displayed when collecting a tip
             */
            percentages?: Array<number>;

            /**
             * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
             */
            smart_tip_threshold?: number;
          }

          interface Sek {
            /**
             * Fixed amounts displayed when collecting a tip
             */
            fixed_amounts?: Array<number>;

            /**
             * Percentages displayed when collecting a tip
             */
            percentages?: Array<number>;

            /**
             * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
             */
            smart_tip_threshold?: number;
          }

          interface Sgd {
            /**
             * Fixed amounts displayed when collecting a tip
             */
            fixed_amounts?: Array<number>;

            /**
             * Percentages displayed when collecting a tip
             */
            percentages?: Array<number>;

            /**
             * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
             */
            smart_tip_threshold?: number;
          }

          interface Usd {
            /**
             * Fixed amounts displayed when collecting a tip
             */
            fixed_amounts?: Array<number>;

            /**
             * Percentages displayed when collecting a tip
             */
            percentages?: Array<number>;

            /**
             * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
             */
            smart_tip_threshold?: number;
          }
        }

        interface VerifoneP400 {
          /**
           * A File ID representing an image you would like displayed on the reader.
           */
          splashscreen?: Stripe.Emptyable<string>;
        }
      }

      interface ConfigurationRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface ConfigurationUpdateParams {
        /**
         * An object containing device type specific settings for BBPOS WisePOS E readers
         */
        bbpos_wisepos_e?: Stripe.Emptyable<
          ConfigurationUpdateParams.BbposWiseposE
        >;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Tipping configurations for readers supporting on-reader tips
         */
        tipping?: Stripe.Emptyable<ConfigurationUpdateParams.Tipping>;

        /**
         * An object containing device type specific settings for Verifone P400 readers
         */
        verifone_p400?: Stripe.Emptyable<
          ConfigurationUpdateParams.VerifoneP400
        >;
      }

      namespace ConfigurationUpdateParams {
        interface BbposWiseposE {
          /**
           * A File ID representing an image you would like displayed on the reader.
           */
          splashscreen?: Stripe.Emptyable<string>;
        }

        interface Tipping {
          /**
           * Tipping configuration for AUD
           */
          aud?: Tipping.Aud;

          /**
           * Tipping configuration for CAD
           */
          cad?: Tipping.Cad;

          /**
           * Tipping configuration for CHF
           */
          chf?: Tipping.Chf;

          /**
           * Tipping configuration for DKK
           */
          dkk?: Tipping.Dkk;

          /**
           * Tipping configuration for EUR
           */
          eur?: Tipping.Eur;

          /**
           * Tipping configuration for GBP
           */
          gbp?: Tipping.Gbp;

          /**
           * Tipping configuration for HKD
           */
          hkd?: Tipping.Hkd;

          /**
           * Tipping configuration for MYR
           */
          myr?: Tipping.Myr;

          /**
           * Tipping configuration for NOK
           */
          nok?: Tipping.Nok;

          /**
           * Tipping configuration for NZD
           */
          nzd?: Tipping.Nzd;

          /**
           * Tipping configuration for SEK
           */
          sek?: Tipping.Sek;

          /**
           * Tipping configuration for SGD
           */
          sgd?: Tipping.Sgd;

          /**
           * Tipping configuration for USD
           */
          usd?: Tipping.Usd;
        }

        namespace Tipping {
          interface Aud {
            /**
             * Fixed amounts displayed when collecting a tip
             */
            fixed_amounts?: Array<number>;

            /**
             * Percentages displayed when collecting a tip
             */
            percentages?: Array<number>;

            /**
             * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
             */
            smart_tip_threshold?: number;
          }

          interface Cad {
            /**
             * Fixed amounts displayed when collecting a tip
             */
            fixed_amounts?: Array<number>;

            /**
             * Percentages displayed when collecting a tip
             */
            percentages?: Array<number>;

            /**
             * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
             */
            smart_tip_threshold?: number;
          }

          interface Chf {
            /**
             * Fixed amounts displayed when collecting a tip
             */
            fixed_amounts?: Array<number>;

            /**
             * Percentages displayed when collecting a tip
             */
            percentages?: Array<number>;

            /**
             * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
             */
            smart_tip_threshold?: number;
          }

          interface Dkk {
            /**
             * Fixed amounts displayed when collecting a tip
             */
            fixed_amounts?: Array<number>;

            /**
             * Percentages displayed when collecting a tip
             */
            percentages?: Array<number>;

            /**
             * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
             */
            smart_tip_threshold?: number;
          }

          interface Eur {
            /**
             * Fixed amounts displayed when collecting a tip
             */
            fixed_amounts?: Array<number>;

            /**
             * Percentages displayed when collecting a tip
             */
            percentages?: Array<number>;

            /**
             * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
             */
            smart_tip_threshold?: number;
          }

          interface Gbp {
            /**
             * Fixed amounts displayed when collecting a tip
             */
            fixed_amounts?: Array<number>;

            /**
             * Percentages displayed when collecting a tip
             */
            percentages?: Array<number>;

            /**
             * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
             */
            smart_tip_threshold?: number;
          }

          interface Hkd {
            /**
             * Fixed amounts displayed when collecting a tip
             */
            fixed_amounts?: Array<number>;

            /**
             * Percentages displayed when collecting a tip
             */
            percentages?: Array<number>;

            /**
             * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
             */
            smart_tip_threshold?: number;
          }

          interface Myr {
            /**
             * Fixed amounts displayed when collecting a tip
             */
            fixed_amounts?: Array<number>;

            /**
             * Percentages displayed when collecting a tip
             */
            percentages?: Array<number>;

            /**
             * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
             */
            smart_tip_threshold?: number;
          }

          interface Nok {
            /**
             * Fixed amounts displayed when collecting a tip
             */
            fixed_amounts?: Array<number>;

            /**
             * Percentages displayed when collecting a tip
             */
            percentages?: Array<number>;

            /**
             * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
             */
            smart_tip_threshold?: number;
          }

          interface Nzd {
            /**
             * Fixed amounts displayed when collecting a tip
             */
            fixed_amounts?: Array<number>;

            /**
             * Percentages displayed when collecting a tip
             */
            percentages?: Array<number>;

            /**
             * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
             */
            smart_tip_threshold?: number;
          }

          interface Sek {
            /**
             * Fixed amounts displayed when collecting a tip
             */
            fixed_amounts?: Array<number>;

            /**
             * Percentages displayed when collecting a tip
             */
            percentages?: Array<number>;

            /**
             * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
             */
            smart_tip_threshold?: number;
          }

          interface Sgd {
            /**
             * Fixed amounts displayed when collecting a tip
             */
            fixed_amounts?: Array<number>;

            /**
             * Percentages displayed when collecting a tip
             */
            percentages?: Array<number>;

            /**
             * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
             */
            smart_tip_threshold?: number;
          }

          interface Usd {
            /**
             * Fixed amounts displayed when collecting a tip
             */
            fixed_amounts?: Array<number>;

            /**
             * Percentages displayed when collecting a tip
             */
            percentages?: Array<number>;

            /**
             * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
             */
            smart_tip_threshold?: number;
          }
        }

        interface VerifoneP400 {
          /**
           * A File ID representing an image you would like displayed on the reader.
           */
          splashscreen?: Stripe.Emptyable<string>;
        }
      }

      interface ConfigurationListParams extends PaginationParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * if present, only return the account default or non-default configurations.
         */
        is_account_default?: boolean;
      }

      interface ConfigurationDeleteParams {}

      class ConfigurationsResource {
        /**
         * Creates a new Configuration object.
         */
        create(
          params?: ConfigurationCreateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Terminal.Configuration>>;
        create(
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Terminal.Configuration>>;

        /**
         * Retrieves a Configuration object.
         */
        retrieve(
          id: string,
          params?: ConfigurationRetrieveParams,
          options?: RequestOptions
        ): Promise<
          Stripe.Response<
            Stripe.Terminal.Configuration | Stripe.Terminal.DeletedConfiguration
          >
        >;
        retrieve(
          id: string,
          options?: RequestOptions
        ): Promise<
          Stripe.Response<
            Stripe.Terminal.Configuration | Stripe.Terminal.DeletedConfiguration
          >
        >;

        /**
         * Updates a new Configuration object.
         */
        update(
          id: string,
          params?: ConfigurationUpdateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Terminal.Configuration>>;

        /**
         * Returns a list of Configuration objects.
         */
        list(
          params?: ConfigurationListParams,
          options?: RequestOptions
        ): ApiListPromise<Stripe.Terminal.Configuration>;
        list(
          options?: RequestOptions
        ): ApiListPromise<Stripe.Terminal.Configuration>;

        /**
         * Deletes a Configuration object.
         */
        del(
          id: string,
          params?: ConfigurationDeleteParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Terminal.DeletedConfiguration>>;
        del(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Terminal.DeletedConfiguration>>;
      }
    }
  }
}
