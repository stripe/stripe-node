declare namespace Stripe {
  /**
   * The NextAction object.
   */
  interface NextAction {
    redirect_to_url?: NextActionRedirectToUrl;

    /**
     * Type of the next action to perform, one of `redirect_to_url` or `use_stripe_sdk`.
     */
    type?: string;

    /**
     * When confirming a SetupIntent with Stripe.js, Stripe.js depends on the contents of this dictionary to invoke authentication flows. The shape of the contents is subject to change and is only intended to be used by Stripe.js.
     */
    use_stripe_sdk?: NextAction.UseStripeSdk;
  }

  namespace NextAction {
    interface UseStripeSdk {}
  }
}