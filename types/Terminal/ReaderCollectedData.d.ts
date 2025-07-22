// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Terminal {
      /**
       * Returns data collected by Terminal readers. This data is only stored for 24 hours.
       */
      interface ReaderCollectedData {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'terminal.reader_collected_data';

        /**
         * Time at which the object was created. Measured in seconds since the Unix epoch.
         */
        created: number;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * The magstripe data collected by the reader.
         */
        magstripe: ReaderCollectedData.Magstripe | null;

        /**
         * The type of data collected by the reader.
         */
        type: 'magstripe';
      }

      namespace ReaderCollectedData {
        interface Magstripe {
          /**
           * The raw magstripe data collected by the reader.
           */
          data: string | null;
        }
      }
    }
  }
}
