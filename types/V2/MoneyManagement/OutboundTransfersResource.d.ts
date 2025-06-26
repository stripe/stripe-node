// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace MoneyManagement {
        interface OutboundTransferCreateParams {
          /**
           * The "presentment amount" for the OutboundPayment.
           */
          amount: Amount;

          /**
           * The FinancialAccount to pull funds from.
           */
          from: OutboundTransferCreateParams.From;

          /**
           * To which payout method to send the OutboundTransfer.
           */
          to: OutboundTransferCreateParams.To;

          /**
           * Delivery options to be used to send the OutboundTransfer.
           */
          delivery_options?: OutboundTransferCreateParams.DeliveryOptions;

          /**
           * An arbitrary string attached to the OutboundTransfer. Often useful for displaying to users.
           */
          description?: string;

          /**
           * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
           */
          metadata?: Stripe.MetadataParam;
        }

        namespace OutboundTransferCreateParams {
          interface DeliveryOptions {
            /**
             * Open Enum. Method for bank account.
             */
            bank_account?: DeliveryOptions.BankAccount;
          }

          namespace DeliveryOptions {
            type BankAccount = 'automatic' | 'local' | 'wire';
          }

          interface From {
            /**
             * Describes the FinancialAmount's currency drawn from.
             */
            currency: string;

            /**
             * The FinancialAccount that funds were pulled from.
             */
            financial_account: string;
          }

          interface To {
            /**
             * Describes the currency to send to the recipient.
             * If included, this currency must match a currency supported by the destination.
             * Can be omitted in the following cases:
             * - destination only supports one currency
             * - destination supports multiple currencies and one of the currencies matches the FA currency
             * - destination supports multiple currencies and one of the currencies matches the presentment currency
             * Note - when both FA currency and presentment currency are supported, we pick the FA currency to minimize FX.
             */
            currency?: string;

            /**
             * The payout method which the OutboundTransfer uses to send payout.
             */
            payout_method: string;
          }
        }
      }

      namespace MoneyManagement {
        interface OutboundTransferRetrieveParams {}
      }

      namespace MoneyManagement {
        interface OutboundTransferListParams {
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
           * The maximum number of results to return.
           */
          limit?: number;

          /**
           * Closed Enum. Only return OutboundTransfers with this status.
           */
          status?: Array<OutboundTransferListParams.Status>;
        }

        namespace OutboundTransferListParams {
          type Status =
            | 'canceled'
            | 'failed'
            | 'posted'
            | 'processing'
            | 'returned';
        }
      }

      namespace MoneyManagement {
        interface OutboundTransferCancelParams {}
      }

      namespace MoneyManagement {
        class OutboundTransfersResource {
          /**
           * Creates an OutboundTransfer.
           * @throws Stripe.InsufficientFundsError
           * @throws Stripe.FeatureNotEnabledError
           */
          create(
            params: OutboundTransferCreateParams,
            options?: RequestOptions
          ): Promise<
            Stripe.Response<Stripe.V2.MoneyManagement.OutboundTransfer>
          >;

          /**
           * Retrieves the details of an existing OutboundTransfer by passing the unique OutboundTransfer ID from either the OutboundPayment create or list response.
           */
          retrieve(
            id: string,
            params?: OutboundTransferRetrieveParams,
            options?: RequestOptions
          ): Promise<
            Stripe.Response<Stripe.V2.MoneyManagement.OutboundTransfer>
          >;
          retrieve(
            id: string,
            options?: RequestOptions
          ): Promise<
            Stripe.Response<Stripe.V2.MoneyManagement.OutboundTransfer>
          >;

          /**
           * Returns a list of OutboundTransfers that match the provided filters.
           */
          list(
            params?: OutboundTransferListParams,
            options?: RequestOptions
          ): ApiListPromise<Stripe.V2.MoneyManagement.OutboundTransfer>;
          list(
            options?: RequestOptions
          ): ApiListPromise<Stripe.V2.MoneyManagement.OutboundTransfer>;

          /**
           * Cancels an OutboundTransfer. Only processing OutboundTransfers can be canceled.
           * @throws Stripe.AlreadyCanceledError
           * @throws Stripe.NotCancelableError
           */
          cancel(
            id: string,
            params?: OutboundTransferCancelParams,
            options?: RequestOptions
          ): Promise<
            Stripe.Response<Stripe.V2.MoneyManagement.OutboundTransfer>
          >;
          cancel(
            id: string,
            options?: RequestOptions
          ): Promise<
            Stripe.Response<Stripe.V2.MoneyManagement.OutboundTransfer>
          >;
        }
      }
    }
  }
}
