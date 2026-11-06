// File generated from our OpenAPI spec

export interface ObjectDefinitionVersion {
  /**
   * The complete version ID, consisting of the object definition ID, `@`, and a semantic version.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.extend.object_definition_version';

  /**
   * Time at which the object definition version was created.
   */
  created: string;

  /**
   * A description of what this version of the object definition represents.
   */
  description?: string;

  /**
   * The human-readable plural name of this version.
   */
  display_name_plural: string;

  /**
   * The human-readable singular name of this version.
   */
  display_name_singular: string;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * The ID of the parent object definition.
   */
  object_definition: string;

  /**
   * The stable identity and API names of the parent object definition.
   */
  parent_details: ObjectDefinitionVersion.ParentDetails;

  /**
   * The schema of the object record fields defined by this object definition.
   */
  properties: {
    [key: string]: ObjectDefinitionVersion.Properties;
  };

  /**
   * The semantic version of this object definition version, in `major.minor.patch` format.
   */
  version: string;
}
export namespace ObjectDefinitionVersion {
  export interface ParentDetails {
    /**
     * The plural API name used in this definition's object record API paths.
     */
    api_name_plural: string;

    /**
     * The singular API name used in this definition's object record tags.
     */
    api_name_singular: string;

    /**
     * The ID of the parent object definition.
     */
    id: string;
  }

  export interface Properties {
    /**
     * A required list of values for enum types.
     */
    allowed_values?: Array<string>;

    /**
     * An optional default value for the field.
     */
    default_value?: unknown;

    /**
     * An optional human-readable description of the field.
     */
    description?: string;

    /**
     * An optional exclusive maximum value for integer or decimal types.
     */
    exclusive_maximum?: unknown;

    /**
     * An optional exclusive minimum value for integer or decimal types.
     */
    exclusive_minimum?: unknown;

    /**
     * Whether or not the field is deprecated (default false).
     */
    is_deprecated?: boolean;

    /**
     * The required scalar schema for each array item. Array values retain their supplied order, and
     * order is significant. Values are never sorted. Empty arrays are valid unless min_items is positive.
     */
    items?: Properties.Items;

    /**
     * An optional maximum number of array items. It defaults to and cannot exceed 100.
     */
    max_items?: number;

    /**
     * An optional maximum length validation for string fields.
     */
    max_length?: number;

    /**
     * An optional maximum value for integer or decimal types.
     */
    maximum?: unknown;

    /**
     * An optional minimum number of array items. Empty arrays are valid when this is absent or zero.
     */
    min_items?: number;

    /**
     * An optional minimum length validation for string fields.
     */
    min_length?: number;

    /**
     * An optional minimum value for integer or decimal types.
     */
    minimum?: unknown;

    /**
     * The type referenced by object reference fields.
     */
    referenced_type?: string;

    /**
     * Whether or not the field is required (default false).
     */
    required?: boolean;

    /**
     * An optional human-readable name for the field.
     */
    title?: string;

    /**
     * The data type of the field.
     */
    type: Properties.Type;

    /**
     * Whether array item values must be unique (default false). Duplicate values are allowed by default.
     */
    unique_items?: boolean;
  }

  export namespace Properties {
    export interface Items {
      /**
       * A required list of values for enum types.
       */
      allowed_values?: Array<string>;

      /**
       * An optional default value for the field.
       */
      default_value?: unknown;

      /**
       * An optional human-readable description of the field.
       */
      description?: string;

      /**
       * An optional exclusive maximum value for integer or decimal types.
       */
      exclusive_maximum?: unknown;

      /**
       * An optional exclusive minimum value for integer or decimal types.
       */
      exclusive_minimum?: unknown;

      /**
       * Whether or not the field is deprecated (default false).
       */
      is_deprecated?: boolean;

      /**
       * The required scalar schema for each array item. Array values retain their supplied order, and
       * order is significant. Values are never sorted. Empty arrays are valid unless min_items is positive.
       */
      items?: Items.Items;

      /**
       * An optional maximum number of array items. It defaults to and cannot exceed 100.
       */
      max_items?: number;

      /**
       * An optional maximum length validation for string fields.
       */
      max_length?: number;

      /**
       * An optional maximum value for integer or decimal types.
       */
      maximum?: unknown;

      /**
       * An optional minimum number of array items. Empty arrays are valid when this is absent or zero.
       */
      min_items?: number;

      /**
       * An optional minimum length validation for string fields.
       */
      min_length?: number;

      /**
       * An optional minimum value for integer or decimal types.
       */
      minimum?: unknown;

      /**
       * The type referenced by object reference fields.
       */
      referenced_type?: string;

      /**
       * Whether or not the field is required (default false).
       */
      required?: boolean;

      /**
       * An optional human-readable name for the field.
       */
      title?: string;

      /**
       * The data type of the field.
       */
      type: Items.Type;

      /**
       * Whether array item values must be unique (default false). Duplicate values are allowed by default.
       */
      unique_items?: boolean;
    }

    export type Type =
      | 'array'
      | 'boolean'
      | 'currency'
      | 'datetime'
      | 'decimal'
      | 'enum'
      | 'integer'
      | 'monetary_amount'
      | 'object_reference'
      | 'string';

    export namespace Items {
      export interface Items {}

      export type Type =
        | 'array'
        | 'boolean'
        | 'currency'
        | 'datetime'
        | 'decimal'
        | 'enum'
        | 'integer'
        | 'monetary_amount'
        | 'object_reference'
        | 'string';
    }
  }
}
