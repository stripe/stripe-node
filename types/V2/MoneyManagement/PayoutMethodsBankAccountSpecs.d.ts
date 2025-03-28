// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace MoneyManagement {
        /**
         * The PayoutMethodsBankAccountSpec object.
         */
        interface PayoutMethodsBankAccountSpec {
          /**
           * String representing the object's type. Objects of the same type share the same value of the object field.
           */
          object: 'v2.money_management.payout_methods_bank_account_spec';

          /**
           * The list of specs by country.
           */
          countries: {
            [key: string]: PayoutMethodsBankAccountSpec.Countries;
          };
        }

        namespace PayoutMethodsBankAccountSpec {
          interface Countries {
            /**
             * The list of fields for a country, along with associated information.
             */
            fields: Array<Countries.Field>;
          }

          namespace Countries {
            interface Field {
              /**
               * The local name of the field.
               */
              local_name: string;

              /**
               * The human readable local name of the field.
               */
              local_name_human: Field.LocalNameHuman;

              /**
               * The maximum length of the field.
               */
              max_length: number;

              /**
               * THe minimum length of the field.
               */
              min_length: number;

              /**
               * The placeholder value of the field.
               */
              placeholder: string;

              /**
               * The stripe name of the field.
               */
              stripe_name: string;

              /**
               * The validation regex of the field.
               */
              validation_regex: string;
            }

            namespace Field {
              interface LocalNameHuman {
                content: string;

                localization_key: string;
              }
            }
          }
        }
      }
    }
  }
}
