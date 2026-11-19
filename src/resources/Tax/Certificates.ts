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
   * Deletes a Tax Certificate without deleting its uploaded file. You can reuse the file to create another certificate, and you can still retrieve the deleted certificate.
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
   * Retrieves a Tax Certificate. Deleted certificates remain retrievable with all their fields and deleted set to true.
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
   * Lists a tax exemption's certificates, ordered from newest to oldest. The list excludes deleted certificates.
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
   * Creates a Tax Certificate associated with a tax exemption. Before creating the certificate, [upload a file](https://docs.stripe.com/api/files/create) with purpose tax_certificate.
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
   * If `true`, the certificate has been deleted. If `false`, it hasn't been deleted.
   */
  deleted: boolean;

  /**
   * The ID of the uploaded certificate [file](https://docs.stripe.com/api/files/object).
   */
  file: string | File;

  /**
   * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
   */
  livemode: boolean;

  /**
   * The ID of the [customer tax exemption](https://docs.stripe.com/api/tax/exemptions/object) associated with this certificate.
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
     * The ID of a [file](https://docs.stripe.com/api/files/object) uploaded with purpose `tax_certificate`. The file must belong to the same account and mode as the tax exemption. You can't use a deleted file or a file attached to another certificate that hasn't been deleted.
     */
    file: string;

    /**
     * The ID of an existing [customer tax exemption](https://docs.stripe.com/api/tax/exemptions/object) that hasn't been deleted.
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
     * The ID of the [customer tax exemption](https://docs.stripe.com/api/tax/exemptions/object) whose certificates to list. The tax exemption must not be deleted.
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
