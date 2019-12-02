declare namespace Stripe {
  export class Webhooks {
    /**
     * Constructs and verifies the signature of an Event from the provided details.
     *
     * @param {string} payload    Raw text body payload received from Stripe
     * @param {string} header     Value of the `stripe-signature` header from Stripe
     * @param {string} secret     Your Webhook Signing Secret
     * @param {number} tolerance  Seconds of tolerance on timestamps
     *
     * @returns Stripe.Event
     *
     * @throws Error.StripeSignatureVerificationError
     */
    constructEvent(payload: string, header :string, secret: string, tolerance?: number): Stripe.Event;

    /**
     * Generates a header to be used for webhook mocking
     *
     * @typedef {object} opts
     * @param {string} payload - JSON stringified payload object, containing the 'id' and 'object' parameters
     * @param {number} timestamp - Timestamp of the header. Defaults to Date.now()
     * @param {string} secret - Stripe webhook secret 'whsec_...'
     * @param {string} scheme - Version of API to hit. Defaults to 'v1'.
     * @param {string} signature - Computed webhook signature
     */
    generateTestHeaderString(opts: {
      timestamp: number
      payload: string
      secret: string
      scheme?: string
      signature: string
    }) : string;

    signature: Signature;
  }

  namespace Error {
    interface StripeSignatureVerificationError {}
  }

  export class Signature {
    EXPECTED_SCHEME: 'v1'

    _computeSignature(payload: string, secret: string): string;
    verifyHeader(payload:string , header:string, secret:string, tolerance?:number):void;
    parseHeader(header:string, scheme?: string): {
      t: number
      v0: string
      v1: string
    };
  }
}
