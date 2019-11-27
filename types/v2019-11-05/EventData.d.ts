declare namespace Stripe {
  /**
   * The EventData object.
   */
  interface EventData {
    /**
     * Object containing the API resource relevant to the event. For example, an `invoice.created` event will have a full [invoice object](#invoice_object) as the value of the object key.
     */
    object?: EventData.Object;

    /**
     * Object containing the names of the attributes that have changed, and their previous values (sent along only with *.updated events).
     */
    previous_attributes?: EventData.PreviousAttributes;
  }

  namespace EventData {
    interface Object {}

    interface PreviousAttributes {}
  }
}