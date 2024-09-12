// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * The InvoiceRenderingTemplate object.
     */
    interface InvoiceRenderingTemplate {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'invoice_rendering_template';

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata: Stripe.Metadata | null;

      /**
       * A brief description of the template, hidden from customers
       */
      nickname: string | null;

      /**
       * The status of the template, one of `active` or `archived`.
       */
      status: InvoiceRenderingTemplate.Status;

      /**
       * Version of this template; version increases by one when an update on the template changes any field that controls invoice rendering
       */
      version: number;
    }

    namespace InvoiceRenderingTemplate {
      type Status = 'active' | 'archived';
    }
  }
}
