// File generated from our OpenAPI spec

export interface PaymentAttemptRecordRetrieveParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export interface PaymentAttemptRecordListParams {
  /**
   * The ID of the Payment Record.
   */
  payment_record: string;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;

  /**
   * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
   */
  limit?: number;

  /**
   * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
   */
  starting_after?: string;
}
