// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Terminal {
      /**
       * A Configurations object represents how features should be configured for terminal readers.
       * For information about how to use it, see the [Terminal configurations documentation](https://docs.stripe.com/terminal/fleet/configurations-overview).
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

        bbpos_wisepad3?: Configuration.BbposWisepad3;

        bbpos_wisepos_e?: Configuration.BbposWiseposE;

        cellular?: Configuration.Cellular;

        /**
         * Always true for a deleted object
         */
        deleted?: void;

        /**
         * Whether this Configuration is the default for your account
         */
        is_account_default: boolean | null;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * String indicating the name of the Configuration object, set by the user
         */
        name: string | null;

        offline?: Configuration.Offline;

        reboot_window?: Configuration.RebootWindow;

        stripe_s700?: Configuration.StripeS700;

        stripe_s710?: Configuration.StripeS710;

        tipping?: Configuration.Tipping;

        verifone_p400?: Configuration.VerifoneP400;

        wifi?: Configuration.Wifi;
      }

      namespace Configuration {
        interface BbposWisepad3 {
          /**
           * A File ID representing an image to display on the reader
           */
          splashscreen?: string | Stripe.File;
        }

        interface BbposWiseposE {
          /**
           * A File ID representing an image to display on the reader
           */
          splashscreen?: string | Stripe.File;
        }

        interface Cellular {
          /**
           * Whether a cellular-capable reader can connect to the internet over cellular.
           */
          enabled: boolean;
        }

        interface Offline {
          /**
           * Determines whether to allow transactions to be collected while reader is offline. Defaults to false.
           */
          enabled: boolean | null;
        }

        interface RebootWindow {
          /**
           * Integer between 0 to 23 that represents the end hour of the reboot time window. The value must be different than the start_hour.
           */
          end_hour: number;

          /**
           * Integer between 0 to 23 that represents the start hour of the reboot time window.
           */
          start_hour: number;
        }

        interface StripeS700 {
          /**
           * A File ID representing an image to display on the reader
           */
          splashscreen?: string | Stripe.File;
        }

        interface StripeS710 {
          /**
           * A File ID representing an image to display on the reader
           */
          splashscreen?: string | Stripe.File;
        }

        interface Tipping {
          aed?: Tipping.Aed;

          aud?: Tipping.Aud;

          cad?: Tipping.Cad;

          chf?: Tipping.Chf;

          czk?: Tipping.Czk;

          dkk?: Tipping.Dkk;

          eur?: Tipping.Eur;

          gbp?: Tipping.Gbp;

          gip?: Tipping.Gip;

          hkd?: Tipping.Hkd;

          huf?: Tipping.Huf;

          jpy?: Tipping.Jpy;

          mxn?: Tipping.Mxn;

          myr?: Tipping.Myr;

          nok?: Tipping.Nok;

          nzd?: Tipping.Nzd;

          pln?: Tipping.Pln;

          ron?: Tipping.Ron;

          sek?: Tipping.Sek;

          sgd?: Tipping.Sgd;

          usd?: Tipping.Usd;
        }

        namespace Tipping {
          interface Aed {
            /**
             * Fixed amounts displayed when collecting a tip
             */
            fixed_amounts?: Array<number> | null;

            /**
             * Percentages displayed when collecting a tip
             */
            percentages?: Array<number> | null;

            /**
             * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
             */
            smart_tip_threshold?: number;
          }

          interface Aud {
            /**
             * Fixed amounts displayed when collecting a tip
             */
            fixed_amounts?: Array<number> | null;

            /**
             * Percentages displayed when collecting a tip
             */
            percentages?: Array<number> | null;

            /**
             * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
             */
            smart_tip_threshold?: number;
          }

          interface Cad {
            /**
             * Fixed amounts displayed when collecting a tip
             */
            fixed_amounts?: Array<number> | null;

            /**
             * Percentages displayed when collecting a tip
             */
            percentages?: Array<number> | null;

            /**
             * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
             */
            smart_tip_threshold?: number;
          }

          interface Chf {
            /**
             * Fixed amounts displayed when collecting a tip
             */
            fixed_amounts?: Array<number> | null;

            /**
             * Percentages displayed when collecting a tip
             */
            percentages?: Array<number> | null;

            /**
             * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
             */
            smart_tip_threshold?: number;
          }

          interface Czk {
            /**
             * Fixed amounts displayed when collecting a tip
             */
            fixed_amounts?: Array<number> | null;

            /**
             * Percentages displayed when collecting a tip
             */
            percentages?: Array<number> | null;

            /**
             * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
             */
            smart_tip_threshold?: number;
          }

          interface Dkk {
            /**
             * Fixed amounts displayed when collecting a tip
             */
            fixed_amounts?: Array<number> | null;

            /**
             * Percentages displayed when collecting a tip
             */
            percentages?: Array<number> | null;

            /**
             * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
             */
            smart_tip_threshold?: number;
          }

          interface Eur {
            /**
             * Fixed amounts displayed when collecting a tip
             */
            fixed_amounts?: Array<number> | null;

            /**
             * Percentages displayed when collecting a tip
             */
            percentages?: Array<number> | null;

            /**
             * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
             */
            smart_tip_threshold?: number;
          }

          interface Gbp {
            /**
             * Fixed amounts displayed when collecting a tip
             */
            fixed_amounts?: Array<number> | null;

            /**
             * Percentages displayed when collecting a tip
             */
            percentages?: Array<number> | null;

            /**
             * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
             */
            smart_tip_threshold?: number;
          }

          interface Gip {
            /**
             * Fixed amounts displayed when collecting a tip
             */
            fixed_amounts?: Array<number> | null;

            /**
             * Percentages displayed when collecting a tip
             */
            percentages?: Array<number> | null;

            /**
             * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
             */
            smart_tip_threshold?: number;
          }

          interface Hkd {
            /**
             * Fixed amounts displayed when collecting a tip
             */
            fixed_amounts?: Array<number> | null;

            /**
             * Percentages displayed when collecting a tip
             */
            percentages?: Array<number> | null;

            /**
             * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
             */
            smart_tip_threshold?: number;
          }

          interface Huf {
            /**
             * Fixed amounts displayed when collecting a tip
             */
            fixed_amounts?: Array<number> | null;

            /**
             * Percentages displayed when collecting a tip
             */
            percentages?: Array<number> | null;

            /**
             * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
             */
            smart_tip_threshold?: number;
          }

          interface Jpy {
            /**
             * Fixed amounts displayed when collecting a tip
             */
            fixed_amounts?: Array<number> | null;

            /**
             * Percentages displayed when collecting a tip
             */
            percentages?: Array<number> | null;

            /**
             * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
             */
            smart_tip_threshold?: number;
          }

          interface Mxn {
            /**
             * Fixed amounts displayed when collecting a tip
             */
            fixed_amounts?: Array<number> | null;

            /**
             * Percentages displayed when collecting a tip
             */
            percentages?: Array<number> | null;

            /**
             * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
             */
            smart_tip_threshold?: number;
          }

          interface Myr {
            /**
             * Fixed amounts displayed when collecting a tip
             */
            fixed_amounts?: Array<number> | null;

            /**
             * Percentages displayed when collecting a tip
             */
            percentages?: Array<number> | null;

            /**
             * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
             */
            smart_tip_threshold?: number;
          }

          interface Nok {
            /**
             * Fixed amounts displayed when collecting a tip
             */
            fixed_amounts?: Array<number> | null;

            /**
             * Percentages displayed when collecting a tip
             */
            percentages?: Array<number> | null;

            /**
             * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
             */
            smart_tip_threshold?: number;
          }

          interface Nzd {
            /**
             * Fixed amounts displayed when collecting a tip
             */
            fixed_amounts?: Array<number> | null;

            /**
             * Percentages displayed when collecting a tip
             */
            percentages?: Array<number> | null;

            /**
             * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
             */
            smart_tip_threshold?: number;
          }

          interface Pln {
            /**
             * Fixed amounts displayed when collecting a tip
             */
            fixed_amounts?: Array<number> | null;

            /**
             * Percentages displayed when collecting a tip
             */
            percentages?: Array<number> | null;

            /**
             * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
             */
            smart_tip_threshold?: number;
          }

          interface Ron {
            /**
             * Fixed amounts displayed when collecting a tip
             */
            fixed_amounts?: Array<number> | null;

            /**
             * Percentages displayed when collecting a tip
             */
            percentages?: Array<number> | null;

            /**
             * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
             */
            smart_tip_threshold?: number;
          }

          interface Sek {
            /**
             * Fixed amounts displayed when collecting a tip
             */
            fixed_amounts?: Array<number> | null;

            /**
             * Percentages displayed when collecting a tip
             */
            percentages?: Array<number> | null;

            /**
             * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
             */
            smart_tip_threshold?: number;
          }

          interface Sgd {
            /**
             * Fixed amounts displayed when collecting a tip
             */
            fixed_amounts?: Array<number> | null;

            /**
             * Percentages displayed when collecting a tip
             */
            percentages?: Array<number> | null;

            /**
             * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
             */
            smart_tip_threshold?: number;
          }

          interface Usd {
            /**
             * Fixed amounts displayed when collecting a tip
             */
            fixed_amounts?: Array<number> | null;

            /**
             * Percentages displayed when collecting a tip
             */
            percentages?: Array<number> | null;

            /**
             * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
             */
            smart_tip_threshold?: number;
          }
        }

        interface VerifoneP400 {
          /**
           * A File ID representing an image to display on the reader
           */
          splashscreen?: string | Stripe.File;
        }

        interface Wifi {
          enterprise_eap_peap?: Wifi.EnterpriseEapPeap;

          enterprise_eap_tls?: Wifi.EnterpriseEapTls;

          personal_psk?: Wifi.PersonalPsk;

          /**
           * Security type of the WiFi network. The hash with the corresponding name contains the credentials for this security type.
           */
          type: Wifi.Type;
        }

        namespace Wifi {
          interface EnterpriseEapPeap {
            /**
             * A File ID representing a PEM file containing the server certificate
             */
            ca_certificate_file?: string;

            /**
             * Password for connecting to the WiFi network
             */
            password: string;

            /**
             * Name of the WiFi network
             */
            ssid: string;

            /**
             * Username for connecting to the WiFi network
             */
            username: string;
          }

          interface EnterpriseEapTls {
            /**
             * A File ID representing a PEM file containing the server certificate
             */
            ca_certificate_file?: string;

            /**
             * A File ID representing a PEM file containing the client certificate
             */
            client_certificate_file: string;

            /**
             * A File ID representing a PEM file containing the client RSA private key
             */
            private_key_file: string;

            /**
             * Password for the private key file
             */
            private_key_file_password?: string;

            /**
             * Name of the WiFi network
             */
            ssid: string;
          }

          interface PersonalPsk {
            /**
             * Password for connecting to the WiFi network
             */
            password: string;

            /**
             * Name of the WiFi network
             */
            ssid: string;
          }

          type Type =
            | 'enterprise_eap_peap'
            | 'enterprise_eap_tls'
            | 'personal_psk';
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
    }
  }
}
