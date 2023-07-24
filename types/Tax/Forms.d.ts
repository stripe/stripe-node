// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Tax {
      /**
       * Tax forms are legal documents which are delivered to one or more tax authorities for information reporting purposes.
       *
       * Related guide: [US tax reporting for Connect platforms](https://stripe.com/docs/connect/tax-reporting)
       */
      interface Form {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'tax.form';

        /**
         * The form that corrects this form, if any.
         */
        corrected_by: string | Stripe.Tax.Form | null;

        /**
         * Time at which the object was created. Measured in seconds since the Unix epoch.
         */
        created: number;

        /**
         * A list of tax filing statuses. Note that a filing status will only be included if the form has been filed directly with the jurisdiction's tax authority.
         */
        filing_statuses: Array<Form.FilingStatus>;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        payee: Form.Payee;

        /**
         * The type of the tax form. An additional hash is included on the tax form with a name matching this value. It contains additional information specific to the tax form type.
         */
        type: Form.Type;

        us_1099_k?: Form.Us1099K;

        us_1099_misc?: Form.Us1099Misc;

        us_1099_nec?: Form.Us1099Nec;
      }

      namespace Form {
        interface FilingStatus {
          /**
           * Time when the filing status was updated.
           */
          effective_at: number;

          jurisdiction: FilingStatus.Jurisdiction;

          /**
           * The current status of the filed form.
           */
          value: FilingStatus.Value;
        }

        namespace FilingStatus {
          interface Jurisdiction {
            /**
             * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)). Always `US`.
             */
            country: string;

            /**
             * Indicates the level of the jurisdiction where the form was filed.
             */
            level: Jurisdiction.Level;

            /**
             * [ISO 3166-2 U.S. state code](https://en.wikipedia.org/wiki/ISO_3166-2:US), without country prefix, if any. For example, "NY" for New York, United States.
             */
            state: string | null;
          }

          namespace Jurisdiction {
            type Level = 'country' | 'state';
          }

          type Value = 'accepted' | 'filed' | 'rejected';
        }

        interface Payee {
          /**
           * The ID of the payee's Stripe account.
           */
          account: string | Stripe.Account | null;

          /**
           * Always `account`.
           */
          type: 'account';
        }

        type Type = 'us_1099_k' | 'us_1099_misc' | 'us_1099_nec';

        interface Us1099K {
          /**
           * Year represented by the information reported on the tax form.
           */
          reporting_year: number;
        }

        interface Us1099Misc {
          /**
           * Year represented by the information reported on the tax form.
           */
          reporting_year: number;
        }

        interface Us1099Nec {
          /**
           * Year represented by the information reported on the tax form.
           */
          reporting_year: number;
        }
      }
    }
  }
}
