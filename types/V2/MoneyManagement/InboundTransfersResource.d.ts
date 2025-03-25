// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace MoneyManagement {
        interface InboundTransferCreateParams {
          /**
           * The amount, in specified currency, by which the FinancialAccount balance will increase due to the InboundTransfer.
           */
          amount: Amount;

          /**
           * Object containing details about where the funds will originate from.
           */
          from: InboundTransferCreateParams.From;

          /**
           * Object containing details about where the funds will land.
           */
          to: InboundTransferCreateParams.To;

          /**
           * An optional, freeform description field intended to store metadata.
           */
          description?: string;
        }

        namespace InboundTransferCreateParams {
          interface From {
            /**
             * An optional currency field used to specify which currency is debited from the Payment Method.
             * Since many Payment Methods support only one currency, this field is optional.
             */
            currency?: string;

            /**
             * ID of the Payment Method using which IBT will be made.
             */
            payment_method: string;
          }

          interface To {
            /**
             * The currency in which funds will land in.
             */
            currency: string;

            /**
             * The FinancialAccount that funds will land in.
             */
            financial_account: string;
          }
        }
      }

      namespace MoneyManagement {
        interface InboundTransferRetrieveParams {}
      }

      namespace MoneyManagement {
        interface InboundTransferListParams {
          /**
           * Filter for objects created at the specified timestamp.
           * Must be an RFC 3339 date & time value, for example: 2022-09-18T13:22:00Z.
           */
          created?: string;

          /**
           * Filter for objects created after the specified timestamp.
           * Must be an RFC 3339 date & time value, for example: 2022-09-18T13:22:00Z.
           */
          created_gt?: string;

          /**
           * Filter for objects created on or after the specified timestamp.
           * Must be an RFC 3339 date & time value, for example: 2022-09-18T13:22:00Z.
           */
          created_gte?: string;

          /**
           * Filter for objects created before the specified timestamp.
           * Must be an RFC 3339 date & time value, for example: 2022-09-18T13:22:00Z.
           */
          created_lt?: string;

          /**
           * Filter for objects created on or before the specified timestamp.
           * Must be an RFC 3339 date & time value, for example: 2022-09-18T13:22:00Z.
           */
          created_lte?: string;

          /**
           * The page limit.
           */
          limit?: number;
        }
      }

      namespace MoneyManagement {
        class InboundTransfersResource {
          /**
           * InboundTransfers APIs are used to create, retrieve or list InboundTransfers.
           * @throws Stripe.BlockedByStripeError
           */
          create(
            params: InboundTransferCreateParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.InboundTransfer>>;

          /**
           * Retrieve an InboundTransfer by ID.
           */
          retrieve(
            id: string,
            params?: InboundTransferRetrieveParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.InboundTransfer>>;
          retrieve(
            id: string,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.InboundTransfer>>;

          /**
           * Retrieves a list of InboundTransfers.
           */
          list(
            params?: InboundTransferListParams,
            options?: RequestOptions
          ): ApiListPromise<Stripe.V2.InboundTransfer>;
          list(
            options?: RequestOptions
          ): ApiListPromise<Stripe.V2.InboundTransfer>;
        }
      }
    }
  }
}
