declare namespace Stripe {
  /**
   * The LoginLink object.
   */
  interface LoginLink {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object?: 'login_link';

    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created?: number;

    /**
     * The URL for the login link.
     */
    url?: string;
  }

  /**
   * Creates a single-use login link for an Express account to access their Stripe dashboard.
   *
   * You may only create login links for [Express accounts](https://stripe.com/docs/connect/express-accounts) connected to your platform.
   */
  interface LoginLinkCreateParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Where to redirect the user after they log out of their dashboard.
     */
    redirect_url?: string;
  }
}