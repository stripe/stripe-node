declare namespace Stripe {
  /**
   * The Billing object.
   */
  interface Billing {
    address?: Address;

    name?: string | null;
  }
}