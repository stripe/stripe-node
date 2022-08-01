// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace TestHelpers {
      namespace Treasury {
        interface OutboundPaymentFailParams {
          /**
           * Specifies which fields in the response should be expanded.
           */
          expand?: Array<string>;
        }
      }

      namespace Treasury {
        interface OutboundPaymentPostParams {
          /**
           * Specifies which fields in the response should be expanded.
           */
          expand?: Array<string>;
        }
      }

      namespace Treasury {
        interface OutboundPaymentReturnOutboundPaymentParams {
          /**
           * Specifies which fields in the response should be expanded.
           */
          expand?: Array<string>;

          /**
           * Optional hash to set the the return code.
           */
          returned_details?: OutboundPaymentReturnOutboundPaymentParams.ReturnedDetails;
        }

        namespace OutboundPaymentReturnOutboundPaymentParams {
          interface ReturnedDetails {
            /**
             * The return code to be set on the OutboundPayment object.
             */
            code?: ReturnedDetails.Code;
          }

          namespace ReturnedDetails {
            type Code =
              | 'account_closed'
              | 'account_frozen'
              | 'bank_account_restricted'
              | 'bank_ownership_changed'
              | 'declined'
              | 'incorrect_account_holder_name'
              | 'invalid_account_number'
              | 'invalid_currency'
              | 'no_account'
              | 'other';
          }
        }
      }

      namespace Treasury {
        class OutboundPaymentsResource {
          /**
           * Transitions a test mode created OutboundPayment to the failed status. The OutboundPayment must already be in the processing state.
           */
          fail(
            id: string,
            params?: OutboundPaymentFailParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.Treasury.OutboundPayment>>;
          fail(
            id: string,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.Treasury.OutboundPayment>>;

          /**
           * Transitions a test mode created OutboundPayment to the posted status. The OutboundPayment must already be in the processing state.
           */
          post(
            id: string,
            params?: OutboundPaymentPostParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.Treasury.OutboundPayment>>;
          post(
            id: string,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.Treasury.OutboundPayment>>;

          /**
           * Transitions a test mode created OutboundPayment to the returned status. The OutboundPayment must already be in the processing state.
           */
          returnOutboundPayment(
            id: string,
            params?: OutboundPaymentReturnOutboundPaymentParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.Treasury.OutboundPayment>>;
          returnOutboundPayment(
            id: string,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.Treasury.OutboundPayment>>;
        }
      }
    }
  }
}
