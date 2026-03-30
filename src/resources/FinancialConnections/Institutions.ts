// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {PaginationParams} from '../../shared.js';
import {RequestOptions, ApiListPromise, Response} from '../../lib.js';
const stripeMethod = StripeResource.method;

export class InstitutionResource extends StripeResource {
  /**
   * Returns a list of Financial Connections Institution objects.
   */
  list(
    params?: FinancialConnections.InstitutionListParams,
    options?: RequestOptions
  ): ApiListPromise<Institution>;
  list(options?: RequestOptions): ApiListPromise<Institution>;
  list(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/financial_connections/institutions',
      methodType: 'list',
    }).call(this, ...args);
  }

  /**
   * Retrieves the details of a Financial Connections Institution.
   */
  retrieve(
    id: string,
    params?: FinancialConnections.InstitutionRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<Institution>>;
  retrieve(
    id: string,
    options?: RequestOptions
  ): Promise<Response<Institution>>;
  retrieve(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/financial_connections/institutions/{institution}',
    }).call(this, ...args);
  }
}
export interface Institution {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'financial_connections.institution';

  /**
   * The list of countries supported by this institution, formatted as ISO country codes.
   */
  countries: Array<string>;

  features: FinancialConnections.Institution.Features;

  /**
   * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
   */
  livemode: boolean;

  /**
   * The name of this institution.
   */
  name: string;

  /**
   * A list of routing numbers which are known to correspond to this institution. Due to the many to many relationship between institutions and routing numbers, this list may not be comprehensive and routing numbers may also be shared between institutions.
   */
  routing_numbers: Array<string>;

  /**
   * The status of this institution in the Financial Connections authentication flow.
   */
  status: FinancialConnections.Institution.Status;

  /**
   * A URL corresponding to this institution. This URL is also displayed in the authentication flow to help end users confirm that they are authenticating with the right institution.
   */
  url: string | null;
}
export namespace FinancialConnections {
  export namespace Institution {
    export interface Features {
      balances: Features.Balances;

      ownership: Features.Ownership;

      payment_method: Features.PaymentMethod;

      transactions: Features.Transactions;
    }

    export type Status = 'active' | 'degraded' | 'inactive';

    export namespace Features {
      export interface Balances {
        /**
         * Whether the given feature is supported by this institution.
         */
        supported: boolean;
      }

      export interface Ownership {
        /**
         * Whether the given feature is supported by this institution.
         */
        supported: boolean;
      }

      export interface PaymentMethod {
        /**
         * Whether the given feature is supported by this institution.
         */
        supported: boolean;
      }

      export interface Transactions {
        /**
         * Whether the given feature is supported by this institution.
         */
        supported: boolean;
      }
    }
  }
}
export namespace FinancialConnections {
  export interface InstitutionRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
export namespace FinancialConnections {
  export interface InstitutionListParams extends PaginationParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
