// File generated from our OpenAPI spec

namespace V2 {
  namespace Core {
    export interface EventRetrieveParams {}
  }
}
namespace V2 {
  namespace Core {
    export interface EventListParams {
      /**
       * Filter for events created after the specified timestamp.
       */
      gt?: string;

      /**
       * Filter for events created at or after the specified timestamp.
       */
      gte?: string;

      /**
       * The page size.
       */
      limit?: number;

      /**
       * Filter for events created before the specified timestamp.
       */
      lt?: string;

      /**
       * Filter for events created at or before the specified timestamp.
       */
      lte?: string;

      /**
       * Primary object ID used to retrieve related events.
       */
      object_id?: string;

      /**
       * An array of up to 20 strings containing specific event names.
       */
      types?: Array<string>;
    }
  }
}
