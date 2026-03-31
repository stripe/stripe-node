// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {
  Emptyable,
  MetadataParam,
  PaginationParams,
  Metadata,
} from '../../shared.js';
import {RequestOptions, ApiListPromise, Response} from '../../lib.js';
const stripeMethod = StripeResource.method;

export class ProgramResource extends StripeResource {
  /**
   * List all of the programs the given Issuing user has access to.
   */
  list(
    params?: Issuing.ProgramListParams,
    options?: RequestOptions
  ): ApiListPromise<Program>;
  list(options?: RequestOptions): ApiListPromise<Program>;
  list(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/issuing/programs',
      methodType: 'list',
    }).call(this, ...args);
  }

  /**
   * Create a Program object.
   */
  create(
    params: Issuing.ProgramCreateParams,
    options?: RequestOptions
  ): Promise<Response<Program>>;
  create(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/issuing/programs',
    }).call(this, ...args);
  }

  /**
   * Retrieves the program specified by the given id.
   */
  retrieve(
    id: string,
    params?: Issuing.ProgramRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<Program>>;
  retrieve(id: string, options?: RequestOptions): Promise<Response<Program>>;
  retrieve(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/issuing/programs/{program}',
    }).call(this, ...args);
  }

  /**
   * Updates a Program object.
   */
  update(
    id: string,
    params?: Issuing.ProgramUpdateParams,
    options?: RequestOptions
  ): Promise<Response<Program>>;
  update(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/issuing/programs/{program}',
    }).call(this, ...args);
  }
}
export interface Program {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'issuing.program';

  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;

  /**
   * Whether or not this is the "default" issuing program new cards are created on. Only one active `is_default` program at the same time.
   */
  is_default: boolean;

  /**
   * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: Metadata;

  /**
   * The platform's Issuing Program for which this program is associated.
   */
  platform_program: string | null;
}
export namespace Issuing {
  export interface ProgramCreateParams {
    /**
     * The program to use as the parent for the new program to create.
     */
    platform_program: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * If true, makes the specified program the default for the given account.
     */
    is_default?: boolean;
  }
}
export namespace Issuing {
  export interface ProgramRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
export namespace Issuing {
  export interface ProgramUpdateParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * If true, makes the specified program the default.
     */
    is_default?: boolean;

    /**
     * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: Emptyable<MetadataParam>;
  }
}
export namespace Issuing {
  export interface ProgramListParams extends PaginationParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
