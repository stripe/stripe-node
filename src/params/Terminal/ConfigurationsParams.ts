// File generated from our OpenAPI spec

namespace Terminal {
  export interface ConfigurationCreateParams {
    /**
     * An object containing device type specific settings for BBPOS WisePad 3 readers
     */
    bbpos_wisepad3?: ConfigurationCreateParams.BbposWisepad3;

    /**
     * An object containing device type specific settings for BBPOS WisePOS E readers
     */
    bbpos_wisepos_e?: ConfigurationCreateParams.BbposWiseposE;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Name of the configuration
     */
    name?: string;

    /**
     * Configurations for collecting transactions offline.
     */
    offline?: Stripe.Emptyable<ConfigurationCreateParams.Offline>;

    /**
     * Reboot time settings for readers that support customized reboot time configuration.
     */
    reboot_window?: ConfigurationCreateParams.RebootWindow;

    /**
     * An object containing device type specific settings for Stripe S700 readers
     */
    stripe_s700?: ConfigurationCreateParams.StripeS700;

    /**
     * Tipping configurations for readers supporting on-reader tips
     */
    tipping?: Stripe.Emptyable<ConfigurationCreateParams.Tipping>;

    /**
     * An object containing device type specific settings for Verifone P400 readers
     */
    verifone_p400?: ConfigurationCreateParams.VerifoneP400;

    /**
     * Configurations for connecting to a WiFi network.
     */
    wifi?: Stripe.Emptyable<ConfigurationCreateParams.Wifi>;
  }

  namespace ConfigurationCreateParams {
    export interface BbposWisepad3 {
      /**
       * A File ID representing an image you would like displayed on the reader.
       */
      splashscreen?: Stripe.Emptyable<string>;
    }

    export interface BbposWiseposE {
      /**
       * A File ID representing an image to display on the reader
       */
      splashscreen?: Stripe.Emptyable<string>;
    }

    export interface Offline {
      /**
       * Determines whether to allow transactions to be collected while reader is offline. Defaults to false.
       */
      enabled: boolean;
    }

    export interface RebootWindow {
      /**
       * Integer between 0 to 23 that represents the end hour of the reboot time window. The value must be different than the start_hour.
       */
      end_hour: number;

      /**
       * Integer between 0 to 23 that represents the start hour of the reboot time window.
       */
      start_hour: number;
    }

    export interface StripeS700 {
      /**
       * A File ID representing an image you would like displayed on the reader.
       */
      splashscreen?: Stripe.Emptyable<string>;
    }

    export interface Tipping {
      /**
       * Tipping configuration for AED
       */
      aed?: Tipping.Aed;

      /**
       * Tipping configuration for AUD
       */
      aud?: Tipping.Aud;

      /**
       * Tipping configuration for BGN
       */
      bgn?: Tipping.Bgn;

      /**
       * Tipping configuration for CAD
       */
      cad?: Tipping.Cad;

      /**
       * Tipping configuration for CHF
       */
      chf?: Tipping.Chf;

      /**
       * Tipping configuration for CZK
       */
      czk?: Tipping.Czk;

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
       * Tipping configuration for GIP
       */
      gip?: Tipping.Gip;

      /**
       * Tipping configuration for HKD
       */
      hkd?: Tipping.Hkd;

      /**
       * Tipping configuration for HUF
       */
      huf?: Tipping.Huf;

      /**
       * Tipping configuration for JPY
       */
      jpy?: Tipping.Jpy;

      /**
       * Tipping configuration for MXN
       */
      mxn?: Tipping.Mxn;

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
       * Tipping configuration for PLN
       */
      pln?: Tipping.Pln;

      /**
       * Tipping configuration for RON
       */
      ron?: Tipping.Ron;

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

    export interface VerifoneP400 {
      /**
       * A File ID representing an image you would like displayed on the reader.
       */
      splashscreen?: Stripe.Emptyable<string>;
    }

    export interface Wifi {
      /**
       * Credentials for a WPA-Enterprise WiFi network using the EAP-PEAP authentication method.
       */
      enterprise_eap_peap?: Wifi.EnterpriseEapPeap;

      /**
       * Credentials for a WPA-Enterprise WiFi network using the EAP-TLS authentication method.
       */
      enterprise_eap_tls?: Wifi.EnterpriseEapTls;

      /**
       * Credentials for a WPA-Personal WiFi network.
       */
      personal_psk?: Wifi.PersonalPsk;

      /**
       * Security type of the WiFi network. Fill out the hash with the corresponding name to provide the set of credentials for this security type.
       */
      type: Wifi.Type;
    }

    namespace Tipping {
      export interface Aed {
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

      export interface Aud {
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

      export interface Bgn {
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

      export interface Cad {
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

      export interface Chf {
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

      export interface Czk {
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

      export interface Dkk {
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

      export interface Eur {
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

      export interface Gbp {
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

      export interface Gip {
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

      export interface Hkd {
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

      export interface Huf {
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

      export interface Jpy {
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

      export interface Mxn {
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

      export interface Myr {
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

      export interface Nok {
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

      export interface Nzd {
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

      export interface Pln {
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

      export interface Ron {
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

      export interface Sek {
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

      export interface Sgd {
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

      export interface Usd {
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

    namespace Wifi {
      export interface EnterpriseEapPeap {
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

      export interface EnterpriseEapTls {
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

      export interface PersonalPsk {
        /**
         * Password for connecting to the WiFi network
         */
        password: string;

        /**
         * Name of the WiFi network
         */
        ssid: string;
      }

      export type Type =
        | 'enterprise_eap_peap'
        | 'enterprise_eap_tls'
        | 'personal_psk';
    }
  }
}
namespace Terminal {
  export interface ConfigurationRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
namespace Terminal {
  export interface ConfigurationUpdateParams {
    /**
     * An object containing device type specific settings for BBPOS WisePad 3 readers
     */
    bbpos_wisepad3?: Stripe.Emptyable<ConfigurationUpdateParams.BbposWisepad3>;

    /**
     * An object containing device type specific settings for BBPOS WisePOS E readers
     */
    bbpos_wisepos_e?: Stripe.Emptyable<ConfigurationUpdateParams.BbposWiseposE>;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Name of the configuration
     */
    name?: string;

    /**
     * Configurations for collecting transactions offline.
     */
    offline?: Stripe.Emptyable<ConfigurationUpdateParams.Offline>;

    /**
     * Reboot time settings for readers that support customized reboot time configuration.
     */
    reboot_window?: Stripe.Emptyable<ConfigurationUpdateParams.RebootWindow>;

    /**
     * An object containing device type specific settings for Stripe S700 readers
     */
    stripe_s700?: Stripe.Emptyable<ConfigurationUpdateParams.StripeS700>;

    /**
     * Tipping configurations for readers supporting on-reader tips
     */
    tipping?: Stripe.Emptyable<ConfigurationUpdateParams.Tipping>;

    /**
     * An object containing device type specific settings for Verifone P400 readers
     */
    verifone_p400?: Stripe.Emptyable<ConfigurationUpdateParams.VerifoneP400>;

    /**
     * Configurations for connecting to a WiFi network.
     */
    wifi?: Stripe.Emptyable<ConfigurationUpdateParams.Wifi>;
  }

  namespace ConfigurationUpdateParams {
    export interface BbposWisepad3 {
      /**
       * A File ID representing an image you would like displayed on the reader.
       */
      splashscreen?: Stripe.Emptyable<string>;
    }

    export interface BbposWiseposE {
      /**
       * A File ID representing an image to display on the reader
       */
      splashscreen?: Stripe.Emptyable<string>;
    }

    export interface Offline {
      /**
       * Determines whether to allow transactions to be collected while reader is offline. Defaults to false.
       */
      enabled: boolean;
    }

    export interface RebootWindow {
      /**
       * Integer between 0 to 23 that represents the end hour of the reboot time window. The value must be different than the start_hour.
       */
      end_hour: number;

      /**
       * Integer between 0 to 23 that represents the start hour of the reboot time window.
       */
      start_hour: number;
    }

    export interface StripeS700 {
      /**
       * A File ID representing an image you would like displayed on the reader.
       */
      splashscreen?: Stripe.Emptyable<string>;
    }

    export interface Tipping {
      /**
       * Tipping configuration for AED
       */
      aed?: Tipping.Aed;

      /**
       * Tipping configuration for AUD
       */
      aud?: Tipping.Aud;

      /**
       * Tipping configuration for BGN
       */
      bgn?: Tipping.Bgn;

      /**
       * Tipping configuration for CAD
       */
      cad?: Tipping.Cad;

      /**
       * Tipping configuration for CHF
       */
      chf?: Tipping.Chf;

      /**
       * Tipping configuration for CZK
       */
      czk?: Tipping.Czk;

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
       * Tipping configuration for GIP
       */
      gip?: Tipping.Gip;

      /**
       * Tipping configuration for HKD
       */
      hkd?: Tipping.Hkd;

      /**
       * Tipping configuration for HUF
       */
      huf?: Tipping.Huf;

      /**
       * Tipping configuration for JPY
       */
      jpy?: Tipping.Jpy;

      /**
       * Tipping configuration for MXN
       */
      mxn?: Tipping.Mxn;

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
       * Tipping configuration for PLN
       */
      pln?: Tipping.Pln;

      /**
       * Tipping configuration for RON
       */
      ron?: Tipping.Ron;

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

    export interface VerifoneP400 {
      /**
       * A File ID representing an image you would like displayed on the reader.
       */
      splashscreen?: Stripe.Emptyable<string>;
    }

    export interface Wifi {
      /**
       * Credentials for a WPA-Enterprise WiFi network using the EAP-PEAP authentication method.
       */
      enterprise_eap_peap?: Wifi.EnterpriseEapPeap;

      /**
       * Credentials for a WPA-Enterprise WiFi network using the EAP-TLS authentication method.
       */
      enterprise_eap_tls?: Wifi.EnterpriseEapTls;

      /**
       * Credentials for a WPA-Personal WiFi network.
       */
      personal_psk?: Wifi.PersonalPsk;

      /**
       * Security type of the WiFi network. Fill out the hash with the corresponding name to provide the set of credentials for this security type.
       */
      type: Wifi.Type;
    }

    namespace Tipping {
      export interface Aed {
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

      export interface Aud {
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

      export interface Bgn {
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

      export interface Cad {
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

      export interface Chf {
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

      export interface Czk {
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

      export interface Dkk {
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

      export interface Eur {
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

      export interface Gbp {
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

      export interface Gip {
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

      export interface Hkd {
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

      export interface Huf {
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

      export interface Jpy {
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

      export interface Mxn {
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

      export interface Myr {
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

      export interface Nok {
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

      export interface Nzd {
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

      export interface Pln {
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

      export interface Ron {
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

      export interface Sek {
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

      export interface Sgd {
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

      export interface Usd {
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

    namespace Wifi {
      export interface EnterpriseEapPeap {
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

      export interface EnterpriseEapTls {
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

      export interface PersonalPsk {
        /**
         * Password for connecting to the WiFi network
         */
        password: string;

        /**
         * Name of the WiFi network
         */
        ssid: string;
      }

      export type Type =
        | 'enterprise_eap_peap'
        | 'enterprise_eap_tls'
        | 'personal_psk';
    }
  }
}
namespace Terminal {
  export interface ConfigurationListParams extends PaginationParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * if present, only return the account default or non-default configurations.
     */
    is_account_default?: boolean;
  }
}
namespace Terminal {
  export interface ConfigurationDeleteParams {}
}
