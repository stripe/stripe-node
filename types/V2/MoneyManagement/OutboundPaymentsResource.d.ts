// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace MoneyManagement {
        interface OutboundPaymentCreateParams {
          /**
           * The "presentment amount" to be sent to the recipient.
           */
          amount: OutboundPaymentCreateParams.Amount;

          /**
           * From which FinancialAccount and BalanceType to pull funds from.
           */
          from: OutboundPaymentCreateParams.From;

          /**
           * To which payout method to send the OutboundPayment.
           */
          to: OutboundPaymentCreateParams.To;

          /**
           * Delivery options to be used to send the OutboundPayment.
           */
          delivery_options?: OutboundPaymentCreateParams.DeliveryOptions;

          /**
           * An arbitrary string attached to the OutboundPayment. Often useful for displaying to users.
           */
          description?: string;

          /**
           * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
           */
          metadata?: Stripe.MetadataParam;

          /**
           * The quote for this OutboundPayment. Only required for countries with regulatory mandates to display fee estimates before OutboundPayment creation.
           */
          outbound_payment_quote?: string;

          /**
           * Details about the notification settings for the OutboundPayment recipient.
           */
          recipient_notification?: OutboundPaymentCreateParams.RecipientNotification;

          /**
           * The recipient verification id for this OutboundPayment. Only required for countries with regulatory mandates to verify recipient names before OutboundPayment creation.
           */
          recipient_verification?: string;
        }

        namespace OutboundPaymentCreateParams {
          interface Amount {
            /**
             * A non-negative integer representing how much to charge in the [smallest currency unit](https://docs.stripe.com/currencies#minor-units).
             */
            value?: number;

            /**
             * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
             */
            currency?: string;
          }

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

          interface RecipientNotification {
            /**
             * Closed Enum. Configuration option to enable or disable notifications to recipients.
             * Do not send notifications when setting is NONE. Default to account setting when setting is CONFIGURED or not set.
             */
            setting: RecipientNotification.Setting;
          }

          namespace RecipientNotification {
            type Setting = 'configured' | 'none';
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
             * The payout method which the OutboundPayment uses to send payout.
             */
            payout_method?: string;

            /**
             * To which account the OutboundPayment is sent.
             */
            recipient: string;
          }
        }
      }

      namespace MoneyManagement {
        interface OutboundPaymentRetrieveParams {}
      }

      namespace MoneyManagement {
        interface OutboundPaymentListParams {
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
           * Only return OutboundPayments sent to this recipient.
           */
          recipient?: string;

          /**
           * Closed Enum. Only return OutboundPayments with this status.
           */
          status?: Array<OutboundPaymentListParams.Status>;
        }

        namespace OutboundPaymentListParams {
          type Status =
            | 'canceled'
            | 'failed'
            | 'posted'
            | 'processing'
            | 'returned';
        }
      }

      namespace MoneyManagement {
        interface OutboundPaymentCancelParams {}
      }

      namespace MoneyManagement {
        class OutboundPaymentsResource {
          /**
           * Creates an OutboundPayment.
           * @throws Stripe.InsufficientFundsError
           * @throws Stripe.FeatureNotEnabledError
           * @throws Stripe.QuotaExceededError
           * @throws Stripe.RecipientNotNotifiableError
           */
          create(
            params: OutboundPaymentCreateParams,
            options?: RequestOptions
          ): Promise<
            Stripe.Response<Stripe.V2.MoneyManagement.OutboundPayment>
          >;

          /**
           * Retrieves the details of an existing OutboundPayment by passing the unique OutboundPayment ID from either the OutboundPayment create or list response.
           */
          retrieve(
            id: string,
            params?: OutboundPaymentRetrieveParams,
            options?: RequestOptions
          ): Promise<
            Stripe.Response<Stripe.V2.MoneyManagement.OutboundPayment>
          >;
          retrieve(
            id: string,
            options?: RequestOptions
          ): Promise<
            Stripe.Response<Stripe.V2.MoneyManagement.OutboundPayment>
          >;

          /**
           * Returns a list of OutboundPayments that match the provided filters.
           */
          list(
            params?: OutboundPaymentListParams,
            options?: RequestOptions
          ): ApiListPromise<Stripe.V2.MoneyManagement.OutboundPayment>;
          list(
            options?: RequestOptions
          ): ApiListPromise<Stripe.V2.MoneyManagement.OutboundPayment>;

          /**
           * Cancels an OutboundPayment. Only processing OutboundPayments can be canceled.
           * @throws Stripe.AlreadyCanceledError
           * @throws Stripe.NotCancelableError
           */
          cancel(
            id: string,
            params?: OutboundPaymentCancelParams,
            options?: RequestOptions
          ): Promise<
            Stripe.Response<Stripe.V2.MoneyManagement.OutboundPayment>
          >;
          cancel(
            id: string,
            options?: RequestOptions
          ): Promise<
            Stripe.Response<Stripe.V2.MoneyManagement.OutboundPayment>
          >;
        }
      }
    }
  }
}
