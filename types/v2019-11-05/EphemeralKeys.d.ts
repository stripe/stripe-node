declare namespace Stripe {
  /**
   * The EphemeralKey object.
   */
  interface EphemeralKey {
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created?: number;

    /**
     * Time at which the key will expire. Measured in seconds since the Unix epoch.
     */
    expires?: number;

    /**
     * Unique identifier for the object.
     */
    id?: string;

    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode?: boolean;

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object?: 'ephemeral_key';

    /**
     * The key's secret. You can use this value to make authorized requests to the Stripe API.
     */
    secret?: string;
  }

  /**
   * Invalidates a short-lived API key for a given resource.
   */
  interface EphemeralKeyDeleteParams {}

  /**
   * Creates a short-lived API key for a given resource.
   */
  interface EphemeralKeyCreateParams {
    /**
     * The ID of the Customer you'd like to modify using the resulting ephemeral key.
     */
    customer?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * The ID of the Issuing Card you'd like to access using the resulting ephemeral key.
     */
    issuing_card?: string;
  }

  class EphemeralKeysResource {
    /**
     * Invalidates a short-lived API key for a given resource.
     */
    del(
      id: string,
      params?: EphemeralKeyDeleteParams,
      options?: RequestOptions
    ): Promise<EphemeralKey>;

    /**
     * Creates a short-lived API key for a given resource.
     */
    create(
      params?: EphemeralKeyCreateParams,
      options?: RequestOptions
    ): Promise<EphemeralKey>;
  }
}