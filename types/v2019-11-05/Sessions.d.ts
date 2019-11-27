declare namespace Stripe {
  /**
   * The Session object.
   */
  interface Session {
    /**
     * The browser used in this browser session (e.g., `Chrome`).
     */
    browser?: string | null;

    /**
     * Information about the device used for the browser session (e.g., `Samsung SM-G930T`).
     */
    device?: string | null;

    /**
     * The platform for the browser session (e.g., `Macintosh`).
     */
    platform?: string | null;

    /**
     * The version for the browser session (e.g., `61.0.3163.100`).
     */
    version?: string | null;
  }
}