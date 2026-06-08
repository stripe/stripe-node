// File generated from our OpenAPI spec

import {StripeResource} from '../StripeResource.js';
import {GiftCardOperation} from './GiftCardOperations.js';
import {RequestOptions, Response} from '../lib.js';

export class GiftCardResource extends StripeResource {
  /**
   * Retrieves a third-party gift card object.
   */
  retrieve(
    id: string,
    params?: GiftCardRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<GiftCard>> {
    return this._makeRequest(
      'GET',
      `/v1/gift_cards/${id}`,
      params,
      options
    ) as any;
  }
  /**
   * Creates a gift card object.
   */
  create(
    params: GiftCardCreateParams,
    options?: RequestOptions
  ): Promise<Response<GiftCard>> {
    return this._makeRequest('POST', '/v1/gift_cards', params, options) as any;
  }
  /**
   * Activates a third-party gift card and optionally sets its balance.
   */
  activate(
    id: string,
    params?: GiftCardActivateParams,
    options?: RequestOptions
  ): Promise<Response<GiftCardOperation>> {
    return this._makeRequest(
      'POST',
      `/v1/gift_cards/${id}/activate`,
      params,
      options
    ) as any;
  }
  /**
   * Cashout a third-party gift card by zeroing its balance.
   */
  cashout(
    id: string,
    params?: GiftCardCashoutParams,
    options?: RequestOptions
  ): Promise<Response<GiftCardOperation>> {
    return this._makeRequest(
      'POST',
      `/v1/gift_cards/${id}/cashout`,
      params,
      options
    ) as any;
  }
  /**
   * Checks the balance of a third-party gift card.
   */
  checkBalance(
    id: string,
    params?: GiftCardCheckBalanceParams,
    options?: RequestOptions
  ): Promise<Response<GiftCardOperation>> {
    return this._makeRequest(
      'POST',
      `/v1/gift_cards/${id}/check_balance`,
      params,
      options
    ) as any;
  }
  /**
   * Reloads a third-party gift card by adding the specified amount to its balance.
   */
  reload(
    id: string,
    params: GiftCardReloadParams,
    options?: RequestOptions
  ): Promise<Response<GiftCardOperation>> {
    return this._makeRequest(
      'POST',
      `/v1/gift_cards/${id}/reload`,
      params,
      options
    ) as any;
  }
  /**
   * Voids a previously performed gift card operation.
   */
  voidOperation(
    id: string,
    params: GiftCardVoidOperationParams,
    options?: RequestOptions
  ): Promise<Response<GiftCardOperation>> {
    return this._makeRequest(
      'POST',
      `/v1/gift_cards/${id}/void_operation`,
      params,
      options
    ) as any;
  }
}
export interface GiftCard {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'gift_card';

  /**
   * The brand of the gift card.
   */
  brand: GiftCard.Brand;

  /**
   * The expiration month of the gift card.
   */
  exp_month: number | null;

  /**
   * The expiration year of the gift card.
   */
  exp_year: number | null;

  /**
   * The last operation performed on this gift card.
   */
  last_operation: string | GiftCardOperation | null;

  /**
   * The last four digits of the gift card number.
   */
  last4: string | null;

  /**
   * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
   */
  livemode: boolean;
}
export namespace GiftCard {
  export type Brand = 'fiserv_valuelink' | 'givex' | 'svs';
}
export interface GiftCardCreateParams {
  /**
   * The brand of the gift card.
   */
  brand: GiftCardCreateParams.Brand;

  /**
   * Two-digit number representing the gift card's expiration month.
   */
  exp_month?: number;

  /**
   * Four-digit number representing the gift card's expiration year.
   */
  exp_year?: number;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;

  /**
   * The gift card number.
   */
  number?: string;

  /**
   * The gift card PIN.
   */
  pin?: string;
}
export namespace GiftCardCreateParams {
  export type Brand = 'fiserv_valuelink' | 'givex' | 'svs';
}
export interface GiftCardRetrieveParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export interface GiftCardActivateParams {
  /**
   * The initial balance to set on the gift card.
   */
  balance?: GiftCardActivateParams.Balance;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;

  /**
   * The Stripe account ID to process the gift card operation on behalf of.
   */
  on_behalf_of?: string;
}
export namespace GiftCardActivateParams {
  export interface Balance {
    /**
     * The initial balance amount to be loaded when activating the gift card, in the smallest currency unit
     */
    amount: number;

    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency: string;
  }
}
export interface GiftCardCashoutParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;

  /**
   * The Stripe account ID to process the gift card operation on behalf of.
   */
  on_behalf_of?: string;
}
export interface GiftCardCheckBalanceParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;

  /**
   * The Stripe account ID to process the gift card operation on behalf of.
   */
  on_behalf_of?: string;
}
export interface GiftCardReloadParams {
  /**
   * The amount to add to the gift card balance, in the smallest currency unit.
   */
  amount: number;

  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;

  /**
   * The Stripe account ID to process the gift card operation on behalf of.
   */
  on_behalf_of?: string;
}
export interface GiftCardVoidOperationParams {
  /**
   * The ID of the gift card operation to void.
   */
  operation: string;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;

  /**
   * The Stripe account ID to process the gift card operation on behalf of.
   */
  on_behalf_of?: string;
}
