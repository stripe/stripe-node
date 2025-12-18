// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {RequestOptions} from '../../Types.js';
import {File} from './../Files.js';
import {Emptyable, PaginationParams} from '../../shared.js';
import {Response, ApiListPromise} from '../../lib.js';
const stripeMethod = StripeResource.method;
export class ConfigurationResource extends StripeResource {
  /**
   * Deletes a Configuration object.
   */
  del(
    id: string,
    params?: Terminal.ConfigurationDeleteParams,
    options?: RequestOptions
  ): Promise<Response<Terminal.DeletedConfiguration>>;
  del(
    id: string,
    options?: RequestOptions
  ): Promise<Response<Terminal.DeletedConfiguration>>;
  del(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'DELETE',
      fullPath: '/v1/terminal/configurations/{configuration}',
    }).call(this, ...args);
  }

  /**
   * Retrieves a Configuration object.
   */
  retrieve(
    id: string,
    params?: Terminal.ConfigurationRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<Configuration | Terminal.DeletedConfiguration>>;
  retrieve(
    id: string,
    options?: RequestOptions
  ): Promise<Response<Configuration | Terminal.DeletedConfiguration>>;
  retrieve(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/terminal/configurations/{configuration}',
    }).call(this, ...args);
  }

  /**
   * Updates a new Configuration object.
   */
  update(
    id: string,
    params?: Terminal.ConfigurationUpdateParams,
    options?: RequestOptions
  ): Promise<Response<Configuration | Terminal.DeletedConfiguration>>;
  update(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/terminal/configurations/{configuration}',
    }).call(this, ...args);
  }

  /**
   * Returns a list of Configuration objects.
   */
  list(
    params?: Terminal.ConfigurationListParams,
    options?: RequestOptions
  ): ApiListPromise<Configuration>;
  list(options?: RequestOptions): ApiListPromise<Configuration>;
  list(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/terminal/configurations',
      methodType: 'list',
    }).call(this, ...args);
  }

  /**
   * Creates a new Configuration object.
   */
  create(
    params?: Terminal.ConfigurationCreateParams,
    options?: RequestOptions
  ): Promise<Response<Configuration>>;
  create(options?: RequestOptions): Promise<Response<Configuration>>;
  create(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/terminal/configurations',
    }).call(this, ...args);
  }
}
export /**
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

  bbpos_wisepad3?: Terminal.Configuration.BbposWisepad3;

  bbpos_wisepos_e?: Terminal.Configuration.BbposWiseposE;

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

  offline?: Terminal.Configuration.Offline;

  reboot_window?: Terminal.Configuration.RebootWindow;

  stripe_s700?: Terminal.Configuration.StripeS700;

  tipping?: Terminal.Configuration.Tipping;

  verifone_p400?: Terminal.Configuration.VerifoneP400;

  wifi?: Terminal.Configuration.Wifi;
}
export namespace Terminal {
  export /**
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

  export namespace Configuration {
    export interface BbposWisepad3 {
      /**
       * A File ID representing an image to display on the reader
       */
      splashscreen?: string | File;
    }

    export interface BbposWiseposE {
      /**
       * A File ID representing an image to display on the reader
       */
      splashscreen?: string | File;
    }

    export interface Offline {
      /**
       * Determines whether to allow transactions to be collected while reader is offline. Defaults to false.
       */
      enabled: boolean | null;
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
       * A File ID representing an image to display on the reader
       */
      splashscreen?: string | File;
    }

    export interface Tipping {
      aed?: Tipping.Aed;

      aud?: Tipping.Aud;

      bgn?: Tipping.Bgn;

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

    export interface VerifoneP400 {
      /**
       * A File ID representing an image to display on the reader
       */
      splashscreen?: string | File;
    }

    export interface Wifi {
      enterprise_eap_peap?: Wifi.EnterpriseEapPeap;

      enterprise_eap_tls?: Wifi.EnterpriseEapTls;

      personal_psk?: Wifi.PersonalPsk;

      /**
       * Security type of the WiFi network. The hash with the corresponding name contains the credentials for this security type.
       */
      type: Wifi.Type;
    }

    export namespace Tipping {
      export interface Aed {
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

      export interface Aud {
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

      export interface Bgn {
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

      export interface Cad {
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

      export interface Chf {
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

      export interface Czk {
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

      export interface Dkk {
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

      export interface Eur {
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

      export interface Gbp {
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

      export interface Gip {
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

      export interface Hkd {
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

      export interface Huf {
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

      export interface Jpy {
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

      export interface Mxn {
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

      export interface Myr {
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

      export interface Nok {
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

      export interface Nzd {
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

      export interface Pln {
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

      export interface Ron {
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

      export interface Sek {
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

      export interface Sgd {
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

      export interface Usd {
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

    export namespace Wifi {
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
export namespace Terminal {
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
    offline?: Emptyable<ConfigurationCreateParams.Offline>;

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
    tipping?: Emptyable<ConfigurationCreateParams.Tipping>;

    /**
     * An object containing device type specific settings for Verifone P400 readers
     */
    verifone_p400?: ConfigurationCreateParams.VerifoneP400;

    /**
     * Configurations for connecting to a WiFi network.
     */
    wifi?: Emptyable<ConfigurationCreateParams.Wifi>;
  }

  export namespace ConfigurationCreateParams {
    export interface BbposWisepad3 {
      /**
       * A File ID representing an image you would like displayed on the reader.
       */
      splashscreen?: Emptyable<string>;
    }

    export interface BbposWiseposE {
      /**
       * A File ID representing an image to display on the reader
       */
      splashscreen?: Emptyable<string>;
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
      splashscreen?: Emptyable<string>;
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
      splashscreen?: Emptyable<string>;
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

    export namespace Tipping {
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

    export namespace Wifi {
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
export namespace Terminal {
  export interface ConfigurationRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
export namespace Terminal {
  export interface ConfigurationUpdateParams {
    /**
     * An object containing device type specific settings for BBPOS WisePad 3 readers
     */
    bbpos_wisepad3?: Emptyable<ConfigurationUpdateParams.BbposWisepad3>;

    /**
     * An object containing device type specific settings for BBPOS WisePOS E readers
     */
    bbpos_wisepos_e?: Emptyable<ConfigurationUpdateParams.BbposWiseposE>;

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
    offline?: Emptyable<ConfigurationUpdateParams.Offline>;

    /**
     * Reboot time settings for readers that support customized reboot time configuration.
     */
    reboot_window?: Emptyable<ConfigurationUpdateParams.RebootWindow>;

    /**
     * An object containing device type specific settings for Stripe S700 readers
     */
    stripe_s700?: Emptyable<ConfigurationUpdateParams.StripeS700>;

    /**
     * Tipping configurations for readers supporting on-reader tips
     */
    tipping?: Emptyable<ConfigurationUpdateParams.Tipping>;

    /**
     * An object containing device type specific settings for Verifone P400 readers
     */
    verifone_p400?: Emptyable<ConfigurationUpdateParams.VerifoneP400>;

    /**
     * Configurations for connecting to a WiFi network.
     */
    wifi?: Emptyable<ConfigurationUpdateParams.Wifi>;
  }

  export namespace ConfigurationUpdateParams {
    export interface BbposWisepad3 {
      /**
       * A File ID representing an image you would like displayed on the reader.
       */
      splashscreen?: Emptyable<string>;
    }

    export interface BbposWiseposE {
      /**
       * A File ID representing an image to display on the reader
       */
      splashscreen?: Emptyable<string>;
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
      splashscreen?: Emptyable<string>;
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
      splashscreen?: Emptyable<string>;
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

    export namespace Tipping {
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

    export namespace Wifi {
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
export namespace Terminal {
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
export namespace Terminal {
  export interface ConfigurationDeleteParams {}
}
