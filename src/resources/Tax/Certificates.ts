// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {File} from './../Files.js';
import {
  CustomerTaxExemption,
  DeletedCustomerTaxExemption,
} from './../CustomerTaxExemptions.js';
import {PaginationParams} from '../../shared.js';
import {RequestOptions, Response, ApiListPromise} from '../../lib.js';

export class CertificateResource extends StripeResource {
  /**
   * Delete a tax certificate associated with a tax exemption.
   */
  del(
    id: string,
    params?: Tax.CertificateDeleteParams,
    options?: RequestOptions
  ): Promise<Response<DeletedCertificate>> {
    return this._makeRequest(
      'DELETE',
      `/v1/tax/certificates/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
  /**
   * Retrieve a tax certificate associated with a tax exemption.
   */
  retrieve(
    id: string,
    params?: Tax.CertificateRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<Certificate>> {
    return this._makeRequest(
      'GET',
      `/v1/tax/certificates/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
  /**
   * List certificates for an existing tax exemption.
   */
  list(
    params: Tax.CertificateListParams,
    options?: RequestOptions
  ): ApiListPromise<Certificate> {
    return this._makeRequest('GET', '/v1/tax/certificates', params, options, {
      methodType: 'list',
    }) as any;
  }
  /**
   * Create a tax certificate associated with a tax exemption.
   */
  create(
    params: Tax.CertificateCreateParams,
    options?: RequestOptions
  ): Promise<Response<Certificate>> {
    return this._makeRequest(
      'POST',
      '/v1/tax/certificates',
      params,
      options
    ) as any;
  }
}
export interface Certificate {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'tax.certificate';

  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;

  /**
   * Whether the certificate has been deleted.
   */
  deleted: boolean;

  /**
   * The uploaded certificate file.
   */
  file: string | File;

  /**
   * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
   */
  livemode: boolean;

  /**
   * The tax exemption associated with this certificate.
   */
  tax_exemption:
    | string
    | CustomerTaxExemption
    | DeletedCustomerTaxExemption
    | null;
}
export interface DeletedCertificate {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'tax.certificate';

  /**
   * Always true for a deleted object
   */
  deleted: true;
}
export namespace Tax {
  export interface CertificateCreateParams {
    /**
     * The ID of a file uploaded with purpose `tax_certificate`.
     */
    file: string;

    /**
     * The ID of an existing tax exemption.
     */
    tax_exemption: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
export namespace Tax {
  export interface CertificateRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
export namespace Tax {
  export interface CertificateListParams extends PaginationParams {
    /**
     * The ID of an existing tax exemption.
     */
    tax_exemption: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
export namespace Tax {
  export interface CertificateDeleteParams {}
}
