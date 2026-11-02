// File generated from our OpenAPI spec

import {OtherString, Decimal} from '../../../shared.js';
import {RequestOptions} from '../../../lib.js';
export interface SearchResultList {
  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.data.search_result_list';

  /**
   * Domain-level intelligence. Present when a known domain matches; omitted
   * when the system falls back to direct semantic search.
   */
  context?: SearchResultList.Context;

  /**
   * Ranked public resources. Always present, including when empty.
   */
  data: Array<
    SearchResultList.Data &
      (
        | SearchResultList.Data.Metrics
        | SearchResultList.Data.Reports
        | SearchResultList.Data.Schemas
        | {
            catalog?: OtherString;
          }
      )
  >;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * Token for the next page.
   */
  next_page_url?: string;

  /**
   * Token for the previous page.
   */
  previous_page_url?: string;
}
export namespace SearchResultList {
  export interface Context {
    /**
     * Domain vocabulary relevant to the request, so that callers interpret the
     * returned resources consistently with how Stripe defines these terms.
     */
    business_concepts: Array<Context.BusinessConcept>;

    /**
     * The business domain the request was matched to, for example "payments".
     */
    domain: string;

    /**
     * High-level routing guidance for the agent. When `data` is empty, may
     * advise how to refine the request or browse canonical resources.
     */
    guidance: string;
  }

  export interface Data {
    /**
     * What the canonical resource contains.
     */
    description: string;

    /**
     * How to execute this result.
     */
    execution_spec: Data.ExecutionSpec;

    /**
     * Per-result additional context: constraints, interpretation rules, and gotchas.
     */
    extended_description?: string;

    /**
     * Canonical resource identity.
     */
    id: string;

    /**
     * Human-readable name of the canonical resource.
     */
    name: string;

    /**
     * The canonical resource type this result points at, e.g. "v2.data.schema"
     * or "v2.data.report". May name a resource that is not yet publicly
     * retrievable, in which case `reference_url` is omitted. Distinct from
     * `object`, which identifies this result itself.
     */
    object_type: string;

    /**
     * Canonical API path for retrieving the complete resource, e.g.
     * "/v2/data/reports/report_123".
     */
    reference_url: string;

    /**
     * Present for schemas when known; omitted for resource types without data
     * freshness.
     */
    refreshed_at: string;

    /**
     * Relative ordering signal from the search service (0-1). Not a
     * calibrated guarantee; callers must not use it as a configurable cutoff.
     */
    relevance_score: Decimal;
  }

  export namespace Context {
    export interface BusinessConcept {
      /**
       * What the term means in the context of this domain.
       */
      definition: string;

      /**
       * The name of the concept, for example "decline reason".
       */
      term: string;
    }
  }

  export namespace Data {
    export interface ExecutionSpec {
      /**
       * The canonical run endpoint, e.g. "/v2/data/report_runs" or "/v2/data/query_runs".
       */
      execution_url: string;

      /**
       * The HTTP method for `execution_url`.
       */
      http_method: ExecutionSpec.HttpMethod;

      /**
       * The identifier to submit to `execution_url`, e.g. "report_123" or "table_123".
       */
      id: string;
    }

    export type Metrics = {
      catalog: 'metrics';
      metrics: SearchResultList.Data.Metrics.Metrics;
    };

    export type Reports = {
      catalog: 'reports';
      reports: SearchResultList.Data.Reports.Reports;
    };

    export type Schemas = {
      catalog: 'schemas';
      schemas: SearchResultList.Data.Schemas.Schemas;
    };

    export namespace ExecutionSpec {
      export type HttpMethod = 'GET' | 'POST' | OtherString;
    }

    export namespace Metrics {
      export interface Metrics {
        /**
         * Whether the metric query endpoint accepts a `currency` parameter for this
         * metric. False for pure ratios and growth rates.
         */
        accepts_currency: boolean;

        /**
         * Dimensions the metric can be filtered and grouped by.
         */
        dimensions: Array<Metrics.Dimension>;

        /**
         * How the metric's value is formatted.
         */
        measure_format: Metrics.MeasureFormat;

        /**
         * The metric namespace. Metrics queried together in one metric query request
         * must share a namespace.
         */
        metric_namespace: string;
      }

      export namespace Metrics {
        export interface Dimension {
          /**
           * A description of what the dimension represents.
           */
          description: string;

          /**
           * The public dimension name accepted by the metric query endpoint.
           */
          name: string;
        }

        export type MeasureFormat =
          | 'currency'
          | 'number'
          | 'percent'
          | OtherString;
      }
    }

    export namespace Reports {
      export interface Reports {
        /**
         * Shape of the report output when known.
         */
        output_columns: Array<Reports.OutputColumn>;

        /**
         * Parameter schema, keyed by parameter name, matching the `/v2/data/reports`
         * resource.
         */
        parameters: {
          [key: string]: Reports.Parameters;
        };
      }

      export namespace Reports {
        export interface OutputColumn {
          /**
           * What the column represents.
           */
          description: string;

          /**
           * The name of the column in the report output.
           */
          name: string;

          /**
           * The data type of the column.
           */
          type: OutputColumn.Type;
        }

        export interface Parameters {
          /**
           * For array parameters, details about the array elements.
           */
          array_details?: Parameters.ArrayDetails;

          /**
           * Explains the purpose and usage of the parameter.
           */
          description: string;

          /**
           * For enum parameters, the list of allowed values.
           */
          enum_details?: Parameters.EnumDetails;

          /**
           * Indicates whether the parameter must be provided.
           */
          required: boolean;

          /**
           * The data type of the parameter.
           */
          type: Parameters.Type;
        }

        export namespace OutputColumn {
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

        export namespace Parameters {
          export interface ArrayDetails {
            /**
             * The data type of the elements in the array.
             */
            element_type: ArrayDetails.ElementType;

            /**
             * Details about enum elements in the array.
             */
            enum_details?: ArrayDetails.EnumDetails;
          }

          export interface EnumDetails {
            /**
             * Allowed values of the enum.
             */
            allowed_values: Array<string>;
          }

          export type Type =
            | 'array'
            | 'enum'
            | 'string'
            | 'timestamp'
            | OtherString;

          export namespace ArrayDetails {
            export type ElementType =
              | 'array'
              | 'enum'
              | 'string'
              | 'timestamp'
              | OtherString;

            export interface EnumDetails {
              /**
               * Allowed values of the enum.
               */
              allowed_values: Array<string>;
            }
          }
        }
      }
    }

    export namespace Schemas {
      export interface Schemas {
        /**
         * Compact schema projection.
         */
        columns: Array<Schemas.Column>;

        /**
         * The dataset used when submitting an ad-hoc query run.
         */
        dataset: Schemas.Dataset;

        /**
         * Stripe-defined reports that are relevant to this schema.
         */
        relevant_reports: Array<Schemas.RelevantReport>;
      }

      export namespace Schemas {
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

          /**
           * Canonical API path for the `Report`, e.g. "/v2/data/reports/report_123".
           */
          reference_url: string;
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

            /**
             * The name of the referenced schema.
             */
            schema_name: string;
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

            /**
             * The name of the referenced schema.
             */
            schema_name: string;
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
    }
  }
}
