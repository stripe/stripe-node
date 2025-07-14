// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Sigma {
      /**
       * Contains information about the tables in a reporting Schema.
       */
      interface Schema {
        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'sigma.schema';

        name: string;

        tables: Array<Schema.Table>;
      }

      namespace Schema {
        interface Table {
          columns: Array<Table.Column>;

          comment: string;

          name: string;

          section: string;
        }

        namespace Table {
          interface Column {
            comment: string;

            foreign_key: string | null;

            name: string;

            primary_key: boolean;

            type: string;
          }
        }
      }
    }
  }
}
