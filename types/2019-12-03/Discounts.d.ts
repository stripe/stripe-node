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
