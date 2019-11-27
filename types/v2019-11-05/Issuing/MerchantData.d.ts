declare namespace Stripe {
  namespace issuing {
    /**
     * The MerchantData object.
     */
    interface MerchantData {
      /**
       * A categorization of the seller's type of business. See our [merchant categories guide](https://stripe.com/docs/issuing/merchant-categories) for a list of possible values.
       */
      category?: string;

      /**
       * City where the seller is located
       */
      city?: string | null;

      /**
       * Country where the seller is located
       */
      country?: string | null;

      /**
       * Name of the seller
       */
      name?: string | null;

      /**
       * Identifier assigned to the seller by the card brand
       */
      network_id?: string;

      /**
       * Postal code where the seller is located
       */
      postal_code?: string | null;

      /**
       * State where the seller is located
       */
      state?: string | null;

      /**
       * The url an online purchase was made from
       */
      url?: string | null;
    }
  }
}