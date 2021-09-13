/// <reference types="node" />

declare module 'stripe-search-beta' {
  namespace Stripe {
    export class Webhooks {
      /**
       * Constructs and verifies the signature of an Event from the provided details.
       *
       * @throws Stripe.errors.StripeSignatureVerificationError
       */
      constructEvent(
        /**
         * Raw text body payload received from Stripe.
         */
        payload: string | Buffer,

        /**
         * Value of the `stripe-signature` header from Stripe.
         * Typically a string.
         *
         * Note that this is typed to accept an array of strings
         * so that it works seamlessly with express's types,
         * but will throw if an array is passed in practice
         * since express should never return this header as an array,
         * only a string.
         */
        header: string | Buffer | Array<string>,

        /**
         * Your Webhook Signing Secret for this endpoint (e.g., 'whsec_...').
         * You can get this [in your dashboard](https://dashboard.stripe.com/webhooks).
         */
        secret: string,

        /**
         * Seconds of tolerance on timestamps.
         */
        tolerance?: number
      ): Stripe.Event;

      /**
       * Generates a header to be used for webhook mocking
       */
      generateTestHeaderString(opts: {
        /**
         * JSON stringified payload object, containing the 'id' and 'object' parameters.
         */
        payload: string;

        /**
         * Timestamp of the header. Defaults to Date.now().
         */
        timestamp?: number;

        /**
         * Stripe webhook secret, e.g., 'whsec_...'.
         */
        secret: string;

        /**
         * Version of API to hit. Defaults to 'v1'.
         */
        scheme?: string;

        /**
         * Computed webhook signature.
         */
        signature?: string;
      }): string;

      signature: Signature;
    }

    export class Signature {
      EXPECTED_SCHEME: 'v1';

      _computeSignature(payload: string, secret: string): string;
      verifyHeader(
        payload: string,
        header: string,
        secret: string,
        tolerance?: number
      ): void;
      parseHeader(
        header: string,
        scheme?: string
      ): {
        t: number;
        v0: string;
        v1: string;
      };
    }
  }
}
