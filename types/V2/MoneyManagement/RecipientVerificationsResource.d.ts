// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace MoneyManagement {
        interface RecipientVerificationCreateParams {
          /**
           * ID of the payout method.
           */
          payout_method: string;

          /**
           * ID of the recipient account. Required if the recipient distinct from the sender. Leave empty if the recipient and sender are the same entity (i.e. for me-to-me payouts).
           */
          recipient?: string;
        }
      }

      namespace MoneyManagement {
        interface RecipientVerificationRetrieveParams {}
      }

      namespace MoneyManagement {
        interface RecipientVerificationAcknowledgeParams {}
      }

      namespace MoneyManagement {
        class RecipientVerificationsResource {
          /**
           * Creates a RecipientVerification to verify the recipient you intend to send funds to.
           */
          create(
            params: RecipientVerificationCreateParams,
            options?: RequestOptions
          ): Promise<
            Stripe.Response<Stripe.V2.MoneyManagement.RecipientVerification>
          >;

          /**
           * Retrieves the details of an existing RecipientVerification by passing the unique RecipientVerification ID.
           */
          retrieve(
            id: string,
            params?: RecipientVerificationRetrieveParams,
            options?: RequestOptions
          ): Promise<
            Stripe.Response<Stripe.V2.MoneyManagement.RecipientVerification>
          >;
          retrieve(
            id: string,
            options?: RequestOptions
          ): Promise<
            Stripe.Response<Stripe.V2.MoneyManagement.RecipientVerification>
          >;

          /**
           * Acknowledges an existing RecipientVerification. Only RecipientVerification awaiting acknowledgement can be acknowledged.
           */
          acknowledge(
            id: string,
            params?: RecipientVerificationAcknowledgeParams,
            options?: RequestOptions
          ): Promise<
            Stripe.Response<Stripe.V2.MoneyManagement.RecipientVerification>
          >;
          acknowledge(
            id: string,
            options?: RequestOptions
          ): Promise<
            Stripe.Response<Stripe.V2.MoneyManagement.RecipientVerification>
          >;
        }
      }
    }
  }
}
