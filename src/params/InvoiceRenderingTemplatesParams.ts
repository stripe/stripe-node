// File generated from our OpenAPI spec

export interface InvoiceRenderingTemplateRetrieveParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;

  version?: number;
}
export interface InvoiceRenderingTemplateListParams extends PaginationParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;

  status?: InvoiceRenderingTemplateListParams.Status;
}
namespace InvoiceRenderingTemplateListParams {
  export type Status = 'active' | 'archived';
}
export interface InvoiceRenderingTemplateArchiveParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export interface InvoiceRenderingTemplateUnarchiveParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
