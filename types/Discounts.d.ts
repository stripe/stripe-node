// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * The DeletedDiscount object.
     */
    interface DeletedDiscount {
      /**
       * The ID of the discount object. Discounts cannot be fetched by ID. Use `expand[]=discounts` in API calls to expand discount IDs in an array.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'discount';

      /**
       * The Checkout session that this coupon is applied to, if it is applied to a particular session in payment mode. Will not be present for subscription mode.
       */
      checkout_session: string | null;

      /**
       * The ID of the customer associated with this discount.
       */
      customer: string | Stripe.Customer | Stripe.DeletedCustomer | null;

      /**
       * The ID of the account representing the customer associated with this discount.
       */
      customer_account: string | null;

      /**
       * Always true for a deleted object
       */
      deleted: true;

      /**
       * The invoice that the discount's coupon was applied to, if it was applied directly to a particular invoice.
       */
      invoice: string | null;

      /**
       * The invoice item `id` (or invoice line item `id` for invoice line items of type='subscription') that the discount's coupon was applied to, if it was applied directly to a particular invoice item or invoice line item.
       */
      invoice_item: string | null;

      /**
       * The promotion code applied to create this discount.
       */
      promotion_code: string | Stripe.PromotionCode | null;

      source: DeletedDiscount.Source;

      /**
       * Date that the coupon was applied.
       */
      start: number;

      /**
       * The subscription that this coupon is applied to, if it is applied to a particular subscription.
       */
      subscription: string | null;

      /**
       * The subscription item that this coupon is applied to, if it is applied to a particular subscription item.
       */
      subscription_item: string | null;
    }

    namespace DeletedDiscount {
      interface Source {
        /**
         * The coupon that was redeemed to create this discount.
         */
        coupon: string | Stripe.Coupon | null;

        /**
         * The source type of the discount.
         */
        type: 'coupon';
      }
    }

    /**
     * A discount represents the actual application of a [coupon](https://api.stripe.com#coupons) or [promotion code](https://api.stripe.com#promotion_codes).
     * It contains information about when the discount began, when it will end, and what it is applied to.
     *
     * Related guide: [Applying discounts to subscriptions](https://docs.stripe.com/billing/subscriptions/discounts)
     */
    interface Discount {
      /**
       * The ID of the discount object. Discounts cannot be fetched by ID. Use `expand[]=discounts` in API calls to expand discount IDs in an array.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'discount';

      /**
       * The Checkout session that this coupon is applied to, if it is applied to a particular session in payment mode. Will not be present for subscription mode.
       */
      checkout_session: string | null;

      /**
       * The ID of the customer associated with this discount.
       */
      customer: string | Stripe.Customer | Stripe.DeletedCustomer | null;

      /**
       * The ID of the account representing the customer associated with this discount.
       */
      customer_account: string | null;

      /**
       * Always true for a deleted object
       */
      deleted?: void;

      /**
       * If the coupon has a duration of `repeating`, the date that this discount will end. If the coupon has a duration of `once` or `forever`, this attribute will be null.
       */
      end: number | null;

      /**
       * The invoice that the discount's coupon was applied to, if it was applied directly to a particular invoice.
       */
      invoice: string | null;

      /**
       * The invoice item `id` (or invoice line item `id` for invoice line items of type='subscription') that the discount's coupon was applied to, if it was applied directly to a particular invoice item or invoice line item.
       */
      invoice_item: string | null;

      /**
       * The promotion code applied to create this discount.
       */
      promotion_code: string | Stripe.PromotionCode | null;

      source: Discount.Source;

      /**
       * Date that the coupon was applied.
       */
      start: number;

      /**
       * The subscription that this coupon is applied to, if it is applied to a particular subscription.
       */
      subscription: string | null;

      /**
       * The subscription item that this coupon is applied to, if it is applied to a particular subscription item.
       */
      subscription_item: string | null;
    }

    namespace Discount {
      interface Source {
        /**
         * The coupon that was redeemed to create this discount.
         */
        coupon: string | Stripe.Coupon | null;

        /**
         * The source type of the discount.
         */
        type: 'coupon';
      }
    }
  }
}
