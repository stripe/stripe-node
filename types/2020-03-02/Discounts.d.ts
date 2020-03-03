declare module 'stripe' {
  namespace Stripe {
    /**
     * The Discount object.
     */
    interface Discount {
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
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'discount';

      /**
       * Always true for a deleted object
       */
      deleted: true;
    }
  }
}
