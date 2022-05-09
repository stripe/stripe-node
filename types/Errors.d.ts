declare module 'stripe' {
  namespace Stripe {
    /**
     * @deprecated The {@link Stripe.Errors} type is deprecated, please use the {@link Stripe.errors} namespace directly.
     */
    export type Errors = {
      generate: typeof StripeError.generate;
      StripeError: typeof StripeError;
      StripeCardError: typeof StripeCardError;
      StripeInvalidRequestError: typeof StripeInvalidRequestError;
      StripeAPIError: typeof StripeAPIError;
      StripeAuthenticationError: typeof StripeAuthenticationError;
      StripePermissionError: typeof StripePermissionError;
      StripeRateLimitError: typeof StripeRateLimitError;
      StripeConnectionError: typeof StripeConnectionError;
      StripeSignatureVerificationError: typeof StripeSignatureVerificationError;
      StripeIdempotencyError: typeof StripeIdempotencyError;
      StripeInvalidGrantError: typeof StripeInvalidGrantError;
    };

    export type RawErrorType =
      | 'card_error'
      | 'invalid_request_error'
      | 'api_error'
      | 'idempotency_error'
      | 'rate_limit_error'
      | 'authentication_error'
      | 'invalid_grant';

    export type StripeRawError = {
      message?: string;

      type: RawErrorType;

      headers?: {[header: string]: string};
      statusCode?: number;
      requestId?: string;

      code?: string;
      doc_code?: string;
      decline_code?: string;
      param?: string;
      detail?: string;

      charge?: string;
      payment_intent?: Stripe.PaymentIntent;
      payment_method?: Stripe.PaymentMethod;
      setup_intent?: Stripe.SetupIntent;
      source?: Stripe.Source;
    };

    /**
     * @deprecated The {@link Stripe.StripeError} type is deprecated, please use {@link Stripe.errors.StripeError}.
     * The runtime StripeError type is located in the {@link errors} namespace. This definition was added by mistake but kept for backwards compatibility.
     */
    class StripeError extends Error {
      constructor(rawError: StripeRawError);

      static generate(
        rawError: StripeRawError & {type: 'card_error'}
      ): StripeCardError;
      static generate(
        rawError: StripeRawError & {type: 'invalid_request_error'}
      ): StripeInvalidRequestError;
      static generate(
        rawError: StripeRawError & {type: 'api_error'}
      ): StripeAPIError;
      static generate(
        rawError: StripeRawError & {type: 'authentication_error'}
      ): StripeAuthenticationError;
      static generate(
        rawError: StripeRawError & {type: 'rate_limit_error'}
      ): StripeRateLimitError;
      static generate(
        rawError: StripeRawError & {type: 'idempotency_error'}
      ): StripeIdempotencyError;
      static generate(
        rawError: StripeRawError & {type: 'invalid_grant'}
      ): StripeInvalidGrantError;
      static generate(
        rawError: StripeRawError & {type: RawErrorType}
      ): StripeError;

      /**
       * A human-readable message giving more details about the error. For card errors, these messages can
       * be shown to your users.
       */
      readonly message: string;

      readonly type: keyof Errors;

      /**
       * See the "error types" section at https://stripe.com/docs/api/errors
       */
      readonly rawType: RawErrorType;

      /**
       * For card errors, a short string describing the kind of card error that occurred.
       *
       * @docs https://stripe.com/docs/error-codes
       */
      readonly code?: string;

      /**
       * A URL to more information about the error code reported.
       *
       * @docs https://stripe.com/docs/error-codes
       */
      readonly doc_url?: string;

      /**
       * Typically a 4xx or 5xx.
       */
      readonly statusCode?: number;

      readonly raw: unknown;

      readonly headers: {
        [key: string]: string;
      };

      readonly requestId: string;

      /**
       * The parameter the error relates to if the error is parameter-specific. You can use this to display a
       * message near the correct form field, for example.
       */
      readonly param?: string;

      /** @deprecated */
      readonly detail?: unknown;

      readonly charge?: string;
      readonly decline_code?: string;
      readonly payment_intent?: PaymentIntent;
      readonly payment_method?: PaymentMethod;
      readonly payment_method_type?: string;
      readonly setup_intent?: SetupIntent;
      readonly source?: Source;
    }

    /**
     * Card errors are the most common type of error you should expect to handle.
     * They result when the user enters a card that can't be charged for some reason.
     *
     * @deprecated The {@link Stripe.StripeCardError} type is deprecated, please use {@link Stripe.errors.StripeCardError}.
     * The runtime StripeCardError type is located in the {@link errors} namespace. This definition was added by mistake but kept for backwards compatibility.
     */
    class StripeCardError extends StripeError {
      readonly type: 'StripeCardError';
      readonly rawType: 'card_error';

      /**
       * @docs https://stripe.com/docs/declines/codes
       */
      readonly decline_code: string;
    }

    /**
     * Invalid request errors arise when your request has invalid parameters.
     *
     * @deprecated The {@link Stripe.StripeInvalidRequestError} type is deprecated, please use {@link Stripe.errors.StripeInvalidRequestError}.
     * The runtime StripeInvalidRequestError type is located in the {@link errors} namespace. This definition was added by mistake but kept for backwards compatibility.
     */
    class StripeInvalidRequestError extends StripeError {
      readonly type: 'StripeInvalidRequestError';
      readonly rawType: 'invalid_request_error';
    }

    /**
     * API errors cover any other type of problem (e.g., a temporary problem with Stripe's servers),
     * and are extremely uncommon.
     *
     * It could also be raised in the case that a new error has been introduced in the API,
     * but this version of the library doesn't know how to handle it.
     *
     * @deprecated The {@link Stripe.StripeAPIError} type is deprecated, please use {@link Stripe.errors.StripeAPIError}.
     * The runtime StripeAPIError type is located in the {@link errors} namespace. This definition was added by mistake but kept for backwards compatibility.
     */
    class StripeAPIError extends StripeError {
      readonly type: 'StripeAPIError';
      readonly rawType: 'api_error';
    }

    /**
     * Failure to properly authenticate yourself in the request.
     *
     * @deprecated The {@link Stripe.StripeAuthenticationError} type is deprecated, please use {@link Stripe.errors.StripeAuthenticationError}.
     * The runtime StripeAuthenticationError type is located in the {@link errors} namespace. This definition was added by mistake but kept for backwards compatibility.
     */
    class StripeAuthenticationError extends StripeError {
      readonly type: 'StripeAuthenticationError';
      readonly rawType: 'authentication_error';
    }

    /**
     * Access was attempted on a resource that wasn't allowed.
     *
     * @deprecated The {@link Stripe.StripePermissionError} type is deprecated, please use {@link Stripe.errors.StripePermissionError}.
     * The runtime StripePermissionError type is located in the {@link errors} namespace. This definition was added by mistake but kept for backwards compatibility.
     */
    class StripePermissionError extends StripeError {
      readonly type: 'StripePermissionError';
    }

    /**
     * Too many requests hit the API too quickly.
     * @docs https://stripe.com/docs/rate-limits
     *
     * @deprecated The {@link Stripe.StripeRateLimitError} type is deprecated, please use {@link Stripe.errors.StripeRateLimitError}.
     * The runtime StripeRateLimitError type is located in the {@link errors} namespace. This definition was added by mistake but kept for backwards compatibility.
     */
    class StripeRateLimitError extends StripeError {
      readonly type: 'StripeRateLimitError';
      readonly rawType: 'rate_limit_error';
    }

    /**
     * The library cannot connect to Stripe.
     * This can happen for a variety of reasons,
     * such as loss of network connectivity or a bad TLS certificate.
     *
     * @deprecated The {@link Stripe.StripeConnectionError} type is deprecated, please use {@link Stripe.errors.StripeConnectionError}.
     * The runtime StripeConnectionError type is located in the {@link errors} namespace. This definition was added by mistake but kept for backwards compatibility.
     */
    class StripeConnectionError extends StripeError {
      readonly type: 'StripeConnectionError';
    }

    /**
     * The signature verification for a webhook failed.
     * @docs https://stripe.com/docs/webhooks/signatures
     *
     * @deprecated The {@link Stripe.StripeSignatureVerificationError} type is deprecated, please use {@link Stripe.errors.StripeSignatureVerificationError}.
     * The runtime StripeSignatureVerificationError type is located in the {@link errors} namespace. This definition was added by mistake but kept for backwards compatibility.
     */
    class StripeSignatureVerificationError extends StripeError {
      readonly type: 'StripeSignatureVerificationError';
    }

    /**
     * Idempotency errors occur when an `Idempotency-Key` is re-used on a request that does not match the first request's API endpoint and parameters.
     * @docs https://stripe.com/docs/api/idempotent_requests?lang=node
     *
     * @deprecated The {@link Stripe.StripeIdempotencyError} type is deprecated, please use {@link Stripe.errors.StripeIdempotencyError}.
     * The runtime StripeIdempotencyError type is located in the {@link errors} namespace. This definition was added by mistake but kept for backwards compatibility.
     */
    class StripeIdempotencyError extends StripeError {
      readonly type: 'StripeIdempotencyError';
      readonly rawType: 'idempotency_error';
    }

    /**
     * InvalidGrantError is raised when a specified code doesn't exist, is
     * expired, has been used, or doesn't belong to you; a refresh token doesn't
     * exist, or doesn't belong to you; or if an API key's mode (live or test)
     * doesn't match the mode of a code or refresh token.
     *
     * @deprecated The {@link Stripe.StripeInvalidGrantError} type is deprecated, please use {@link Stripe.errors.StripeInvalidGrantError}.
     * The runtime StripeInvalidGrantError type is located in the {@link errors} namespace. This definition was added by mistake but kept for backwards compatibility.
     */
    class StripeInvalidGrantError extends StripeError {
      readonly type: 'StripeInvalidGrantError';
      readonly rawType: 'invalid_grant';
    }

    namespace errors {
      function generate(
        rawError: StripeRawError & {type: 'card_error'}
      ): StripeCardError;
      function generate(
        rawError: StripeRawError & {type: 'invalid_request_error'}
      ): StripeInvalidRequestError;
      function generate(
        rawError: StripeRawError & {type: 'api_error'}
      ): StripeAPIError;
      function generate(
        rawError: StripeRawError & {type: 'authentication_error'}
      ): StripeAuthenticationError;
      function generate(
        rawError: StripeRawError & {type: 'rate_limit_error'}
      ): StripeRateLimitError;
      function generate(
        rawError: StripeRawError & {type: 'idempotency_error'}
      ): StripeIdempotencyError;
      function generate(
        rawError: StripeRawError & {type: 'invalid_grant'}
      ): StripeInvalidGrantError;
      function generate(
        rawError: StripeRawError & {type: RawErrorType}
      ): StripeError;

      class StripeError extends Error {
        constructor(rawError: StripeRawError);

        static generate(
          rawError: StripeRawError & {type: 'card_error'}
        ): StripeCardError;
        static generate(
          rawError: StripeRawError & {type: 'invalid_request_error'}
        ): StripeInvalidRequestError;
        static generate(
          rawError: StripeRawError & {type: 'api_error'}
        ): StripeAPIError;
        static generate(
          rawError: StripeRawError & {type: 'authentication_error'}
        ): StripeAuthenticationError;
        static generate(
          rawError: StripeRawError & {type: 'rate_limit_error'}
        ): StripeRateLimitError;
        static generate(
          rawError: StripeRawError & {type: 'idempotency_error'}
        ): StripeIdempotencyError;
        static generate(
          rawError: StripeRawError & {type: 'invalid_grant'}
        ): StripeInvalidGrantError;
        static generate(
          rawError: StripeRawError & {type: RawErrorType}
        ): StripeError;

        /**
         * A human-readable message giving more details about the error. For card errors, these messages can
         * be shown to your users.
         */
        readonly message: string;

        readonly type: keyof Errors;

        /**
         * See the "error types" section at https://stripe.com/docs/api/errors
         */
        readonly rawType: RawErrorType;

        /**
         * For card errors, a short string describing the kind of card error that occurred.
         *
         * @docs https://stripe.com/docs/error-codes
         */
        readonly code?: string;

        /**
         * A URL to more information about the error code reported.
         *
         * @docs https://stripe.com/docs/error-codes
         */
        readonly doc_url?: string;

        /**
         * Typically a 4xx or 5xx.
         */
        readonly statusCode?: number;

        readonly raw: unknown;

        readonly headers: {
          [key: string]: string;
        };

        readonly requestId: string;

        /**
         * The parameter the error relates to if the error is parameter-specific. You can use this to display a
         * message near the correct form field, for example.
         */
        readonly param?: string;

        /** @deprecated */
        readonly detail?: unknown;

        readonly charge?: string;
        readonly decline_code?: string;
        readonly payment_intent?: PaymentIntent;
        readonly payment_method?: PaymentMethod;
        readonly payment_method_type?: string;
        readonly setup_intent?: SetupIntent;
        readonly source?: Source;
      }

      /**
       * Card errors are the most common type of error you should expect to handle.
       * They result when the user enters a card that can't be charged for some reason.
       */
      class StripeCardError extends StripeError {
        readonly type: 'StripeCardError';
        readonly rawType: 'card_error';

        /**
         * @docs https://stripe.com/docs/declines/codes
         */
        readonly decline_code: string;
      }

      /**
       * Invalid request errors arise when your request has invalid parameters.
       */
      class StripeInvalidRequestError extends StripeError {
        readonly type: 'StripeInvalidRequestError';
        readonly rawType: 'invalid_request_error';
      }

      /**
       * API errors cover any other type of problem (e.g., a temporary problem with Stripe's servers),
       * and are extremely uncommon.
       *
       * It could also be raised in the case that a new error has been introduced in the API,
       * but this version of the library doesn't know how to handle it.
       */
      class StripeAPIError extends StripeError {
        readonly type: 'StripeAPIError';
        readonly rawType: 'api_error';
      }

      /**
       * Failure to properly authenticate yourself in the request.
       */
      class StripeAuthenticationError extends StripeError {
        readonly type: 'StripeAuthenticationError';
        readonly rawType: 'authentication_error';
      }

      /**
       * Access was attempted on a resource that wasn't allowed.
       */
      class StripePermissionError extends StripeError {
        readonly type: 'StripePermissionError';
      }

      /**
       * Too many requests hit the API too quickly.
       * @docs https://stripe.com/docs/rate-limits
       */
      class StripeRateLimitError extends StripeError {
        readonly type: 'StripeRateLimitError';
        readonly rawType: 'rate_limit_error';
      }

      /**
       * The library cannot connect to Stripe.
       * This can happen for a variety of reasons,
       * such as loss of network connectivity or a bad TLS certificate.
       */
      class StripeConnectionError extends StripeError {
        readonly type: 'StripeConnectionError';
      }

      /**
       * The signature verification for a webhook failed.
       * @docs https://stripe.com/docs/webhooks/signatures
       */
      class StripeSignatureVerificationError extends StripeError {
        readonly type: 'StripeSignatureVerificationError';
      }

      /**
       * Idempotency errors occur when an `Idempotency-Key` is re-used on a request that does not match the first request's API endpoint and parameters.
       * @docs https://stripe.com/docs/api/idempotent_requests?lang=node
       */
      class StripeIdempotencyError extends StripeError {
        readonly type: 'StripeIdempotencyError';
        readonly rawType: 'idempotency_error';
      }

      /**
       * InvalidGrantError is raised when a specified code doesn't exist, is
       * expired, has been used, or doesn't belong to you; a refresh token doesn't
       * exist, or doesn't belong to you; or if an API key's mode (live or test)
       * doesn't match the mode of a code or refresh token.
       */
      class StripeInvalidGrantError extends StripeError {
        readonly type: 'StripeInvalidGrantError';
        readonly rawType: 'invalid_grant';
      }
    }
  }
}
