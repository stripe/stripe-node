// File generated from our OpenAPI spec
declare module 'stripe' {
  namespace Stripe {
    /**
     * The Discount object.
     */
    interface Discount {
      /**
       * The ID of the discount object. Discounts cannot be fetched by ID. Use `expand[]=discounts` in API calls to expand discount IDs in an array.
       */
      id?: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'discount';

      /**
       * A coupon contains information about a percent-off or amount-off discount you
       * might want to apply to a customer. Coupons may be applied to [invoices](https://stripe.com/docs/api#invoices) or
       * [orders](https://stripe.com/docs/api#create_order-coupon). Coupons do not work with conventional one-off [charges](https://stripe.com/docs/api#create_charge).
       */
      coupon: Stripe.Coupon;

      /**
       * The ID of the customer associated with this discount.
       */
      customer: string | Stripe.Customer | Stripe.DeletedCustomer | null;

      deleted?: void;

      /**
       * If the coupon has a duration of `repeating`, the date that this discount will end. If the coupon has a duration of `once` or `forever`, this attribute will be null.
       */
      end: number | null;

      /**
       * The invoice that the discount's coupon was applied to, if it was applied directly to a particular invoice.
       */
      invoice?: string | null;

      /**
       * The invoice item `id` (or invoice line item `id` for invoice line items of type='subscription') that the discount's coupon was applied to, if it was applied directly to a particular invoice item or invoice line item.
       */
      invoice_item?: string | null;

      /**
       * Date that the coupon was applied.
       */
      start: number;

      /**
       * The subscription that this coupon is applied to, if it is applied to a particular subscription.
       */
      subscription: string | null;
    }

    /**
     * The DeletedDiscount object.
     */
    interface DeletedDiscount {
      /**
       * The ID of the discount object. Discounts cannot be fetched by ID. Use `expand[]=discounts` in API calls to expand discount IDs in an array.
       */
      id?: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'discount';

      /**
       * A coupon contains information about a percent-off or amount-off discount you
       * might want to apply to a customer. Coupons may be applied to [invoices](https://stripe.com/docs/api#invoices) or
       * [orders](https://stripe.com/docs/api#create_order-coupon). Coupons do not work with conventional one-off [charges](https://stripe.com/docs/api#create_charge).
       */
      coupon: Stripe.Coupon;

      /**
       * The ID of the customer associated with this discount.
       */
      customer: string | Stripe.Customer | Stripe.DeletedCustomer | null;

      /**
       * Always true for a deleted object
       */
      deleted: true;

      /**
       * The invoice that the discount's coupon was applied to, if it was applied directly to a particular invoice.
       */
      invoice?: string | null;

      /**
       * The invoice item `id` (or invoice line item `id` for invoice line items of type='subscription') that the discount's coupon was applied to, if it was applied directly to a particular invoice item or invoice line item.
       */
      invoice_item?: string | null;

      /**
       * Date that the coupon was applied.
       */
      start: number;

      /**
       * The subscription that this coupon is applied to, if it is applied to a particular subscription.
       */
      subscription: string | null;
    }
  }
}
