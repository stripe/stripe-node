declare namespace Stripe {
  /**
   * The NextActionRedirectToUrl object.
   */
  interface NextActionRedirectToUrl {
    /**
     * If the customer does not exit their browser while authenticating, they will be redirected to this specified URL after completion.
     */
    return_url?: string | null;

    /**
     * The URL you must redirect your customer to in order to authenticate.
     */
    url?: string | null;
  }
}