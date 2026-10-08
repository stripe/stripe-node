// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {OtherString} from '../../../shared.js';
import {RequestOptions, V2ListPromise, Response} from '../../../lib.js';

export class SchemaResource extends StripeResource {
  /**
   * Returns a list of schemas describing the tables available to query.
   */
  list(
    params?: V2.Data.SchemaListParams,
    options?: RequestOptions
  ): V2ListPromise<Schema> {
    return this._makeRequest('GET', '/v2/data/schemas', params, options, {
      methodType: 'list',
    }) as any;
  }
  /**
   * Retrieves the schema for a particular table.
   */
  retrieve(
    id: string,
    params?: V2.Data.SchemaRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<Schema>> {
    return this._makeRequest(
      'GET',
      `/v2/data/schemas/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
}
export interface Schema {
  /**
   * The unique identifier of the `Schema`.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.data.schema';

  /**
   * The columns of the table.
   */
  columns: Array<Schema.Column>;

  /**
   * The dataset the table belongs to.
   */
  dataset: Schema.Dataset;

  /**
   * A description of the table.
   */
  description: string;

  /**
   * An extended, LLM-friendly description of the table, useful for query generation.
   */
  extended_description?: string;

  /**
   * Whether this `Schema` describes live mode data.
   */
  livemode: boolean;

  /**
   * The human-readable name of the table.
   */
  name: string;

  /**
   * Time at which the table's schema was last refreshed.
   */
  refreshed_at: string;

  /**
   * Reports relevant to this table.
   */
  relevant_reports: Array<Schema.RelevantReport>;
}
export namespace Schema {
  export interface Column {
    /**
     * A description of what the column represents.
     */
    description: string;

    /**
     * Columns in other schemas that reference this column as a foreign key.
     */
    foreign_keys_from: Array<Column.ForeignKeysFrom>;

    /**
     * Columns in other schemas that this column references as a foreign key.
     */
    foreign_keys_to: Array<Column.ForeignKeysTo>;

    /**
     * Whether the column forms part of the table's primary key.
     */
    is_primary_key: boolean;

    /**
     * The name of the column.
     */
    name: string;

    /**
     * The data type of the column.
     */
    type: Column.Type;
  }

  export type Dataset = 'analytical' | OtherString;

  export interface RelevantReport {
    /**
     * A description of the `Report`.
     */
    description: string;

    /**
     * The unique identifier of the `Report`.
     */
    id: string;

    /**
     * The human-readable name of the `Report`.
     */
    name: string;
  }

  export namespace Column {
    export interface ForeignKeysFrom {
      /**
       * The name of the referenced column.
       */
      column: string;

      /**
       * The identifier of the referenced schema.
       */
      schema: string;
    }

    export interface ForeignKeysTo {
      /**
       * The name of the referenced column.
       */
      column: string;

      /**
       * The identifier of the referenced schema.
       */
      schema: string;
    }

    export type Type =
      | 'bigint'
      | 'boolean'
      | 'date'
      | 'datetime'
      | 'decimal'
      | 'double'
      | 'integer'
      | 'timestamp'
      | 'varchar'
      | OtherString;
  }
}
export namespace V2 {
  export namespace Data {
    export interface SchemaRetrieveParams {}
  }
}
export namespace V2 {
  export namespace Data {
    export interface SchemaListParams {
      /**
       * If supplied, only return schemas belonging to this dataset.
       */
      dataset?: SchemaListParams.Dataset;

      /**
       * Any optional includes (see https://docs.stripe.com/api-includable-response-values).
       */
      include?: Array<SchemaListParams.Include>;

      /**
       * The maximum number of results per page. Defaults to 10. Maximum is 1,000.
       */
      limit?: number;

      /**
       * If supplied, only return schemas with this name.
       */
      name?: string;
    }

    export namespace SchemaListParams {
      export type Dataset = 'analytical' | OtherString;

      export type Include = 'columns' | OtherString;
    }
  }
}
