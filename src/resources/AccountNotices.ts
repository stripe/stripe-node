// File generated from our OpenAPI spec

import {StripeResource} from '../StripeResource.js';
import {MetadataParam, PaginationParams, Metadata} from '../shared.js';
import {RequestOptions, ApiListPromise, Response} from '../lib.js';
const stripeMethod = StripeResource.method;

export class AccountNoticeResource extends StripeResource {
  /**
   * Retrieves a list of AccountNotice objects. The objects are sorted in descending order by creation date, with the most-recently-created object appearing first.
   */
  list(
    params?: AccountNoticeListParams,
    options?: RequestOptions
  ): ApiListPromise<AccountNotice>;
  list(options?: RequestOptions): ApiListPromise<AccountNotice>;
  list(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/account_notices',
      methodType: 'list',
    }).call(this, ...args);
  }

  /**
   * Retrieves an AccountNotice object.
   */
  retrieve(
    id: string,
    params?: AccountNoticeRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<AccountNotice>>;
  retrieve(
    id: string,
    options?: RequestOptions
  ): Promise<Response<AccountNotice>>;
  retrieve(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/account_notices/{account_notice}',
    }).call(this, ...args);
  }

  /**
   * Updates an AccountNotice object.
   */
  update(
    id: string,
    params: AccountNoticeUpdateParams,
    options?: RequestOptions
  ): Promise<Response<AccountNotice>>;
  update(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/account_notices/{account_notice}',
    }).call(this, ...args);
  }
}
export interface AccountNotice {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'account_notice';

  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;

  /**
   * When present, the deadline for sending the notice to meet the relevant regulations.
   */
  deadline: number | null;

  /**
   * Information about the email when sent.
   */
  email: AccountNotice.Email | null;

  /**
   * Information about objects related to the notice.
   */
  linked_objects: AccountNotice.LinkedObjects | null;

  /**
   * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
   */
  livemode: boolean;

  /**
   * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: Metadata | null;

  /**
   * Reason the notice is being sent. The reason determines what copy the notice must contain. See the [regulated customer notices](https://docs.stripe.com/issuing/compliance-us/issuing-regulated-customer-notices) guide. All reasons might not apply to your integration, and Stripe might add new reasons in the future, so we recommend an internal warning when you receive an unknown reason.
   */
  reason: AccountNotice.Reason;

  /**
   * Date when the notice was sent. When absent, you must send the notice, update the content of the email and date when it was sent.
   */
  sent_at: number | null;
}
export namespace AccountNotice {
  export interface Email {
    /**
     * Content of the email in plain text. The copy must match exactly the language that Stripe Compliance has approved for use.
     */
    plain_text: string;

    /**
     * Email address of the recipient.
     */
    recipient: string;

    /**
     * Subject of the email.
     */
    subject: string;
  }

  export interface LinkedObjects {
    /**
     * Associated [Capability](https://docs.stripe.com/api/capabilities)
     */
    capability: string | null;

    /**
     * Associated [Credit Underwriting Record](https://docs.stripe.com/api/issuing/credit_underwriting_record)
     */
    issuing_credit_underwriting_record?: string | null;

    /**
     * Associated [Issuing Dispute](https://docs.stripe.com/api/issuing/disputes)
     */
    issuing_dispute: string | null;
  }

  export type Reason =
    | 'issuing.account_closed_for_inactivity'
    | 'issuing.account_closed_for_not_providing_business_model_clarification'
    | 'issuing.account_closed_for_not_providing_url_clarification'
    | 'issuing.account_closed_for_not_providing_use_case_clarification'
    | 'issuing.account_closed_for_terms_of_service_violation'
    | 'issuing.application_rejected_for_failure_to_verify'
    | 'issuing.credit_application_rejected'
    | 'issuing.credit_increase_application_rejected'
    | 'issuing.credit_limit_decreased'
    | 'issuing.credit_line_closed'
    | 'issuing.dispute_lost'
    | 'issuing.dispute_submitted'
    | 'issuing.dispute_won';
}
export interface AccountNoticeRetrieveParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export interface AccountNoticeUpdateParams {
  /**
   * Information about the email you sent.
   */
  email: AccountNoticeUpdateParams.Email;

  /**
   * Date when you sent the notice.
   */
  sent_at: number;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;

  /**
   * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: MetadataParam;
}
export namespace AccountNoticeUpdateParams {
  export interface Email {
    /**
     * Content of the email in plain text. The copy must match exactly the language that Stripe Compliance has approved for use.
     */
    plain_text: string;

    /**
     * Email address of the recipient.
     */
    recipient: string;

    /**
     * Subject of the email.
     */
    subject: string;
  }
}
export interface AccountNoticeListParams extends PaginationParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;

  /**
   * Set to false to only return unsent AccountNotices.
   */
  sent?: boolean;
}
