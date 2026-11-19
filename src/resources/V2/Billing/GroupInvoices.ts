// File generated from our OpenAPI spec

export interface GroupInvoice {
  /**
   * The ID of the BillingGroupInvoice object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.billing.group_invoice';

  /**
   * Timestamp of when the BillingGroupInvoice object was created.
   */
  created: string;

  /**
   * The ID of the created Invoice object.
   */
  invoice_id: string;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
}
