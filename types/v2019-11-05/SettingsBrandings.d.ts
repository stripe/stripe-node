declare namespace Stripe {
  /**
   * The SettingsBranding object.
   */
  interface SettingsBranding {
    /**
     * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) An icon for the account. Must be square and at least 128px x 128px.
     */
    icon?: string | File | null;

    /**
     * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) A logo for the account that will be used in Checkout instead of the icon and without the account's name next to it if provided. Must be at least 128px x 128px.
     */
    logo?: string | File | null;

    /**
     * A CSS hex color value representing the primary branding color for this account
     */
    primary_color?: string | null;
  }
}