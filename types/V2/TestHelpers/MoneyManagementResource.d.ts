// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace TestHelpers {
        interface MoneyManagementRecipientVerificationsParams {
          /**
           * Expected match level of the RecipientVerification to be created: `match`, `close_match`, `no_match`, `unavailable`.
           */
          match_result: MoneyManagementRecipientVerificationsParams.MatchResult;

          /**
           * ID of the payout method.
           */
          payout_method: string;

          /**
           * ID of the recipient account. Required if the recipient distinct from the sender. Leave empty if the recipient and sender are the same entity (i.e. for me-to-me payouts).
           */
          recipient?: string;
        }

        namespace MoneyManagementRecipientVerificationsParams {
          type MatchResult =
            | 'close_match'
            | 'match'
            | 'no_match'
            | 'unavailable';
        }
      }

      namespace TestHelpers {
        class MoneyManagementResource {
          /**
           * Creates a RecipientVerification with a specified match result for testing purposes in a Sandbox environment.
           */
          recipientVerifications(
            params: MoneyManagementRecipientVerificationsParams,
            options?: RequestOptions
          ): Promise<
            Stripe.Response<Stripe.V2.MoneyManagement.RecipientVerification>
          >;
        }
      }
    }
  }
}
