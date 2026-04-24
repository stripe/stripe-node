// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {RangeQueryParam, Decimal} from '../../../shared.js';
import {RequestOptions, ApiListPromise, Response} from '../../../lib.js';

export class EventResource extends StripeResource {
  /**
   * List events, going back up to 30 days.
   */
  list(
    params?: V2.Core.EventListParams,
    options?: RequestOptions
  ): ApiListPromise<Event> {
    const transformResponseData = (response: any): any => {
      return {
        ...response,
        data: response.data.map(this.addFetchRelatedObjectIfNeeded.bind(this)),
      };
    };
    return this._makeRequest('GET', '/v2/core/events', params, options, {
      methodType: 'list',
      transformResponseData: transformResponseData,
    }) as any;
  }
  /**
   * Retrieves the details of an event.
   */
  retrieve(
    id: string,
    params?: V2.Core.EventRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<Event>> {
    const transformResponseData = (response: any): any => {
      return this.addFetchRelatedObjectIfNeeded(response);
    };
    return this._makeRequest('GET', `/v2/core/events/${id}`, params, options, {
      transformResponseData: transformResponseData,
    }) as any;
  }
  /**
   * @private
   *
   * For internal use in stripe-node.
   *
   * @param pulledEvent The retrieved event object
   * @returns The retrieved event object with a fetchRelatedObject method,
   * if pulledEvent.related_object is valid (non-null and has a url)
   */
  addFetchRelatedObjectIfNeeded(pulledEvent: any): any {
    if (!pulledEvent.related_object || !pulledEvent.related_object.url) {
      return pulledEvent;
    }
    return {
      ...pulledEvent,
      fetchRelatedObject: (): Promise<null | any> =>
        this._makeRequest('GET', pulledEvent.related_object.url, undefined, {
          stripeContext: pulledEvent.context,
          headers: {
            'Stripe-Request-Trigger': `event=${pulledEvent.id}`,
          },
        }),
    };
  }
}
export interface EventBase {
  /**
   * Unique identifier for the event.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.core.event';

  /**
   * Before and after changes for the primary related object.
   */
  changes?: V2.Core.Event.Changes;

  /**
   * Authentication context needed to fetch the event or related object.
   */
  context?: string;

  /**
   * Time at which the object was created.
   */
  created: string;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * Reason for the event.
   */
  reason?: V2.Core.Event.Reason;

  /**
   * For interop events, this is the snapshot event ID.
   */
  snapshot_event?: string;

  /**
   * The type of the event.
   */
  type: string;
}
export namespace V2 {
  export namespace Core {
    export namespace Event {
      export type Changes = {
        [key: string]: unknown;
      };

      export interface Reason {
        /**
         * Information on the API request that instigated the event.
         */
        request?: Reason.Request;

        /**
         * Event reason type.
         */
        type: 'request';
      }

      export namespace Reason {
        export interface Request {
          /**
           * The client details that made the request.
           */
          client?: Request.Client;

          /**
           * ID of the API request that caused the event.
           */
          id: string;

          /**
           * The idempotency key transmitted during the request.
           */
          idempotency_key: string;
        }

        export namespace Request {
          export interface Client {
            /**
             * API key that triggered the event.
             */
            api_key?: Client.ApiKey;

            /**
             * Dashboard user that triggered the event.
             */
            dashboard_user?: Client.DashboardUser;

            /**
             * Stripe action that triggered the event.
             */
            stripe_action?: Client.StripeAction;

            /**
             * The type of the client.
             */
            type: Client.Type;
          }

          export namespace Client {
            export interface ApiKey {
              /**
               * The ID of the API key.
               */
              id: string;
            }

            export interface DashboardUser {
              /**
               * The email of the dashboard user.
               */
              email: string;

              /**
               * The IP address of the user.
               */
              ip_address: string;

              /**
               * The machine identifier of the user.
               */
              machine_identifier: string;
            }

            export interface StripeAction {}

            export type Type = 'api_key' | 'dashboard_user' | 'stripe_action';
          }
        }
      }
    }
  }
}
export namespace V2 {
  export namespace Core {
    export interface EventRetrieveParams {
      /**
       * Additional fields to include in the response.
       */
      include?: Array<'reason.request.client'>;
    }
  }
}
export namespace V2 {
  export namespace Core {
    export interface EventListParams {
      /**
       * Set of filters to query events within a range of `created` timestamps.
       */
      created?: RangeQueryParam;

      /**
       * Additional fields to include in the response.
       */
      include?: Array<'reason.request.client'>;

      /**
       * The page size.
       */
      limit?: number;

      /**
       * Primary object ID used to retrieve related events.
       */
      object_id?: string;

      /**
       * An array of up to 20 strings containing specific event names.
       */
      types?: Array<string>;
    }
  }
}
import {Core} from './index.js';
import {Billing as V1Billing} from './../../Billing/index.js';
import {BillingPortal as V1BillingPortal} from './../../BillingPortal/index.js';
import {Checkout as V1Checkout} from './../../Checkout/index.js';
import {Climate as V1Climate} from './../../Climate/index.js';
import {FinancialConnections as V1FinancialConnections} from './../../FinancialConnections/index.js';
import {Identity as V1Identity} from './../../Identity/index.js';
import {Issuing as V1Issuing} from './../../Issuing/index.js';
import {Radar as V1Radar} from './../../Radar/index.js';
import {Sigma as V1Sigma} from './../../Sigma/index.js';
import {Tax as V1Tax} from './../../Tax/index.js';
import {Terminal as V1Terminal} from './../../Terminal/index.js';
import {TestHelpers as V1TestHelpers} from './../../TestHelpers/index.js';
import {Account as V1Account} from './../../Accounts.js';
import {ApplicationFee as V1ApplicationFee} from './../../ApplicationFees.js';
import {FeeRefund as V1FeeRefund} from './../../FeeRefunds.js';
import {Balance as V1Balance} from './../../Balance.js';
import {Capability as V1Capability} from './../../Capabilities.js';
import {CashBalance as V1CashBalance} from './../../CashBalances.js';
import {Charge as V1Charge} from './../../Charges.js';
import {Dispute as V1Dispute} from './../../Disputes.js';
import {Refund as V1Refund} from './../../Refunds.js';
import {Coupon as V1Coupon} from './../../Coupons.js';
import {CreditNote as V1CreditNote} from './../../CreditNotes.js';
import {Customer as V1Customer} from './../../Customers.js';
import {Subscription as V1Subscription} from './../../Subscriptions.js';
import {TaxId as V1TaxId} from './../../TaxIds.js';
import {CustomerCashBalanceTransaction as V1CustomerCashBalanceTransaction} from './../../CustomerCashBalanceTransactions.js';
import {File as V1File} from './../../Files.js';
import {Invoice as V1Invoice} from './../../Invoices.js';
import {InvoicePayment as V1InvoicePayment} from './../../InvoicePayments.js';
import {InvoiceItem as V1InvoiceItem} from './../../InvoiceItems.js';
import {Mandate as V1Mandate} from './../../Mandates.js';
import {PaymentIntent as V1PaymentIntent} from './../../PaymentIntents.js';
import {PaymentLink as V1PaymentLink} from './../../PaymentLinks.js';
import {PaymentMethod as V1PaymentMethod} from './../../PaymentMethods.js';
import {Payout as V1Payout} from './../../Payouts.js';
import {Person as V1Person} from './../../Persons.js';
import {Plan as V1Plan} from './../../Plans.js';
import {Price as V1Price} from './../../Prices.js';
import {Product as V1Product} from './../../Products.js';
import {PromotionCode as V1PromotionCode} from './../../PromotionCodes.js';
import {Quote as V1Quote} from './../../Quotes.js';
import {Review as V1Review} from './../../Reviews.js';
import {SetupIntent as V1SetupIntent} from './../../SetupIntents.js';
import {Source as V1Source} from './../../Sources.js';
import {SubscriptionSchedule as V1SubscriptionSchedule} from './../../SubscriptionSchedules.js';
import {TaxRate as V1TaxRate} from './../../TaxRates.js';
import {Topup as V1Topup} from './../../Topups.js';
import {Transfer as V1Transfer} from './../../Transfers.js';
import {Billing} from './../Billing/index.js';
import {Commerce} from './../Commerce/index.js';
import {Data} from './../Data/index.js';
import {Extend} from './../Extend/index.js';
import {MoneyManagement} from './../MoneyManagement/index.js';
import {OrchestratedCommerce} from './../OrchestratedCommerce/index.js';
import {Payments} from './../Payments/index.js';
import {Reporting} from './../Reporting/index.js';
export type Event =
  | V1AccountApplicationAuthorizedEvent
  | V1AccountApplicationDeauthorizedEvent
  | V1AccountExternalAccountCreatedEvent
  | V1AccountExternalAccountDeletedEvent
  | V1AccountExternalAccountUpdatedEvent
  | V1AccountUpdatedEvent
  | V1AccountSignalsIncludingDelinquencyCreatedEvent
  | V1ApplicationFeeCreatedEvent
  | V1ApplicationFeeRefundUpdatedEvent
  | V1ApplicationFeeRefundedEvent
  | V1BalanceAvailableEvent
  | V1BillingAlertTriggeredEvent
  | V1BillingMeterErrorReportTriggeredEvent
  | V1BillingMeterNoMeterFoundEvent
  | V1BillingPortalConfigurationCreatedEvent
  | V1BillingPortalConfigurationUpdatedEvent
  | V1BillingPortalSessionCreatedEvent
  | V1CapabilityUpdatedEvent
  | V1CashBalanceFundsAvailableEvent
  | V1ChargeCapturedEvent
  | V1ChargeDisputeClosedEvent
  | V1ChargeDisputeCreatedEvent
  | V1ChargeDisputeFundsReinstatedEvent
  | V1ChargeDisputeFundsWithdrawnEvent
  | V1ChargeDisputeUpdatedEvent
  | V1ChargeExpiredEvent
  | V1ChargeFailedEvent
  | V1ChargePendingEvent
  | V1ChargeRefundUpdatedEvent
  | V1ChargeRefundedEvent
  | V1ChargeSucceededEvent
  | V1ChargeUpdatedEvent
  | V1CheckoutSessionAsyncPaymentFailedEvent
  | V1CheckoutSessionAsyncPaymentSucceededEvent
  | V1CheckoutSessionCompletedEvent
  | V1CheckoutSessionExpiredEvent
  | V1ClimateOrderCanceledEvent
  | V1ClimateOrderCreatedEvent
  | V1ClimateOrderDelayedEvent
  | V1ClimateOrderDeliveredEvent
  | V1ClimateOrderProductSubstitutedEvent
  | V1ClimateProductCreatedEvent
  | V1ClimateProductPricingUpdatedEvent
  | V1CouponCreatedEvent
  | V1CouponDeletedEvent
  | V1CouponUpdatedEvent
  | V1CreditNoteCreatedEvent
  | V1CreditNoteUpdatedEvent
  | V1CreditNoteVoidedEvent
  | V1CustomerCreatedEvent
  | V1CustomerDeletedEvent
  | V1CustomerSubscriptionCreatedEvent
  | V1CustomerSubscriptionDeletedEvent
  | V1CustomerSubscriptionPausedEvent
  | V1CustomerSubscriptionPendingUpdateAppliedEvent
  | V1CustomerSubscriptionPendingUpdateExpiredEvent
  | V1CustomerSubscriptionResumedEvent
  | V1CustomerSubscriptionTrialWillEndEvent
  | V1CustomerSubscriptionUpdatedEvent
  | V1CustomerTaxIdCreatedEvent
  | V1CustomerTaxIdDeletedEvent
  | V1CustomerTaxIdUpdatedEvent
  | V1CustomerUpdatedEvent
  | V1CustomerCashBalanceTransactionCreatedEvent
  | V1EntitlementsActiveEntitlementSummaryUpdatedEvent
  | V1FileCreatedEvent
  | V1FinancialConnectionsAccountCreatedEvent
  | V1FinancialConnectionsAccountDeactivatedEvent
  | V1FinancialConnectionsAccountDisconnectedEvent
  | V1FinancialConnectionsAccountReactivatedEvent
  | V1FinancialConnectionsAccountRefreshedBalanceEvent
  | V1FinancialConnectionsAccountRefreshedOwnershipEvent
  | V1FinancialConnectionsAccountRefreshedTransactionsEvent
  | V1IdentityVerificationSessionCanceledEvent
  | V1IdentityVerificationSessionCreatedEvent
  | V1IdentityVerificationSessionProcessingEvent
  | V1IdentityVerificationSessionRedactedEvent
  | V1IdentityVerificationSessionRequiresInputEvent
  | V1IdentityVerificationSessionVerifiedEvent
  | V1InvoiceCreatedEvent
  | V1InvoiceDeletedEvent
  | V1InvoiceFinalizationFailedEvent
  | V1InvoiceFinalizedEvent
  | V1InvoiceMarkedUncollectibleEvent
  | V1InvoiceOverdueEvent
  | V1InvoiceOverpaidEvent
  | V1InvoicePaidEvent
  | V1InvoicePaymentActionRequiredEvent
  | V1InvoicePaymentFailedEvent
  | V1InvoicePaymentSucceededEvent
  | V1InvoiceSentEvent
  | V1InvoiceUpcomingEvent
  | V1InvoiceUpdatedEvent
  | V1InvoiceVoidedEvent
  | V1InvoiceWillBeDueEvent
  | V1InvoicePaymentPaidEvent
  | V1InvoiceitemCreatedEvent
  | V1InvoiceitemDeletedEvent
  | V1IssuingAuthorizationCreatedEvent
  | V1IssuingAuthorizationRequestEvent
  | V1IssuingAuthorizationUpdatedEvent
  | V1IssuingCardCreatedEvent
  | V1IssuingCardUpdatedEvent
  | V1IssuingCardholderCreatedEvent
  | V1IssuingCardholderUpdatedEvent
  | V1IssuingDisputeClosedEvent
  | V1IssuingDisputeCreatedEvent
  | V1IssuingDisputeFundsReinstatedEvent
  | V1IssuingDisputeFundsRescindedEvent
  | V1IssuingDisputeSubmittedEvent
  | V1IssuingDisputeUpdatedEvent
  | V1IssuingPersonalizationDesignActivatedEvent
  | V1IssuingPersonalizationDesignDeactivatedEvent
  | V1IssuingPersonalizationDesignRejectedEvent
  | V1IssuingPersonalizationDesignUpdatedEvent
  | V1IssuingTokenCreatedEvent
  | V1IssuingTokenUpdatedEvent
  | V1IssuingTransactionCreatedEvent
  | V1IssuingTransactionPurchaseDetailsReceiptUpdatedEvent
  | V1IssuingTransactionUpdatedEvent
  | V1MandateUpdatedEvent
  | V1PaymentIntentAmountCapturableUpdatedEvent
  | V1PaymentIntentCanceledEvent
  | V1PaymentIntentCreatedEvent
  | V1PaymentIntentPartiallyFundedEvent
  | V1PaymentIntentPaymentFailedEvent
  | V1PaymentIntentProcessingEvent
  | V1PaymentIntentRequiresActionEvent
  | V1PaymentIntentSucceededEvent
  | V1PaymentLinkCreatedEvent
  | V1PaymentLinkUpdatedEvent
  | V1PaymentMethodAttachedEvent
  | V1PaymentMethodAutomaticallyUpdatedEvent
  | V1PaymentMethodDetachedEvent
  | V1PaymentMethodUpdatedEvent
  | V1PayoutCanceledEvent
  | V1PayoutCreatedEvent
  | V1PayoutFailedEvent
  | V1PayoutPaidEvent
  | V1PayoutReconciliationCompletedEvent
  | V1PayoutUpdatedEvent
  | V1PersonCreatedEvent
  | V1PersonDeletedEvent
  | V1PersonUpdatedEvent
  | V1PlanCreatedEvent
  | V1PlanDeletedEvent
  | V1PlanUpdatedEvent
  | V1PriceCreatedEvent
  | V1PriceDeletedEvent
  | V1PriceUpdatedEvent
  | V1ProductCreatedEvent
  | V1ProductDeletedEvent
  | V1ProductUpdatedEvent
  | V1PromotionCodeCreatedEvent
  | V1PromotionCodeUpdatedEvent
  | V1QuoteAcceptedEvent
  | V1QuoteCanceledEvent
  | V1QuoteCreatedEvent
  | V1QuoteFinalizedEvent
  | V1RadarEarlyFraudWarningCreatedEvent
  | V1RadarEarlyFraudWarningUpdatedEvent
  | V1RefundCreatedEvent
  | V1RefundFailedEvent
  | V1RefundUpdatedEvent
  | V1ReviewClosedEvent
  | V1ReviewOpenedEvent
  | V1SetupIntentCanceledEvent
  | V1SetupIntentCreatedEvent
  | V1SetupIntentRequiresActionEvent
  | V1SetupIntentSetupFailedEvent
  | V1SetupIntentSucceededEvent
  | V1SigmaScheduledQueryRunCreatedEvent
  | V1SourceCanceledEvent
  | V1SourceChargeableEvent
  | V1SourceFailedEvent
  | V1SourceRefundAttributesRequiredEvent
  | V1SubscriptionScheduleAbortedEvent
  | V1SubscriptionScheduleCanceledEvent
  | V1SubscriptionScheduleCompletedEvent
  | V1SubscriptionScheduleCreatedEvent
  | V1SubscriptionScheduleExpiringEvent
  | V1SubscriptionScheduleReleasedEvent
  | V1SubscriptionScheduleUpdatedEvent
  | V1TaxSettingsUpdatedEvent
  | V1TaxRateCreatedEvent
  | V1TaxRateUpdatedEvent
  | V1TerminalReaderActionFailedEvent
  | V1TerminalReaderActionSucceededEvent
  | V1TerminalReaderActionUpdatedEvent
  | V1TestHelpersTestClockAdvancingEvent
  | V1TestHelpersTestClockCreatedEvent
  | V1TestHelpersTestClockDeletedEvent
  | V1TestHelpersTestClockInternalFailureEvent
  | V1TestHelpersTestClockReadyEvent
  | V1TopupCanceledEvent
  | V1TopupCreatedEvent
  | V1TopupFailedEvent
  | V1TopupReversedEvent
  | V1TopupSucceededEvent
  | V1TransferCreatedEvent
  | V1TransferReversedEvent
  | V1TransferUpdatedEvent
  | V2BillingCadenceBilledEvent
  | V2BillingCadenceCanceledEvent
  | V2BillingCadenceCreatedEvent
  | V2BillingLicenseFeeCreatedEvent
  | V2BillingLicenseFeeUpdatedEvent
  | V2BillingLicenseFeeVersionCreatedEvent
  | V2BillingLicensedItemCreatedEvent
  | V2BillingLicensedItemUpdatedEvent
  | V2BillingMeteredItemCreatedEvent
  | V2BillingMeteredItemUpdatedEvent
  | V2BillingPricingPlanCreatedEvent
  | V2BillingPricingPlanUpdatedEvent
  | V2BillingPricingPlanComponentCreatedEvent
  | V2BillingPricingPlanComponentUpdatedEvent
  | V2BillingPricingPlanSubscriptionCollectionAwaitingCustomerActionEvent
  | V2BillingPricingPlanSubscriptionCollectionCurrentEvent
  | V2BillingPricingPlanSubscriptionCollectionPastDueEvent
  | V2BillingPricingPlanSubscriptionCollectionPausedEvent
  | V2BillingPricingPlanSubscriptionCollectionUnpaidEvent
  | V2BillingPricingPlanSubscriptionServicingActivatedEvent
  | V2BillingPricingPlanSubscriptionServicingCanceledEvent
  | V2BillingPricingPlanSubscriptionServicingPausedEvent
  | V2BillingPricingPlanVersionCreatedEvent
  | V2BillingRateCardCreatedEvent
  | V2BillingRateCardUpdatedEvent
  | V2BillingRateCardCustomPricingUnitOverageRateCreatedEvent
  | V2BillingRateCardRateCreatedEvent
  | V2BillingRateCardSubscriptionActivatedEvent
  | V2BillingRateCardSubscriptionCanceledEvent
  | V2BillingRateCardSubscriptionCollectionAwaitingCustomerActionEvent
  | V2BillingRateCardSubscriptionCollectionCurrentEvent
  | V2BillingRateCardSubscriptionCollectionPastDueEvent
  | V2BillingRateCardSubscriptionCollectionPausedEvent
  | V2BillingRateCardSubscriptionCollectionUnpaidEvent
  | V2BillingRateCardSubscriptionServicingActivatedEvent
  | V2BillingRateCardSubscriptionServicingCanceledEvent
  | V2BillingRateCardSubscriptionServicingPausedEvent
  | V2BillingRateCardVersionCreatedEvent
  | V2CommerceProductCatalogImportsFailedEvent
  | V2CommerceProductCatalogImportsProcessingEvent
  | V2CommerceProductCatalogImportsSucceededEvent
  | V2CommerceProductCatalogImportsSucceededWithErrorsEvent
  | V2CoreAccountClosedEvent
  | V2CoreAccountCreatedEvent
  | V2CoreAccountUpdatedEvent
  | V2CoreAccountIncludingConfigurationCardCreatorCapabilityStatusUpdatedEvent
  | V2CoreAccountIncludingConfigurationCardCreatorUpdatedEvent
  | V2CoreAccountIncludingConfigurationCustomerCapabilityStatusUpdatedEvent
  | V2CoreAccountIncludingConfigurationCustomerUpdatedEvent
  | V2CoreAccountIncludingConfigurationMerchantCapabilityStatusUpdatedEvent
  | V2CoreAccountIncludingConfigurationMerchantUpdatedEvent
  | V2CoreAccountIncludingConfigurationRecipientCapabilityStatusUpdatedEvent
  | V2CoreAccountIncludingConfigurationRecipientUpdatedEvent
  | V2CoreAccountIncludingConfigurationStorerCapabilityStatusUpdatedEvent
  | V2CoreAccountIncludingConfigurationStorerUpdatedEvent
  | V2CoreAccountIncludingDefaultsUpdatedEvent
  | V2CoreAccountIncludingFutureRequirementsUpdatedEvent
  | V2CoreAccountIncludingIdentityUpdatedEvent
  | V2CoreAccountIncludingRequirementsUpdatedEvent
  | V2CoreAccountLinkReturnedEvent
  | V2CoreAccountPersonCreatedEvent
  | V2CoreAccountPersonDeletedEvent
  | V2CoreAccountPersonUpdatedEvent
  | V2CoreAccountSignalsFraudulentWebsiteReadyEvent
  | V2CoreApprovalRequestApprovedEvent
  | V2CoreApprovalRequestCanceledEvent
  | V2CoreApprovalRequestFailedEvent
  | V2CoreApprovalRequestRejectedEvent
  | V2CoreApprovalRequestSucceededEvent
  | V2CoreBatchJobBatchFailedEvent
  | V2CoreBatchJobCanceledEvent
  | V2CoreBatchJobCompletedEvent
  | V2CoreBatchJobCreatedEvent
  | V2CoreBatchJobReadyForUploadEvent
  | V2CoreBatchJobTimeoutEvent
  | V2CoreBatchJobUpdatedEvent
  | V2CoreBatchJobUploadTimeoutEvent
  | V2CoreBatchJobValidatingEvent
  | V2CoreBatchJobValidationFailedEvent
  | V2CoreClaimableSandboxClaimedEvent
  | V2CoreClaimableSandboxCreatedEvent
  | V2CoreClaimableSandboxExpiredEvent
  | V2CoreClaimableSandboxExpiringEvent
  | V2CoreClaimableSandboxUpdatedEvent
  | V2CoreEventDestinationPingEvent
  | V2CoreHealthApiErrorFiringEvent
  | V2CoreHealthApiErrorResolvedEvent
  | V2CoreHealthApiLatencyFiringEvent
  | V2CoreHealthApiLatencyResolvedEvent
  | V2CoreHealthAuthorizationRateDropFiringEvent
  | V2CoreHealthAuthorizationRateDropResolvedEvent
  | V2CoreHealthEventGenerationFailureResolvedEvent
  | V2CoreHealthFraudRateIncreasedEvent
  | V2CoreHealthIssuingAuthorizationRequestErrorsFiringEvent
  | V2CoreHealthIssuingAuthorizationRequestErrorsResolvedEvent
  | V2CoreHealthIssuingAuthorizationRequestTimeoutFiringEvent
  | V2CoreHealthIssuingAuthorizationRequestTimeoutResolvedEvent
  | V2CoreHealthMeterEventSummariesDelayedFiringEvent
  | V2CoreHealthMeterEventSummariesDelayedResolvedEvent
  | V2CoreHealthPaymentMethodErrorFiringEvent
  | V2CoreHealthPaymentMethodErrorResolvedEvent
  | V2CoreHealthSepaDebitDelayedFiringEvent
  | V2CoreHealthSepaDebitDelayedResolvedEvent
  | V2CoreHealthTrafficVolumeDropFiringEvent
  | V2CoreHealthTrafficVolumeDropResolvedEvent
  | V2CoreHealthWebhookLatencyFiringEvent
  | V2CoreHealthWebhookLatencyResolvedEvent
  | V2DataReportingQueryRunCreatedEvent
  | V2DataReportingQueryRunFailedEvent
  | V2DataReportingQueryRunSucceededEvent
  | V2DataReportingQueryRunUpdatedEvent
  | V2ExtendWorkflowRunFailedEvent
  | V2ExtendWorkflowRunStartedEvent
  | V2ExtendWorkflowRunSucceededEvent
  | V2IamApiKeyCreatedEvent
  | V2IamApiKeyDefaultSecretRevealedEvent
  | V2IamApiKeyExpiredEvent
  | V2IamApiKeyPermissionsUpdatedEvent
  | V2IamApiKeyRotatedEvent
  | V2IamApiKeyUpdatedEvent
  | V2IamStripeAccessGrantApprovedEvent
  | V2IamStripeAccessGrantCanceledEvent
  | V2IamStripeAccessGrantDeniedEvent
  | V2IamStripeAccessGrantRemovedEvent
  | V2IamStripeAccessGrantRequestedEvent
  | V2IamStripeAccessGrantUpdatedEvent
  | V2MoneyManagementAdjustmentCreatedEvent
  | V2MoneyManagementFinancialAccountCreatedEvent
  | V2MoneyManagementFinancialAccountUpdatedEvent
  | V2MoneyManagementFinancialAddressActivatedEvent
  | V2MoneyManagementFinancialAddressFailedEvent
  | V2MoneyManagementInboundTransferAvailableEvent
  | V2MoneyManagementInboundTransferBankDebitFailedEvent
  | V2MoneyManagementInboundTransferBankDebitProcessingEvent
  | V2MoneyManagementInboundTransferBankDebitQueuedEvent
  | V2MoneyManagementInboundTransferBankDebitReturnedEvent
  | V2MoneyManagementInboundTransferBankDebitSucceededEvent
  | V2MoneyManagementOutboundPaymentCanceledEvent
  | V2MoneyManagementOutboundPaymentCreatedEvent
  | V2MoneyManagementOutboundPaymentFailedEvent
  | V2MoneyManagementOutboundPaymentPostedEvent
  | V2MoneyManagementOutboundPaymentReturnedEvent
  | V2MoneyManagementOutboundPaymentUpdatedEvent
  | V2MoneyManagementOutboundTransferCanceledEvent
  | V2MoneyManagementOutboundTransferCreatedEvent
  | V2MoneyManagementOutboundTransferFailedEvent
  | V2MoneyManagementOutboundTransferPostedEvent
  | V2MoneyManagementOutboundTransferReturnedEvent
  | V2MoneyManagementOutboundTransferUpdatedEvent
  | V2MoneyManagementPayoutMethodCreatedEvent
  | V2MoneyManagementPayoutMethodUpdatedEvent
  | V2MoneyManagementReceivedCreditAvailableEvent
  | V2MoneyManagementReceivedCreditFailedEvent
  | V2MoneyManagementReceivedCreditReturnedEvent
  | V2MoneyManagementReceivedCreditSucceededEvent
  | V2MoneyManagementReceivedDebitCanceledEvent
  | V2MoneyManagementReceivedDebitFailedEvent
  | V2MoneyManagementReceivedDebitPendingEvent
  | V2MoneyManagementReceivedDebitSucceededEvent
  | V2MoneyManagementReceivedDebitUpdatedEvent
  | V2MoneyManagementRecipientVerificationCreatedEvent
  | V2MoneyManagementRecipientVerificationUpdatedEvent
  | V2MoneyManagementTransactionCreatedEvent
  | V2MoneyManagementTransactionUpdatedEvent
  | V2OrchestratedCommerceAgreementConfirmedEvent
  | V2OrchestratedCommerceAgreementCreatedEvent
  | V2OrchestratedCommerceAgreementPartiallyConfirmedEvent
  | V2OrchestratedCommerceAgreementTerminatedEvent
  | V2PaymentsOffSessionPaymentAttemptFailedEvent
  | V2PaymentsOffSessionPaymentAttemptStartedEvent
  | V2PaymentsOffSessionPaymentAuthorizationAttemptFailedEvent
  | V2PaymentsOffSessionPaymentAuthorizationAttemptStartedEvent
  | V2PaymentsOffSessionPaymentCanceledEvent
  | V2PaymentsOffSessionPaymentCreatedEvent
  | V2PaymentsOffSessionPaymentFailedEvent
  | V2PaymentsOffSessionPaymentPausedEvent
  | V2PaymentsOffSessionPaymentRequiresCaptureEvent
  | V2PaymentsOffSessionPaymentResumedEvent
  | V2PaymentsOffSessionPaymentSucceededEvent
  | V2PaymentsSettlementAllocationIntentCanceledEvent
  | V2PaymentsSettlementAllocationIntentCreatedEvent
  | V2PaymentsSettlementAllocationIntentErroredEvent
  | V2PaymentsSettlementAllocationIntentFundsNotReceivedEvent
  | V2PaymentsSettlementAllocationIntentMatchedEvent
  | V2PaymentsSettlementAllocationIntentNotFoundEvent
  | V2PaymentsSettlementAllocationIntentSettledEvent
  | V2PaymentsSettlementAllocationIntentSubmittedEvent
  | V2PaymentsSettlementAllocationIntentSplitCanceledEvent
  | V2PaymentsSettlementAllocationIntentSplitCreatedEvent
  | V2PaymentsSettlementAllocationIntentSplitSettledEvent
  | V2ReportingReportRunCreatedEvent
  | V2ReportingReportRunFailedEvent
  | V2ReportingReportRunSucceededEvent
  | V2ReportingReportRunUpdatedEvent
  | V2SignalsAccountSignalFraudulentMerchantReadyEvent;

export type EventNotification =
  | V1AccountApplicationAuthorizedEventNotification
  | V1AccountApplicationDeauthorizedEventNotification
  | V1AccountExternalAccountCreatedEventNotification
  | V1AccountExternalAccountDeletedEventNotification
  | V1AccountExternalAccountUpdatedEventNotification
  | V1AccountUpdatedEventNotification
  | V1AccountSignalsIncludingDelinquencyCreatedEventNotification
  | V1ApplicationFeeCreatedEventNotification
  | V1ApplicationFeeRefundUpdatedEventNotification
  | V1ApplicationFeeRefundedEventNotification
  | V1BalanceAvailableEventNotification
  | V1BillingAlertTriggeredEventNotification
  | V1BillingMeterErrorReportTriggeredEventNotification
  | V1BillingMeterNoMeterFoundEventNotification
  | V1BillingPortalConfigurationCreatedEventNotification
  | V1BillingPortalConfigurationUpdatedEventNotification
  | V1BillingPortalSessionCreatedEventNotification
  | V1CapabilityUpdatedEventNotification
  | V1CashBalanceFundsAvailableEventNotification
  | V1ChargeCapturedEventNotification
  | V1ChargeDisputeClosedEventNotification
  | V1ChargeDisputeCreatedEventNotification
  | V1ChargeDisputeFundsReinstatedEventNotification
  | V1ChargeDisputeFundsWithdrawnEventNotification
  | V1ChargeDisputeUpdatedEventNotification
  | V1ChargeExpiredEventNotification
  | V1ChargeFailedEventNotification
  | V1ChargePendingEventNotification
  | V1ChargeRefundUpdatedEventNotification
  | V1ChargeRefundedEventNotification
  | V1ChargeSucceededEventNotification
  | V1ChargeUpdatedEventNotification
  | V1CheckoutSessionAsyncPaymentFailedEventNotification
  | V1CheckoutSessionAsyncPaymentSucceededEventNotification
  | V1CheckoutSessionCompletedEventNotification
  | V1CheckoutSessionExpiredEventNotification
  | V1ClimateOrderCanceledEventNotification
  | V1ClimateOrderCreatedEventNotification
  | V1ClimateOrderDelayedEventNotification
  | V1ClimateOrderDeliveredEventNotification
  | V1ClimateOrderProductSubstitutedEventNotification
  | V1ClimateProductCreatedEventNotification
  | V1ClimateProductPricingUpdatedEventNotification
  | V1CouponCreatedEventNotification
  | V1CouponDeletedEventNotification
  | V1CouponUpdatedEventNotification
  | V1CreditNoteCreatedEventNotification
  | V1CreditNoteUpdatedEventNotification
  | V1CreditNoteVoidedEventNotification
  | V1CustomerCreatedEventNotification
  | V1CustomerDeletedEventNotification
  | V1CustomerSubscriptionCreatedEventNotification
  | V1CustomerSubscriptionDeletedEventNotification
  | V1CustomerSubscriptionPausedEventNotification
  | V1CustomerSubscriptionPendingUpdateAppliedEventNotification
  | V1CustomerSubscriptionPendingUpdateExpiredEventNotification
  | V1CustomerSubscriptionResumedEventNotification
  | V1CustomerSubscriptionTrialWillEndEventNotification
  | V1CustomerSubscriptionUpdatedEventNotification
  | V1CustomerTaxIdCreatedEventNotification
  | V1CustomerTaxIdDeletedEventNotification
  | V1CustomerTaxIdUpdatedEventNotification
  | V1CustomerUpdatedEventNotification
  | V1CustomerCashBalanceTransactionCreatedEventNotification
  | V1EntitlementsActiveEntitlementSummaryUpdatedEventNotification
  | V1FileCreatedEventNotification
  | V1FinancialConnectionsAccountCreatedEventNotification
  | V1FinancialConnectionsAccountDeactivatedEventNotification
  | V1FinancialConnectionsAccountDisconnectedEventNotification
  | V1FinancialConnectionsAccountReactivatedEventNotification
  | V1FinancialConnectionsAccountRefreshedBalanceEventNotification
  | V1FinancialConnectionsAccountRefreshedOwnershipEventNotification
  | V1FinancialConnectionsAccountRefreshedTransactionsEventNotification
  | V1IdentityVerificationSessionCanceledEventNotification
  | V1IdentityVerificationSessionCreatedEventNotification
  | V1IdentityVerificationSessionProcessingEventNotification
  | V1IdentityVerificationSessionRedactedEventNotification
  | V1IdentityVerificationSessionRequiresInputEventNotification
  | V1IdentityVerificationSessionVerifiedEventNotification
  | V1InvoiceCreatedEventNotification
  | V1InvoiceDeletedEventNotification
  | V1InvoiceFinalizationFailedEventNotification
  | V1InvoiceFinalizedEventNotification
  | V1InvoiceMarkedUncollectibleEventNotification
  | V1InvoiceOverdueEventNotification
  | V1InvoiceOverpaidEventNotification
  | V1InvoicePaidEventNotification
  | V1InvoicePaymentActionRequiredEventNotification
  | V1InvoicePaymentFailedEventNotification
  | V1InvoicePaymentSucceededEventNotification
  | V1InvoiceSentEventNotification
  | V1InvoiceUpcomingEventNotification
  | V1InvoiceUpdatedEventNotification
  | V1InvoiceVoidedEventNotification
  | V1InvoiceWillBeDueEventNotification
  | V1InvoicePaymentPaidEventNotification
  | V1InvoiceitemCreatedEventNotification
  | V1InvoiceitemDeletedEventNotification
  | V1IssuingAuthorizationCreatedEventNotification
  | V1IssuingAuthorizationRequestEventNotification
  | V1IssuingAuthorizationUpdatedEventNotification
  | V1IssuingCardCreatedEventNotification
  | V1IssuingCardUpdatedEventNotification
  | V1IssuingCardholderCreatedEventNotification
  | V1IssuingCardholderUpdatedEventNotification
  | V1IssuingDisputeClosedEventNotification
  | V1IssuingDisputeCreatedEventNotification
  | V1IssuingDisputeFundsReinstatedEventNotification
  | V1IssuingDisputeFundsRescindedEventNotification
  | V1IssuingDisputeSubmittedEventNotification
  | V1IssuingDisputeUpdatedEventNotification
  | V1IssuingPersonalizationDesignActivatedEventNotification
  | V1IssuingPersonalizationDesignDeactivatedEventNotification
  | V1IssuingPersonalizationDesignRejectedEventNotification
  | V1IssuingPersonalizationDesignUpdatedEventNotification
  | V1IssuingTokenCreatedEventNotification
  | V1IssuingTokenUpdatedEventNotification
  | V1IssuingTransactionCreatedEventNotification
  | V1IssuingTransactionPurchaseDetailsReceiptUpdatedEventNotification
  | V1IssuingTransactionUpdatedEventNotification
  | V1MandateUpdatedEventNotification
  | V1PaymentIntentAmountCapturableUpdatedEventNotification
  | V1PaymentIntentCanceledEventNotification
  | V1PaymentIntentCreatedEventNotification
  | V1PaymentIntentPartiallyFundedEventNotification
  | V1PaymentIntentPaymentFailedEventNotification
  | V1PaymentIntentProcessingEventNotification
  | V1PaymentIntentRequiresActionEventNotification
  | V1PaymentIntentSucceededEventNotification
  | V1PaymentLinkCreatedEventNotification
  | V1PaymentLinkUpdatedEventNotification
  | V1PaymentMethodAttachedEventNotification
  | V1PaymentMethodAutomaticallyUpdatedEventNotification
  | V1PaymentMethodDetachedEventNotification
  | V1PaymentMethodUpdatedEventNotification
  | V1PayoutCanceledEventNotification
  | V1PayoutCreatedEventNotification
  | V1PayoutFailedEventNotification
  | V1PayoutPaidEventNotification
  | V1PayoutReconciliationCompletedEventNotification
  | V1PayoutUpdatedEventNotification
  | V1PersonCreatedEventNotification
  | V1PersonDeletedEventNotification
  | V1PersonUpdatedEventNotification
  | V1PlanCreatedEventNotification
  | V1PlanDeletedEventNotification
  | V1PlanUpdatedEventNotification
  | V1PriceCreatedEventNotification
  | V1PriceDeletedEventNotification
  | V1PriceUpdatedEventNotification
  | V1ProductCreatedEventNotification
  | V1ProductDeletedEventNotification
  | V1ProductUpdatedEventNotification
  | V1PromotionCodeCreatedEventNotification
  | V1PromotionCodeUpdatedEventNotification
  | V1QuoteAcceptedEventNotification
  | V1QuoteCanceledEventNotification
  | V1QuoteCreatedEventNotification
  | V1QuoteFinalizedEventNotification
  | V1RadarEarlyFraudWarningCreatedEventNotification
  | V1RadarEarlyFraudWarningUpdatedEventNotification
  | V1RefundCreatedEventNotification
  | V1RefundFailedEventNotification
  | V1RefundUpdatedEventNotification
  | V1ReviewClosedEventNotification
  | V1ReviewOpenedEventNotification
  | V1SetupIntentCanceledEventNotification
  | V1SetupIntentCreatedEventNotification
  | V1SetupIntentRequiresActionEventNotification
  | V1SetupIntentSetupFailedEventNotification
  | V1SetupIntentSucceededEventNotification
  | V1SigmaScheduledQueryRunCreatedEventNotification
  | V1SourceCanceledEventNotification
  | V1SourceChargeableEventNotification
  | V1SourceFailedEventNotification
  | V1SourceRefundAttributesRequiredEventNotification
  | V1SubscriptionScheduleAbortedEventNotification
  | V1SubscriptionScheduleCanceledEventNotification
  | V1SubscriptionScheduleCompletedEventNotification
  | V1SubscriptionScheduleCreatedEventNotification
  | V1SubscriptionScheduleExpiringEventNotification
  | V1SubscriptionScheduleReleasedEventNotification
  | V1SubscriptionScheduleUpdatedEventNotification
  | V1TaxSettingsUpdatedEventNotification
  | V1TaxRateCreatedEventNotification
  | V1TaxRateUpdatedEventNotification
  | V1TerminalReaderActionFailedEventNotification
  | V1TerminalReaderActionSucceededEventNotification
  | V1TerminalReaderActionUpdatedEventNotification
  | V1TestHelpersTestClockAdvancingEventNotification
  | V1TestHelpersTestClockCreatedEventNotification
  | V1TestHelpersTestClockDeletedEventNotification
  | V1TestHelpersTestClockInternalFailureEventNotification
  | V1TestHelpersTestClockReadyEventNotification
  | V1TopupCanceledEventNotification
  | V1TopupCreatedEventNotification
  | V1TopupFailedEventNotification
  | V1TopupReversedEventNotification
  | V1TopupSucceededEventNotification
  | V1TransferCreatedEventNotification
  | V1TransferReversedEventNotification
  | V1TransferUpdatedEventNotification
  | V2BillingCadenceBilledEventNotification
  | V2BillingCadenceCanceledEventNotification
  | V2BillingCadenceCreatedEventNotification
  | V2BillingLicenseFeeCreatedEventNotification
  | V2BillingLicenseFeeUpdatedEventNotification
  | V2BillingLicenseFeeVersionCreatedEventNotification
  | V2BillingLicensedItemCreatedEventNotification
  | V2BillingLicensedItemUpdatedEventNotification
  | V2BillingMeteredItemCreatedEventNotification
  | V2BillingMeteredItemUpdatedEventNotification
  | V2BillingPricingPlanCreatedEventNotification
  | V2BillingPricingPlanUpdatedEventNotification
  | V2BillingPricingPlanComponentCreatedEventNotification
  | V2BillingPricingPlanComponentUpdatedEventNotification
  | V2BillingPricingPlanSubscriptionCollectionAwaitingCustomerActionEventNotification
  | V2BillingPricingPlanSubscriptionCollectionCurrentEventNotification
  | V2BillingPricingPlanSubscriptionCollectionPastDueEventNotification
  | V2BillingPricingPlanSubscriptionCollectionPausedEventNotification
  | V2BillingPricingPlanSubscriptionCollectionUnpaidEventNotification
  | V2BillingPricingPlanSubscriptionServicingActivatedEventNotification
  | V2BillingPricingPlanSubscriptionServicingCanceledEventNotification
  | V2BillingPricingPlanSubscriptionServicingPausedEventNotification
  | V2BillingPricingPlanVersionCreatedEventNotification
  | V2BillingRateCardCreatedEventNotification
  | V2BillingRateCardUpdatedEventNotification
  | V2BillingRateCardCustomPricingUnitOverageRateCreatedEventNotification
  | V2BillingRateCardRateCreatedEventNotification
  | V2BillingRateCardSubscriptionActivatedEventNotification
  | V2BillingRateCardSubscriptionCanceledEventNotification
  | V2BillingRateCardSubscriptionCollectionAwaitingCustomerActionEventNotification
  | V2BillingRateCardSubscriptionCollectionCurrentEventNotification
  | V2BillingRateCardSubscriptionCollectionPastDueEventNotification
  | V2BillingRateCardSubscriptionCollectionPausedEventNotification
  | V2BillingRateCardSubscriptionCollectionUnpaidEventNotification
  | V2BillingRateCardSubscriptionServicingActivatedEventNotification
  | V2BillingRateCardSubscriptionServicingCanceledEventNotification
  | V2BillingRateCardSubscriptionServicingPausedEventNotification
  | V2BillingRateCardVersionCreatedEventNotification
  | V2CommerceProductCatalogImportsFailedEventNotification
  | V2CommerceProductCatalogImportsProcessingEventNotification
  | V2CommerceProductCatalogImportsSucceededEventNotification
  | V2CommerceProductCatalogImportsSucceededWithErrorsEventNotification
  | V2CoreAccountClosedEventNotification
  | V2CoreAccountCreatedEventNotification
  | V2CoreAccountUpdatedEventNotification
  | V2CoreAccountIncludingConfigurationCardCreatorCapabilityStatusUpdatedEventNotification
  | V2CoreAccountIncludingConfigurationCardCreatorUpdatedEventNotification
  | V2CoreAccountIncludingConfigurationCustomerCapabilityStatusUpdatedEventNotification
  | V2CoreAccountIncludingConfigurationCustomerUpdatedEventNotification
  | V2CoreAccountIncludingConfigurationMerchantCapabilityStatusUpdatedEventNotification
  | V2CoreAccountIncludingConfigurationMerchantUpdatedEventNotification
  | V2CoreAccountIncludingConfigurationRecipientCapabilityStatusUpdatedEventNotification
  | V2CoreAccountIncludingConfigurationRecipientUpdatedEventNotification
  | V2CoreAccountIncludingConfigurationStorerCapabilityStatusUpdatedEventNotification
  | V2CoreAccountIncludingConfigurationStorerUpdatedEventNotification
  | V2CoreAccountIncludingDefaultsUpdatedEventNotification
  | V2CoreAccountIncludingFutureRequirementsUpdatedEventNotification
  | V2CoreAccountIncludingIdentityUpdatedEventNotification
  | V2CoreAccountIncludingRequirementsUpdatedEventNotification
  | V2CoreAccountLinkReturnedEventNotification
  | V2CoreAccountPersonCreatedEventNotification
  | V2CoreAccountPersonDeletedEventNotification
  | V2CoreAccountPersonUpdatedEventNotification
  | V2CoreAccountSignalsFraudulentWebsiteReadyEventNotification
  | V2CoreApprovalRequestApprovedEventNotification
  | V2CoreApprovalRequestCanceledEventNotification
  | V2CoreApprovalRequestFailedEventNotification
  | V2CoreApprovalRequestRejectedEventNotification
  | V2CoreApprovalRequestSucceededEventNotification
  | V2CoreBatchJobBatchFailedEventNotification
  | V2CoreBatchJobCanceledEventNotification
  | V2CoreBatchJobCompletedEventNotification
  | V2CoreBatchJobCreatedEventNotification
  | V2CoreBatchJobReadyForUploadEventNotification
  | V2CoreBatchJobTimeoutEventNotification
  | V2CoreBatchJobUpdatedEventNotification
  | V2CoreBatchJobUploadTimeoutEventNotification
  | V2CoreBatchJobValidatingEventNotification
  | V2CoreBatchJobValidationFailedEventNotification
  | V2CoreClaimableSandboxClaimedEventNotification
  | V2CoreClaimableSandboxCreatedEventNotification
  | V2CoreClaimableSandboxExpiredEventNotification
  | V2CoreClaimableSandboxExpiringEventNotification
  | V2CoreClaimableSandboxUpdatedEventNotification
  | V2CoreEventDestinationPingEventNotification
  | V2CoreHealthApiErrorFiringEventNotification
  | V2CoreHealthApiErrorResolvedEventNotification
  | V2CoreHealthApiLatencyFiringEventNotification
  | V2CoreHealthApiLatencyResolvedEventNotification
  | V2CoreHealthAuthorizationRateDropFiringEventNotification
  | V2CoreHealthAuthorizationRateDropResolvedEventNotification
  | V2CoreHealthEventGenerationFailureResolvedEventNotification
  | V2CoreHealthFraudRateIncreasedEventNotification
  | V2CoreHealthIssuingAuthorizationRequestErrorsFiringEventNotification
  | V2CoreHealthIssuingAuthorizationRequestErrorsResolvedEventNotification
  | V2CoreHealthIssuingAuthorizationRequestTimeoutFiringEventNotification
  | V2CoreHealthIssuingAuthorizationRequestTimeoutResolvedEventNotification
  | V2CoreHealthMeterEventSummariesDelayedFiringEventNotification
  | V2CoreHealthMeterEventSummariesDelayedResolvedEventNotification
  | V2CoreHealthPaymentMethodErrorFiringEventNotification
  | V2CoreHealthPaymentMethodErrorResolvedEventNotification
  | V2CoreHealthSepaDebitDelayedFiringEventNotification
  | V2CoreHealthSepaDebitDelayedResolvedEventNotification
  | V2CoreHealthTrafficVolumeDropFiringEventNotification
  | V2CoreHealthTrafficVolumeDropResolvedEventNotification
  | V2CoreHealthWebhookLatencyFiringEventNotification
  | V2CoreHealthWebhookLatencyResolvedEventNotification
  | V2DataReportingQueryRunCreatedEventNotification
  | V2DataReportingQueryRunFailedEventNotification
  | V2DataReportingQueryRunSucceededEventNotification
  | V2DataReportingQueryRunUpdatedEventNotification
  | V2ExtendWorkflowRunFailedEventNotification
  | V2ExtendWorkflowRunStartedEventNotification
  | V2ExtendWorkflowRunSucceededEventNotification
  | V2IamApiKeyCreatedEventNotification
  | V2IamApiKeyDefaultSecretRevealedEventNotification
  | V2IamApiKeyExpiredEventNotification
  | V2IamApiKeyPermissionsUpdatedEventNotification
  | V2IamApiKeyRotatedEventNotification
  | V2IamApiKeyUpdatedEventNotification
  | V2IamStripeAccessGrantApprovedEventNotification
  | V2IamStripeAccessGrantCanceledEventNotification
  | V2IamStripeAccessGrantDeniedEventNotification
  | V2IamStripeAccessGrantRemovedEventNotification
  | V2IamStripeAccessGrantRequestedEventNotification
  | V2IamStripeAccessGrantUpdatedEventNotification
  | V2MoneyManagementAdjustmentCreatedEventNotification
  | V2MoneyManagementFinancialAccountCreatedEventNotification
  | V2MoneyManagementFinancialAccountUpdatedEventNotification
  | V2MoneyManagementFinancialAddressActivatedEventNotification
  | V2MoneyManagementFinancialAddressFailedEventNotification
  | V2MoneyManagementInboundTransferAvailableEventNotification
  | V2MoneyManagementInboundTransferBankDebitFailedEventNotification
  | V2MoneyManagementInboundTransferBankDebitProcessingEventNotification
  | V2MoneyManagementInboundTransferBankDebitQueuedEventNotification
  | V2MoneyManagementInboundTransferBankDebitReturnedEventNotification
  | V2MoneyManagementInboundTransferBankDebitSucceededEventNotification
  | V2MoneyManagementOutboundPaymentCanceledEventNotification
  | V2MoneyManagementOutboundPaymentCreatedEventNotification
  | V2MoneyManagementOutboundPaymentFailedEventNotification
  | V2MoneyManagementOutboundPaymentPostedEventNotification
  | V2MoneyManagementOutboundPaymentReturnedEventNotification
  | V2MoneyManagementOutboundPaymentUpdatedEventNotification
  | V2MoneyManagementOutboundTransferCanceledEventNotification
  | V2MoneyManagementOutboundTransferCreatedEventNotification
  | V2MoneyManagementOutboundTransferFailedEventNotification
  | V2MoneyManagementOutboundTransferPostedEventNotification
  | V2MoneyManagementOutboundTransferReturnedEventNotification
  | V2MoneyManagementOutboundTransferUpdatedEventNotification
  | V2MoneyManagementPayoutMethodCreatedEventNotification
  | V2MoneyManagementPayoutMethodUpdatedEventNotification
  | V2MoneyManagementReceivedCreditAvailableEventNotification
  | V2MoneyManagementReceivedCreditFailedEventNotification
  | V2MoneyManagementReceivedCreditReturnedEventNotification
  | V2MoneyManagementReceivedCreditSucceededEventNotification
  | V2MoneyManagementReceivedDebitCanceledEventNotification
  | V2MoneyManagementReceivedDebitFailedEventNotification
  | V2MoneyManagementReceivedDebitPendingEventNotification
  | V2MoneyManagementReceivedDebitSucceededEventNotification
  | V2MoneyManagementReceivedDebitUpdatedEventNotification
  | V2MoneyManagementRecipientVerificationCreatedEventNotification
  | V2MoneyManagementRecipientVerificationUpdatedEventNotification
  | V2MoneyManagementTransactionCreatedEventNotification
  | V2MoneyManagementTransactionUpdatedEventNotification
  | V2OrchestratedCommerceAgreementConfirmedEventNotification
  | V2OrchestratedCommerceAgreementCreatedEventNotification
  | V2OrchestratedCommerceAgreementPartiallyConfirmedEventNotification
  | V2OrchestratedCommerceAgreementTerminatedEventNotification
  | V2PaymentsOffSessionPaymentAttemptFailedEventNotification
  | V2PaymentsOffSessionPaymentAttemptStartedEventNotification
  | V2PaymentsOffSessionPaymentAuthorizationAttemptFailedEventNotification
  | V2PaymentsOffSessionPaymentAuthorizationAttemptStartedEventNotification
  | V2PaymentsOffSessionPaymentCanceledEventNotification
  | V2PaymentsOffSessionPaymentCreatedEventNotification
  | V2PaymentsOffSessionPaymentFailedEventNotification
  | V2PaymentsOffSessionPaymentPausedEventNotification
  | V2PaymentsOffSessionPaymentRequiresCaptureEventNotification
  | V2PaymentsOffSessionPaymentResumedEventNotification
  | V2PaymentsOffSessionPaymentSucceededEventNotification
  | V2PaymentsSettlementAllocationIntentCanceledEventNotification
  | V2PaymentsSettlementAllocationIntentCreatedEventNotification
  | V2PaymentsSettlementAllocationIntentErroredEventNotification
  | V2PaymentsSettlementAllocationIntentFundsNotReceivedEventNotification
  | V2PaymentsSettlementAllocationIntentMatchedEventNotification
  | V2PaymentsSettlementAllocationIntentNotFoundEventNotification
  | V2PaymentsSettlementAllocationIntentSettledEventNotification
  | V2PaymentsSettlementAllocationIntentSubmittedEventNotification
  | V2PaymentsSettlementAllocationIntentSplitCanceledEventNotification
  | V2PaymentsSettlementAllocationIntentSplitCreatedEventNotification
  | V2PaymentsSettlementAllocationIntentSplitSettledEventNotification
  | V2ReportingReportRunCreatedEventNotification
  | V2ReportingReportRunFailedEventNotification
  | V2ReportingReportRunSucceededEventNotification
  | V2ReportingReportRunUpdatedEventNotification
  | V2SignalsAccountSignalFraudulentMerchantReadyEventNotification;

import {StripeContext} from '../../../StripeContext.js';

import {V2Amount} from '../V2Amounts.js';

export namespace V2 {
  export namespace Core {
    export namespace Events {
      export interface RelatedObject {
        /**
         * Unique identifier for the object relevant to the event.
         */ id: string;
        /**
         * Type of the object relevant to the event.
         */ type: string;
        /**
         * URL to retrieve the resource.
         */ url: string;
      }
    }
  }
}

/**
 * Represents the shape of an EventNotification that the SDK didn't know about when it was generated.
 */ export interface UnknownEventNotification extends EventNotificationBase {
  /**
   * Object containing the reference to API resource relevant to the event.
   */ related_object: V2.Core.Events.RelatedObject | null;
  /**
   * Fetches the full object corresponding to the `related_object` field. Returns `null` if there is no `related_object`.
   */ fetchRelatedObject: () => Promise<unknown>;
  /**
   * Fetches the full Event object corresponding to this notification.
   */ fetchEvent: () => Promise<EventBase>;
}

export interface EventNotificationBase extends Omit<EventBase, 'context'> {
  context?: StripeContext;
}

/**
 * Occurs whenever a user authorizes an application. Sent to the related application only.
 */
export interface V1AccountApplicationAuthorizedEvent extends EventBase {
  type: 'v1.account.application.authorized';
}
export interface V1AccountApplicationAuthorizedEventNotification
  extends EventNotificationBase {
  type: 'v1.account.application.authorized';
  fetchEvent(): Promise<V1AccountApplicationAuthorizedEvent>;
}

/**
 * Occurs whenever a user deauthorizes an application. Sent to the related application only.
 */
export interface V1AccountApplicationDeauthorizedEvent extends EventBase {
  type: 'v1.account.application.deauthorized';
}
export interface V1AccountApplicationDeauthorizedEventNotification
  extends EventNotificationBase {
  type: 'v1.account.application.deauthorized';
  fetchEvent(): Promise<V1AccountApplicationDeauthorizedEvent>;
}

/**
 * Occurs whenever an external account is created.
 */
export interface V1AccountExternalAccountCreatedEvent extends EventBase {
  type: 'v1.account.external_account.created';
}
export interface V1AccountExternalAccountCreatedEventNotification
  extends EventNotificationBase {
  type: 'v1.account.external_account.created';
  fetchEvent(): Promise<V1AccountExternalAccountCreatedEvent>;
}

/**
 * Occurs whenever an external account is deleted.
 */
export interface V1AccountExternalAccountDeletedEvent extends EventBase {
  type: 'v1.account.external_account.deleted';
}
export interface V1AccountExternalAccountDeletedEventNotification
  extends EventNotificationBase {
  type: 'v1.account.external_account.deleted';
  fetchEvent(): Promise<V1AccountExternalAccountDeletedEvent>;
}

/**
 * Occurs whenever an external account is updated.
 */
export interface V1AccountExternalAccountUpdatedEvent extends EventBase {
  type: 'v1.account.external_account.updated';
}
export interface V1AccountExternalAccountUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v1.account.external_account.updated';
  fetchEvent(): Promise<V1AccountExternalAccountUpdatedEvent>;
}

/**
 * Occurs whenever an account status or property has changed.
 */
export interface V1AccountUpdatedEvent extends EventBase {
  type: 'v1.account.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Account>;
}
export interface V1AccountUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v1.account.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Account>;
  fetchEvent(): Promise<V1AccountUpdatedEvent>;
}

/**
 * Occurs when a delinquency signal is created for an account.
 */
export interface V1AccountSignalsIncludingDelinquencyCreatedEvent
  extends EventBase {
  type: 'v1.account_signals[delinquency].created';
  // Retrieves data specific to this event.
  data: V1AccountSignalsIncludingDelinquencyCreatedEvent.Data;
}
export interface V1AccountSignalsIncludingDelinquencyCreatedEventNotification
  extends EventNotificationBase {
  type: 'v1.account_signals[delinquency].created';
  fetchEvent(): Promise<V1AccountSignalsIncludingDelinquencyCreatedEvent>;
}

export namespace V1AccountSignalsIncludingDelinquencyCreatedEvent {
  export interface Data {
    /**
     * The account for which the signals belong to.
     */
    account: string;

    /**
     * Time at which the signal was evaluated.
     */
    evaluated_at: string;

    /**
     * Array of objects representing individual factors that contributed to the calculated probability of delinquency.
     */
    indicators: Array<Data.Indicator>;

    /**
     * The probability of delinquency. Can be between 0.00 and 100.00.
     */
    probability?: Decimal;

    /**
     * Categorical assessment of the delinquency risk based on probability.
     */
    risk_level: Data.RiskLevel;

    /**
     * Unique identifier for the delinquency signal.
     */
    signal_id: string;
  }

  export namespace Data {
    export interface Indicator {
      /**
       * A brief explanation of how this indicator contributed to the delinquency probability.
       */
      description: string;

      /**
       * The effect this indicator had on the overall risk level.
       */
      impact: Indicator.Impact;

      /**
       * The name of the specific indicator used in the risk assessment.
       */
      indicator: Indicator.Indicator;
    }

    export type RiskLevel =
      | 'elevated'
      | 'highest'
      | 'low'
      | 'normal'
      | 'not_assessed'
      | 'unknown';

    export namespace Indicator {
      export type Impact =
        | 'decrease'
        | 'neutral'
        | 'slight_increase'
        | 'strong_increase';

      export type Indicator =
        | 'account_balance'
        | 'aov'
        | 'charge_concentration'
        | 'disputes'
        | 'dispute_window'
        | 'duplicates'
        | 'exposure'
        | 'firmographic'
        | 'lifetime_metrics'
        | 'payment_processing'
        | 'payment_volume'
        | 'payouts'
        | 'refunds'
        | 'tenure'
        | 'transfers';
    }
  }
}

/**
 * Occurs whenever an application fee is created on a charge.
 */
export interface V1ApplicationFeeCreatedEvent extends EventBase {
  type: 'v1.application_fee.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1ApplicationFee>;
}
export interface V1ApplicationFeeCreatedEventNotification
  extends EventNotificationBase {
  type: 'v1.application_fee.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1ApplicationFee>;
  fetchEvent(): Promise<V1ApplicationFeeCreatedEvent>;
}

/**
 * Occurs whenever an application fee refund is updated.
 */
export interface V1ApplicationFeeRefundUpdatedEvent extends EventBase {
  type: 'v1.application_fee.refund.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1FeeRefund>;
}
export interface V1ApplicationFeeRefundUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v1.application_fee.refund.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1FeeRefund>;
  fetchEvent(): Promise<V1ApplicationFeeRefundUpdatedEvent>;
}

/**
 * Occurs whenever an application fee is refunded, whether from refunding a charge or from [refunding the application fee directly](#fee_refunds). This includes partial refunds.
 */
export interface V1ApplicationFeeRefundedEvent extends EventBase {
  type: 'v1.application_fee.refunded';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1ApplicationFee>;
}
export interface V1ApplicationFeeRefundedEventNotification
  extends EventNotificationBase {
  type: 'v1.application_fee.refunded';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1ApplicationFee>;
  fetchEvent(): Promise<V1ApplicationFeeRefundedEvent>;
}

/**
 * Occurs whenever your Stripe balance has been updated (e.g., when a charge is available to be paid out). By default, Stripe automatically transfers funds in your balance to your bank account on a daily basis. This event is not fired for negative transactions.
 */
export interface V1BalanceAvailableEvent extends EventBase {
  type: 'v1.balance.available';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Balance>;
}
export interface V1BalanceAvailableEventNotification
  extends EventNotificationBase {
  type: 'v1.balance.available';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Balance>;
  fetchEvent(): Promise<V1BalanceAvailableEvent>;
}

/**
 * Occurs whenever your custom alert threshold is met.
 */
export interface V1BillingAlertTriggeredEvent extends EventBase {
  type: 'v1.billing.alert.triggered';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Billing.Alert>;
}
export interface V1BillingAlertTriggeredEventNotification
  extends EventNotificationBase {
  type: 'v1.billing.alert.triggered';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Billing.Alert>;
  fetchEvent(): Promise<V1BillingAlertTriggeredEvent>;
}

/**
 * Occurs when a Meter has invalid async usage events.
 */
export interface V1BillingMeterErrorReportTriggeredEvent extends EventBase {
  type: 'v1.billing.meter.error_report_triggered';
  // Retrieves data specific to this event.
  data: V1BillingMeterErrorReportTriggeredEvent.Data;
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Billing.Meter>;
}
export interface V1BillingMeterErrorReportTriggeredEventNotification
  extends EventNotificationBase {
  type: 'v1.billing.meter.error_report_triggered';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Billing.Meter>;
  fetchEvent(): Promise<V1BillingMeterErrorReportTriggeredEvent>;
}

export namespace V1BillingMeterErrorReportTriggeredEvent {
  export interface Data {
    /**
     * Extra field included in the event's `data` when fetched from /v2/events.
     */
    developer_message_summary: string;

    /**
     * This contains information about why meter error happens.
     */
    reason: Data.Reason;

    /**
     * The end of the window that is encapsulated by this summary.
     */
    validation_end: string;

    /**
     * The start of the window that is encapsulated by this summary.
     */
    validation_start: string;
  }

  export namespace Data {
    export interface Reason {
      /**
       * The total error count within this window.
       */
      error_count: number;

      /**
       * The error details.
       */
      error_types: Array<Reason.ErrorType>;
    }

    export namespace Reason {
      export interface ErrorType {
        /**
         * Open Enum.
         */
        code: ErrorType.Code;

        /**
         * The number of errors of this type.
         */
        error_count: number;

        /**
         * A list of sample errors of this type.
         */
        sample_errors: Array<ErrorType.SampleError>;
      }

      export namespace ErrorType {
        export type Code =
          | 'archived_meter'
          | 'meter_event_customer_not_found'
          | 'meter_event_dimension_count_too_high'
          | 'meter_event_invalid_value'
          | 'meter_event_no_customer_defined'
          | 'meter_event_value_too_many_digits'
          | 'missing_dimension_payload_keys'
          | 'no_meter'
          | 'timestamp_in_future'
          | 'timestamp_too_far_in_past';

        export interface SampleError {
          /**
           * The error message.
           */
          error_message: string;

          /**
           * The request causes the error.
           */
          request: SampleError.Request;
        }

        export namespace SampleError {
          export interface Request {
            /**
             * The request idempotency key.
             */
            identifier: string;
          }
        }
      }
    }
  }
}

/**
 * Occurs when a Meter's id is missing or invalid in async usage events.
 */
export interface V1BillingMeterNoMeterFoundEvent extends EventBase {
  type: 'v1.billing.meter.no_meter_found';
  // Retrieves data specific to this event.
  data: V1BillingMeterNoMeterFoundEvent.Data;
}
export interface V1BillingMeterNoMeterFoundEventNotification
  extends EventNotificationBase {
  type: 'v1.billing.meter.no_meter_found';
  fetchEvent(): Promise<V1BillingMeterNoMeterFoundEvent>;
}

export namespace V1BillingMeterNoMeterFoundEvent {
  export interface Data {
    /**
     * Extra field included in the event's `data` when fetched from /v2/events.
     */
    developer_message_summary: string;

    /**
     * This contains information about why meter error happens.
     */
    reason: Data.Reason;

    /**
     * The end of the window that is encapsulated by this summary.
     */
    validation_end: string;

    /**
     * The start of the window that is encapsulated by this summary.
     */
    validation_start: string;
  }

  export namespace Data {
    export interface Reason {
      /**
       * The total error count within this window.
       */
      error_count: number;

      /**
       * The error details.
       */
      error_types: Array<Reason.ErrorType>;
    }

    export namespace Reason {
      export interface ErrorType {
        /**
         * Open Enum.
         */
        code: ErrorType.Code;

        /**
         * The number of errors of this type.
         */
        error_count: number;

        /**
         * A list of sample errors of this type.
         */
        sample_errors: Array<ErrorType.SampleError>;
      }

      export namespace ErrorType {
        export type Code =
          | 'archived_meter'
          | 'meter_event_customer_not_found'
          | 'meter_event_dimension_count_too_high'
          | 'meter_event_invalid_value'
          | 'meter_event_no_customer_defined'
          | 'meter_event_value_too_many_digits'
          | 'missing_dimension_payload_keys'
          | 'no_meter'
          | 'timestamp_in_future'
          | 'timestamp_too_far_in_past';

        export interface SampleError {
          /**
           * The error message.
           */
          error_message: string;

          /**
           * The request causes the error.
           */
          request: SampleError.Request;
        }

        export namespace SampleError {
          export interface Request {
            /**
             * The request idempotency key.
             */
            identifier: string;
          }
        }
      }
    }
  }
}

/**
 * Occurs whenever a portal configuration is created.
 */
export interface V1BillingPortalConfigurationCreatedEvent extends EventBase {
  type: 'v1.billing_portal.configuration.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1BillingPortal.Configuration>;
}
export interface V1BillingPortalConfigurationCreatedEventNotification
  extends EventNotificationBase {
  type: 'v1.billing_portal.configuration.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1BillingPortal.Configuration>;
  fetchEvent(): Promise<V1BillingPortalConfigurationCreatedEvent>;
}

/**
 * Occurs whenever a portal configuration is updated.
 */
export interface V1BillingPortalConfigurationUpdatedEvent extends EventBase {
  type: 'v1.billing_portal.configuration.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1BillingPortal.Configuration>;
}
export interface V1BillingPortalConfigurationUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v1.billing_portal.configuration.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1BillingPortal.Configuration>;
  fetchEvent(): Promise<V1BillingPortalConfigurationUpdatedEvent>;
}

/**
 * Occurs whenever a portal session is created.
 */
export interface V1BillingPortalSessionCreatedEvent extends EventBase {
  type: 'v1.billing_portal.session.created';
}
export interface V1BillingPortalSessionCreatedEventNotification
  extends EventNotificationBase {
  type: 'v1.billing_portal.session.created';
  fetchEvent(): Promise<V1BillingPortalSessionCreatedEvent>;
}

/**
 * Occurs whenever a capability has new requirements or a new status.
 */
export interface V1CapabilityUpdatedEvent extends EventBase {
  type: 'v1.capability.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Capability>;
}
export interface V1CapabilityUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v1.capability.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Capability>;
  fetchEvent(): Promise<V1CapabilityUpdatedEvent>;
}

/**
 * Occurs whenever there is a positive remaining cash balance after Stripe automatically reconciles new funds into the cash balance. If you enabled manual reconciliation, this webhook will fire whenever there are new funds into the cash balance.
 */
export interface V1CashBalanceFundsAvailableEvent extends EventBase {
  type: 'v1.cash_balance.funds_available';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1CashBalance>;
}
export interface V1CashBalanceFundsAvailableEventNotification
  extends EventNotificationBase {
  type: 'v1.cash_balance.funds_available';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1CashBalance>;
  fetchEvent(): Promise<V1CashBalanceFundsAvailableEvent>;
}

/**
 * Occurs whenever a previously uncaptured charge is captured.
 */
export interface V1ChargeCapturedEvent extends EventBase {
  type: 'v1.charge.captured';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Charge>;
}
export interface V1ChargeCapturedEventNotification
  extends EventNotificationBase {
  type: 'v1.charge.captured';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Charge>;
  fetchEvent(): Promise<V1ChargeCapturedEvent>;
}

/**
 * Occurs when a dispute is closed and the dispute status changes to `lost`, `warning_closed`, or `won`.
 */
export interface V1ChargeDisputeClosedEvent extends EventBase {
  type: 'v1.charge.dispute.closed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Dispute>;
}
export interface V1ChargeDisputeClosedEventNotification
  extends EventNotificationBase {
  type: 'v1.charge.dispute.closed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Dispute>;
  fetchEvent(): Promise<V1ChargeDisputeClosedEvent>;
}

/**
 * Occurs whenever a customer disputes a charge with their bank.
 */
export interface V1ChargeDisputeCreatedEvent extends EventBase {
  type: 'v1.charge.dispute.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Dispute>;
}
export interface V1ChargeDisputeCreatedEventNotification
  extends EventNotificationBase {
  type: 'v1.charge.dispute.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Dispute>;
  fetchEvent(): Promise<V1ChargeDisputeCreatedEvent>;
}

/**
 * Occurs when funds are reinstated to your account after a dispute is closed. This includes [partially refunded payments](https://docs.stripe.com/disputes#disputes-on-partially-refunded-payments).
 */
export interface V1ChargeDisputeFundsReinstatedEvent extends EventBase {
  type: 'v1.charge.dispute.funds_reinstated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Dispute>;
}
export interface V1ChargeDisputeFundsReinstatedEventNotification
  extends EventNotificationBase {
  type: 'v1.charge.dispute.funds_reinstated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Dispute>;
  fetchEvent(): Promise<V1ChargeDisputeFundsReinstatedEvent>;
}

/**
 * Occurs when funds are removed from your account due to a dispute.
 */
export interface V1ChargeDisputeFundsWithdrawnEvent extends EventBase {
  type: 'v1.charge.dispute.funds_withdrawn';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Dispute>;
}
export interface V1ChargeDisputeFundsWithdrawnEventNotification
  extends EventNotificationBase {
  type: 'v1.charge.dispute.funds_withdrawn';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Dispute>;
  fetchEvent(): Promise<V1ChargeDisputeFundsWithdrawnEvent>;
}

/**
 * Occurs when the dispute is updated (usually with evidence).
 */
export interface V1ChargeDisputeUpdatedEvent extends EventBase {
  type: 'v1.charge.dispute.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Dispute>;
}
export interface V1ChargeDisputeUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v1.charge.dispute.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Dispute>;
  fetchEvent(): Promise<V1ChargeDisputeUpdatedEvent>;
}

/**
 * Occurs whenever an uncaptured charge expires.
 */
export interface V1ChargeExpiredEvent extends EventBase {
  type: 'v1.charge.expired';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Charge>;
}
export interface V1ChargeExpiredEventNotification
  extends EventNotificationBase {
  type: 'v1.charge.expired';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Charge>;
  fetchEvent(): Promise<V1ChargeExpiredEvent>;
}

/**
 * Occurs whenever a failed charge attempt occurs.
 */
export interface V1ChargeFailedEvent extends EventBase {
  type: 'v1.charge.failed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Charge>;
}
export interface V1ChargeFailedEventNotification extends EventNotificationBase {
  type: 'v1.charge.failed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Charge>;
  fetchEvent(): Promise<V1ChargeFailedEvent>;
}

/**
 * Occurs whenever a pending charge is created.
 */
export interface V1ChargePendingEvent extends EventBase {
  type: 'v1.charge.pending';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Charge>;
}
export interface V1ChargePendingEventNotification
  extends EventNotificationBase {
  type: 'v1.charge.pending';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Charge>;
  fetchEvent(): Promise<V1ChargePendingEvent>;
}

/**
 * Occurs whenever a refund is updated on selected payment methods. For updates on all refunds, listen to `refund.updated` instead.
 */
export interface V1ChargeRefundUpdatedEvent extends EventBase {
  type: 'v1.charge.refund.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Refund>;
}
export interface V1ChargeRefundUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v1.charge.refund.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Refund>;
  fetchEvent(): Promise<V1ChargeRefundUpdatedEvent>;
}

/**
 * Occurs whenever a charge is refunded, including partial refunds. Listen to `refund.created` for information about the refund.
 */
export interface V1ChargeRefundedEvent extends EventBase {
  type: 'v1.charge.refunded';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Charge>;
}
export interface V1ChargeRefundedEventNotification
  extends EventNotificationBase {
  type: 'v1.charge.refunded';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Charge>;
  fetchEvent(): Promise<V1ChargeRefundedEvent>;
}

/**
 * Occurs whenever a charge is successful.
 */
export interface V1ChargeSucceededEvent extends EventBase {
  type: 'v1.charge.succeeded';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Charge>;
}
export interface V1ChargeSucceededEventNotification
  extends EventNotificationBase {
  type: 'v1.charge.succeeded';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Charge>;
  fetchEvent(): Promise<V1ChargeSucceededEvent>;
}

/**
 * Occurs whenever a charge description or metadata is updated, or upon an asynchronous capture.
 */
export interface V1ChargeUpdatedEvent extends EventBase {
  type: 'v1.charge.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Charge>;
}
export interface V1ChargeUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v1.charge.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Charge>;
  fetchEvent(): Promise<V1ChargeUpdatedEvent>;
}

/**
 * Occurs when a payment intent using a delayed payment method fails.
 */
export interface V1CheckoutSessionAsyncPaymentFailedEvent extends EventBase {
  type: 'v1.checkout.session.async_payment_failed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Checkout.Session>;
}
export interface V1CheckoutSessionAsyncPaymentFailedEventNotification
  extends EventNotificationBase {
  type: 'v1.checkout.session.async_payment_failed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Checkout.Session>;
  fetchEvent(): Promise<V1CheckoutSessionAsyncPaymentFailedEvent>;
}

/**
 * Occurs when a payment intent using a delayed payment method finally succeeds.
 */
export interface V1CheckoutSessionAsyncPaymentSucceededEvent extends EventBase {
  type: 'v1.checkout.session.async_payment_succeeded';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Checkout.Session>;
}
export interface V1CheckoutSessionAsyncPaymentSucceededEventNotification
  extends EventNotificationBase {
  type: 'v1.checkout.session.async_payment_succeeded';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Checkout.Session>;
  fetchEvent(): Promise<V1CheckoutSessionAsyncPaymentSucceededEvent>;
}

/**
 * Occurs when a Checkout Session has been successfully completed.
 */
export interface V1CheckoutSessionCompletedEvent extends EventBase {
  type: 'v1.checkout.session.completed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Checkout.Session>;
}
export interface V1CheckoutSessionCompletedEventNotification
  extends EventNotificationBase {
  type: 'v1.checkout.session.completed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Checkout.Session>;
  fetchEvent(): Promise<V1CheckoutSessionCompletedEvent>;
}

/**
 * Occurs when a Checkout Session is expired.
 */
export interface V1CheckoutSessionExpiredEvent extends EventBase {
  type: 'v1.checkout.session.expired';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Checkout.Session>;
}
export interface V1CheckoutSessionExpiredEventNotification
  extends EventNotificationBase {
  type: 'v1.checkout.session.expired';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Checkout.Session>;
  fetchEvent(): Promise<V1CheckoutSessionExpiredEvent>;
}

/**
 * Occurs when a Climate order is canceled.
 */
export interface V1ClimateOrderCanceledEvent extends EventBase {
  type: 'v1.climate.order.canceled';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Climate.Order>;
}
export interface V1ClimateOrderCanceledEventNotification
  extends EventNotificationBase {
  type: 'v1.climate.order.canceled';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Climate.Order>;
  fetchEvent(): Promise<V1ClimateOrderCanceledEvent>;
}

/**
 * Occurs when a Climate order is created.
 */
export interface V1ClimateOrderCreatedEvent extends EventBase {
  type: 'v1.climate.order.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Climate.Order>;
}
export interface V1ClimateOrderCreatedEventNotification
  extends EventNotificationBase {
  type: 'v1.climate.order.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Climate.Order>;
  fetchEvent(): Promise<V1ClimateOrderCreatedEvent>;
}

/**
 * Occurs when a Climate order is delayed.
 */
export interface V1ClimateOrderDelayedEvent extends EventBase {
  type: 'v1.climate.order.delayed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Climate.Order>;
}
export interface V1ClimateOrderDelayedEventNotification
  extends EventNotificationBase {
  type: 'v1.climate.order.delayed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Climate.Order>;
  fetchEvent(): Promise<V1ClimateOrderDelayedEvent>;
}

/**
 * Occurs when a Climate order is delivered.
 */
export interface V1ClimateOrderDeliveredEvent extends EventBase {
  type: 'v1.climate.order.delivered';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Climate.Order>;
}
export interface V1ClimateOrderDeliveredEventNotification
  extends EventNotificationBase {
  type: 'v1.climate.order.delivered';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Climate.Order>;
  fetchEvent(): Promise<V1ClimateOrderDeliveredEvent>;
}

/**
 * Occurs when a Climate order's product is substituted for another.
 */
export interface V1ClimateOrderProductSubstitutedEvent extends EventBase {
  type: 'v1.climate.order.product_substituted';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Climate.Order>;
}
export interface V1ClimateOrderProductSubstitutedEventNotification
  extends EventNotificationBase {
  type: 'v1.climate.order.product_substituted';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Climate.Order>;
  fetchEvent(): Promise<V1ClimateOrderProductSubstitutedEvent>;
}

/**
 * Occurs when a Climate product is created.
 */
export interface V1ClimateProductCreatedEvent extends EventBase {
  type: 'v1.climate.product.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Climate.Product>;
}
export interface V1ClimateProductCreatedEventNotification
  extends EventNotificationBase {
  type: 'v1.climate.product.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Climate.Product>;
  fetchEvent(): Promise<V1ClimateProductCreatedEvent>;
}

/**
 * Occurs when a Climate product is updated.
 */
export interface V1ClimateProductPricingUpdatedEvent extends EventBase {
  type: 'v1.climate.product.pricing_updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Climate.Product>;
}
export interface V1ClimateProductPricingUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v1.climate.product.pricing_updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Climate.Product>;
  fetchEvent(): Promise<V1ClimateProductPricingUpdatedEvent>;
}

/**
 * Occurs whenever a coupon is created.
 */
export interface V1CouponCreatedEvent extends EventBase {
  type: 'v1.coupon.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Coupon>;
}
export interface V1CouponCreatedEventNotification
  extends EventNotificationBase {
  type: 'v1.coupon.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Coupon>;
  fetchEvent(): Promise<V1CouponCreatedEvent>;
}

/**
 * Occurs whenever a coupon is deleted.
 */
export interface V1CouponDeletedEvent extends EventBase {
  type: 'v1.coupon.deleted';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Coupon>;
}
export interface V1CouponDeletedEventNotification
  extends EventNotificationBase {
  type: 'v1.coupon.deleted';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Coupon>;
  fetchEvent(): Promise<V1CouponDeletedEvent>;
}

/**
 * Occurs whenever a coupon is updated.
 */
export interface V1CouponUpdatedEvent extends EventBase {
  type: 'v1.coupon.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Coupon>;
}
export interface V1CouponUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v1.coupon.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Coupon>;
  fetchEvent(): Promise<V1CouponUpdatedEvent>;
}

/**
 * Occurs whenever a credit note is created.
 */
export interface V1CreditNoteCreatedEvent extends EventBase {
  type: 'v1.credit_note.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1CreditNote>;
}
export interface V1CreditNoteCreatedEventNotification
  extends EventNotificationBase {
  type: 'v1.credit_note.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1CreditNote>;
  fetchEvent(): Promise<V1CreditNoteCreatedEvent>;
}

/**
 * Occurs whenever a credit note is updated.
 */
export interface V1CreditNoteUpdatedEvent extends EventBase {
  type: 'v1.credit_note.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1CreditNote>;
}
export interface V1CreditNoteUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v1.credit_note.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1CreditNote>;
  fetchEvent(): Promise<V1CreditNoteUpdatedEvent>;
}

/**
 * Occurs whenever a credit note is voided.
 */
export interface V1CreditNoteVoidedEvent extends EventBase {
  type: 'v1.credit_note.voided';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1CreditNote>;
}
export interface V1CreditNoteVoidedEventNotification
  extends EventNotificationBase {
  type: 'v1.credit_note.voided';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1CreditNote>;
  fetchEvent(): Promise<V1CreditNoteVoidedEvent>;
}

/**
 * Occurs whenever a new customer is created.
 */
export interface V1CustomerCreatedEvent extends EventBase {
  type: 'v1.customer.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Customer>;
}
export interface V1CustomerCreatedEventNotification
  extends EventNotificationBase {
  type: 'v1.customer.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Customer>;
  fetchEvent(): Promise<V1CustomerCreatedEvent>;
}

/**
 * Occurs whenever a customer is deleted.
 */
export interface V1CustomerDeletedEvent extends EventBase {
  type: 'v1.customer.deleted';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Customer>;
}
export interface V1CustomerDeletedEventNotification
  extends EventNotificationBase {
  type: 'v1.customer.deleted';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Customer>;
  fetchEvent(): Promise<V1CustomerDeletedEvent>;
}

/**
 * Occurs whenever a customer is signed up for a new plan.
 */
export interface V1CustomerSubscriptionCreatedEvent extends EventBase {
  type: 'v1.customer.subscription.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Subscription>;
}
export interface V1CustomerSubscriptionCreatedEventNotification
  extends EventNotificationBase {
  type: 'v1.customer.subscription.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Subscription>;
  fetchEvent(): Promise<V1CustomerSubscriptionCreatedEvent>;
}

/**
 * Occurs whenever a customer's subscription ends.
 */
export interface V1CustomerSubscriptionDeletedEvent extends EventBase {
  type: 'v1.customer.subscription.deleted';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Subscription>;
}
export interface V1CustomerSubscriptionDeletedEventNotification
  extends EventNotificationBase {
  type: 'v1.customer.subscription.deleted';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Subscription>;
  fetchEvent(): Promise<V1CustomerSubscriptionDeletedEvent>;
}

/**
 * Occurs whenever a customer's subscription is paused. Only applies when subscriptions enter `status=paused`, not when [payment collection](https://docs.stripe.com/billing/subscriptions/pause) is paused.
 */
export interface V1CustomerSubscriptionPausedEvent extends EventBase {
  type: 'v1.customer.subscription.paused';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Subscription>;
}
export interface V1CustomerSubscriptionPausedEventNotification
  extends EventNotificationBase {
  type: 'v1.customer.subscription.paused';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Subscription>;
  fetchEvent(): Promise<V1CustomerSubscriptionPausedEvent>;
}

/**
 * Occurs whenever a customer's subscription's pending update is applied, and the subscription is updated.
 */
export interface V1CustomerSubscriptionPendingUpdateAppliedEvent
  extends EventBase {
  type: 'v1.customer.subscription.pending_update_applied';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Subscription>;
}
export interface V1CustomerSubscriptionPendingUpdateAppliedEventNotification
  extends EventNotificationBase {
  type: 'v1.customer.subscription.pending_update_applied';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Subscription>;
  fetchEvent(): Promise<V1CustomerSubscriptionPendingUpdateAppliedEvent>;
}

/**
 * Occurs whenever a customer's subscription's pending update expires before the related invoice is paid.
 */
export interface V1CustomerSubscriptionPendingUpdateExpiredEvent
  extends EventBase {
  type: 'v1.customer.subscription.pending_update_expired';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Subscription>;
}
export interface V1CustomerSubscriptionPendingUpdateExpiredEventNotification
  extends EventNotificationBase {
  type: 'v1.customer.subscription.pending_update_expired';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Subscription>;
  fetchEvent(): Promise<V1CustomerSubscriptionPendingUpdateExpiredEvent>;
}

/**
 * Occurs whenever a customer's subscription is no longer paused. Only applies when a `status=paused` subscription is [resumed](https://docs.stripe.com/api/subscriptions/resume), not when [payment collection](https://docs.stripe.com/billing/subscriptions/pause) is resumed.
 */
export interface V1CustomerSubscriptionResumedEvent extends EventBase {
  type: 'v1.customer.subscription.resumed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Subscription>;
}
export interface V1CustomerSubscriptionResumedEventNotification
  extends EventNotificationBase {
  type: 'v1.customer.subscription.resumed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Subscription>;
  fetchEvent(): Promise<V1CustomerSubscriptionResumedEvent>;
}

/**
 * Occurs three days before a subscription's trial period is scheduled to end, or when a trial is ended immediately (using `trial_end=now`).
 */
export interface V1CustomerSubscriptionTrialWillEndEvent extends EventBase {
  type: 'v1.customer.subscription.trial_will_end';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Subscription>;
}
export interface V1CustomerSubscriptionTrialWillEndEventNotification
  extends EventNotificationBase {
  type: 'v1.customer.subscription.trial_will_end';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Subscription>;
  fetchEvent(): Promise<V1CustomerSubscriptionTrialWillEndEvent>;
}

/**
 * Occurs whenever a subscription changes (e.g., switching from one plan to another, or changing the status from trial to active).
 */
export interface V1CustomerSubscriptionUpdatedEvent extends EventBase {
  type: 'v1.customer.subscription.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Subscription>;
}
export interface V1CustomerSubscriptionUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v1.customer.subscription.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Subscription>;
  fetchEvent(): Promise<V1CustomerSubscriptionUpdatedEvent>;
}

/**
 * Occurs whenever a tax ID is created for a customer.
 */
export interface V1CustomerTaxIdCreatedEvent extends EventBase {
  type: 'v1.customer.tax_id.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1TaxId>;
}
export interface V1CustomerTaxIdCreatedEventNotification
  extends EventNotificationBase {
  type: 'v1.customer.tax_id.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1TaxId>;
  fetchEvent(): Promise<V1CustomerTaxIdCreatedEvent>;
}

/**
 * Occurs whenever a tax ID is deleted from a customer.
 */
export interface V1CustomerTaxIdDeletedEvent extends EventBase {
  type: 'v1.customer.tax_id.deleted';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1TaxId>;
}
export interface V1CustomerTaxIdDeletedEventNotification
  extends EventNotificationBase {
  type: 'v1.customer.tax_id.deleted';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1TaxId>;
  fetchEvent(): Promise<V1CustomerTaxIdDeletedEvent>;
}

/**
 * Occurs whenever a customer's tax ID is updated.
 */
export interface V1CustomerTaxIdUpdatedEvent extends EventBase {
  type: 'v1.customer.tax_id.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1TaxId>;
}
export interface V1CustomerTaxIdUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v1.customer.tax_id.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1TaxId>;
  fetchEvent(): Promise<V1CustomerTaxIdUpdatedEvent>;
}

/**
 * Occurs whenever any property of a customer changes.
 */
export interface V1CustomerUpdatedEvent extends EventBase {
  type: 'v1.customer.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Customer>;
}
export interface V1CustomerUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v1.customer.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Customer>;
  fetchEvent(): Promise<V1CustomerUpdatedEvent>;
}

/**
 * Occurs whenever a new customer cash balance transactions is created.
 */
export interface V1CustomerCashBalanceTransactionCreatedEvent
  extends EventBase {
  type: 'v1.customer_cash_balance_transaction.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1CustomerCashBalanceTransaction>;
}
export interface V1CustomerCashBalanceTransactionCreatedEventNotification
  extends EventNotificationBase {
  type: 'v1.customer_cash_balance_transaction.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1CustomerCashBalanceTransaction>;
  fetchEvent(): Promise<V1CustomerCashBalanceTransactionCreatedEvent>;
}

/**
 * Occurs whenever a customer's entitlements change.
 */
export interface V1EntitlementsActiveEntitlementSummaryUpdatedEvent
  extends EventBase {
  type: 'v1.entitlements.active_entitlement_summary.updated';
}
export interface V1EntitlementsActiveEntitlementSummaryUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v1.entitlements.active_entitlement_summary.updated';
  fetchEvent(): Promise<V1EntitlementsActiveEntitlementSummaryUpdatedEvent>;
}

/**
 * Occurs whenever a new Stripe-generated file is available for your account.
 */
export interface V1FileCreatedEvent extends EventBase {
  type: 'v1.file.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1File>;
}
export interface V1FileCreatedEventNotification extends EventNotificationBase {
  type: 'v1.file.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1File>;
  fetchEvent(): Promise<V1FileCreatedEvent>;
}

/**
 * Occurs when a new Financial Connections account is created.
 */
export interface V1FinancialConnectionsAccountCreatedEvent extends EventBase {
  type: 'v1.financial_connections.account.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1FinancialConnections.Account>;
}
export interface V1FinancialConnectionsAccountCreatedEventNotification
  extends EventNotificationBase {
  type: 'v1.financial_connections.account.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1FinancialConnections.Account>;
  fetchEvent(): Promise<V1FinancialConnectionsAccountCreatedEvent>;
}

/**
 * Occurs when a Financial Connections account's status is updated from `active` to `inactive`.
 */
export interface V1FinancialConnectionsAccountDeactivatedEvent
  extends EventBase {
  type: 'v1.financial_connections.account.deactivated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1FinancialConnections.Account>;
}
export interface V1FinancialConnectionsAccountDeactivatedEventNotification
  extends EventNotificationBase {
  type: 'v1.financial_connections.account.deactivated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1FinancialConnections.Account>;
  fetchEvent(): Promise<V1FinancialConnectionsAccountDeactivatedEvent>;
}

/**
 * Occurs when a Financial Connections account is disconnected.
 */
export interface V1FinancialConnectionsAccountDisconnectedEvent
  extends EventBase {
  type: 'v1.financial_connections.account.disconnected';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1FinancialConnections.Account>;
}
export interface V1FinancialConnectionsAccountDisconnectedEventNotification
  extends EventNotificationBase {
  type: 'v1.financial_connections.account.disconnected';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1FinancialConnections.Account>;
  fetchEvent(): Promise<V1FinancialConnectionsAccountDisconnectedEvent>;
}

/**
 * Occurs when a Financial Connections account's status is updated from `inactive` to `active`.
 */
export interface V1FinancialConnectionsAccountReactivatedEvent
  extends EventBase {
  type: 'v1.financial_connections.account.reactivated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1FinancialConnections.Account>;
}
export interface V1FinancialConnectionsAccountReactivatedEventNotification
  extends EventNotificationBase {
  type: 'v1.financial_connections.account.reactivated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1FinancialConnections.Account>;
  fetchEvent(): Promise<V1FinancialConnectionsAccountReactivatedEvent>;
}

/**
 * Occurs when an Account’s `balance_refresh` status transitions from `pending` to either `succeeded` or `failed`.
 */
export interface V1FinancialConnectionsAccountRefreshedBalanceEvent
  extends EventBase {
  type: 'v1.financial_connections.account.refreshed_balance';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1FinancialConnections.Account>;
}
export interface V1FinancialConnectionsAccountRefreshedBalanceEventNotification
  extends EventNotificationBase {
  type: 'v1.financial_connections.account.refreshed_balance';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1FinancialConnections.Account>;
  fetchEvent(): Promise<V1FinancialConnectionsAccountRefreshedBalanceEvent>;
}

/**
 * Occurs when an Account’s `ownership_refresh` status transitions from `pending` to either `succeeded` or `failed`.
 */
export interface V1FinancialConnectionsAccountRefreshedOwnershipEvent
  extends EventBase {
  type: 'v1.financial_connections.account.refreshed_ownership';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1FinancialConnections.Account>;
}
export interface V1FinancialConnectionsAccountRefreshedOwnershipEventNotification
  extends EventNotificationBase {
  type: 'v1.financial_connections.account.refreshed_ownership';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1FinancialConnections.Account>;
  fetchEvent(): Promise<V1FinancialConnectionsAccountRefreshedOwnershipEvent>;
}

/**
 * Occurs when an Account’s `transaction_refresh` status transitions from `pending` to either `succeeded` or `failed`.
 */
export interface V1FinancialConnectionsAccountRefreshedTransactionsEvent
  extends EventBase {
  type: 'v1.financial_connections.account.refreshed_transactions';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1FinancialConnections.Account>;
}
export interface V1FinancialConnectionsAccountRefreshedTransactionsEventNotification
  extends EventNotificationBase {
  type: 'v1.financial_connections.account.refreshed_transactions';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1FinancialConnections.Account>;
  fetchEvent(): Promise<
    V1FinancialConnectionsAccountRefreshedTransactionsEvent
  >;
}

/**
 * Occurs whenever a VerificationSession is canceled.
 */
export interface V1IdentityVerificationSessionCanceledEvent extends EventBase {
  type: 'v1.identity.verification_session.canceled';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Identity.VerificationSession>;
}
export interface V1IdentityVerificationSessionCanceledEventNotification
  extends EventNotificationBase {
  type: 'v1.identity.verification_session.canceled';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Identity.VerificationSession>;
  fetchEvent(): Promise<V1IdentityVerificationSessionCanceledEvent>;
}

/**
 * Occurs whenever a VerificationSession is created.
 */
export interface V1IdentityVerificationSessionCreatedEvent extends EventBase {
  type: 'v1.identity.verification_session.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Identity.VerificationSession>;
}
export interface V1IdentityVerificationSessionCreatedEventNotification
  extends EventNotificationBase {
  type: 'v1.identity.verification_session.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Identity.VerificationSession>;
  fetchEvent(): Promise<V1IdentityVerificationSessionCreatedEvent>;
}

/**
 * Occurs whenever a VerificationSession transitions to processing.
 */
export interface V1IdentityVerificationSessionProcessingEvent
  extends EventBase {
  type: 'v1.identity.verification_session.processing';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Identity.VerificationSession>;
}
export interface V1IdentityVerificationSessionProcessingEventNotification
  extends EventNotificationBase {
  type: 'v1.identity.verification_session.processing';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Identity.VerificationSession>;
  fetchEvent(): Promise<V1IdentityVerificationSessionProcessingEvent>;
}

/**
 * Occurs whenever a VerificationSession is redacted.
 */
export interface V1IdentityVerificationSessionRedactedEvent extends EventBase {
  type: 'v1.identity.verification_session.redacted';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Identity.VerificationSession>;
}
export interface V1IdentityVerificationSessionRedactedEventNotification
  extends EventNotificationBase {
  type: 'v1.identity.verification_session.redacted';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Identity.VerificationSession>;
  fetchEvent(): Promise<V1IdentityVerificationSessionRedactedEvent>;
}

/**
 * Occurs whenever a VerificationSession transitions to require user input.
 */
export interface V1IdentityVerificationSessionRequiresInputEvent
  extends EventBase {
  type: 'v1.identity.verification_session.requires_input';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Identity.VerificationSession>;
}
export interface V1IdentityVerificationSessionRequiresInputEventNotification
  extends EventNotificationBase {
  type: 'v1.identity.verification_session.requires_input';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Identity.VerificationSession>;
  fetchEvent(): Promise<V1IdentityVerificationSessionRequiresInputEvent>;
}

/**
 * Occurs whenever a VerificationSession transitions to verified.
 */
export interface V1IdentityVerificationSessionVerifiedEvent extends EventBase {
  type: 'v1.identity.verification_session.verified';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Identity.VerificationSession>;
}
export interface V1IdentityVerificationSessionVerifiedEventNotification
  extends EventNotificationBase {
  type: 'v1.identity.verification_session.verified';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Identity.VerificationSession>;
  fetchEvent(): Promise<V1IdentityVerificationSessionVerifiedEvent>;
}

/**
 * Occurs whenever a new invoice is created. To learn how webhooks can be used with this event, and how they can affect it, see [Using Webhooks with Subscriptions](https://docs.stripe.com/subscriptions/webhooks).
 */
export interface V1InvoiceCreatedEvent extends EventBase {
  type: 'v1.invoice.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Invoice>;
}
export interface V1InvoiceCreatedEventNotification
  extends EventNotificationBase {
  type: 'v1.invoice.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Invoice>;
  fetchEvent(): Promise<V1InvoiceCreatedEvent>;
}

/**
 * Occurs whenever a draft invoice is deleted. Note: This event is not sent for [invoice previews](https://docs.stripe.com/api/invoices/create_preview).
 */
export interface V1InvoiceDeletedEvent extends EventBase {
  type: 'v1.invoice.deleted';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Invoice>;
}
export interface V1InvoiceDeletedEventNotification
  extends EventNotificationBase {
  type: 'v1.invoice.deleted';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Invoice>;
  fetchEvent(): Promise<V1InvoiceDeletedEvent>;
}

/**
 * Occurs whenever a draft invoice cannot be finalized. See the invoice’s [last finalization error](https://docs.stripe.com/api/invoices/object#invoice_object-last_finalization_error) for details.
 */
export interface V1InvoiceFinalizationFailedEvent extends EventBase {
  type: 'v1.invoice.finalization_failed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Invoice>;
}
export interface V1InvoiceFinalizationFailedEventNotification
  extends EventNotificationBase {
  type: 'v1.invoice.finalization_failed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Invoice>;
  fetchEvent(): Promise<V1InvoiceFinalizationFailedEvent>;
}

/**
 * Occurs whenever a draft invoice is finalized and updated to be an open invoice.
 */
export interface V1InvoiceFinalizedEvent extends EventBase {
  type: 'v1.invoice.finalized';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Invoice>;
}
export interface V1InvoiceFinalizedEventNotification
  extends EventNotificationBase {
  type: 'v1.invoice.finalized';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Invoice>;
  fetchEvent(): Promise<V1InvoiceFinalizedEvent>;
}

/**
 * Occurs whenever an invoice is marked uncollectible.
 */
export interface V1InvoiceMarkedUncollectibleEvent extends EventBase {
  type: 'v1.invoice.marked_uncollectible';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Invoice>;
}
export interface V1InvoiceMarkedUncollectibleEventNotification
  extends EventNotificationBase {
  type: 'v1.invoice.marked_uncollectible';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Invoice>;
  fetchEvent(): Promise<V1InvoiceMarkedUncollectibleEvent>;
}

/**
 * Occurs X number of days after an invoice becomes due&mdash;where X is determined by Automations.
 */
export interface V1InvoiceOverdueEvent extends EventBase {
  type: 'v1.invoice.overdue';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Invoice>;
}
export interface V1InvoiceOverdueEventNotification
  extends EventNotificationBase {
  type: 'v1.invoice.overdue';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Invoice>;
  fetchEvent(): Promise<V1InvoiceOverdueEvent>;
}

/**
 * Occurs when an invoice transitions to paid with a non-zero amount_overpaid.
 */
export interface V1InvoiceOverpaidEvent extends EventBase {
  type: 'v1.invoice.overpaid';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Invoice>;
}
export interface V1InvoiceOverpaidEventNotification
  extends EventNotificationBase {
  type: 'v1.invoice.overpaid';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Invoice>;
  fetchEvent(): Promise<V1InvoiceOverpaidEvent>;
}

/**
 * Occurs whenever an invoice payment attempt succeeds or an invoice is marked as paid out-of-band.
 */
export interface V1InvoicePaidEvent extends EventBase {
  type: 'v1.invoice.paid';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Invoice>;
}
export interface V1InvoicePaidEventNotification extends EventNotificationBase {
  type: 'v1.invoice.paid';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Invoice>;
  fetchEvent(): Promise<V1InvoicePaidEvent>;
}

/**
 * Occurs whenever an invoice payment attempt requires further user action to complete.
 */
export interface V1InvoicePaymentActionRequiredEvent extends EventBase {
  type: 'v1.invoice.payment_action_required';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Invoice>;
}
export interface V1InvoicePaymentActionRequiredEventNotification
  extends EventNotificationBase {
  type: 'v1.invoice.payment_action_required';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Invoice>;
  fetchEvent(): Promise<V1InvoicePaymentActionRequiredEvent>;
}

/**
 * Occurs whenever an invoice payment attempt fails, due to either a declined payment, including soft decline, or to the lack of a stored payment method.
 */
export interface V1InvoicePaymentFailedEvent extends EventBase {
  type: 'v1.invoice.payment_failed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Invoice>;
}
export interface V1InvoicePaymentFailedEventNotification
  extends EventNotificationBase {
  type: 'v1.invoice.payment_failed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Invoice>;
  fetchEvent(): Promise<V1InvoicePaymentFailedEvent>;
}

/**
 * Occurs whenever an invoice payment attempt succeeds.
 */
export interface V1InvoicePaymentSucceededEvent extends EventBase {
  type: 'v1.invoice.payment_succeeded';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Invoice>;
}
export interface V1InvoicePaymentSucceededEventNotification
  extends EventNotificationBase {
  type: 'v1.invoice.payment_succeeded';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Invoice>;
  fetchEvent(): Promise<V1InvoicePaymentSucceededEvent>;
}

/**
 * Occurs whenever an invoice email is sent out.
 */
export interface V1InvoiceSentEvent extends EventBase {
  type: 'v1.invoice.sent';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Invoice>;
}
export interface V1InvoiceSentEventNotification extends EventNotificationBase {
  type: 'v1.invoice.sent';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Invoice>;
  fetchEvent(): Promise<V1InvoiceSentEvent>;
}

/**
 * Occurs X number of days before a subscription is scheduled to create an invoice that is automatically charged&mdash;where X is determined by your [subscriptions settings](https://dashboard.stripe.com/account/billing/automatic). Note: The received `Invoice` object will not have an invoice ID.
 */
export interface V1InvoiceUpcomingEvent extends EventBase {
  type: 'v1.invoice.upcoming';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Invoice>;
}
export interface V1InvoiceUpcomingEventNotification
  extends EventNotificationBase {
  type: 'v1.invoice.upcoming';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Invoice>;
  fetchEvent(): Promise<V1InvoiceUpcomingEvent>;
}

/**
 * Occurs whenever an invoice changes (e.g., the invoice amount).
 */
export interface V1InvoiceUpdatedEvent extends EventBase {
  type: 'v1.invoice.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Invoice>;
}
export interface V1InvoiceUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v1.invoice.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Invoice>;
  fetchEvent(): Promise<V1InvoiceUpdatedEvent>;
}

/**
 * Occurs whenever an invoice is voided.
 */
export interface V1InvoiceVoidedEvent extends EventBase {
  type: 'v1.invoice.voided';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Invoice>;
}
export interface V1InvoiceVoidedEventNotification
  extends EventNotificationBase {
  type: 'v1.invoice.voided';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Invoice>;
  fetchEvent(): Promise<V1InvoiceVoidedEvent>;
}

/**
 * Occurs X number of days before an invoice becomes due&mdash;where X is determined by Automations.
 */
export interface V1InvoiceWillBeDueEvent extends EventBase {
  type: 'v1.invoice.will_be_due';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Invoice>;
}
export interface V1InvoiceWillBeDueEventNotification
  extends EventNotificationBase {
  type: 'v1.invoice.will_be_due';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Invoice>;
  fetchEvent(): Promise<V1InvoiceWillBeDueEvent>;
}

/**
 * Occurs when an InvoicePayment is successfully paid.
 */
export interface V1InvoicePaymentPaidEvent extends EventBase {
  type: 'v1.invoice_payment.paid';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1InvoicePayment>;
}
export interface V1InvoicePaymentPaidEventNotification
  extends EventNotificationBase {
  type: 'v1.invoice_payment.paid';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1InvoicePayment>;
  fetchEvent(): Promise<V1InvoicePaymentPaidEvent>;
}

/**
 * Occurs whenever an invoice item is created.
 */
export interface V1InvoiceitemCreatedEvent extends EventBase {
  type: 'v1.invoiceitem.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1InvoiceItem>;
}
export interface V1InvoiceitemCreatedEventNotification
  extends EventNotificationBase {
  type: 'v1.invoiceitem.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1InvoiceItem>;
  fetchEvent(): Promise<V1InvoiceitemCreatedEvent>;
}

/**
 * Occurs whenever an invoice item is deleted.
 */
export interface V1InvoiceitemDeletedEvent extends EventBase {
  type: 'v1.invoiceitem.deleted';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1InvoiceItem>;
}
export interface V1InvoiceitemDeletedEventNotification
  extends EventNotificationBase {
  type: 'v1.invoiceitem.deleted';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1InvoiceItem>;
  fetchEvent(): Promise<V1InvoiceitemDeletedEvent>;
}

/**
 * Occurs whenever an authorization is created.
 */
export interface V1IssuingAuthorizationCreatedEvent extends EventBase {
  type: 'v1.issuing_authorization.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Issuing.Authorization>;
}
export interface V1IssuingAuthorizationCreatedEventNotification
  extends EventNotificationBase {
  type: 'v1.issuing_authorization.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Issuing.Authorization>;
  fetchEvent(): Promise<V1IssuingAuthorizationCreatedEvent>;
}

/**
 * Represents a synchronous request for authorization, see [Using your integration to handle authorization requests](https://docs.stripe.com/issuing/purchases/authorizations#authorization-handling).
 */
export interface V1IssuingAuthorizationRequestEvent extends EventBase {
  type: 'v1.issuing_authorization.request';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Issuing.Authorization>;
}
export interface V1IssuingAuthorizationRequestEventNotification
  extends EventNotificationBase {
  type: 'v1.issuing_authorization.request';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Issuing.Authorization>;
  fetchEvent(): Promise<V1IssuingAuthorizationRequestEvent>;
}

/**
 * Occurs whenever an authorization is updated.
 */
export interface V1IssuingAuthorizationUpdatedEvent extends EventBase {
  type: 'v1.issuing_authorization.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Issuing.Authorization>;
}
export interface V1IssuingAuthorizationUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v1.issuing_authorization.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Issuing.Authorization>;
  fetchEvent(): Promise<V1IssuingAuthorizationUpdatedEvent>;
}

/**
 * Occurs whenever a card is created.
 */
export interface V1IssuingCardCreatedEvent extends EventBase {
  type: 'v1.issuing_card.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Issuing.Card>;
}
export interface V1IssuingCardCreatedEventNotification
  extends EventNotificationBase {
  type: 'v1.issuing_card.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Issuing.Card>;
  fetchEvent(): Promise<V1IssuingCardCreatedEvent>;
}

/**
 * Occurs whenever a card is updated.
 */
export interface V1IssuingCardUpdatedEvent extends EventBase {
  type: 'v1.issuing_card.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Issuing.Card>;
}
export interface V1IssuingCardUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v1.issuing_card.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Issuing.Card>;
  fetchEvent(): Promise<V1IssuingCardUpdatedEvent>;
}

/**
 * Occurs whenever a cardholder is created.
 */
export interface V1IssuingCardholderCreatedEvent extends EventBase {
  type: 'v1.issuing_cardholder.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Issuing.Cardholder>;
}
export interface V1IssuingCardholderCreatedEventNotification
  extends EventNotificationBase {
  type: 'v1.issuing_cardholder.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Issuing.Cardholder>;
  fetchEvent(): Promise<V1IssuingCardholderCreatedEvent>;
}

/**
 * Occurs whenever a cardholder is updated.
 */
export interface V1IssuingCardholderUpdatedEvent extends EventBase {
  type: 'v1.issuing_cardholder.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Issuing.Cardholder>;
}
export interface V1IssuingCardholderUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v1.issuing_cardholder.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Issuing.Cardholder>;
  fetchEvent(): Promise<V1IssuingCardholderUpdatedEvent>;
}

/**
 * Occurs whenever a dispute is won, lost or expired.
 */
export interface V1IssuingDisputeClosedEvent extends EventBase {
  type: 'v1.issuing_dispute.closed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Issuing.Dispute>;
}
export interface V1IssuingDisputeClosedEventNotification
  extends EventNotificationBase {
  type: 'v1.issuing_dispute.closed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Issuing.Dispute>;
  fetchEvent(): Promise<V1IssuingDisputeClosedEvent>;
}

/**
 * Occurs whenever a dispute is created.
 */
export interface V1IssuingDisputeCreatedEvent extends EventBase {
  type: 'v1.issuing_dispute.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Issuing.Dispute>;
}
export interface V1IssuingDisputeCreatedEventNotification
  extends EventNotificationBase {
  type: 'v1.issuing_dispute.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Issuing.Dispute>;
  fetchEvent(): Promise<V1IssuingDisputeCreatedEvent>;
}

/**
 * Occurs whenever funds are reinstated to your account for an Issuing dispute.
 */
export interface V1IssuingDisputeFundsReinstatedEvent extends EventBase {
  type: 'v1.issuing_dispute.funds_reinstated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Issuing.Dispute>;
}
export interface V1IssuingDisputeFundsReinstatedEventNotification
  extends EventNotificationBase {
  type: 'v1.issuing_dispute.funds_reinstated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Issuing.Dispute>;
  fetchEvent(): Promise<V1IssuingDisputeFundsReinstatedEvent>;
}

/**
 * Occurs whenever funds are deducted from your account for an Issuing dispute.
 */
export interface V1IssuingDisputeFundsRescindedEvent extends EventBase {
  type: 'v1.issuing_dispute.funds_rescinded';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Issuing.Dispute>;
}
export interface V1IssuingDisputeFundsRescindedEventNotification
  extends EventNotificationBase {
  type: 'v1.issuing_dispute.funds_rescinded';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Issuing.Dispute>;
  fetchEvent(): Promise<V1IssuingDisputeFundsRescindedEvent>;
}

/**
 * Occurs whenever a dispute is submitted.
 */
export interface V1IssuingDisputeSubmittedEvent extends EventBase {
  type: 'v1.issuing_dispute.submitted';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Issuing.Dispute>;
}
export interface V1IssuingDisputeSubmittedEventNotification
  extends EventNotificationBase {
  type: 'v1.issuing_dispute.submitted';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Issuing.Dispute>;
  fetchEvent(): Promise<V1IssuingDisputeSubmittedEvent>;
}

/**
 * Occurs whenever a dispute is updated.
 */
export interface V1IssuingDisputeUpdatedEvent extends EventBase {
  type: 'v1.issuing_dispute.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Issuing.Dispute>;
}
export interface V1IssuingDisputeUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v1.issuing_dispute.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Issuing.Dispute>;
  fetchEvent(): Promise<V1IssuingDisputeUpdatedEvent>;
}

/**
 * Occurs whenever a personalization design is activated following the activation of the physical bundle that belongs to it.
 */
export interface V1IssuingPersonalizationDesignActivatedEvent
  extends EventBase {
  type: 'v1.issuing_personalization_design.activated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Issuing.PersonalizationDesign>;
}
export interface V1IssuingPersonalizationDesignActivatedEventNotification
  extends EventNotificationBase {
  type: 'v1.issuing_personalization_design.activated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Issuing.PersonalizationDesign>;
  fetchEvent(): Promise<V1IssuingPersonalizationDesignActivatedEvent>;
}

/**
 * Occurs whenever a personalization design is deactivated following the deactivation of the physical bundle that belongs to it.
 */
export interface V1IssuingPersonalizationDesignDeactivatedEvent
  extends EventBase {
  type: 'v1.issuing_personalization_design.deactivated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Issuing.PersonalizationDesign>;
}
export interface V1IssuingPersonalizationDesignDeactivatedEventNotification
  extends EventNotificationBase {
  type: 'v1.issuing_personalization_design.deactivated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Issuing.PersonalizationDesign>;
  fetchEvent(): Promise<V1IssuingPersonalizationDesignDeactivatedEvent>;
}

/**
 * Occurs whenever a personalization design is rejected by design review.
 */
export interface V1IssuingPersonalizationDesignRejectedEvent extends EventBase {
  type: 'v1.issuing_personalization_design.rejected';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Issuing.PersonalizationDesign>;
}
export interface V1IssuingPersonalizationDesignRejectedEventNotification
  extends EventNotificationBase {
  type: 'v1.issuing_personalization_design.rejected';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Issuing.PersonalizationDesign>;
  fetchEvent(): Promise<V1IssuingPersonalizationDesignRejectedEvent>;
}

/**
 * Occurs whenever a personalization design is updated.
 */
export interface V1IssuingPersonalizationDesignUpdatedEvent extends EventBase {
  type: 'v1.issuing_personalization_design.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Issuing.PersonalizationDesign>;
}
export interface V1IssuingPersonalizationDesignUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v1.issuing_personalization_design.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Issuing.PersonalizationDesign>;
  fetchEvent(): Promise<V1IssuingPersonalizationDesignUpdatedEvent>;
}

/**
 * Occurs whenever an issuing digital wallet token is created.
 */
export interface V1IssuingTokenCreatedEvent extends EventBase {
  type: 'v1.issuing_token.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Issuing.Token>;
}
export interface V1IssuingTokenCreatedEventNotification
  extends EventNotificationBase {
  type: 'v1.issuing_token.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Issuing.Token>;
  fetchEvent(): Promise<V1IssuingTokenCreatedEvent>;
}

/**
 * Occurs whenever an issuing digital wallet token is updated.
 */
export interface V1IssuingTokenUpdatedEvent extends EventBase {
  type: 'v1.issuing_token.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Issuing.Token>;
}
export interface V1IssuingTokenUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v1.issuing_token.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Issuing.Token>;
  fetchEvent(): Promise<V1IssuingTokenUpdatedEvent>;
}

/**
 * Occurs whenever an issuing transaction is created.
 */
export interface V1IssuingTransactionCreatedEvent extends EventBase {
  type: 'v1.issuing_transaction.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Issuing.Transaction>;
}
export interface V1IssuingTransactionCreatedEventNotification
  extends EventNotificationBase {
  type: 'v1.issuing_transaction.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Issuing.Transaction>;
  fetchEvent(): Promise<V1IssuingTransactionCreatedEvent>;
}

/**
 * Occurs whenever an issuing transaction is updated with receipt data.
 */
export interface V1IssuingTransactionPurchaseDetailsReceiptUpdatedEvent
  extends EventBase {
  type: 'v1.issuing_transaction.purchase_details_receipt_updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Issuing.Transaction>;
}
export interface V1IssuingTransactionPurchaseDetailsReceiptUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v1.issuing_transaction.purchase_details_receipt_updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Issuing.Transaction>;
  fetchEvent(): Promise<V1IssuingTransactionPurchaseDetailsReceiptUpdatedEvent>;
}

/**
 * Occurs whenever an issuing transaction is updated.
 */
export interface V1IssuingTransactionUpdatedEvent extends EventBase {
  type: 'v1.issuing_transaction.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Issuing.Transaction>;
}
export interface V1IssuingTransactionUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v1.issuing_transaction.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Issuing.Transaction>;
  fetchEvent(): Promise<V1IssuingTransactionUpdatedEvent>;
}

/**
 * Occurs whenever a Mandate is updated.
 */
export interface V1MandateUpdatedEvent extends EventBase {
  type: 'v1.mandate.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Mandate>;
}
export interface V1MandateUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v1.mandate.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Mandate>;
  fetchEvent(): Promise<V1MandateUpdatedEvent>;
}

/**
 * Occurs when a PaymentIntent has funds to be captured. Check the `amount_capturable` property on the PaymentIntent to determine the amount that can be captured. You may capture the PaymentIntent with an `amount_to_capture` value up to the specified amount. [Learn more about capturing PaymentIntents.](https://docs.stripe.com/api/payment_intents/capture).
 */
export interface V1PaymentIntentAmountCapturableUpdatedEvent extends EventBase {
  type: 'v1.payment_intent.amount_capturable_updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1PaymentIntent>;
}
export interface V1PaymentIntentAmountCapturableUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v1.payment_intent.amount_capturable_updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1PaymentIntent>;
  fetchEvent(): Promise<V1PaymentIntentAmountCapturableUpdatedEvent>;
}

/**
 * Occurs when a PaymentIntent is canceled.
 */
export interface V1PaymentIntentCanceledEvent extends EventBase {
  type: 'v1.payment_intent.canceled';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1PaymentIntent>;
}
export interface V1PaymentIntentCanceledEventNotification
  extends EventNotificationBase {
  type: 'v1.payment_intent.canceled';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1PaymentIntent>;
  fetchEvent(): Promise<V1PaymentIntentCanceledEvent>;
}

/**
 * Occurs when a new PaymentIntent is created.
 */
export interface V1PaymentIntentCreatedEvent extends EventBase {
  type: 'v1.payment_intent.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1PaymentIntent>;
}
export interface V1PaymentIntentCreatedEventNotification
  extends EventNotificationBase {
  type: 'v1.payment_intent.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1PaymentIntent>;
  fetchEvent(): Promise<V1PaymentIntentCreatedEvent>;
}

/**
 * Occurs when funds are applied to a customer_balance PaymentIntent and the 'amount_remaining' changes.
 */
export interface V1PaymentIntentPartiallyFundedEvent extends EventBase {
  type: 'v1.payment_intent.partially_funded';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1PaymentIntent>;
}
export interface V1PaymentIntentPartiallyFundedEventNotification
  extends EventNotificationBase {
  type: 'v1.payment_intent.partially_funded';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1PaymentIntent>;
  fetchEvent(): Promise<V1PaymentIntentPartiallyFundedEvent>;
}

/**
 * Occurs when a PaymentIntent has failed the attempt to create a payment method or a payment.
 */
export interface V1PaymentIntentPaymentFailedEvent extends EventBase {
  type: 'v1.payment_intent.payment_failed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1PaymentIntent>;
}
export interface V1PaymentIntentPaymentFailedEventNotification
  extends EventNotificationBase {
  type: 'v1.payment_intent.payment_failed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1PaymentIntent>;
  fetchEvent(): Promise<V1PaymentIntentPaymentFailedEvent>;
}

/**
 * Occurs when a PaymentIntent has started processing.
 */
export interface V1PaymentIntentProcessingEvent extends EventBase {
  type: 'v1.payment_intent.processing';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1PaymentIntent>;
}
export interface V1PaymentIntentProcessingEventNotification
  extends EventNotificationBase {
  type: 'v1.payment_intent.processing';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1PaymentIntent>;
  fetchEvent(): Promise<V1PaymentIntentProcessingEvent>;
}

/**
 * Occurs when a PaymentIntent transitions to requires_action state.
 */
export interface V1PaymentIntentRequiresActionEvent extends EventBase {
  type: 'v1.payment_intent.requires_action';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1PaymentIntent>;
}
export interface V1PaymentIntentRequiresActionEventNotification
  extends EventNotificationBase {
  type: 'v1.payment_intent.requires_action';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1PaymentIntent>;
  fetchEvent(): Promise<V1PaymentIntentRequiresActionEvent>;
}

/**
 * Occurs when a PaymentIntent has successfully completed payment.
 */
export interface V1PaymentIntentSucceededEvent extends EventBase {
  type: 'v1.payment_intent.succeeded';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1PaymentIntent>;
}
export interface V1PaymentIntentSucceededEventNotification
  extends EventNotificationBase {
  type: 'v1.payment_intent.succeeded';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1PaymentIntent>;
  fetchEvent(): Promise<V1PaymentIntentSucceededEvent>;
}

/**
 * Occurs when a payment link is created.
 */
export interface V1PaymentLinkCreatedEvent extends EventBase {
  type: 'v1.payment_link.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1PaymentLink>;
}
export interface V1PaymentLinkCreatedEventNotification
  extends EventNotificationBase {
  type: 'v1.payment_link.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1PaymentLink>;
  fetchEvent(): Promise<V1PaymentLinkCreatedEvent>;
}

/**
 * Occurs when a payment link is updated.
 */
export interface V1PaymentLinkUpdatedEvent extends EventBase {
  type: 'v1.payment_link.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1PaymentLink>;
}
export interface V1PaymentLinkUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v1.payment_link.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1PaymentLink>;
  fetchEvent(): Promise<V1PaymentLinkUpdatedEvent>;
}

/**
 * Occurs whenever a new payment method is attached to a customer.
 */
export interface V1PaymentMethodAttachedEvent extends EventBase {
  type: 'v1.payment_method.attached';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1PaymentMethod>;
}
export interface V1PaymentMethodAttachedEventNotification
  extends EventNotificationBase {
  type: 'v1.payment_method.attached';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1PaymentMethod>;
  fetchEvent(): Promise<V1PaymentMethodAttachedEvent>;
}

/**
 * Occurs whenever a payment method's details are automatically updated by the network.
 */
export interface V1PaymentMethodAutomaticallyUpdatedEvent extends EventBase {
  type: 'v1.payment_method.automatically_updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1PaymentMethod>;
}
export interface V1PaymentMethodAutomaticallyUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v1.payment_method.automatically_updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1PaymentMethod>;
  fetchEvent(): Promise<V1PaymentMethodAutomaticallyUpdatedEvent>;
}

/**
 * Occurs whenever a payment method is detached from a customer.
 */
export interface V1PaymentMethodDetachedEvent extends EventBase {
  type: 'v1.payment_method.detached';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1PaymentMethod>;
}
export interface V1PaymentMethodDetachedEventNotification
  extends EventNotificationBase {
  type: 'v1.payment_method.detached';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1PaymentMethod>;
  fetchEvent(): Promise<V1PaymentMethodDetachedEvent>;
}

/**
 * Occurs whenever a payment method is updated via the [PaymentMethod update API](https://docs.stripe.com/api/payment_methods/update).
 */
export interface V1PaymentMethodUpdatedEvent extends EventBase {
  type: 'v1.payment_method.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1PaymentMethod>;
}
export interface V1PaymentMethodUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v1.payment_method.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1PaymentMethod>;
  fetchEvent(): Promise<V1PaymentMethodUpdatedEvent>;
}

/**
 * Occurs whenever a payout is canceled.
 */
export interface V1PayoutCanceledEvent extends EventBase {
  type: 'v1.payout.canceled';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Payout>;
}
export interface V1PayoutCanceledEventNotification
  extends EventNotificationBase {
  type: 'v1.payout.canceled';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Payout>;
  fetchEvent(): Promise<V1PayoutCanceledEvent>;
}

/**
 * Occurs whenever a payout is created.
 */
export interface V1PayoutCreatedEvent extends EventBase {
  type: 'v1.payout.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Payout>;
}
export interface V1PayoutCreatedEventNotification
  extends EventNotificationBase {
  type: 'v1.payout.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Payout>;
  fetchEvent(): Promise<V1PayoutCreatedEvent>;
}

/**
 * Occurs whenever a payout attempt fails.
 */
export interface V1PayoutFailedEvent extends EventBase {
  type: 'v1.payout.failed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Payout>;
}
export interface V1PayoutFailedEventNotification extends EventNotificationBase {
  type: 'v1.payout.failed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Payout>;
  fetchEvent(): Promise<V1PayoutFailedEvent>;
}

/**
 * Occurs whenever a payout is *expected* to be available in the destination account. If the payout fails, a `payout.failed` notification is also sent, at a later time.
 */
export interface V1PayoutPaidEvent extends EventBase {
  type: 'v1.payout.paid';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Payout>;
}
export interface V1PayoutPaidEventNotification extends EventNotificationBase {
  type: 'v1.payout.paid';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Payout>;
  fetchEvent(): Promise<V1PayoutPaidEvent>;
}

/**
 * Occurs whenever balance transactions paid out in an automatic payout can be queried.
 */
export interface V1PayoutReconciliationCompletedEvent extends EventBase {
  type: 'v1.payout.reconciliation_completed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Payout>;
}
export interface V1PayoutReconciliationCompletedEventNotification
  extends EventNotificationBase {
  type: 'v1.payout.reconciliation_completed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Payout>;
  fetchEvent(): Promise<V1PayoutReconciliationCompletedEvent>;
}

/**
 * Occurs whenever a payout is updated.
 */
export interface V1PayoutUpdatedEvent extends EventBase {
  type: 'v1.payout.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Payout>;
}
export interface V1PayoutUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v1.payout.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Payout>;
  fetchEvent(): Promise<V1PayoutUpdatedEvent>;
}

/**
 * Occurs whenever a person associated with an account is created.
 */
export interface V1PersonCreatedEvent extends EventBase {
  type: 'v1.person.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Person>;
}
export interface V1PersonCreatedEventNotification
  extends EventNotificationBase {
  type: 'v1.person.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Person>;
  fetchEvent(): Promise<V1PersonCreatedEvent>;
}

/**
 * Occurs whenever a person associated with an account is deleted.
 */
export interface V1PersonDeletedEvent extends EventBase {
  type: 'v1.person.deleted';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Person>;
}
export interface V1PersonDeletedEventNotification
  extends EventNotificationBase {
  type: 'v1.person.deleted';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Person>;
  fetchEvent(): Promise<V1PersonDeletedEvent>;
}

/**
 * Occurs whenever a person associated with an account is updated.
 */
export interface V1PersonUpdatedEvent extends EventBase {
  type: 'v1.person.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Person>;
}
export interface V1PersonUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v1.person.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Person>;
  fetchEvent(): Promise<V1PersonUpdatedEvent>;
}

/**
 * Occurs whenever a plan is created.
 */
export interface V1PlanCreatedEvent extends EventBase {
  type: 'v1.plan.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Plan>;
}
export interface V1PlanCreatedEventNotification extends EventNotificationBase {
  type: 'v1.plan.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Plan>;
  fetchEvent(): Promise<V1PlanCreatedEvent>;
}

/**
 * Occurs whenever a plan is deleted.
 */
export interface V1PlanDeletedEvent extends EventBase {
  type: 'v1.plan.deleted';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Plan>;
}
export interface V1PlanDeletedEventNotification extends EventNotificationBase {
  type: 'v1.plan.deleted';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Plan>;
  fetchEvent(): Promise<V1PlanDeletedEvent>;
}

/**
 * Occurs whenever a plan is updated.
 */
export interface V1PlanUpdatedEvent extends EventBase {
  type: 'v1.plan.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Plan>;
}
export interface V1PlanUpdatedEventNotification extends EventNotificationBase {
  type: 'v1.plan.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Plan>;
  fetchEvent(): Promise<V1PlanUpdatedEvent>;
}

/**
 * Occurs whenever a price is created.
 */
export interface V1PriceCreatedEvent extends EventBase {
  type: 'v1.price.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Price>;
}
export interface V1PriceCreatedEventNotification extends EventNotificationBase {
  type: 'v1.price.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Price>;
  fetchEvent(): Promise<V1PriceCreatedEvent>;
}

/**
 * Occurs whenever a price is deleted.
 */
export interface V1PriceDeletedEvent extends EventBase {
  type: 'v1.price.deleted';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Price>;
}
export interface V1PriceDeletedEventNotification extends EventNotificationBase {
  type: 'v1.price.deleted';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Price>;
  fetchEvent(): Promise<V1PriceDeletedEvent>;
}

/**
 * Occurs whenever a price is updated.
 */
export interface V1PriceUpdatedEvent extends EventBase {
  type: 'v1.price.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Price>;
}
export interface V1PriceUpdatedEventNotification extends EventNotificationBase {
  type: 'v1.price.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Price>;
  fetchEvent(): Promise<V1PriceUpdatedEvent>;
}

/**
 * Occurs whenever a product is created.
 */
export interface V1ProductCreatedEvent extends EventBase {
  type: 'v1.product.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Product>;
}
export interface V1ProductCreatedEventNotification
  extends EventNotificationBase {
  type: 'v1.product.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Product>;
  fetchEvent(): Promise<V1ProductCreatedEvent>;
}

/**
 * Occurs whenever a product is deleted.
 */
export interface V1ProductDeletedEvent extends EventBase {
  type: 'v1.product.deleted';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Product>;
}
export interface V1ProductDeletedEventNotification
  extends EventNotificationBase {
  type: 'v1.product.deleted';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Product>;
  fetchEvent(): Promise<V1ProductDeletedEvent>;
}

/**
 * Occurs whenever a product is updated.
 */
export interface V1ProductUpdatedEvent extends EventBase {
  type: 'v1.product.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Product>;
}
export interface V1ProductUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v1.product.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Product>;
  fetchEvent(): Promise<V1ProductUpdatedEvent>;
}

/**
 * Occurs whenever a promotion code is created.
 */
export interface V1PromotionCodeCreatedEvent extends EventBase {
  type: 'v1.promotion_code.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1PromotionCode>;
}
export interface V1PromotionCodeCreatedEventNotification
  extends EventNotificationBase {
  type: 'v1.promotion_code.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1PromotionCode>;
  fetchEvent(): Promise<V1PromotionCodeCreatedEvent>;
}

/**
 * Occurs whenever a promotion code is updated.
 */
export interface V1PromotionCodeUpdatedEvent extends EventBase {
  type: 'v1.promotion_code.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1PromotionCode>;
}
export interface V1PromotionCodeUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v1.promotion_code.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1PromotionCode>;
  fetchEvent(): Promise<V1PromotionCodeUpdatedEvent>;
}

/**
 * Occurs whenever a quote is accepted.
 */
export interface V1QuoteAcceptedEvent extends EventBase {
  type: 'v1.quote.accepted';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Quote>;
}
export interface V1QuoteAcceptedEventNotification
  extends EventNotificationBase {
  type: 'v1.quote.accepted';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Quote>;
  fetchEvent(): Promise<V1QuoteAcceptedEvent>;
}

/**
 * Occurs whenever a quote is canceled.
 */
export interface V1QuoteCanceledEvent extends EventBase {
  type: 'v1.quote.canceled';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Quote>;
}
export interface V1QuoteCanceledEventNotification
  extends EventNotificationBase {
  type: 'v1.quote.canceled';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Quote>;
  fetchEvent(): Promise<V1QuoteCanceledEvent>;
}

/**
 * Occurs whenever a quote is created.
 */
export interface V1QuoteCreatedEvent extends EventBase {
  type: 'v1.quote.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Quote>;
}
export interface V1QuoteCreatedEventNotification extends EventNotificationBase {
  type: 'v1.quote.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Quote>;
  fetchEvent(): Promise<V1QuoteCreatedEvent>;
}

/**
 * Occurs whenever a quote is finalized.
 */
export interface V1QuoteFinalizedEvent extends EventBase {
  type: 'v1.quote.finalized';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Quote>;
}
export interface V1QuoteFinalizedEventNotification
  extends EventNotificationBase {
  type: 'v1.quote.finalized';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Quote>;
  fetchEvent(): Promise<V1QuoteFinalizedEvent>;
}

/**
 * Occurs whenever an early fraud warning is created.
 */
export interface V1RadarEarlyFraudWarningCreatedEvent extends EventBase {
  type: 'v1.radar.early_fraud_warning.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Radar.EarlyFraudWarning>;
}
export interface V1RadarEarlyFraudWarningCreatedEventNotification
  extends EventNotificationBase {
  type: 'v1.radar.early_fraud_warning.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Radar.EarlyFraudWarning>;
  fetchEvent(): Promise<V1RadarEarlyFraudWarningCreatedEvent>;
}

/**
 * Occurs whenever an early fraud warning is updated.
 */
export interface V1RadarEarlyFraudWarningUpdatedEvent extends EventBase {
  type: 'v1.radar.early_fraud_warning.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Radar.EarlyFraudWarning>;
}
export interface V1RadarEarlyFraudWarningUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v1.radar.early_fraud_warning.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Radar.EarlyFraudWarning>;
  fetchEvent(): Promise<V1RadarEarlyFraudWarningUpdatedEvent>;
}

/**
 * Occurs whenever a refund is created.
 */
export interface V1RefundCreatedEvent extends EventBase {
  type: 'v1.refund.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Refund>;
}
export interface V1RefundCreatedEventNotification
  extends EventNotificationBase {
  type: 'v1.refund.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Refund>;
  fetchEvent(): Promise<V1RefundCreatedEvent>;
}

/**
 * Occurs whenever a refund has failed.
 */
export interface V1RefundFailedEvent extends EventBase {
  type: 'v1.refund.failed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Refund>;
}
export interface V1RefundFailedEventNotification extends EventNotificationBase {
  type: 'v1.refund.failed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Refund>;
  fetchEvent(): Promise<V1RefundFailedEvent>;
}

/**
 * Occurs whenever a refund is updated.
 */
export interface V1RefundUpdatedEvent extends EventBase {
  type: 'v1.refund.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Refund>;
}
export interface V1RefundUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v1.refund.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Refund>;
  fetchEvent(): Promise<V1RefundUpdatedEvent>;
}

/**
 * Occurs whenever a review is closed. The review's `reason` field indicates why: `approved`, `disputed`, `refunded`, `refunded_as_fraud`, or `canceled`.
 */
export interface V1ReviewClosedEvent extends EventBase {
  type: 'v1.review.closed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Review>;
}
export interface V1ReviewClosedEventNotification extends EventNotificationBase {
  type: 'v1.review.closed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Review>;
  fetchEvent(): Promise<V1ReviewClosedEvent>;
}

/**
 * Occurs whenever a review is opened.
 */
export interface V1ReviewOpenedEvent extends EventBase {
  type: 'v1.review.opened';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Review>;
}
export interface V1ReviewOpenedEventNotification extends EventNotificationBase {
  type: 'v1.review.opened';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Review>;
  fetchEvent(): Promise<V1ReviewOpenedEvent>;
}

/**
 * Occurs when a SetupIntent is canceled.
 */
export interface V1SetupIntentCanceledEvent extends EventBase {
  type: 'v1.setup_intent.canceled';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1SetupIntent>;
}
export interface V1SetupIntentCanceledEventNotification
  extends EventNotificationBase {
  type: 'v1.setup_intent.canceled';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1SetupIntent>;
  fetchEvent(): Promise<V1SetupIntentCanceledEvent>;
}

/**
 * Occurs when a new SetupIntent is created.
 */
export interface V1SetupIntentCreatedEvent extends EventBase {
  type: 'v1.setup_intent.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1SetupIntent>;
}
export interface V1SetupIntentCreatedEventNotification
  extends EventNotificationBase {
  type: 'v1.setup_intent.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1SetupIntent>;
  fetchEvent(): Promise<V1SetupIntentCreatedEvent>;
}

/**
 * Occurs when a SetupIntent is in requires_action state.
 */
export interface V1SetupIntentRequiresActionEvent extends EventBase {
  type: 'v1.setup_intent.requires_action';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1SetupIntent>;
}
export interface V1SetupIntentRequiresActionEventNotification
  extends EventNotificationBase {
  type: 'v1.setup_intent.requires_action';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1SetupIntent>;
  fetchEvent(): Promise<V1SetupIntentRequiresActionEvent>;
}

/**
 * Occurs when a SetupIntent has failed the attempt to setup a payment method.
 */
export interface V1SetupIntentSetupFailedEvent extends EventBase {
  type: 'v1.setup_intent.setup_failed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1SetupIntent>;
}
export interface V1SetupIntentSetupFailedEventNotification
  extends EventNotificationBase {
  type: 'v1.setup_intent.setup_failed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1SetupIntent>;
  fetchEvent(): Promise<V1SetupIntentSetupFailedEvent>;
}

/**
 * Occurs when an SetupIntent has successfully setup a payment method.
 */
export interface V1SetupIntentSucceededEvent extends EventBase {
  type: 'v1.setup_intent.succeeded';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1SetupIntent>;
}
export interface V1SetupIntentSucceededEventNotification
  extends EventNotificationBase {
  type: 'v1.setup_intent.succeeded';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1SetupIntent>;
  fetchEvent(): Promise<V1SetupIntentSucceededEvent>;
}

/**
 * Occurs whenever a Sigma scheduled query run finishes.
 */
export interface V1SigmaScheduledQueryRunCreatedEvent extends EventBase {
  type: 'v1.sigma.scheduled_query_run.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Sigma.ScheduledQueryRun>;
}
export interface V1SigmaScheduledQueryRunCreatedEventNotification
  extends EventNotificationBase {
  type: 'v1.sigma.scheduled_query_run.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Sigma.ScheduledQueryRun>;
  fetchEvent(): Promise<V1SigmaScheduledQueryRunCreatedEvent>;
}

/**
 * Occurs whenever a source is canceled.
 */
export interface V1SourceCanceledEvent extends EventBase {
  type: 'v1.source.canceled';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Source>;
}
export interface V1SourceCanceledEventNotification
  extends EventNotificationBase {
  type: 'v1.source.canceled';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Source>;
  fetchEvent(): Promise<V1SourceCanceledEvent>;
}

/**
 * Occurs whenever a source transitions to chargeable.
 */
export interface V1SourceChargeableEvent extends EventBase {
  type: 'v1.source.chargeable';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Source>;
}
export interface V1SourceChargeableEventNotification
  extends EventNotificationBase {
  type: 'v1.source.chargeable';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Source>;
  fetchEvent(): Promise<V1SourceChargeableEvent>;
}

/**
 * Occurs whenever a source fails.
 */
export interface V1SourceFailedEvent extends EventBase {
  type: 'v1.source.failed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Source>;
}
export interface V1SourceFailedEventNotification extends EventNotificationBase {
  type: 'v1.source.failed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Source>;
  fetchEvent(): Promise<V1SourceFailedEvent>;
}

/**
 * Occurs whenever the refund attributes are required on a receiver source to process a refund or a mispayment.
 */
export interface V1SourceRefundAttributesRequiredEvent extends EventBase {
  type: 'v1.source.refund_attributes_required';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Source>;
}
export interface V1SourceRefundAttributesRequiredEventNotification
  extends EventNotificationBase {
  type: 'v1.source.refund_attributes_required';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Source>;
  fetchEvent(): Promise<V1SourceRefundAttributesRequiredEvent>;
}

/**
 * Occurs whenever a subscription schedule is canceled due to the underlying subscription being canceled because of delinquency.
 */
export interface V1SubscriptionScheduleAbortedEvent extends EventBase {
  type: 'v1.subscription_schedule.aborted';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1SubscriptionSchedule>;
}
export interface V1SubscriptionScheduleAbortedEventNotification
  extends EventNotificationBase {
  type: 'v1.subscription_schedule.aborted';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1SubscriptionSchedule>;
  fetchEvent(): Promise<V1SubscriptionScheduleAbortedEvent>;
}

/**
 * Occurs whenever a subscription schedule is canceled.
 */
export interface V1SubscriptionScheduleCanceledEvent extends EventBase {
  type: 'v1.subscription_schedule.canceled';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1SubscriptionSchedule>;
}
export interface V1SubscriptionScheduleCanceledEventNotification
  extends EventNotificationBase {
  type: 'v1.subscription_schedule.canceled';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1SubscriptionSchedule>;
  fetchEvent(): Promise<V1SubscriptionScheduleCanceledEvent>;
}

/**
 * Occurs whenever a new subscription schedule is completed.
 */
export interface V1SubscriptionScheduleCompletedEvent extends EventBase {
  type: 'v1.subscription_schedule.completed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1SubscriptionSchedule>;
}
export interface V1SubscriptionScheduleCompletedEventNotification
  extends EventNotificationBase {
  type: 'v1.subscription_schedule.completed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1SubscriptionSchedule>;
  fetchEvent(): Promise<V1SubscriptionScheduleCompletedEvent>;
}

/**
 * Occurs whenever a new subscription schedule is created.
 */
export interface V1SubscriptionScheduleCreatedEvent extends EventBase {
  type: 'v1.subscription_schedule.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1SubscriptionSchedule>;
}
export interface V1SubscriptionScheduleCreatedEventNotification
  extends EventNotificationBase {
  type: 'v1.subscription_schedule.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1SubscriptionSchedule>;
  fetchEvent(): Promise<V1SubscriptionScheduleCreatedEvent>;
}

/**
 * Occurs 7 days before a subscription schedule will expire.
 */
export interface V1SubscriptionScheduleExpiringEvent extends EventBase {
  type: 'v1.subscription_schedule.expiring';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1SubscriptionSchedule>;
}
export interface V1SubscriptionScheduleExpiringEventNotification
  extends EventNotificationBase {
  type: 'v1.subscription_schedule.expiring';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1SubscriptionSchedule>;
  fetchEvent(): Promise<V1SubscriptionScheduleExpiringEvent>;
}

/**
 * Occurs whenever a new subscription schedule is released.
 */
export interface V1SubscriptionScheduleReleasedEvent extends EventBase {
  type: 'v1.subscription_schedule.released';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1SubscriptionSchedule>;
}
export interface V1SubscriptionScheduleReleasedEventNotification
  extends EventNotificationBase {
  type: 'v1.subscription_schedule.released';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1SubscriptionSchedule>;
  fetchEvent(): Promise<V1SubscriptionScheduleReleasedEvent>;
}

/**
 * Occurs whenever a subscription schedule is updated.
 */
export interface V1SubscriptionScheduleUpdatedEvent extends EventBase {
  type: 'v1.subscription_schedule.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1SubscriptionSchedule>;
}
export interface V1SubscriptionScheduleUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v1.subscription_schedule.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1SubscriptionSchedule>;
  fetchEvent(): Promise<V1SubscriptionScheduleUpdatedEvent>;
}

/**
 * Occurs whenever tax settings is updated.
 */
export interface V1TaxSettingsUpdatedEvent extends EventBase {
  type: 'v1.tax.settings.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Tax.Settings>;
}
export interface V1TaxSettingsUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v1.tax.settings.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Tax.Settings>;
  fetchEvent(): Promise<V1TaxSettingsUpdatedEvent>;
}

/**
 * Occurs whenever a new tax rate is created.
 */
export interface V1TaxRateCreatedEvent extends EventBase {
  type: 'v1.tax_rate.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1TaxRate>;
}
export interface V1TaxRateCreatedEventNotification
  extends EventNotificationBase {
  type: 'v1.tax_rate.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1TaxRate>;
  fetchEvent(): Promise<V1TaxRateCreatedEvent>;
}

/**
 * Occurs whenever a tax rate is updated.
 */
export interface V1TaxRateUpdatedEvent extends EventBase {
  type: 'v1.tax_rate.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1TaxRate>;
}
export interface V1TaxRateUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v1.tax_rate.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1TaxRate>;
  fetchEvent(): Promise<V1TaxRateUpdatedEvent>;
}

/**
 * Occurs whenever an action sent to a Terminal reader failed.
 */
export interface V1TerminalReaderActionFailedEvent extends EventBase {
  type: 'v1.terminal.reader.action_failed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Terminal.Reader>;
}
export interface V1TerminalReaderActionFailedEventNotification
  extends EventNotificationBase {
  type: 'v1.terminal.reader.action_failed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Terminal.Reader>;
  fetchEvent(): Promise<V1TerminalReaderActionFailedEvent>;
}

/**
 * Occurs whenever an action sent to a Terminal reader was successful.
 */
export interface V1TerminalReaderActionSucceededEvent extends EventBase {
  type: 'v1.terminal.reader.action_succeeded';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Terminal.Reader>;
}
export interface V1TerminalReaderActionSucceededEventNotification
  extends EventNotificationBase {
  type: 'v1.terminal.reader.action_succeeded';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Terminal.Reader>;
  fetchEvent(): Promise<V1TerminalReaderActionSucceededEvent>;
}

/**
 * Occurs whenever an action sent to a Terminal reader is updated.
 */
export interface V1TerminalReaderActionUpdatedEvent extends EventBase {
  type: 'v1.terminal.reader.action_updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Terminal.Reader>;
}
export interface V1TerminalReaderActionUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v1.terminal.reader.action_updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Terminal.Reader>;
  fetchEvent(): Promise<V1TerminalReaderActionUpdatedEvent>;
}

/**
 * Occurs whenever a test clock starts advancing.
 */
export interface V1TestHelpersTestClockAdvancingEvent extends EventBase {
  type: 'v1.test_helpers.test_clock.advancing';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1TestHelpers.TestClock>;
}
export interface V1TestHelpersTestClockAdvancingEventNotification
  extends EventNotificationBase {
  type: 'v1.test_helpers.test_clock.advancing';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1TestHelpers.TestClock>;
  fetchEvent(): Promise<V1TestHelpersTestClockAdvancingEvent>;
}

/**
 * Occurs whenever a test clock is created.
 */
export interface V1TestHelpersTestClockCreatedEvent extends EventBase {
  type: 'v1.test_helpers.test_clock.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1TestHelpers.TestClock>;
}
export interface V1TestHelpersTestClockCreatedEventNotification
  extends EventNotificationBase {
  type: 'v1.test_helpers.test_clock.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1TestHelpers.TestClock>;
  fetchEvent(): Promise<V1TestHelpersTestClockCreatedEvent>;
}

/**
 * Occurs whenever a test clock is deleted.
 */
export interface V1TestHelpersTestClockDeletedEvent extends EventBase {
  type: 'v1.test_helpers.test_clock.deleted';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1TestHelpers.TestClock>;
}
export interface V1TestHelpersTestClockDeletedEventNotification
  extends EventNotificationBase {
  type: 'v1.test_helpers.test_clock.deleted';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1TestHelpers.TestClock>;
  fetchEvent(): Promise<V1TestHelpersTestClockDeletedEvent>;
}

/**
 * Occurs whenever a test clock fails to advance its frozen time.
 */
export interface V1TestHelpersTestClockInternalFailureEvent extends EventBase {
  type: 'v1.test_helpers.test_clock.internal_failure';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1TestHelpers.TestClock>;
}
export interface V1TestHelpersTestClockInternalFailureEventNotification
  extends EventNotificationBase {
  type: 'v1.test_helpers.test_clock.internal_failure';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1TestHelpers.TestClock>;
  fetchEvent(): Promise<V1TestHelpersTestClockInternalFailureEvent>;
}

/**
 * Occurs whenever a test clock transitions to a ready status.
 */
export interface V1TestHelpersTestClockReadyEvent extends EventBase {
  type: 'v1.test_helpers.test_clock.ready';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1TestHelpers.TestClock>;
}
export interface V1TestHelpersTestClockReadyEventNotification
  extends EventNotificationBase {
  type: 'v1.test_helpers.test_clock.ready';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1TestHelpers.TestClock>;
  fetchEvent(): Promise<V1TestHelpersTestClockReadyEvent>;
}

/**
 * Occurs whenever a top-up is canceled.
 */
export interface V1TopupCanceledEvent extends EventBase {
  type: 'v1.topup.canceled';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Topup>;
}
export interface V1TopupCanceledEventNotification
  extends EventNotificationBase {
  type: 'v1.topup.canceled';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Topup>;
  fetchEvent(): Promise<V1TopupCanceledEvent>;
}

/**
 * Occurs whenever a top-up is created.
 */
export interface V1TopupCreatedEvent extends EventBase {
  type: 'v1.topup.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Topup>;
}
export interface V1TopupCreatedEventNotification extends EventNotificationBase {
  type: 'v1.topup.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Topup>;
  fetchEvent(): Promise<V1TopupCreatedEvent>;
}

/**
 * Occurs whenever a top-up fails.
 */
export interface V1TopupFailedEvent extends EventBase {
  type: 'v1.topup.failed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Topup>;
}
export interface V1TopupFailedEventNotification extends EventNotificationBase {
  type: 'v1.topup.failed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Topup>;
  fetchEvent(): Promise<V1TopupFailedEvent>;
}

/**
 * Occurs whenever a top-up is reversed.
 */
export interface V1TopupReversedEvent extends EventBase {
  type: 'v1.topup.reversed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Topup>;
}
export interface V1TopupReversedEventNotification
  extends EventNotificationBase {
  type: 'v1.topup.reversed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Topup>;
  fetchEvent(): Promise<V1TopupReversedEvent>;
}

/**
 * Occurs whenever a top-up succeeds.
 */
export interface V1TopupSucceededEvent extends EventBase {
  type: 'v1.topup.succeeded';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Topup>;
}
export interface V1TopupSucceededEventNotification
  extends EventNotificationBase {
  type: 'v1.topup.succeeded';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Topup>;
  fetchEvent(): Promise<V1TopupSucceededEvent>;
}

/**
 * Occurs whenever a transfer is created.
 */
export interface V1TransferCreatedEvent extends EventBase {
  type: 'v1.transfer.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Transfer>;
}
export interface V1TransferCreatedEventNotification
  extends EventNotificationBase {
  type: 'v1.transfer.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Transfer>;
  fetchEvent(): Promise<V1TransferCreatedEvent>;
}

/**
 * Occurs whenever a transfer is reversed, including partial reversals.
 */
export interface V1TransferReversedEvent extends EventBase {
  type: 'v1.transfer.reversed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Transfer>;
}
export interface V1TransferReversedEventNotification
  extends EventNotificationBase {
  type: 'v1.transfer.reversed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Transfer>;
  fetchEvent(): Promise<V1TransferReversedEvent>;
}

/**
 * Occurs whenever a transfer's description or metadata is updated.
 */
export interface V1TransferUpdatedEvent extends EventBase {
  type: 'v1.transfer.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Transfer>;
}
export interface V1TransferUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v1.transfer.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<V1Transfer>;
  fetchEvent(): Promise<V1TransferUpdatedEvent>;
}

/**
 * Occurs when a billing Cadence generates an invoice.
 */
export interface V2BillingCadenceBilledEvent extends EventBase {
  type: 'v2.billing.cadence.billed';
  // Retrieves data specific to this event.
  data: V2BillingCadenceBilledEvent.Data;
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.Cadence>;
}
export interface V2BillingCadenceBilledEventNotification
  extends EventNotificationBase {
  type: 'v2.billing.cadence.billed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.Cadence>;
  fetchEvent(): Promise<V2BillingCadenceBilledEvent>;
}

export namespace V2BillingCadenceBilledEvent {
  export interface Data {
    /**
     * The IDs of the invoices that were generated by the tick for this Cadence.
     */
    invoices: Array<string>;
  }
}

/**
 * Occurs when a billing Cadence is canceled.
 */
export interface V2BillingCadenceCanceledEvent extends EventBase {
  type: 'v2.billing.cadence.canceled';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.Cadence>;
}
export interface V2BillingCadenceCanceledEventNotification
  extends EventNotificationBase {
  type: 'v2.billing.cadence.canceled';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.Cadence>;
  fetchEvent(): Promise<V2BillingCadenceCanceledEvent>;
}

/**
 * Occurs when a billing Cadence is created.
 */
export interface V2BillingCadenceCreatedEvent extends EventBase {
  type: 'v2.billing.cadence.created';
  // Retrieves data specific to this event.
  data: V2BillingCadenceCreatedEvent.Data;
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.Cadence>;
}
export interface V2BillingCadenceCreatedEventNotification
  extends EventNotificationBase {
  type: 'v2.billing.cadence.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.Cadence>;
  fetchEvent(): Promise<V2BillingCadenceCreatedEvent>;
}

export namespace V2BillingCadenceCreatedEvent {
  export interface Data {
    /**
     * Timestamp of when the object was created.
     */
    created: string;
  }
}

/**
 * Occurs when a LicenseFee is created.
 */
export interface V2BillingLicenseFeeCreatedEvent extends EventBase {
  type: 'v2.billing.license_fee.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.LicenseFee>;
}
export interface V2BillingLicenseFeeCreatedEventNotification
  extends EventNotificationBase {
  type: 'v2.billing.license_fee.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.LicenseFee>;
  fetchEvent(): Promise<V2BillingLicenseFeeCreatedEvent>;
}

/**
 * Occurs when a LicenseFee is updated.
 */
export interface V2BillingLicenseFeeUpdatedEvent extends EventBase {
  type: 'v2.billing.license_fee.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.LicenseFee>;
}
export interface V2BillingLicenseFeeUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v2.billing.license_fee.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.LicenseFee>;
  fetchEvent(): Promise<V2BillingLicenseFeeUpdatedEvent>;
}

/**
 * Occurs when a LicenseFeeVersion is created.
 */
export interface V2BillingLicenseFeeVersionCreatedEvent extends EventBase {
  type: 'v2.billing.license_fee_version.created';
  // Retrieves data specific to this event.
  data: V2BillingLicenseFeeVersionCreatedEvent.Data;
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.LicenseFeeVersion>;
}
export interface V2BillingLicenseFeeVersionCreatedEventNotification
  extends EventNotificationBase {
  type: 'v2.billing.license_fee_version.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.LicenseFeeVersion>;
  fetchEvent(): Promise<V2BillingLicenseFeeVersionCreatedEvent>;
}

export namespace V2BillingLicenseFeeVersionCreatedEvent {
  export interface Data {
    /**
     * The ID of the LicenseFee that the LicenseFeeVersion belongs to.
     */
    license_fee_id: string;
  }
}

/**
 * Occurs when a LicensedItem is created.
 */
export interface V2BillingLicensedItemCreatedEvent extends EventBase {
  type: 'v2.billing.licensed_item.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.LicensedItem>;
}
export interface V2BillingLicensedItemCreatedEventNotification
  extends EventNotificationBase {
  type: 'v2.billing.licensed_item.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.LicensedItem>;
  fetchEvent(): Promise<V2BillingLicensedItemCreatedEvent>;
}

/**
 * Occurs when a LicensedItem is updated.
 */
export interface V2BillingLicensedItemUpdatedEvent extends EventBase {
  type: 'v2.billing.licensed_item.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.LicensedItem>;
}
export interface V2BillingLicensedItemUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v2.billing.licensed_item.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.LicensedItem>;
  fetchEvent(): Promise<V2BillingLicensedItemUpdatedEvent>;
}

/**
 * Occurs when a MeteredItem is created.
 */
export interface V2BillingMeteredItemCreatedEvent extends EventBase {
  type: 'v2.billing.metered_item.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.MeteredItem>;
}
export interface V2BillingMeteredItemCreatedEventNotification
  extends EventNotificationBase {
  type: 'v2.billing.metered_item.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.MeteredItem>;
  fetchEvent(): Promise<V2BillingMeteredItemCreatedEvent>;
}

/**
 * Occurs when a MeteredItem is updated.
 */
export interface V2BillingMeteredItemUpdatedEvent extends EventBase {
  type: 'v2.billing.metered_item.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.MeteredItem>;
}
export interface V2BillingMeteredItemUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v2.billing.metered_item.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.MeteredItem>;
  fetchEvent(): Promise<V2BillingMeteredItemUpdatedEvent>;
}

/**
 * Occurs when a PricingPlan is created.
 */
export interface V2BillingPricingPlanCreatedEvent extends EventBase {
  type: 'v2.billing.pricing_plan.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.PricingPlan>;
}
export interface V2BillingPricingPlanCreatedEventNotification
  extends EventNotificationBase {
  type: 'v2.billing.pricing_plan.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.PricingPlan>;
  fetchEvent(): Promise<V2BillingPricingPlanCreatedEvent>;
}

/**
 * Occurs when a PricingPlan is updated.
 */
export interface V2BillingPricingPlanUpdatedEvent extends EventBase {
  type: 'v2.billing.pricing_plan.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.PricingPlan>;
}
export interface V2BillingPricingPlanUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v2.billing.pricing_plan.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.PricingPlan>;
  fetchEvent(): Promise<V2BillingPricingPlanUpdatedEvent>;
}

/**
 * Occurs when a PricingPlanComponent is created.
 */
export interface V2BillingPricingPlanComponentCreatedEvent extends EventBase {
  type: 'v2.billing.pricing_plan_component.created';
  // Retrieves data specific to this event.
  data: V2BillingPricingPlanComponentCreatedEvent.Data;
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.PricingPlanComponent>;
}
export interface V2BillingPricingPlanComponentCreatedEventNotification
  extends EventNotificationBase {
  type: 'v2.billing.pricing_plan_component.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.PricingPlanComponent>;
  fetchEvent(): Promise<V2BillingPricingPlanComponentCreatedEvent>;
}

export namespace V2BillingPricingPlanComponentCreatedEvent {
  export interface Data {
    /**
     * The ID of the PricingPlan that the PricingPlanComponent belongs to.
     */
    pricing_plan_id: string;
  }
}

/**
 * Occurs when a PricingPlanComponent is updated.
 */
export interface V2BillingPricingPlanComponentUpdatedEvent extends EventBase {
  type: 'v2.billing.pricing_plan_component.updated';
  // Retrieves data specific to this event.
  data: V2BillingPricingPlanComponentUpdatedEvent.Data;
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.PricingPlanComponent>;
}
export interface V2BillingPricingPlanComponentUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v2.billing.pricing_plan_component.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.PricingPlanComponent>;
  fetchEvent(): Promise<V2BillingPricingPlanComponentUpdatedEvent>;
}

export namespace V2BillingPricingPlanComponentUpdatedEvent {
  export interface Data {
    /**
     * The ID of the PricingPlan that the PricingPlanComponent belongs to.
     */
    pricing_plan_id: string;
  }
}

/**
 * Occurs when a PricingPlanSubscription's collection is awaiting customer action.
 */
export interface V2BillingPricingPlanSubscriptionCollectionAwaitingCustomerActionEvent
  extends EventBase {
  type: 'v2.billing.pricing_plan_subscription.collection_awaiting_customer_action';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.PricingPlanSubscription>;
}
export interface V2BillingPricingPlanSubscriptionCollectionAwaitingCustomerActionEventNotification
  extends EventNotificationBase {
  type: 'v2.billing.pricing_plan_subscription.collection_awaiting_customer_action';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.PricingPlanSubscription>;
  fetchEvent(): Promise<
    V2BillingPricingPlanSubscriptionCollectionAwaitingCustomerActionEvent
  >;
}

/**
 * Occurs when a PricingPlanSubscription's collection is current.
 */
export interface V2BillingPricingPlanSubscriptionCollectionCurrentEvent
  extends EventBase {
  type: 'v2.billing.pricing_plan_subscription.collection_current';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.PricingPlanSubscription>;
}
export interface V2BillingPricingPlanSubscriptionCollectionCurrentEventNotification
  extends EventNotificationBase {
  type: 'v2.billing.pricing_plan_subscription.collection_current';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.PricingPlanSubscription>;
  fetchEvent(): Promise<V2BillingPricingPlanSubscriptionCollectionCurrentEvent>;
}

/**
 * Occurs when a PricingPlanSubscription's collection is past due.
 */
export interface V2BillingPricingPlanSubscriptionCollectionPastDueEvent
  extends EventBase {
  type: 'v2.billing.pricing_plan_subscription.collection_past_due';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.PricingPlanSubscription>;
}
export interface V2BillingPricingPlanSubscriptionCollectionPastDueEventNotification
  extends EventNotificationBase {
  type: 'v2.billing.pricing_plan_subscription.collection_past_due';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.PricingPlanSubscription>;
  fetchEvent(): Promise<V2BillingPricingPlanSubscriptionCollectionPastDueEvent>;
}

/**
 * Occurs when a PricingPlanSubscription's collection is paused.
 */
export interface V2BillingPricingPlanSubscriptionCollectionPausedEvent
  extends EventBase {
  type: 'v2.billing.pricing_plan_subscription.collection_paused';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.PricingPlanSubscription>;
}
export interface V2BillingPricingPlanSubscriptionCollectionPausedEventNotification
  extends EventNotificationBase {
  type: 'v2.billing.pricing_plan_subscription.collection_paused';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.PricingPlanSubscription>;
  fetchEvent(): Promise<V2BillingPricingPlanSubscriptionCollectionPausedEvent>;
}

/**
 * Occurs when a PricingPlanSubscription's collection is unpaid.
 */
export interface V2BillingPricingPlanSubscriptionCollectionUnpaidEvent
  extends EventBase {
  type: 'v2.billing.pricing_plan_subscription.collection_unpaid';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.PricingPlanSubscription>;
}
export interface V2BillingPricingPlanSubscriptionCollectionUnpaidEventNotification
  extends EventNotificationBase {
  type: 'v2.billing.pricing_plan_subscription.collection_unpaid';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.PricingPlanSubscription>;
  fetchEvent(): Promise<V2BillingPricingPlanSubscriptionCollectionUnpaidEvent>;
}

/**
 * Occurs when PricingPlanSubscription servicing is activated.
 */
export interface V2BillingPricingPlanSubscriptionServicingActivatedEvent
  extends EventBase {
  type: 'v2.billing.pricing_plan_subscription.servicing_activated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.PricingPlanSubscription>;
}
export interface V2BillingPricingPlanSubscriptionServicingActivatedEventNotification
  extends EventNotificationBase {
  type: 'v2.billing.pricing_plan_subscription.servicing_activated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.PricingPlanSubscription>;
  fetchEvent(): Promise<
    V2BillingPricingPlanSubscriptionServicingActivatedEvent
  >;
}

/**
 * Occurs when PricingPlanSubscription servicing is canceled.
 */
export interface V2BillingPricingPlanSubscriptionServicingCanceledEvent
  extends EventBase {
  type: 'v2.billing.pricing_plan_subscription.servicing_canceled';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.PricingPlanSubscription>;
}
export interface V2BillingPricingPlanSubscriptionServicingCanceledEventNotification
  extends EventNotificationBase {
  type: 'v2.billing.pricing_plan_subscription.servicing_canceled';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.PricingPlanSubscription>;
  fetchEvent(): Promise<V2BillingPricingPlanSubscriptionServicingCanceledEvent>;
}

/**
 * Occurs when PricingPlanSubscription servicing is paused.
 */
export interface V2BillingPricingPlanSubscriptionServicingPausedEvent
  extends EventBase {
  type: 'v2.billing.pricing_plan_subscription.servicing_paused';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.PricingPlanSubscription>;
}
export interface V2BillingPricingPlanSubscriptionServicingPausedEventNotification
  extends EventNotificationBase {
  type: 'v2.billing.pricing_plan_subscription.servicing_paused';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.PricingPlanSubscription>;
  fetchEvent(): Promise<V2BillingPricingPlanSubscriptionServicingPausedEvent>;
}

/**
 * Occurs when a PricingPlanVersion is created.
 */
export interface V2BillingPricingPlanVersionCreatedEvent extends EventBase {
  type: 'v2.billing.pricing_plan_version.created';
  // Retrieves data specific to this event.
  data: V2BillingPricingPlanVersionCreatedEvent.Data;
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.PricingPlanVersion>;
}
export interface V2BillingPricingPlanVersionCreatedEventNotification
  extends EventNotificationBase {
  type: 'v2.billing.pricing_plan_version.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.PricingPlanVersion>;
  fetchEvent(): Promise<V2BillingPricingPlanVersionCreatedEvent>;
}

export namespace V2BillingPricingPlanVersionCreatedEvent {
  export interface Data {
    /**
     * The ID of the PricingPlan that the PricingPlanVersion belongs to.
     */
    pricing_plan_id: string;
  }
}

/**
 * Occurs when a RateCard is created.
 */
export interface V2BillingRateCardCreatedEvent extends EventBase {
  type: 'v2.billing.rate_card.created';
  // Retrieves data specific to this event.
  data: V2BillingRateCardCreatedEvent.Data;
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.RateCard>;
}
export interface V2BillingRateCardCreatedEventNotification
  extends EventNotificationBase {
  type: 'v2.billing.rate_card.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.RateCard>;
  fetchEvent(): Promise<V2BillingRateCardCreatedEvent>;
}

export namespace V2BillingRateCardCreatedEvent {
  export interface Data {
    /**
     * Timestamp of when the object was created.
     */
    created: string;
  }
}

/**
 * Occurs when a RateCard is updated.
 */
export interface V2BillingRateCardUpdatedEvent extends EventBase {
  type: 'v2.billing.rate_card.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.RateCard>;
}
export interface V2BillingRateCardUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v2.billing.rate_card.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.RateCard>;
  fetchEvent(): Promise<V2BillingRateCardUpdatedEvent>;
}

/**
 * Occurs when a RateCardCustomPricingUnitOverageRate is created.
 */
export interface V2BillingRateCardCustomPricingUnitOverageRateCreatedEvent
  extends EventBase {
  type: 'v2.billing.rate_card_custom_pricing_unit_overage_rate.created';
  // Retrieves data specific to this event.
  data: V2BillingRateCardCustomPricingUnitOverageRateCreatedEvent.Data;
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.RateCardCustomPricingUnitOverageRate>;
}
export interface V2BillingRateCardCustomPricingUnitOverageRateCreatedEventNotification
  extends EventNotificationBase {
  type: 'v2.billing.rate_card_custom_pricing_unit_overage_rate.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.RateCardCustomPricingUnitOverageRate>;
  fetchEvent(): Promise<
    V2BillingRateCardCustomPricingUnitOverageRateCreatedEvent
  >;
}

export namespace V2BillingRateCardCustomPricingUnitOverageRateCreatedEvent {
  export interface Data {
    /**
     * Timestamp of when the object was created.
     */
    created: string;

    /**
     * The ID of the custom pricing unit this overage rate applies to.
     */
    custom_pricing_unit: string;

    /**
     * The ID of the RateCard which this custom pricing unit overage rate belongs to.
     */
    rate_card: string;

    /**
     * The ID of the RateCard Version when the custom pricing unit overage rate was created.
     */
    rate_card_version: string;
  }
}

/**
 * Occurs when a RateCardRate is created.
 */
export interface V2BillingRateCardRateCreatedEvent extends EventBase {
  type: 'v2.billing.rate_card_rate.created';
  // Retrieves data specific to this event.
  data: V2BillingRateCardRateCreatedEvent.Data;
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.RateCardRate>;
}
export interface V2BillingRateCardRateCreatedEventNotification
  extends EventNotificationBase {
  type: 'v2.billing.rate_card_rate.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.RateCardRate>;
  fetchEvent(): Promise<V2BillingRateCardRateCreatedEvent>;
}

export namespace V2BillingRateCardRateCreatedEvent {
  export interface Data {
    /**
     * The ID of the BillableItem which this Rate is associated with.
     */
    billable_item: string;

    /**
     * Timestamp of when the object was created.
     */
    created: string;

    /**
     * The ID of the RateCard which this Rate belongs to.
     */
    rate_card: string;

    /**
     * The ID of the latest RateCard Version when the Rate was created.
     */
    rate_card_version: string;
  }
}

/**
 * Occurs when a RateCardSubscription is activated.
 */
export interface V2BillingRateCardSubscriptionActivatedEvent extends EventBase {
  type: 'v2.billing.rate_card_subscription.activated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.RateCardSubscription>;
}
export interface V2BillingRateCardSubscriptionActivatedEventNotification
  extends EventNotificationBase {
  type: 'v2.billing.rate_card_subscription.activated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.RateCardSubscription>;
  fetchEvent(): Promise<V2BillingRateCardSubscriptionActivatedEvent>;
}

/**
 * Occurs when a RateCardSubscription is canceled.
 */
export interface V2BillingRateCardSubscriptionCanceledEvent extends EventBase {
  type: 'v2.billing.rate_card_subscription.canceled';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.RateCardSubscription>;
}
export interface V2BillingRateCardSubscriptionCanceledEventNotification
  extends EventNotificationBase {
  type: 'v2.billing.rate_card_subscription.canceled';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.RateCardSubscription>;
  fetchEvent(): Promise<V2BillingRateCardSubscriptionCanceledEvent>;
}

/**
 * Occurs when a RateCardSubscription's collection is awaiting customer action.
 */
export interface V2BillingRateCardSubscriptionCollectionAwaitingCustomerActionEvent
  extends EventBase {
  type: 'v2.billing.rate_card_subscription.collection_awaiting_customer_action';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.RateCardSubscription>;
}
export interface V2BillingRateCardSubscriptionCollectionAwaitingCustomerActionEventNotification
  extends EventNotificationBase {
  type: 'v2.billing.rate_card_subscription.collection_awaiting_customer_action';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.RateCardSubscription>;
  fetchEvent(): Promise<
    V2BillingRateCardSubscriptionCollectionAwaitingCustomerActionEvent
  >;
}

/**
 * Occurs when a RateCardSubscription's collection is current.
 */
export interface V2BillingRateCardSubscriptionCollectionCurrentEvent
  extends EventBase {
  type: 'v2.billing.rate_card_subscription.collection_current';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.RateCardSubscription>;
}
export interface V2BillingRateCardSubscriptionCollectionCurrentEventNotification
  extends EventNotificationBase {
  type: 'v2.billing.rate_card_subscription.collection_current';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.RateCardSubscription>;
  fetchEvent(): Promise<V2BillingRateCardSubscriptionCollectionCurrentEvent>;
}

/**
 * Occurs when a RateCardSubscription's collection is past due.
 */
export interface V2BillingRateCardSubscriptionCollectionPastDueEvent
  extends EventBase {
  type: 'v2.billing.rate_card_subscription.collection_past_due';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.RateCardSubscription>;
}
export interface V2BillingRateCardSubscriptionCollectionPastDueEventNotification
  extends EventNotificationBase {
  type: 'v2.billing.rate_card_subscription.collection_past_due';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.RateCardSubscription>;
  fetchEvent(): Promise<V2BillingRateCardSubscriptionCollectionPastDueEvent>;
}

/**
 * Occurs when a RateCardSubscription's collection is paused.
 */
export interface V2BillingRateCardSubscriptionCollectionPausedEvent
  extends EventBase {
  type: 'v2.billing.rate_card_subscription.collection_paused';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.RateCardSubscription>;
}
export interface V2BillingRateCardSubscriptionCollectionPausedEventNotification
  extends EventNotificationBase {
  type: 'v2.billing.rate_card_subscription.collection_paused';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.RateCardSubscription>;
  fetchEvent(): Promise<V2BillingRateCardSubscriptionCollectionPausedEvent>;
}

/**
 * Occurs when a RateCardSubscription's collection is unpaid.
 */
export interface V2BillingRateCardSubscriptionCollectionUnpaidEvent
  extends EventBase {
  type: 'v2.billing.rate_card_subscription.collection_unpaid';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.RateCardSubscription>;
}
export interface V2BillingRateCardSubscriptionCollectionUnpaidEventNotification
  extends EventNotificationBase {
  type: 'v2.billing.rate_card_subscription.collection_unpaid';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.RateCardSubscription>;
  fetchEvent(): Promise<V2BillingRateCardSubscriptionCollectionUnpaidEvent>;
}

/**
 * Occurs when RateCardSubscription servicing is activated.
 */
export interface V2BillingRateCardSubscriptionServicingActivatedEvent
  extends EventBase {
  type: 'v2.billing.rate_card_subscription.servicing_activated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.RateCardSubscription>;
}
export interface V2BillingRateCardSubscriptionServicingActivatedEventNotification
  extends EventNotificationBase {
  type: 'v2.billing.rate_card_subscription.servicing_activated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.RateCardSubscription>;
  fetchEvent(): Promise<V2BillingRateCardSubscriptionServicingActivatedEvent>;
}

/**
 * Occurs when RateCardSubscription servicing is canceled.
 */
export interface V2BillingRateCardSubscriptionServicingCanceledEvent
  extends EventBase {
  type: 'v2.billing.rate_card_subscription.servicing_canceled';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.RateCardSubscription>;
}
export interface V2BillingRateCardSubscriptionServicingCanceledEventNotification
  extends EventNotificationBase {
  type: 'v2.billing.rate_card_subscription.servicing_canceled';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.RateCardSubscription>;
  fetchEvent(): Promise<V2BillingRateCardSubscriptionServicingCanceledEvent>;
}

/**
 * Occurs when RateCardSubscription servicing is paused.
 */
export interface V2BillingRateCardSubscriptionServicingPausedEvent
  extends EventBase {
  type: 'v2.billing.rate_card_subscription.servicing_paused';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.RateCardSubscription>;
}
export interface V2BillingRateCardSubscriptionServicingPausedEventNotification
  extends EventNotificationBase {
  type: 'v2.billing.rate_card_subscription.servicing_paused';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.RateCardSubscription>;
  fetchEvent(): Promise<V2BillingRateCardSubscriptionServicingPausedEvent>;
}

/**
 * Occurs when a RateCardVersion is created.
 */
export interface V2BillingRateCardVersionCreatedEvent extends EventBase {
  type: 'v2.billing.rate_card_version.created';
  // Retrieves data specific to this event.
  data: V2BillingRateCardVersionCreatedEvent.Data;
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.RateCardVersion>;
}
export interface V2BillingRateCardVersionCreatedEventNotification
  extends EventNotificationBase {
  type: 'v2.billing.rate_card_version.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Billing.RateCardVersion>;
  fetchEvent(): Promise<V2BillingRateCardVersionCreatedEvent>;
}

export namespace V2BillingRateCardVersionCreatedEvent {
  export interface Data {
    /**
     * The ID of the RateCard that the RateCardVersion belongs to.
     */
    rate_card_id: string;
  }
}

/**
 * Occurs when a product catalog import cannot be processed or if processing fails unexpectedly.
 */
export interface V2CommerceProductCatalogImportsFailedEvent extends EventBase {
  type: 'v2.commerce.product_catalog.imports.failed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Commerce.ProductCatalogImport>;
}
export interface V2CommerceProductCatalogImportsFailedEventNotification
  extends EventNotificationBase {
  type: 'v2.commerce.product_catalog.imports.failed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Commerce.ProductCatalogImport>;
  fetchEvent(): Promise<V2CommerceProductCatalogImportsFailedEvent>;
}

/**
 * Occurs when a product catalog import file has been uploaded and has started processing.
 */
export interface V2CommerceProductCatalogImportsProcessingEvent
  extends EventBase {
  type: 'v2.commerce.product_catalog.imports.processing';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Commerce.ProductCatalogImport>;
}
export interface V2CommerceProductCatalogImportsProcessingEventNotification
  extends EventNotificationBase {
  type: 'v2.commerce.product_catalog.imports.processing';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Commerce.ProductCatalogImport>;
  fetchEvent(): Promise<V2CommerceProductCatalogImportsProcessingEvent>;
}

/**
 * Occurs when a product catalog file has been uploaded successfully and passed validation.
 */
export interface V2CommerceProductCatalogImportsSucceededEvent
  extends EventBase {
  type: 'v2.commerce.product_catalog.imports.succeeded';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Commerce.ProductCatalogImport>;
}
export interface V2CommerceProductCatalogImportsSucceededEventNotification
  extends EventNotificationBase {
  type: 'v2.commerce.product_catalog.imports.succeeded';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Commerce.ProductCatalogImport>;
  fetchEvent(): Promise<V2CommerceProductCatalogImportsSucceededEvent>;
}

/**
 * Occurs when a product catalog file has been successfully processed but some rows failed validation.
 */
export interface V2CommerceProductCatalogImportsSucceededWithErrorsEvent
  extends EventBase {
  type: 'v2.commerce.product_catalog.imports.succeeded_with_errors';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Commerce.ProductCatalogImport>;
}
export interface V2CommerceProductCatalogImportsSucceededWithErrorsEventNotification
  extends EventNotificationBase {
  type: 'v2.commerce.product_catalog.imports.succeeded_with_errors';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Commerce.ProductCatalogImport>;
  fetchEvent(): Promise<
    V2CommerceProductCatalogImportsSucceededWithErrorsEvent
  >;
}

/**
 * This event occurs when an account is closed.
 */
export interface V2CoreAccountClosedEvent extends EventBase {
  type: 'v2.core.account.closed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.Account>;
}
export interface V2CoreAccountClosedEventNotification
  extends EventNotificationBase {
  type: 'v2.core.account.closed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.Account>;
  fetchEvent(): Promise<V2CoreAccountClosedEvent>;
}

/**
 * Occurs when an Account is created.
 */
export interface V2CoreAccountCreatedEvent extends EventBase {
  type: 'v2.core.account.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.Account>;
}
export interface V2CoreAccountCreatedEventNotification
  extends EventNotificationBase {
  type: 'v2.core.account.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.Account>;
  fetchEvent(): Promise<V2CoreAccountCreatedEvent>;
}

/**
 * Occurs when an Account is updated.
 */
export interface V2CoreAccountUpdatedEvent extends EventBase {
  type: 'v2.core.account.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.Account>;
}
export interface V2CoreAccountUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v2.core.account.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.Account>;
  fetchEvent(): Promise<V2CoreAccountUpdatedEvent>;
}

/**
 * Occurs when the status of an Account's card creator configuration capability is updated.
 */
export interface V2CoreAccountIncludingConfigurationCardCreatorCapabilityStatusUpdatedEvent
  extends EventBase {
  type: 'v2.core.account[configuration.card_creator].capability_status_updated';
  // Retrieves data specific to this event.
  data: V2CoreAccountIncludingConfigurationCardCreatorCapabilityStatusUpdatedEvent.Data;
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.Account>;
}
export interface V2CoreAccountIncludingConfigurationCardCreatorCapabilityStatusUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v2.core.account[configuration.card_creator].capability_status_updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.Account>;
  fetchEvent(): Promise<
    V2CoreAccountIncludingConfigurationCardCreatorCapabilityStatusUpdatedEvent
  >;
}

export namespace V2CoreAccountIncludingConfigurationCardCreatorCapabilityStatusUpdatedEvent {
  export interface Data {
    /**
     * Open Enum. The capability which had its status updated.
     */
    updated_capability: Data.UpdatedCapability;
  }

  export namespace Data {
    export type UpdatedCapability =
      | 'commercial.celtic.charge_card'
      | 'commercial.celtic.spend_card'
      | 'commercial.cross_river_bank.charge_card'
      | 'commercial.cross_river_bank.prepaid_card'
      | 'commercial.cross_river_bank.spend_card'
      | 'commercial.fifth_third.charge_card'
      | 'commercial.lead.prepaid_card'
      | 'commercial.stripe.charge_card'
      | 'commercial.stripe.prepaid_card'
      | 'consumer.celtic.revolving_credit_card'
      | 'consumer.cross_river_bank.prepaid_card'
      | 'consumer.lead.prepaid_card';
  }
}

/**
 * Occurs when a Card Creator's configuration is updated.
 */
export interface V2CoreAccountIncludingConfigurationCardCreatorUpdatedEvent
  extends EventBase {
  type: 'v2.core.account[configuration.card_creator].updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.Account>;
}
export interface V2CoreAccountIncludingConfigurationCardCreatorUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v2.core.account[configuration.card_creator].updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.Account>;
  fetchEvent(): Promise<
    V2CoreAccountIncludingConfigurationCardCreatorUpdatedEvent
  >;
}

/**
 * Occurs when the status of an Account's customer configuration capability is updated.
 */
export interface V2CoreAccountIncludingConfigurationCustomerCapabilityStatusUpdatedEvent
  extends EventBase {
  type: 'v2.core.account[configuration.customer].capability_status_updated';
  // Retrieves data specific to this event.
  data: V2CoreAccountIncludingConfigurationCustomerCapabilityStatusUpdatedEvent.Data;
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.Account>;
}
export interface V2CoreAccountIncludingConfigurationCustomerCapabilityStatusUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v2.core.account[configuration.customer].capability_status_updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.Account>;
  fetchEvent(): Promise<
    V2CoreAccountIncludingConfigurationCustomerCapabilityStatusUpdatedEvent
  >;
}

export namespace V2CoreAccountIncludingConfigurationCustomerCapabilityStatusUpdatedEvent {
  export interface Data {
    /**
     * Open Enum. The capability which had its status updated.
     */
    updated_capability: 'automatic_indirect_tax';
  }
}

/**
 * Occurs when an Account's customer configuration is updated.
 */
export interface V2CoreAccountIncludingConfigurationCustomerUpdatedEvent
  extends EventBase {
  type: 'v2.core.account[configuration.customer].updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.Account>;
}
export interface V2CoreAccountIncludingConfigurationCustomerUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v2.core.account[configuration.customer].updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.Account>;
  fetchEvent(): Promise<
    V2CoreAccountIncludingConfigurationCustomerUpdatedEvent
  >;
}

/**
 * Occurs when the status of an Account's merchant configuration capability is updated.
 */
export interface V2CoreAccountIncludingConfigurationMerchantCapabilityStatusUpdatedEvent
  extends EventBase {
  type: 'v2.core.account[configuration.merchant].capability_status_updated';
  // Retrieves data specific to this event.
  data: V2CoreAccountIncludingConfigurationMerchantCapabilityStatusUpdatedEvent.Data;
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.Account>;
}
export interface V2CoreAccountIncludingConfigurationMerchantCapabilityStatusUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v2.core.account[configuration.merchant].capability_status_updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.Account>;
  fetchEvent(): Promise<
    V2CoreAccountIncludingConfigurationMerchantCapabilityStatusUpdatedEvent
  >;
}

export namespace V2CoreAccountIncludingConfigurationMerchantCapabilityStatusUpdatedEvent {
  export interface Data {
    /**
     * Open Enum. The capability which had its status updated.
     */
    updated_capability: Data.UpdatedCapability;
  }

  export namespace Data {
    export type UpdatedCapability =
      | 'ach_debit_payments'
      | 'acss_debit_payments'
      | 'affirm_payments'
      | 'afterpay_clearpay_payments'
      | 'alma_payments'
      | 'amazon_pay_payments'
      | 'au_becs_debit_payments'
      | 'bacs_debit_payments'
      | 'bancontact_payments'
      | 'blik_payments'
      | 'boleto_payments'
      | 'card_payments'
      | 'cartes_bancaires_payments'
      | 'cashapp_payments'
      | 'eps_payments'
      | 'fpx_payments'
      | 'gb_bank_transfer_payments'
      | 'grabpay_payments'
      | 'ideal_payments'
      | 'jcb_payments'
      | 'jp_bank_transfer_payments'
      | 'kakao_pay_payments'
      | 'klarna_payments'
      | 'konbini_payments'
      | 'kr_card_payments'
      | 'link_payments'
      | 'mobilepay_payments'
      | 'multibanco_payments'
      | 'mx_bank_transfer_payments'
      | 'naver_pay_payments'
      | 'oxxo_payments'
      | 'p24_payments'
      | 'payco_payments'
      | 'paynow_payments'
      | 'stripe_balance.payouts'
      | 'pay_by_bank_payments'
      | 'promptpay_payments'
      | 'revolut_pay_payments'
      | 'samsung_pay_payments'
      | 'sepa_bank_transfer_payments'
      | 'sepa_debit_payments'
      | 'swish_payments'
      | 'twint_payments'
      | 'us_bank_transfer_payments'
      | 'zip_payments';
  }
}

/**
 * Occurs when an Account's merchant configuration is updated.
 */
export interface V2CoreAccountIncludingConfigurationMerchantUpdatedEvent
  extends EventBase {
  type: 'v2.core.account[configuration.merchant].updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.Account>;
}
export interface V2CoreAccountIncludingConfigurationMerchantUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v2.core.account[configuration.merchant].updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.Account>;
  fetchEvent(): Promise<
    V2CoreAccountIncludingConfigurationMerchantUpdatedEvent
  >;
}

/**
 * Occurs when the status of an Account's recipient configuration capability is updated.
 */
export interface V2CoreAccountIncludingConfigurationRecipientCapabilityStatusUpdatedEvent
  extends EventBase {
  type: 'v2.core.account[configuration.recipient].capability_status_updated';
  // Retrieves data specific to this event.
  data: V2CoreAccountIncludingConfigurationRecipientCapabilityStatusUpdatedEvent.Data;
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.Account>;
}
export interface V2CoreAccountIncludingConfigurationRecipientCapabilityStatusUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v2.core.account[configuration.recipient].capability_status_updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.Account>;
  fetchEvent(): Promise<
    V2CoreAccountIncludingConfigurationRecipientCapabilityStatusUpdatedEvent
  >;
}

export namespace V2CoreAccountIncludingConfigurationRecipientCapabilityStatusUpdatedEvent {
  export interface Data {
    /**
     * Open Enum. The capability which had its status updated.
     */
    updated_capability: Data.UpdatedCapability;
  }

  export namespace Data {
    export type UpdatedCapability =
      | 'bank_accounts.instant'
      | 'bank_accounts.local'
      | 'bank_accounts.wire'
      | 'cards'
      | 'crypto_wallets_v2'
      | 'paper_checks'
      | 'stripe_balance.payouts'
      | 'stripe_balance.stripe_transfers'
      | 'stripe.transfers';
  }
}

/**
 * Occurs when a Recipient's configuration is updated.
 */
export interface V2CoreAccountIncludingConfigurationRecipientUpdatedEvent
  extends EventBase {
  type: 'v2.core.account[configuration.recipient].updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.Account>;
}
export interface V2CoreAccountIncludingConfigurationRecipientUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v2.core.account[configuration.recipient].updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.Account>;
  fetchEvent(): Promise<
    V2CoreAccountIncludingConfigurationRecipientUpdatedEvent
  >;
}

/**
 * Occurs when the status of an Account's storer configuration capability is updated.
 */
export interface V2CoreAccountIncludingConfigurationStorerCapabilityStatusUpdatedEvent
  extends EventBase {
  type: 'v2.core.account[configuration.storer].capability_status_updated';
  // Retrieves data specific to this event.
  data: V2CoreAccountIncludingConfigurationStorerCapabilityStatusUpdatedEvent.Data;
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.Account>;
}
export interface V2CoreAccountIncludingConfigurationStorerCapabilityStatusUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v2.core.account[configuration.storer].capability_status_updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.Account>;
  fetchEvent(): Promise<
    V2CoreAccountIncludingConfigurationStorerCapabilityStatusUpdatedEvent
  >;
}

export namespace V2CoreAccountIncludingConfigurationStorerCapabilityStatusUpdatedEvent {
  export interface Data {
    /**
     * Open Enum. The capability which had its status updated.
     */
    updated_capability: Data.UpdatedCapability;
  }

  export namespace Data {
    export type UpdatedCapability =
      | 'consumer.holds_currencies.usd'
      | 'financial_addressses.bank_accounts'
      | 'financial_addressses.crypto_wallets'
      | 'holds_currencies.eur'
      | 'holds_currencies.gbp'
      | 'holds_currencies.usd'
      | 'holds_currencies.usdc'
      | 'inbound_transfers.bank_accounts'
      | 'outbound_payments.bank_accounts'
      | 'outbound_payments.cards'
      | 'outbound_payments.crypto_wallets'
      | 'outbound_payments.financial_accounts'
      | 'outbound_payments.paper_checks'
      | 'outbound_transfers.bank_accounts'
      | 'outbound_transfers.crypto_wallets'
      | 'outbound_transfers.financial_accounts';
  }
}

/**
 * Occurs when a Storer's configuration is updated.
 */
export interface V2CoreAccountIncludingConfigurationStorerUpdatedEvent
  extends EventBase {
  type: 'v2.core.account[configuration.storer].updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.Account>;
}
export interface V2CoreAccountIncludingConfigurationStorerUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v2.core.account[configuration.storer].updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.Account>;
  fetchEvent(): Promise<V2CoreAccountIncludingConfigurationStorerUpdatedEvent>;
}

/**
 * This event occurs when account defaults are created or updated.
 */
export interface V2CoreAccountIncludingDefaultsUpdatedEvent extends EventBase {
  type: 'v2.core.account[defaults].updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.Account>;
}
export interface V2CoreAccountIncludingDefaultsUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v2.core.account[defaults].updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.Account>;
  fetchEvent(): Promise<V2CoreAccountIncludingDefaultsUpdatedEvent>;
}

/**
 * Occurs when an Account's future requirements are updated.
 */
export interface V2CoreAccountIncludingFutureRequirementsUpdatedEvent
  extends EventBase {
  type: 'v2.core.account[future_requirements].updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.Account>;
}
export interface V2CoreAccountIncludingFutureRequirementsUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v2.core.account[future_requirements].updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.Account>;
  fetchEvent(): Promise<V2CoreAccountIncludingFutureRequirementsUpdatedEvent>;
}

/**
 * Occurs when an Identity is updated.
 */
export interface V2CoreAccountIncludingIdentityUpdatedEvent extends EventBase {
  type: 'v2.core.account[identity].updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.Account>;
}
export interface V2CoreAccountIncludingIdentityUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v2.core.account[identity].updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.Account>;
  fetchEvent(): Promise<V2CoreAccountIncludingIdentityUpdatedEvent>;
}

/**
 * Occurs when an Account's requirements are updated.
 */
export interface V2CoreAccountIncludingRequirementsUpdatedEvent
  extends EventBase {
  type: 'v2.core.account[requirements].updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.Account>;
}
export interface V2CoreAccountIncludingRequirementsUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v2.core.account[requirements].updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.Account>;
  fetchEvent(): Promise<V2CoreAccountIncludingRequirementsUpdatedEvent>;
}

/**
 * Occurs when the generated AccountLink is completed.
 */
export interface V2CoreAccountLinkReturnedEvent extends EventBase {
  type: 'v2.core.account_link.returned';
  // Retrieves data specific to this event.
  data: V2CoreAccountLinkReturnedEvent.Data;
}
export interface V2CoreAccountLinkReturnedEventNotification
  extends EventNotificationBase {
  type: 'v2.core.account_link.returned';
  fetchEvent(): Promise<V2CoreAccountLinkReturnedEvent>;
}

export namespace V2CoreAccountLinkReturnedEvent {
  export interface Data {
    /**
     * The ID of the v2 account.
     */
    account_id: string;

    /**
     * Configurations on the Account that was onboarded via the account link.
     */
    configurations: Array<Data.Configuration>;

    /**
     * Open Enum. The use case type of the account link that has been completed.
     */
    use_case: Data.UseCase;
  }

  export namespace Data {
    export type Configuration =
      | 'customer'
      | 'merchant'
      | 'recipient'
      | 'storer';

    export type UseCase = 'account_onboarding' | 'account_update';
  }
}

/**
 * Occurs when a Person is created.
 */
export interface V2CoreAccountPersonCreatedEvent extends EventBase {
  type: 'v2.core.account_person.created';
  // Retrieves data specific to this event.
  data: V2CoreAccountPersonCreatedEvent.Data;
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.AccountPerson>;
}
export interface V2CoreAccountPersonCreatedEventNotification
  extends EventNotificationBase {
  type: 'v2.core.account_person.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.AccountPerson>;
  fetchEvent(): Promise<V2CoreAccountPersonCreatedEvent>;
}

export namespace V2CoreAccountPersonCreatedEvent {
  export interface Data {
    /**
     * The ID of the v2 account.
     */
    account_id: string;
  }
}

/**
 * Occurs when a Person is deleted.
 */
export interface V2CoreAccountPersonDeletedEvent extends EventBase {
  type: 'v2.core.account_person.deleted';
  // Retrieves data specific to this event.
  data: V2CoreAccountPersonDeletedEvent.Data;
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.AccountPerson>;
}
export interface V2CoreAccountPersonDeletedEventNotification
  extends EventNotificationBase {
  type: 'v2.core.account_person.deleted';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.AccountPerson>;
  fetchEvent(): Promise<V2CoreAccountPersonDeletedEvent>;
}

export namespace V2CoreAccountPersonDeletedEvent {
  export interface Data {
    /**
     * The ID of the v2 account.
     */
    account_id: string;
  }
}

/**
 * Occurs when a Person is updated.
 */
export interface V2CoreAccountPersonUpdatedEvent extends EventBase {
  type: 'v2.core.account_person.updated';
  // Retrieves data specific to this event.
  data: V2CoreAccountPersonUpdatedEvent.Data;
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.AccountPerson>;
}
export interface V2CoreAccountPersonUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v2.core.account_person.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.AccountPerson>;
  fetchEvent(): Promise<V2CoreAccountPersonUpdatedEvent>;
}

export namespace V2CoreAccountPersonUpdatedEvent {
  export interface Data {
    /**
     * The ID of the v2 account.
     */
    account_id: string;
  }
}

/**
 * Occurs when a Fraudulent Website signal is ready for an account.
 */
export interface V2CoreAccountSignalsFraudulentWebsiteReadyEvent
  extends EventBase {
  type: 'v2.core.account_signals.fraudulent_website_ready';
  // Retrieves data specific to this event.
  data: V2CoreAccountSignalsFraudulentWebsiteReadyEvent.Data;
}
export interface V2CoreAccountSignalsFraudulentWebsiteReadyEventNotification
  extends EventNotificationBase {
  type: 'v2.core.account_signals.fraudulent_website_ready';
  fetchEvent(): Promise<V2CoreAccountSignalsFraudulentWebsiteReadyEvent>;
}

export namespace V2CoreAccountSignalsFraudulentWebsiteReadyEvent {
  export interface Data {
    /**
     * The account for which the signals belong to. Empty if this was an entityless request.
     */
    account?: string;

    /**
     * Human readable description of concerns found in the website, produced by LLM. If risk_level is unknown, this explains why evaluation could not run.
     */
    details: string;

    /**
     * Time at which the signal was evaluated.
     */
    evaluated_at: string;

    /**
     * Unique identifier for the fraudulent website evaluation request.
     */
    evaluation_id: string;

    /**
     * Risk level for the fraudulent website signal. If evaluation could not run (like invalid website), we return unknown.
     */
    risk_level: Data.RiskLevel;

    /**
     * Unique identifier for the fraudulent website signal.
     */
    signal_id: string;
  }

  export namespace Data {
    export type RiskLevel =
      | 'elevated'
      | 'highest'
      | 'low'
      | 'normal'
      | 'not_assessed'
      | 'unknown';
  }
}

/**
 * Occurs when an approval request is approved by a reviewer.
 */
export interface V2CoreApprovalRequestApprovedEvent extends EventBase {
  type: 'v2.core.approval_request.approved';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.ApprovalRequest>;
}
export interface V2CoreApprovalRequestApprovedEventNotification
  extends EventNotificationBase {
  type: 'v2.core.approval_request.approved';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.ApprovalRequest>;
  fetchEvent(): Promise<V2CoreApprovalRequestApprovedEvent>;
}

/**
 * Occurs when an approval request is canceled by the requester.
 */
export interface V2CoreApprovalRequestCanceledEvent extends EventBase {
  type: 'v2.core.approval_request.canceled';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.ApprovalRequest>;
}
export interface V2CoreApprovalRequestCanceledEventNotification
  extends EventNotificationBase {
  type: 'v2.core.approval_request.canceled';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.ApprovalRequest>;
  fetchEvent(): Promise<V2CoreApprovalRequestCanceledEvent>;
}

/**
 * Occurs when the action associated with an approval request fails during execution.
 */
export interface V2CoreApprovalRequestFailedEvent extends EventBase {
  type: 'v2.core.approval_request.failed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.ApprovalRequest>;
}
export interface V2CoreApprovalRequestFailedEventNotification
  extends EventNotificationBase {
  type: 'v2.core.approval_request.failed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.ApprovalRequest>;
  fetchEvent(): Promise<V2CoreApprovalRequestFailedEvent>;
}

/**
 * Occurs when an approval request is rejected by a reviewer.
 */
export interface V2CoreApprovalRequestRejectedEvent extends EventBase {
  type: 'v2.core.approval_request.rejected';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.ApprovalRequest>;
}
export interface V2CoreApprovalRequestRejectedEventNotification
  extends EventNotificationBase {
  type: 'v2.core.approval_request.rejected';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.ApprovalRequest>;
  fetchEvent(): Promise<V2CoreApprovalRequestRejectedEvent>;
}

/**
 * Occurs when an approval request is successfully executed.
 */
export interface V2CoreApprovalRequestSucceededEvent extends EventBase {
  type: 'v2.core.approval_request.succeeded';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.ApprovalRequest>;
}
export interface V2CoreApprovalRequestSucceededEventNotification
  extends EventNotificationBase {
  type: 'v2.core.approval_request.succeeded';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.ApprovalRequest>;
  fetchEvent(): Promise<V2CoreApprovalRequestSucceededEvent>;
}

/**
 * Occurs when a batch job fails.
 */
export interface V2CoreBatchJobBatchFailedEvent extends EventBase {
  type: 'v2.core.batch_job.batch_failed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.BatchJob>;
}
export interface V2CoreBatchJobBatchFailedEventNotification
  extends EventNotificationBase {
  type: 'v2.core.batch_job.batch_failed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.BatchJob>;
  fetchEvent(): Promise<V2CoreBatchJobBatchFailedEvent>;
}

/**
 * Occurs when a batch job is canceled.
 */
export interface V2CoreBatchJobCanceledEvent extends EventBase {
  type: 'v2.core.batch_job.canceled';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.BatchJob>;
}
export interface V2CoreBatchJobCanceledEventNotification
  extends EventNotificationBase {
  type: 'v2.core.batch_job.canceled';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.BatchJob>;
  fetchEvent(): Promise<V2CoreBatchJobCanceledEvent>;
}

/**
 * Occurs on completion of a batch job.
 */
export interface V2CoreBatchJobCompletedEvent extends EventBase {
  type: 'v2.core.batch_job.completed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.BatchJob>;
}
export interface V2CoreBatchJobCompletedEventNotification
  extends EventNotificationBase {
  type: 'v2.core.batch_job.completed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.BatchJob>;
  fetchEvent(): Promise<V2CoreBatchJobCompletedEvent>;
}

/**
 * Occurs on creation of a batch job.
 */
export interface V2CoreBatchJobCreatedEvent extends EventBase {
  type: 'v2.core.batch_job.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.BatchJob>;
}
export interface V2CoreBatchJobCreatedEventNotification
  extends EventNotificationBase {
  type: 'v2.core.batch_job.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.BatchJob>;
  fetchEvent(): Promise<V2CoreBatchJobCreatedEvent>;
}

/**
 * Occurs on submission of a batch job.
 */
export interface V2CoreBatchJobReadyForUploadEvent extends EventBase {
  type: 'v2.core.batch_job.ready_for_upload';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.BatchJob>;
}
export interface V2CoreBatchJobReadyForUploadEventNotification
  extends EventNotificationBase {
  type: 'v2.core.batch_job.ready_for_upload';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.BatchJob>;
  fetchEvent(): Promise<V2CoreBatchJobReadyForUploadEvent>;
}

/**
 * Occurs when a batch job times out.
 */
export interface V2CoreBatchJobTimeoutEvent extends EventBase {
  type: 'v2.core.batch_job.timeout';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.BatchJob>;
}
export interface V2CoreBatchJobTimeoutEventNotification
  extends EventNotificationBase {
  type: 'v2.core.batch_job.timeout';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.BatchJob>;
  fetchEvent(): Promise<V2CoreBatchJobTimeoutEvent>;
}

/**
 * Occurs when a batch job is updated.
 */
export interface V2CoreBatchJobUpdatedEvent extends EventBase {
  type: 'v2.core.batch_job.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.BatchJob>;
}
export interface V2CoreBatchJobUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v2.core.batch_job.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.BatchJob>;
  fetchEvent(): Promise<V2CoreBatchJobUpdatedEvent>;
}

/**
 * Occurs when merchant fails to upload a file in time.
 */
export interface V2CoreBatchJobUploadTimeoutEvent extends EventBase {
  type: 'v2.core.batch_job.upload_timeout';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.BatchJob>;
}
export interface V2CoreBatchJobUploadTimeoutEventNotification
  extends EventNotificationBase {
  type: 'v2.core.batch_job.upload_timeout';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.BatchJob>;
  fetchEvent(): Promise<V2CoreBatchJobUploadTimeoutEvent>;
}

/**
 * Occurs when a batch job proceeds to the validation stage.
 */
export interface V2CoreBatchJobValidatingEvent extends EventBase {
  type: 'v2.core.batch_job.validating';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.BatchJob>;
}
export interface V2CoreBatchJobValidatingEventNotification
  extends EventNotificationBase {
  type: 'v2.core.batch_job.validating';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.BatchJob>;
  fetchEvent(): Promise<V2CoreBatchJobValidatingEvent>;
}

/**
 * Occurs when a batch job fails on validation.
 */
export interface V2CoreBatchJobValidationFailedEvent extends EventBase {
  type: 'v2.core.batch_job.validation_failed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.BatchJob>;
}
export interface V2CoreBatchJobValidationFailedEventNotification
  extends EventNotificationBase {
  type: 'v2.core.batch_job.validation_failed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.BatchJob>;
  fetchEvent(): Promise<V2CoreBatchJobValidationFailedEvent>;
}

/**
 * Occurs when a claimable sandbox is claimed.
 */
export interface V2CoreClaimableSandboxClaimedEvent extends EventBase {
  type: 'v2.core.claimable_sandbox.claimed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.ClaimableSandbox>;
}
export interface V2CoreClaimableSandboxClaimedEventNotification
  extends EventNotificationBase {
  type: 'v2.core.claimable_sandbox.claimed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.ClaimableSandbox>;
  fetchEvent(): Promise<V2CoreClaimableSandboxClaimedEvent>;
}

/**
 * Occurs when a claimable sandbox is created.
 */
export interface V2CoreClaimableSandboxCreatedEvent extends EventBase {
  type: 'v2.core.claimable_sandbox.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.ClaimableSandbox>;
}
export interface V2CoreClaimableSandboxCreatedEventNotification
  extends EventNotificationBase {
  type: 'v2.core.claimable_sandbox.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.ClaimableSandbox>;
  fetchEvent(): Promise<V2CoreClaimableSandboxCreatedEvent>;
}

/**
 * Occurs when a claimable sandbox expires.
 */
export interface V2CoreClaimableSandboxExpiredEvent extends EventBase {
  type: 'v2.core.claimable_sandbox.expired';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.ClaimableSandbox>;
}
export interface V2CoreClaimableSandboxExpiredEventNotification
  extends EventNotificationBase {
  type: 'v2.core.claimable_sandbox.expired';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.ClaimableSandbox>;
  fetchEvent(): Promise<V2CoreClaimableSandboxExpiredEvent>;
}

/**
 * Occurs when a claimable sandbox is expiring in 7 days.
 */
export interface V2CoreClaimableSandboxExpiringEvent extends EventBase {
  type: 'v2.core.claimable_sandbox.expiring';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.ClaimableSandbox>;
}
export interface V2CoreClaimableSandboxExpiringEventNotification
  extends EventNotificationBase {
  type: 'v2.core.claimable_sandbox.expiring';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.ClaimableSandbox>;
  fetchEvent(): Promise<V2CoreClaimableSandboxExpiringEvent>;
}

/**
 * Occurs when a claimable sandbox object is updated.
 */
export interface V2CoreClaimableSandboxUpdatedEvent extends EventBase {
  type: 'v2.core.claimable_sandbox.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.ClaimableSandbox>;
}
export interface V2CoreClaimableSandboxUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v2.core.claimable_sandbox.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.ClaimableSandbox>;
  fetchEvent(): Promise<V2CoreClaimableSandboxUpdatedEvent>;
}

/**
 * A ping event used to test the connection to an EventDestination.
 */
export interface V2CoreEventDestinationPingEvent extends EventBase {
  type: 'v2.core.event_destination.ping';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.EventDestination>;
}
export interface V2CoreEventDestinationPingEventNotification
  extends EventNotificationBase {
  type: 'v2.core.event_destination.ping';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Core.EventDestination>;
  fetchEvent(): Promise<V2CoreEventDestinationPingEvent>;
}

/**
 * Occurs when an API error alert is firing.
 */
export interface V2CoreHealthApiErrorFiringEvent extends EventBase {
  type: 'v2.core.health.api_error.firing';
  // Retrieves data specific to this event.
  data: V2CoreHealthApiErrorFiringEvent.Data;
}
export interface V2CoreHealthApiErrorFiringEventNotification
  extends EventNotificationBase {
  type: 'v2.core.health.api_error.firing';
  fetchEvent(): Promise<V2CoreHealthApiErrorFiringEvent>;
}

export namespace V2CoreHealthApiErrorFiringEvent {
  export interface Data {
    /**
     * The alert ID.
     */
    alert_id: string;

    /**
     * The grouping key for the alert.
     */
    grouping_key: string;

    /**
     * The user impact.
     */
    impact: Data.Impact;

    /**
     * The time when impact on the user experience was first detected.
     */
    started_at: string;

    /**
     * A short description of the alert.
     */
    summary: string;
  }

  export namespace Data {
    export interface Impact {
      /**
       * The canonical path.
       */
      canonical_path: string;

      /**
       * The error code.
       */
      error_code?: string;

      /**
       * The HTTP method.
       */
      http_method: Impact.HttpMethod;

      /**
       * The HTTP status.
       */
      http_status: string;

      /**
       * The number of impacted requests.
       */
      impacted_requests: number;

      /**
       * The percentage of impacted requests.
       */
      impacted_requests_percentage?: Decimal;

      /**
       * The top impacted connected accounts (only for platforms).
       */
      top_impacted_accounts?: Array<Impact.TopImpactedAccount>;
    }

    export namespace Impact {
      export type HttpMethod = 'DELETE' | 'GET' | 'POST' | 'PUT';

      export interface TopImpactedAccount {
        /**
         * The account ID of the impacted connected account.
         */
        account: string;

        /**
         * The number of impacted requests.
         */
        impacted_requests: number;

        /**
         * The percentage of impacted requests.
         */
        impacted_requests_percentage?: Decimal;
      }
    }
  }
}

/**
 * Occurs when an API error alert is resolved.
 */
export interface V2CoreHealthApiErrorResolvedEvent extends EventBase {
  type: 'v2.core.health.api_error.resolved';
  // Retrieves data specific to this event.
  data: V2CoreHealthApiErrorResolvedEvent.Data;
}
export interface V2CoreHealthApiErrorResolvedEventNotification
  extends EventNotificationBase {
  type: 'v2.core.health.api_error.resolved';
  fetchEvent(): Promise<V2CoreHealthApiErrorResolvedEvent>;
}

export namespace V2CoreHealthApiErrorResolvedEvent {
  export interface Data {
    /**
     * The alert ID.
     */
    alert_id: string;

    /**
     * The grouping key for the alert.
     */
    grouping_key: string;

    /**
     * The user impact.
     */
    impact: Data.Impact;

    /**
     * The time when the user experience has returned to expected levels.
     */
    resolved_at: string;

    /**
     * The time when impact on the user experience was first detected.
     */
    started_at: string;

    /**
     * A short description of the alert.
     */
    summary: string;
  }

  export namespace Data {
    export interface Impact {
      /**
       * The canonical path.
       */
      canonical_path: string;

      /**
       * The error code.
       */
      error_code?: string;

      /**
       * The HTTP method.
       */
      http_method: Impact.HttpMethod;

      /**
       * The HTTP status.
       */
      http_status: string;

      /**
       * The number of impacted requests.
       */
      impacted_requests: number;

      /**
       * The percentage of impacted requests.
       */
      impacted_requests_percentage?: Decimal;

      /**
       * The top impacted connected accounts (only for platforms).
       */
      top_impacted_accounts?: Array<Impact.TopImpactedAccount>;
    }

    export namespace Impact {
      export type HttpMethod = 'DELETE' | 'GET' | 'POST' | 'PUT';

      export interface TopImpactedAccount {
        /**
         * The account ID of the impacted connected account.
         */
        account: string;

        /**
         * The number of impacted requests.
         */
        impacted_requests: number;

        /**
         * The percentage of impacted requests.
         */
        impacted_requests_percentage?: Decimal;
      }
    }
  }
}

/**
 * Occurs when an API latency alert is firing.
 */
export interface V2CoreHealthApiLatencyFiringEvent extends EventBase {
  type: 'v2.core.health.api_latency.firing';
  // Retrieves data specific to this event.
  data: V2CoreHealthApiLatencyFiringEvent.Data;
}
export interface V2CoreHealthApiLatencyFiringEventNotification
  extends EventNotificationBase {
  type: 'v2.core.health.api_latency.firing';
  fetchEvent(): Promise<V2CoreHealthApiLatencyFiringEvent>;
}

export namespace V2CoreHealthApiLatencyFiringEvent {
  export interface Data {
    /**
     * The alert ID.
     */
    alert_id: string;

    /**
     * The grouping key for the alert.
     */
    grouping_key: string;

    /**
     * The user impact.
     */
    impact: Data.Impact;

    /**
     * The time when impact on the user experience was first detected.
     */
    started_at: string;

    /**
     * A short description of the alert.
     */
    summary: string;
  }

  export namespace Data {
    export interface Impact {
      /**
       * The canonical path.
       */
      canonical_path: string;

      /**
       * The HTTP method.
       */
      http_method: Impact.HttpMethod;

      /**
       * The HTTP status.
       */
      http_status: string;

      /**
       * The number of impacted requests.
       */
      impacted_requests: number;

      /**
       * The percentage of impacted requests.
       */
      impacted_requests_percentage?: Decimal;

      /**
       * The top impacted connected accounts (only for platforms).
       */
      top_impacted_accounts?: Array<Impact.TopImpactedAccount>;
    }

    export namespace Impact {
      export type HttpMethod = 'DELETE' | 'GET' | 'POST' | 'PUT';

      export interface TopImpactedAccount {
        /**
         * The account ID of the impacted connected account.
         */
        account: string;

        /**
         * The number of impacted requests.
         */
        impacted_requests: number;

        /**
         * The percentage of impacted requests.
         */
        impacted_requests_percentage?: Decimal;
      }
    }
  }
}

/**
 * Occurs when an API latency alert is resolved.
 */
export interface V2CoreHealthApiLatencyResolvedEvent extends EventBase {
  type: 'v2.core.health.api_latency.resolved';
  // Retrieves data specific to this event.
  data: V2CoreHealthApiLatencyResolvedEvent.Data;
}
export interface V2CoreHealthApiLatencyResolvedEventNotification
  extends EventNotificationBase {
  type: 'v2.core.health.api_latency.resolved';
  fetchEvent(): Promise<V2CoreHealthApiLatencyResolvedEvent>;
}

export namespace V2CoreHealthApiLatencyResolvedEvent {
  export interface Data {
    /**
     * The alert ID.
     */
    alert_id: string;

    /**
     * The grouping key for the alert.
     */
    grouping_key: string;

    /**
     * The user impact.
     */
    impact: Data.Impact;

    /**
     * The time when the user experience has returned to expected levels.
     */
    resolved_at: string;

    /**
     * The time when impact on the user experience was first detected.
     */
    started_at: string;

    /**
     * A short description of the alert.
     */
    summary: string;
  }

  export namespace Data {
    export interface Impact {
      /**
       * The canonical path.
       */
      canonical_path: string;

      /**
       * The HTTP method.
       */
      http_method: Impact.HttpMethod;

      /**
       * The HTTP status.
       */
      http_status: string;

      /**
       * The number of impacted requests.
       */
      impacted_requests: number;

      /**
       * The percentage of impacted requests.
       */
      impacted_requests_percentage?: Decimal;

      /**
       * The top impacted connected accounts (only for platforms).
       */
      top_impacted_accounts?: Array<Impact.TopImpactedAccount>;
    }

    export namespace Impact {
      export type HttpMethod = 'DELETE' | 'GET' | 'POST' | 'PUT';

      export interface TopImpactedAccount {
        /**
         * The account ID of the impacted connected account.
         */
        account: string;

        /**
         * The number of impacted requests.
         */
        impacted_requests: number;

        /**
         * The percentage of impacted requests.
         */
        impacted_requests_percentage?: Decimal;
      }
    }
  }
}

/**
 * Occurs when an authorization rate drop alert is firing.
 */
export interface V2CoreHealthAuthorizationRateDropFiringEvent
  extends EventBase {
  type: 'v2.core.health.authorization_rate_drop.firing';
  // Retrieves data specific to this event.
  data: V2CoreHealthAuthorizationRateDropFiringEvent.Data;
}
export interface V2CoreHealthAuthorizationRateDropFiringEventNotification
  extends EventNotificationBase {
  type: 'v2.core.health.authorization_rate_drop.firing';
  fetchEvent(): Promise<V2CoreHealthAuthorizationRateDropFiringEvent>;
}

export namespace V2CoreHealthAuthorizationRateDropFiringEvent {
  export interface Data {
    /**
     * The alert ID.
     */
    alert_id: string;

    /**
     * The grouping key for the alert.
     */
    grouping_key: string;

    /**
     * The user impact.
     */
    impact: Data.Impact;

    /**
     * The time when impact on the user experience was first detected.
     */
    started_at: string;

    /**
     * A short description of the alert.
     */
    summary: string;
  }

  export namespace Data {
    export interface Impact {
      /**
       * The type of the charge.
       */
      charge_type: Impact.ChargeType;

      /**
       * The current authorization rate percentage.
       */
      current_percentage: Decimal;

      /**
       * Dimensions that describe what subset of payments are impacted.
       */
      dimensions?: Array<Impact.Dimension>;

      /**
       * The type of the payment method.
       */
      payment_method_type: Impact.PaymentMethodType;

      /**
       * The previous authorization rate percentage.
       */
      previous_percentage: Decimal;
    }

    export namespace Impact {
      export type ChargeType = 'money_moving' | 'validation';

      export interface Dimension {
        /**
         * The issuer dimension.
         */
        issuer?: string;

        /**
         * The type of the dimension.
         */
        type: 'issuer';
      }

      export type PaymentMethodType =
        | 'acss_debit'
        | 'affirm'
        | 'afterpay_clearpay'
        | 'alipay'
        | 'alma'
        | 'amazon_pay'
        | 'apple_pay'
        | 'au_becs_debit'
        | 'bacs_debit'
        | 'bancontact'
        | 'billie'
        | 'blik'
        | 'boleto'
        | 'card'
        | 'card_present'
        | 'cartes_bancaires'
        | 'cashapp'
        | 'crypto'
        | 'dummy_passthrough_card'
        | 'eps'
        | 'fpx'
        | 'giropay'
        | 'grabpay'
        | 'ideal'
        | 'interac_present'
        | 'kakao_pay'
        | 'klarna'
        | 'konbini'
        | 'kriya'
        | 'kr_card'
        | 'link'
        | 'mb_way'
        | 'mobilepay'
        | 'mondu'
        | 'multibanco'
        | 'naver_pay'
        | 'ng_bank'
        | 'ng_bank_transfer'
        | 'ng_card'
        | 'ng_market'
        | 'ng_ussd'
        | 'ng_wallet'
        | 'oxxo'
        | 'p24'
        | 'paper_check'
        | 'payco'
        | 'paynow'
        | 'paypal'
        | 'paypay'
        | 'payto'
        | 'pay_by_bank'
        | 'pix'
        | 'promptpay'
        | 'rechnung'
        | 'revolut_pay'
        | 'samsung_pay'
        | 'satispay'
        | 'scalapay'
        | 'sepa_debit'
        | 'sequra'
        | 'sofort'
        | 'sunbit'
        | 'swish'
        | 'twint'
        | 'upi'
        | 'us_bank_account'
        | 'vipps'
        | 'wechat_pay'
        | 'zip';
    }
  }
}

/**
 * Occurs when an authorization rate drop alert is resolved.
 */
export interface V2CoreHealthAuthorizationRateDropResolvedEvent
  extends EventBase {
  type: 'v2.core.health.authorization_rate_drop.resolved';
  // Retrieves data specific to this event.
  data: V2CoreHealthAuthorizationRateDropResolvedEvent.Data;
}
export interface V2CoreHealthAuthorizationRateDropResolvedEventNotification
  extends EventNotificationBase {
  type: 'v2.core.health.authorization_rate_drop.resolved';
  fetchEvent(): Promise<V2CoreHealthAuthorizationRateDropResolvedEvent>;
}

export namespace V2CoreHealthAuthorizationRateDropResolvedEvent {
  export interface Data {
    /**
     * The alert ID.
     */
    alert_id: string;

    /**
     * The grouping key for the alert.
     */
    grouping_key: string;

    /**
     * The user impact.
     */
    impact: Data.Impact;

    /**
     * The time when the user experience has returned to expected levels.
     */
    resolved_at: string;

    /**
     * The time when impact on the user experience was first detected.
     */
    started_at: string;

    /**
     * A short description of the alert.
     */
    summary: string;
  }

  export namespace Data {
    export interface Impact {
      /**
       * The type of the charge.
       */
      charge_type: Impact.ChargeType;

      /**
       * The current authorization rate percentage.
       */
      current_percentage: Decimal;

      /**
       * Dimensions that describe what subset of payments are impacted.
       */
      dimensions?: Array<Impact.Dimension>;

      /**
       * The type of the payment method.
       */
      payment_method_type: Impact.PaymentMethodType;

      /**
       * The previous authorization rate percentage.
       */
      previous_percentage: Decimal;
    }

    export namespace Impact {
      export type ChargeType = 'money_moving' | 'validation';

      export interface Dimension {
        /**
         * The issuer dimension.
         */
        issuer?: string;

        /**
         * The type of the dimension.
         */
        type: 'issuer';
      }

      export type PaymentMethodType =
        | 'acss_debit'
        | 'affirm'
        | 'afterpay_clearpay'
        | 'alipay'
        | 'alma'
        | 'amazon_pay'
        | 'apple_pay'
        | 'au_becs_debit'
        | 'bacs_debit'
        | 'bancontact'
        | 'billie'
        | 'blik'
        | 'boleto'
        | 'card'
        | 'card_present'
        | 'cartes_bancaires'
        | 'cashapp'
        | 'crypto'
        | 'dummy_passthrough_card'
        | 'eps'
        | 'fpx'
        | 'giropay'
        | 'grabpay'
        | 'ideal'
        | 'interac_present'
        | 'kakao_pay'
        | 'klarna'
        | 'konbini'
        | 'kriya'
        | 'kr_card'
        | 'link'
        | 'mb_way'
        | 'mobilepay'
        | 'mondu'
        | 'multibanco'
        | 'naver_pay'
        | 'ng_bank'
        | 'ng_bank_transfer'
        | 'ng_card'
        | 'ng_market'
        | 'ng_ussd'
        | 'ng_wallet'
        | 'oxxo'
        | 'p24'
        | 'paper_check'
        | 'payco'
        | 'paynow'
        | 'paypal'
        | 'paypay'
        | 'payto'
        | 'pay_by_bank'
        | 'pix'
        | 'promptpay'
        | 'rechnung'
        | 'revolut_pay'
        | 'samsung_pay'
        | 'satispay'
        | 'scalapay'
        | 'sepa_debit'
        | 'sequra'
        | 'sofort'
        | 'sunbit'
        | 'swish'
        | 'twint'
        | 'upi'
        | 'us_bank_account'
        | 'vipps'
        | 'wechat_pay'
        | 'zip';
    }
  }
}

/**
 * Occurs when an event generation failure alert is resolved.
 */
export interface V2CoreHealthEventGenerationFailureResolvedEvent
  extends EventBase {
  type: 'v2.core.health.event_generation_failure.resolved';
  // Retrieves data specific to this event.
  data: V2CoreHealthEventGenerationFailureResolvedEvent.Data;
}
export interface V2CoreHealthEventGenerationFailureResolvedEventNotification
  extends EventNotificationBase {
  type: 'v2.core.health.event_generation_failure.resolved';
  fetchEvent(): Promise<V2CoreHealthEventGenerationFailureResolvedEvent>;
}

export namespace V2CoreHealthEventGenerationFailureResolvedEvent {
  export interface Data {
    /**
     * The alert ID.
     */
    alert_id: string;

    /**
     * The grouping key for the alert.
     */
    grouping_key: string;

    /**
     * The user impact.
     */
    impact: Data.Impact;

    /**
     * The time when the user experience has returned to expected levels.
     */
    resolved_at: string;

    /**
     * A short description of the alert.
     */
    summary: string;
  }

  export namespace Data {
    export interface Impact {
      /**
       * The context the event should have been generated for. Only present when the account is a connected account.
       */
      context?: string;

      /**
       * The type of event that Stripe failed to generate.
       */
      event_type: string;

      /**
       * The related object details.
       */
      related_object: Impact.RelatedObject;
    }

    export namespace Impact {
      export interface RelatedObject {
        /**
         * The ID of the related object (e.g., "pi_...").
         */
        id: string;

        /**
         * The type of the related object (e.g., "payment_intent").
         */
        type: string;

        /**
         * The API URL for the related object (e.g., "/v1/payment_intents/pi_...").
         */
        url: string;
      }
    }
  }
}

/**
 * Occurs when the fraud rate has increased.
 */
export interface V2CoreHealthFraudRateIncreasedEvent extends EventBase {
  type: 'v2.core.health.fraud_rate.increased';
  // Retrieves data specific to this event.
  data: V2CoreHealthFraudRateIncreasedEvent.Data;
}
export interface V2CoreHealthFraudRateIncreasedEventNotification
  extends EventNotificationBase {
  type: 'v2.core.health.fraud_rate.increased';
  fetchEvent(): Promise<V2CoreHealthFraudRateIncreasedEvent>;
}

export namespace V2CoreHealthFraudRateIncreasedEvent {
  export interface Data {
    /**
     * The alert ID.
     */
    alert_id: string;

    /**
     * The grouping key for the alert.
     */
    grouping_key: string;

    /**
     * The user impact.
     */
    impact: Data.Impact;

    /**
     * The time when the user experience has returned to expected levels.
     */
    resolved_at?: string;

    /**
     * The time when impact on the user experience was first detected.
     */
    started_at: string;

    /**
     * A short description of the alert.
     */
    summary: string;
  }

  export namespace Data {
    export interface Impact {
      /**
       * Fraud attack type.
       */
      attack_type: Impact.AttackType;

      /**
       * The number of impacted requests which are detected.
       */
      impacted_requests: number;

      /**
       * Estimated aggregated amount for the impacted requests.
       */
      realized_fraud_amount: V2Amount;
    }

    export namespace Impact {
      export type AttackType = 'spike' | 'sustained_attack';
    }
  }
}

/**
 * Occurs when an issuing authorization request errors alert is firing.
 */
export interface V2CoreHealthIssuingAuthorizationRequestErrorsFiringEvent
  extends EventBase {
  type: 'v2.core.health.issuing_authorization_request_errors.firing';
  // Retrieves data specific to this event.
  data: V2CoreHealthIssuingAuthorizationRequestErrorsFiringEvent.Data;
}
export interface V2CoreHealthIssuingAuthorizationRequestErrorsFiringEventNotification
  extends EventNotificationBase {
  type: 'v2.core.health.issuing_authorization_request_errors.firing';
  fetchEvent(): Promise<
    V2CoreHealthIssuingAuthorizationRequestErrorsFiringEvent
  >;
}

export namespace V2CoreHealthIssuingAuthorizationRequestErrorsFiringEvent {
  export interface Data {
    /**
     * The alert ID.
     */
    alert_id: string;

    /**
     * The grouping key for the alert.
     */
    grouping_key: string;

    /**
     * The user impact.
     */
    impact: Data.Impact;

    /**
     * The time when impact on the user experience was first detected.
     */
    started_at: string;

    /**
     * A short description of the alert.
     */
    summary: string;
  }

  export namespace Data {
    export interface Impact {
      /**
       * Estimated aggregated amount for the approved requests.
       */
      approved_amount?: V2Amount;

      /**
       * The number of approved requests which are impacted.
       */
      approved_impacted_requests?: number;

      /**
       * Estimated aggregated amount for the declined requests.
       */
      declined_amount?: V2Amount;

      /**
       * The number of declined requests which are impacted.
       */
      declined_impacted_requests?: number;
    }
  }
}

/**
 * Occurs when an issuing authorization request errors alert is resolved.
 */
export interface V2CoreHealthIssuingAuthorizationRequestErrorsResolvedEvent
  extends EventBase {
  type: 'v2.core.health.issuing_authorization_request_errors.resolved';
  // Retrieves data specific to this event.
  data: V2CoreHealthIssuingAuthorizationRequestErrorsResolvedEvent.Data;
}
export interface V2CoreHealthIssuingAuthorizationRequestErrorsResolvedEventNotification
  extends EventNotificationBase {
  type: 'v2.core.health.issuing_authorization_request_errors.resolved';
  fetchEvent(): Promise<
    V2CoreHealthIssuingAuthorizationRequestErrorsResolvedEvent
  >;
}

export namespace V2CoreHealthIssuingAuthorizationRequestErrorsResolvedEvent {
  export interface Data {
    /**
     * The alert ID.
     */
    alert_id: string;

    /**
     * The grouping key for the alert.
     */
    grouping_key: string;

    /**
     * The user impact.
     */
    impact: Data.Impact;

    /**
     * The time when the user experience has returned to expected levels.
     */
    resolved_at: string;

    /**
     * The time when impact on the user experience was first detected.
     */
    started_at: string;

    /**
     * A short description of the alert.
     */
    summary: string;
  }

  export namespace Data {
    export interface Impact {
      /**
       * Estimated aggregated amount for the approved requests.
       */
      approved_amount?: V2Amount;

      /**
       * The number of approved requests which are impacted.
       */
      approved_impacted_requests?: number;

      /**
       * Estimated aggregated amount for the declined requests.
       */
      declined_amount?: V2Amount;

      /**
       * The number of declined requests which are impacted.
       */
      declined_impacted_requests?: number;
    }
  }
}

/**
 * Occurs when an issuing authorization request timeout alert is firing.
 */
export interface V2CoreHealthIssuingAuthorizationRequestTimeoutFiringEvent
  extends EventBase {
  type: 'v2.core.health.issuing_authorization_request_timeout.firing';
  // Retrieves data specific to this event.
  data: V2CoreHealthIssuingAuthorizationRequestTimeoutFiringEvent.Data;
}
export interface V2CoreHealthIssuingAuthorizationRequestTimeoutFiringEventNotification
  extends EventNotificationBase {
  type: 'v2.core.health.issuing_authorization_request_timeout.firing';
  fetchEvent(): Promise<
    V2CoreHealthIssuingAuthorizationRequestTimeoutFiringEvent
  >;
}

export namespace V2CoreHealthIssuingAuthorizationRequestTimeoutFiringEvent {
  export interface Data {
    /**
     * The alert ID.
     */
    alert_id: string;

    /**
     * The grouping key for the alert.
     */
    grouping_key: string;

    /**
     * The user impact.
     */
    impact: Data.Impact;

    /**
     * The time when impact on the user experience was first detected.
     */
    started_at: string;

    /**
     * A short description of the alert.
     */
    summary: string;
  }

  export namespace Data {
    export interface Impact {
      /**
       * Estimated aggregated amount for the approved requests.
       */
      approved_amount?: V2Amount;

      /**
       * The number of approved requests which are impacted.
       */
      approved_impacted_requests?: number;

      /**
       * Estimated aggregated amount for the declined requests.
       */
      declined_amount?: V2Amount;

      /**
       * The number of declined requests which are impacted.
       */
      declined_impacted_requests?: number;
    }
  }
}

/**
 * Occurs when an issuing authorization request timeout alert is resolved.
 */
export interface V2CoreHealthIssuingAuthorizationRequestTimeoutResolvedEvent
  extends EventBase {
  type: 'v2.core.health.issuing_authorization_request_timeout.resolved';
  // Retrieves data specific to this event.
  data: V2CoreHealthIssuingAuthorizationRequestTimeoutResolvedEvent.Data;
}
export interface V2CoreHealthIssuingAuthorizationRequestTimeoutResolvedEventNotification
  extends EventNotificationBase {
  type: 'v2.core.health.issuing_authorization_request_timeout.resolved';
  fetchEvent(): Promise<
    V2CoreHealthIssuingAuthorizationRequestTimeoutResolvedEvent
  >;
}

export namespace V2CoreHealthIssuingAuthorizationRequestTimeoutResolvedEvent {
  export interface Data {
    /**
     * The alert ID.
     */
    alert_id: string;

    /**
     * The grouping key for the alert.
     */
    grouping_key: string;

    /**
     * The user impact.
     */
    impact: Data.Impact;

    /**
     * The time when the user experience has returned to expected levels.
     */
    resolved_at: string;

    /**
     * The time when impact on the user experience was first detected.
     */
    started_at: string;

    /**
     * A short description of the alert.
     */
    summary: string;
  }

  export namespace Data {
    export interface Impact {
      /**
       * Estimated aggregated amount for the approved requests.
       */
      approved_amount?: V2Amount;

      /**
       * The number of approved requests which are impacted.
       */
      approved_impacted_requests?: number;

      /**
       * Estimated aggregated amount for the declined requests.
       */
      declined_amount?: V2Amount;

      /**
       * The number of declined requests which are impacted.
       */
      declined_impacted_requests?: number;
    }
  }
}

/**
 * Occurs when a meter event summaries delayed alert is firing.
 */
export interface V2CoreHealthMeterEventSummariesDelayedFiringEvent
  extends EventBase {
  type: 'v2.core.health.meter_event_summaries_delayed.firing';
  // Retrieves data specific to this event.
  data: V2CoreHealthMeterEventSummariesDelayedFiringEvent.Data;
}
export interface V2CoreHealthMeterEventSummariesDelayedFiringEventNotification
  extends EventNotificationBase {
  type: 'v2.core.health.meter_event_summaries_delayed.firing';
  fetchEvent(): Promise<V2CoreHealthMeterEventSummariesDelayedFiringEvent>;
}

export namespace V2CoreHealthMeterEventSummariesDelayedFiringEvent {
  export interface Data {
    /**
     * The alert ID.
     */
    alert_id: string;

    /**
     * The grouping key for the alert.
     */
    grouping_key: string;

    /**
     * The user impact.
     */
    impact: Data.Impact;

    /**
     * The time when impact on the user experience was first detected.
     */
    started_at: string;

    /**
     * A short description of the alert.
     */
    summary: string;
  }

  export namespace Data {
    export interface Impact {
      /**
       * The ingestion method.
       */
      ingestion_method?: 'import_sets';
    }
  }
}

/**
 * Occurs when a meter event summaries delayed alert is resolved.
 */
export interface V2CoreHealthMeterEventSummariesDelayedResolvedEvent
  extends EventBase {
  type: 'v2.core.health.meter_event_summaries_delayed.resolved';
  // Retrieves data specific to this event.
  data: V2CoreHealthMeterEventSummariesDelayedResolvedEvent.Data;
}
export interface V2CoreHealthMeterEventSummariesDelayedResolvedEventNotification
  extends EventNotificationBase {
  type: 'v2.core.health.meter_event_summaries_delayed.resolved';
  fetchEvent(): Promise<V2CoreHealthMeterEventSummariesDelayedResolvedEvent>;
}

export namespace V2CoreHealthMeterEventSummariesDelayedResolvedEvent {
  export interface Data {
    /**
     * The alert ID.
     */
    alert_id: string;

    /**
     * The grouping key for the alert.
     */
    grouping_key: string;

    /**
     * The user impact.
     */
    impact: Data.Impact;

    /**
     * The time when the user experience has returned to expected levels.
     */
    resolved_at: string;

    /**
     * The time when impact on the user experience was first detected.
     */
    started_at: string;

    /**
     * A short description of the alert.
     */
    summary: string;
  }

  export namespace Data {
    export interface Impact {
      /**
       * The ingestion method.
       */
      ingestion_method?: 'import_sets';
    }
  }
}

/**
 * Occurs when a payment method error alert is firing.
 */
export interface V2CoreHealthPaymentMethodErrorFiringEvent extends EventBase {
  type: 'v2.core.health.payment_method_error.firing';
  // Retrieves data specific to this event.
  data: V2CoreHealthPaymentMethodErrorFiringEvent.Data;
}
export interface V2CoreHealthPaymentMethodErrorFiringEventNotification
  extends EventNotificationBase {
  type: 'v2.core.health.payment_method_error.firing';
  fetchEvent(): Promise<V2CoreHealthPaymentMethodErrorFiringEvent>;
}

export namespace V2CoreHealthPaymentMethodErrorFiringEvent {
  export interface Data {
    /**
     * The alert ID.
     */
    alert_id: string;

    /**
     * The grouping key for the alert.
     */
    grouping_key: string;

    /**
     * The user impact.
     */
    impact: Data.Impact;

    /**
     * The time when impact on the user experience was first detected.
     */
    started_at: string;

    /**
     * A short description of the alert.
     */
    summary: string;
  }

  export namespace Data {
    export interface Impact {
      /**
       * The returned error code.
       */
      error_code?: string;

      /**
       * The number of impacted requests.
       */
      impacted_requests: number;

      /**
       * The percentage of impacted requests.
       */
      impacted_requests_percentage?: Decimal;

      /**
       * The type of the payment method.
       */
      payment_method_type: Impact.PaymentMethodType;

      /**
       * The top impacted connected accounts (only for platforms).
       */
      top_impacted_accounts?: Array<Impact.TopImpactedAccount>;
    }

    export namespace Impact {
      export type PaymentMethodType =
        | 'acss_debit'
        | 'affirm'
        | 'afterpay_clearpay'
        | 'alipay'
        | 'alma'
        | 'amazon_pay'
        | 'apple_pay'
        | 'au_becs_debit'
        | 'bacs_debit'
        | 'bancontact'
        | 'billie'
        | 'blik'
        | 'boleto'
        | 'card'
        | 'card_present'
        | 'cartes_bancaires'
        | 'cashapp'
        | 'crypto'
        | 'dummy_passthrough_card'
        | 'eps'
        | 'fpx'
        | 'giropay'
        | 'grabpay'
        | 'ideal'
        | 'interac_present'
        | 'kakao_pay'
        | 'klarna'
        | 'konbini'
        | 'kriya'
        | 'kr_card'
        | 'link'
        | 'mb_way'
        | 'mobilepay'
        | 'mondu'
        | 'multibanco'
        | 'naver_pay'
        | 'ng_bank'
        | 'ng_bank_transfer'
        | 'ng_card'
        | 'ng_market'
        | 'ng_ussd'
        | 'ng_wallet'
        | 'oxxo'
        | 'p24'
        | 'paper_check'
        | 'payco'
        | 'paynow'
        | 'paypal'
        | 'paypay'
        | 'payto'
        | 'pay_by_bank'
        | 'pix'
        | 'promptpay'
        | 'rechnung'
        | 'revolut_pay'
        | 'samsung_pay'
        | 'satispay'
        | 'scalapay'
        | 'sepa_debit'
        | 'sequra'
        | 'sofort'
        | 'sunbit'
        | 'swish'
        | 'twint'
        | 'upi'
        | 'us_bank_account'
        | 'vipps'
        | 'wechat_pay'
        | 'zip';

      export interface TopImpactedAccount {
        /**
         * The account ID of the impacted connected account.
         */
        account: string;

        /**
         * The number of impacted requests.
         */
        impacted_requests: number;

        /**
         * The percentage of impacted requests.
         */
        impacted_requests_percentage?: Decimal;
      }
    }
  }
}

/**
 * Occurs when a payment method error alert is resolved.
 */
export interface V2CoreHealthPaymentMethodErrorResolvedEvent extends EventBase {
  type: 'v2.core.health.payment_method_error.resolved';
  // Retrieves data specific to this event.
  data: V2CoreHealthPaymentMethodErrorResolvedEvent.Data;
}
export interface V2CoreHealthPaymentMethodErrorResolvedEventNotification
  extends EventNotificationBase {
  type: 'v2.core.health.payment_method_error.resolved';
  fetchEvent(): Promise<V2CoreHealthPaymentMethodErrorResolvedEvent>;
}

export namespace V2CoreHealthPaymentMethodErrorResolvedEvent {
  export interface Data {
    /**
     * The alert ID.
     */
    alert_id: string;

    /**
     * The grouping key for the alert.
     */
    grouping_key: string;

    /**
     * The user impact.
     */
    impact: Data.Impact;

    /**
     * The time when the user experience has returned to expected levels.
     */
    resolved_at: string;

    /**
     * The time when impact on the user experience was first detected.
     */
    started_at: string;

    /**
     * A short description of the alert.
     */
    summary: string;
  }

  export namespace Data {
    export interface Impact {
      /**
       * The returned error code.
       */
      error_code?: string;

      /**
       * The number of impacted requests.
       */
      impacted_requests: number;

      /**
       * The percentage of impacted requests.
       */
      impacted_requests_percentage?: Decimal;

      /**
       * The type of the payment method.
       */
      payment_method_type: Impact.PaymentMethodType;

      /**
       * The top impacted connected accounts (only for platforms).
       */
      top_impacted_accounts?: Array<Impact.TopImpactedAccount>;
    }

    export namespace Impact {
      export type PaymentMethodType =
        | 'acss_debit'
        | 'affirm'
        | 'afterpay_clearpay'
        | 'alipay'
        | 'alma'
        | 'amazon_pay'
        | 'apple_pay'
        | 'au_becs_debit'
        | 'bacs_debit'
        | 'bancontact'
        | 'billie'
        | 'blik'
        | 'boleto'
        | 'card'
        | 'card_present'
        | 'cartes_bancaires'
        | 'cashapp'
        | 'crypto'
        | 'dummy_passthrough_card'
        | 'eps'
        | 'fpx'
        | 'giropay'
        | 'grabpay'
        | 'ideal'
        | 'interac_present'
        | 'kakao_pay'
        | 'klarna'
        | 'konbini'
        | 'kriya'
        | 'kr_card'
        | 'link'
        | 'mb_way'
        | 'mobilepay'
        | 'mondu'
        | 'multibanco'
        | 'naver_pay'
        | 'ng_bank'
        | 'ng_bank_transfer'
        | 'ng_card'
        | 'ng_market'
        | 'ng_ussd'
        | 'ng_wallet'
        | 'oxxo'
        | 'p24'
        | 'paper_check'
        | 'payco'
        | 'paynow'
        | 'paypal'
        | 'paypay'
        | 'payto'
        | 'pay_by_bank'
        | 'pix'
        | 'promptpay'
        | 'rechnung'
        | 'revolut_pay'
        | 'samsung_pay'
        | 'satispay'
        | 'scalapay'
        | 'sepa_debit'
        | 'sequra'
        | 'sofort'
        | 'sunbit'
        | 'swish'
        | 'twint'
        | 'upi'
        | 'us_bank_account'
        | 'vipps'
        | 'wechat_pay'
        | 'zip';

      export interface TopImpactedAccount {
        /**
         * The account ID of the impacted connected account.
         */
        account: string;

        /**
         * The number of impacted requests.
         */
        impacted_requests: number;

        /**
         * The percentage of impacted requests.
         */
        impacted_requests_percentage?: Decimal;
      }
    }
  }
}

/**
 * Occurs when a SEPA debit delayed alert is firing.
 */
export interface V2CoreHealthSepaDebitDelayedFiringEvent extends EventBase {
  type: 'v2.core.health.sepa_debit_delayed.firing';
  // Retrieves data specific to this event.
  data: V2CoreHealthSepaDebitDelayedFiringEvent.Data;
}
export interface V2CoreHealthSepaDebitDelayedFiringEventNotification
  extends EventNotificationBase {
  type: 'v2.core.health.sepa_debit_delayed.firing';
  fetchEvent(): Promise<V2CoreHealthSepaDebitDelayedFiringEvent>;
}

export namespace V2CoreHealthSepaDebitDelayedFiringEvent {
  export interface Data {
    /**
     * The alert ID.
     */
    alert_id: string;

    /**
     * The grouping key for the alert.
     */
    grouping_key: string;

    /**
     * The user impact.
     */
    impact: Data.Impact;

    /**
     * The time when impact on the user experience was first detected.
     */
    started_at: string;

    /**
     * A short description of the alert.
     */
    summary: string;
  }

  export namespace Data {
    export interface Impact {
      /**
       * The number of impacted payments.
       */
      impacted_payments: number;

      /**
       * The percentage of impacted payments.
       */
      impacted_payments_percentage: Decimal;
    }
  }
}

/**
 * Occurs when a SEPA debit delayed alert is resolved.
 */
export interface V2CoreHealthSepaDebitDelayedResolvedEvent extends EventBase {
  type: 'v2.core.health.sepa_debit_delayed.resolved';
  // Retrieves data specific to this event.
  data: V2CoreHealthSepaDebitDelayedResolvedEvent.Data;
}
export interface V2CoreHealthSepaDebitDelayedResolvedEventNotification
  extends EventNotificationBase {
  type: 'v2.core.health.sepa_debit_delayed.resolved';
  fetchEvent(): Promise<V2CoreHealthSepaDebitDelayedResolvedEvent>;
}

export namespace V2CoreHealthSepaDebitDelayedResolvedEvent {
  export interface Data {
    /**
     * The alert ID.
     */
    alert_id: string;

    /**
     * The grouping key for the alert.
     */
    grouping_key: string;

    /**
     * The user impact.
     */
    impact: Data.Impact;

    /**
     * The time when the user experience has returned to expected levels.
     */
    resolved_at: string;

    /**
     * The time when impact on the user experience was first detected.
     */
    started_at: string;

    /**
     * A short description of the alert.
     */
    summary: string;
  }

  export namespace Data {
    export interface Impact {
      /**
       * The number of impacted payments.
       */
      impacted_payments: number;

      /**
       * The percentage of impacted payments.
       */
      impacted_payments_percentage: Decimal;
    }
  }
}

/**
 * Occurs when a traffic volume drop alert is firing.
 */
export interface V2CoreHealthTrafficVolumeDropFiringEvent extends EventBase {
  type: 'v2.core.health.traffic_volume_drop.firing';
  // Retrieves data specific to this event.
  data: V2CoreHealthTrafficVolumeDropFiringEvent.Data;
}
export interface V2CoreHealthTrafficVolumeDropFiringEventNotification
  extends EventNotificationBase {
  type: 'v2.core.health.traffic_volume_drop.firing';
  fetchEvent(): Promise<V2CoreHealthTrafficVolumeDropFiringEvent>;
}

export namespace V2CoreHealthTrafficVolumeDropFiringEvent {
  export interface Data {
    /**
     * The alert ID.
     */
    alert_id: string;

    /**
     * The grouping key for the alert.
     */
    grouping_key: string;

    /**
     * The user impact.
     */
    impact: Data.Impact;

    /**
     * The time when impact on the user experience was first detected.
     */
    started_at: string;

    /**
     * A short description of the alert.
     */
    summary: string;
  }

  export namespace Data {
    export interface Impact {
      /**
       * The total volume of payment requests within the latest observation time window.
       */
      actual_traffic: number;

      /**
       * The expected volume of payment requests within the latest observation time window.
       */
      expected_traffic?: number;

      /**
       * The size of the observation time window.
       */
      time_window: string;
    }
  }
}

/**
 * Occurs when a traffic volume drop alert is resolved.
 */
export interface V2CoreHealthTrafficVolumeDropResolvedEvent extends EventBase {
  type: 'v2.core.health.traffic_volume_drop.resolved';
  // Retrieves data specific to this event.
  data: V2CoreHealthTrafficVolumeDropResolvedEvent.Data;
}
export interface V2CoreHealthTrafficVolumeDropResolvedEventNotification
  extends EventNotificationBase {
  type: 'v2.core.health.traffic_volume_drop.resolved';
  fetchEvent(): Promise<V2CoreHealthTrafficVolumeDropResolvedEvent>;
}

export namespace V2CoreHealthTrafficVolumeDropResolvedEvent {
  export interface Data {
    /**
     * The alert ID.
     */
    alert_id: string;

    /**
     * The grouping key for the alert.
     */
    grouping_key: string;

    /**
     * The user impact.
     */
    impact: Data.Impact;

    /**
     * The time when the user experience has returned to expected levels.
     */
    resolved_at: string;

    /**
     * The time when impact on the user experience was first detected.
     */
    started_at: string;

    /**
     * A short description of the alert.
     */
    summary: string;
  }

  export namespace Data {
    export interface Impact {
      /**
       * The total volume of payment requests within the latest observation time window.
       */
      actual_traffic: number;

      /**
       * The expected volume of payment requests within the latest observation time window.
       */
      expected_traffic?: number;

      /**
       * The size of the observation time window.
       */
      time_window: string;
    }
  }
}

/**
 * Occurs when a webhook latency alert is firing.
 */
export interface V2CoreHealthWebhookLatencyFiringEvent extends EventBase {
  type: 'v2.core.health.webhook_latency.firing';
  // Retrieves data specific to this event.
  data: V2CoreHealthWebhookLatencyFiringEvent.Data;
}
export interface V2CoreHealthWebhookLatencyFiringEventNotification
  extends EventNotificationBase {
  type: 'v2.core.health.webhook_latency.firing';
  fetchEvent(): Promise<V2CoreHealthWebhookLatencyFiringEvent>;
}

export namespace V2CoreHealthWebhookLatencyFiringEvent {
  export interface Data {
    /**
     * The alert ID.
     */
    alert_id: string;

    /**
     * The grouping key for the alert.
     */
    grouping_key: string;

    /**
     * The user impact.
     */
    impact: Data.Impact;

    /**
     * The time when impact on the user experience was first detected.
     */
    started_at: string;

    /**
     * A short description of the alert.
     */
    summary: string;
  }

  export namespace Data {
    export interface Impact {
      /**
       * The number of impacted requests.
       */
      impacted_requests: number;
    }
  }
}

/**
 * Occurs when a webhook latency alert is resolved.
 */
export interface V2CoreHealthWebhookLatencyResolvedEvent extends EventBase {
  type: 'v2.core.health.webhook_latency.resolved';
  // Retrieves data specific to this event.
  data: V2CoreHealthWebhookLatencyResolvedEvent.Data;
}
export interface V2CoreHealthWebhookLatencyResolvedEventNotification
  extends EventNotificationBase {
  type: 'v2.core.health.webhook_latency.resolved';
  fetchEvent(): Promise<V2CoreHealthWebhookLatencyResolvedEvent>;
}

export namespace V2CoreHealthWebhookLatencyResolvedEvent {
  export interface Data {
    /**
     * The alert ID.
     */
    alert_id: string;

    /**
     * The grouping key for the alert.
     */
    grouping_key: string;

    /**
     * The user impact.
     */
    impact: Data.Impact;

    /**
     * The time when the user experience has returned to expected levels.
     */
    resolved_at: string;

    /**
     * The time when impact on the user experience was first detected.
     */
    started_at: string;

    /**
     * A short description of the alert.
     */
    summary: string;
  }

  export namespace Data {
    export interface Impact {
      /**
       * The number of impacted requests.
       */
      impacted_requests: number;
    }
  }
}

/**
 * Occurs when a QueryRun is created.
 */
export interface V2DataReportingQueryRunCreatedEvent extends EventBase {
  type: 'v2.data.reporting.query_run.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Data.Reporting.QueryRun>;
}
export interface V2DataReportingQueryRunCreatedEventNotification
  extends EventNotificationBase {
  type: 'v2.data.reporting.query_run.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Data.Reporting.QueryRun>;
  fetchEvent(): Promise<V2DataReportingQueryRunCreatedEvent>;
}

/**
 * Occurs when a QueryRun has failed to complete.
 */
export interface V2DataReportingQueryRunFailedEvent extends EventBase {
  type: 'v2.data.reporting.query_run.failed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Data.Reporting.QueryRun>;
}
export interface V2DataReportingQueryRunFailedEventNotification
  extends EventNotificationBase {
  type: 'v2.data.reporting.query_run.failed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Data.Reporting.QueryRun>;
  fetchEvent(): Promise<V2DataReportingQueryRunFailedEvent>;
}

/**
 * Occurs when a QueryRun has successfully completed.
 */
export interface V2DataReportingQueryRunSucceededEvent extends EventBase {
  type: 'v2.data.reporting.query_run.succeeded';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Data.Reporting.QueryRun>;
}
export interface V2DataReportingQueryRunSucceededEventNotification
  extends EventNotificationBase {
  type: 'v2.data.reporting.query_run.succeeded';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Data.Reporting.QueryRun>;
  fetchEvent(): Promise<V2DataReportingQueryRunSucceededEvent>;
}

/**
 * Occurs when a QueryRun is updated.
 */
export interface V2DataReportingQueryRunUpdatedEvent extends EventBase {
  type: 'v2.data.reporting.query_run.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Data.Reporting.QueryRun>;
}
export interface V2DataReportingQueryRunUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v2.data.reporting.query_run.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Data.Reporting.QueryRun>;
  fetchEvent(): Promise<V2DataReportingQueryRunUpdatedEvent>;
}

/**
 * Occurs when a Workflow Run fails.
 */
export interface V2ExtendWorkflowRunFailedEvent extends EventBase {
  type: 'v2.extend.workflow_run.failed';
  // Retrieves data specific to this event.
  data: V2ExtendWorkflowRunFailedEvent.Data;
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Extend.WorkflowRun>;
}
export interface V2ExtendWorkflowRunFailedEventNotification
  extends EventNotificationBase {
  type: 'v2.extend.workflow_run.failed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Extend.WorkflowRun>;
  fetchEvent(): Promise<V2ExtendWorkflowRunFailedEvent>;
}

export namespace V2ExtendWorkflowRunFailedEvent {
  export interface Data {
    /**
     * A Stripe dashboard URL with more information about the Workflow Run failure.
     */
    dashboard_url: string;

    /**
     * Details about the Workflow Run's transition into the FAILED state.
     */
    failure_details: Data.FailureDetails;
  }

  export namespace Data {
    export interface FailureDetails {
      /**
       * Optional details about the failure result.
       */
      error_message?: string;
    }
  }
}

/**
 * Occurs when a Workflow Run starts.
 */
export interface V2ExtendWorkflowRunStartedEvent extends EventBase {
  type: 'v2.extend.workflow_run.started';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Extend.WorkflowRun>;
}
export interface V2ExtendWorkflowRunStartedEventNotification
  extends EventNotificationBase {
  type: 'v2.extend.workflow_run.started';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Extend.WorkflowRun>;
  fetchEvent(): Promise<V2ExtendWorkflowRunStartedEvent>;
}

/**
 * Occurs when a Workflow Run succeeds.
 */
export interface V2ExtendWorkflowRunSucceededEvent extends EventBase {
  type: 'v2.extend.workflow_run.succeeded';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Extend.WorkflowRun>;
}
export interface V2ExtendWorkflowRunSucceededEventNotification
  extends EventNotificationBase {
  type: 'v2.extend.workflow_run.succeeded';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Extend.WorkflowRun>;
  fetchEvent(): Promise<V2ExtendWorkflowRunSucceededEvent>;
}

/**
 * Occurs when an API Key is created.
 */
export interface V2IamApiKeyCreatedEvent extends EventBase {
  type: 'v2.iam.api_key.created';
  // Retrieves data specific to this event.
  data: V2IamApiKeyCreatedEvent.Data;
}
export interface V2IamApiKeyCreatedEventNotification
  extends EventNotificationBase {
  type: 'v2.iam.api_key.created';
  fetchEvent(): Promise<V2IamApiKeyCreatedEvent>;
}

export namespace V2IamApiKeyCreatedEvent {
  export interface Data {
    /**
     * ID of the created key.
     */
    api_key: string;
  }
}

/**
 * Occurs when the default API Key's secret is revealed.
 */
export interface V2IamApiKeyDefaultSecretRevealedEvent extends EventBase {
  type: 'v2.iam.api_key.default_secret_revealed';
  // Retrieves data specific to this event.
  data: V2IamApiKeyDefaultSecretRevealedEvent.Data;
}
export interface V2IamApiKeyDefaultSecretRevealedEventNotification
  extends EventNotificationBase {
  type: 'v2.iam.api_key.default_secret_revealed';
  fetchEvent(): Promise<V2IamApiKeyDefaultSecretRevealedEvent>;
}

export namespace V2IamApiKeyDefaultSecretRevealedEvent {
  export interface Data {
    /**
     * ID of the default key whose secret was revealed.
     */
    api_key: string;
  }
}

/**
 * Occurs when an API Key is expired.
 */
export interface V2IamApiKeyExpiredEvent extends EventBase {
  type: 'v2.iam.api_key.expired';
  // Retrieves data specific to this event.
  data: V2IamApiKeyExpiredEvent.Data;
}
export interface V2IamApiKeyExpiredEventNotification
  extends EventNotificationBase {
  type: 'v2.iam.api_key.expired';
  fetchEvent(): Promise<V2IamApiKeyExpiredEvent>;
}

export namespace V2IamApiKeyExpiredEvent {
  export interface Data {
    /**
     * ID of the expired key.
     */
    api_key: string;
  }
}

/**
 * Occurs when an API Key's permissions are updated.
 */
export interface V2IamApiKeyPermissionsUpdatedEvent extends EventBase {
  type: 'v2.iam.api_key.permissions_updated';
  // Retrieves data specific to this event.
  data: V2IamApiKeyPermissionsUpdatedEvent.Data;
}
export interface V2IamApiKeyPermissionsUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v2.iam.api_key.permissions_updated';
  fetchEvent(): Promise<V2IamApiKeyPermissionsUpdatedEvent>;
}

export namespace V2IamApiKeyPermissionsUpdatedEvent {
  export interface Data {
    /**
     * ID of the key whose permissions were updated.
     */
    api_key: string;
  }
}

/**
 * Occurs when an API Key is rotated.
 */
export interface V2IamApiKeyRotatedEvent extends EventBase {
  type: 'v2.iam.api_key.rotated';
  // Retrieves data specific to this event.
  data: V2IamApiKeyRotatedEvent.Data;
}
export interface V2IamApiKeyRotatedEventNotification
  extends EventNotificationBase {
  type: 'v2.iam.api_key.rotated';
  fetchEvent(): Promise<V2IamApiKeyRotatedEvent>;
}

export namespace V2IamApiKeyRotatedEvent {
  export interface Data {
    /**
     * ID of the old key that was rotated.
     */
    api_key: string;

    /**
     * ID of the new key that was created due to rotation.
     */
    new_api_key: string;
  }
}

/**
 * Occurs when an API Key is updated.
 */
export interface V2IamApiKeyUpdatedEvent extends EventBase {
  type: 'v2.iam.api_key.updated';
  // Retrieves data specific to this event.
  data: V2IamApiKeyUpdatedEvent.Data;
}
export interface V2IamApiKeyUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v2.iam.api_key.updated';
  fetchEvent(): Promise<V2IamApiKeyUpdatedEvent>;
}

export namespace V2IamApiKeyUpdatedEvent {
  export interface Data {
    /**
     * ID of the updated key.
     */
    api_key: string;
  }
}

/**
 * Occurs when a Stripe Access Grant is approved.
 */
export interface V2IamStripeAccessGrantApprovedEvent extends EventBase {
  type: 'v2.iam.stripe_access_grant.approved';
  // Retrieves data specific to this event.
  data: V2IamStripeAccessGrantApprovedEvent.Data;
}
export interface V2IamStripeAccessGrantApprovedEventNotification
  extends EventNotificationBase {
  type: 'v2.iam.stripe_access_grant.approved';
  fetchEvent(): Promise<V2IamStripeAccessGrantApprovedEvent>;
}

export namespace V2IamStripeAccessGrantApprovedEvent {
  export interface Data {
    /**
     * ID of approved Stripe Access Grant.
     */
    stripe_access_grant: string;
  }
}

/**
 * Occurs when a Stripe Access Grant is canceled by the requesting Stripe.
 */
export interface V2IamStripeAccessGrantCanceledEvent extends EventBase {
  type: 'v2.iam.stripe_access_grant.canceled';
  // Retrieves data specific to this event.
  data: V2IamStripeAccessGrantCanceledEvent.Data;
}
export interface V2IamStripeAccessGrantCanceledEventNotification
  extends EventNotificationBase {
  type: 'v2.iam.stripe_access_grant.canceled';
  fetchEvent(): Promise<V2IamStripeAccessGrantCanceledEvent>;
}

export namespace V2IamStripeAccessGrantCanceledEvent {
  export interface Data {
    /**
     * ID of canceled Stripe Access Grant.
     */
    stripe_access_grant: string;
  }
}

/**
 * Occurs when a Stripe Access Grant is denied (was pending, then denied by the customer).
 */
export interface V2IamStripeAccessGrantDeniedEvent extends EventBase {
  type: 'v2.iam.stripe_access_grant.denied';
  // Retrieves data specific to this event.
  data: V2IamStripeAccessGrantDeniedEvent.Data;
}
export interface V2IamStripeAccessGrantDeniedEventNotification
  extends EventNotificationBase {
  type: 'v2.iam.stripe_access_grant.denied';
  fetchEvent(): Promise<V2IamStripeAccessGrantDeniedEvent>;
}

export namespace V2IamStripeAccessGrantDeniedEvent {
  export interface Data {
    /**
     * ID of denied Stripe Access Grant.
     */
    stripe_access_grant: string;
  }
}

/**
 * Occurs when a Stripe Access Grant is removed (was approved, and then removed by the customer).
 */
export interface V2IamStripeAccessGrantRemovedEvent extends EventBase {
  type: 'v2.iam.stripe_access_grant.removed';
  // Retrieves data specific to this event.
  data: V2IamStripeAccessGrantRemovedEvent.Data;
}
export interface V2IamStripeAccessGrantRemovedEventNotification
  extends EventNotificationBase {
  type: 'v2.iam.stripe_access_grant.removed';
  fetchEvent(): Promise<V2IamStripeAccessGrantRemovedEvent>;
}

export namespace V2IamStripeAccessGrantRemovedEvent {
  export interface Data {
    /**
     * ID of removed Stripe Access Grant.
     */
    stripe_access_grant: string;
  }
}

/**
 * Occurs when a Stripe Access Grant is requested.
 */
export interface V2IamStripeAccessGrantRequestedEvent extends EventBase {
  type: 'v2.iam.stripe_access_grant.requested';
  // Retrieves data specific to this event.
  data: V2IamStripeAccessGrantRequestedEvent.Data;
}
export interface V2IamStripeAccessGrantRequestedEventNotification
  extends EventNotificationBase {
  type: 'v2.iam.stripe_access_grant.requested';
  fetchEvent(): Promise<V2IamStripeAccessGrantRequestedEvent>;
}

export namespace V2IamStripeAccessGrantRequestedEvent {
  export interface Data {
    /**
     * ID of requested Stripe Access Grant.
     */
    stripe_access_grant: string;
  }
}

/**
 * Occurs when a Stripe Access Grant is updated.
 */
export interface V2IamStripeAccessGrantUpdatedEvent extends EventBase {
  type: 'v2.iam.stripe_access_grant.updated';
  // Retrieves data specific to this event.
  data: V2IamStripeAccessGrantUpdatedEvent.Data;
}
export interface V2IamStripeAccessGrantUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v2.iam.stripe_access_grant.updated';
  fetchEvent(): Promise<V2IamStripeAccessGrantUpdatedEvent>;
}

export namespace V2IamStripeAccessGrantUpdatedEvent {
  export interface Data {
    /**
     * ID of updated Stripe Access Grant.
     */
    stripe_access_grant: string;
  }
}

/**
 * Occurs when an Adjustment is created.
 */
export interface V2MoneyManagementAdjustmentCreatedEvent extends EventBase {
  type: 'v2.money_management.adjustment.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.Adjustment>;
}
export interface V2MoneyManagementAdjustmentCreatedEventNotification
  extends EventNotificationBase {
  type: 'v2.money_management.adjustment.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.Adjustment>;
  fetchEvent(): Promise<V2MoneyManagementAdjustmentCreatedEvent>;
}

/**
 * Occurs when a FinancialAccount is created.
 */
export interface V2MoneyManagementFinancialAccountCreatedEvent
  extends EventBase {
  type: 'v2.money_management.financial_account.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.FinancialAccount>;
}
export interface V2MoneyManagementFinancialAccountCreatedEventNotification
  extends EventNotificationBase {
  type: 'v2.money_management.financial_account.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.FinancialAccount>;
  fetchEvent(): Promise<V2MoneyManagementFinancialAccountCreatedEvent>;
}

/**
 * Occurs when a FinancialAccount is updated.
 */
export interface V2MoneyManagementFinancialAccountUpdatedEvent
  extends EventBase {
  type: 'v2.money_management.financial_account.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.FinancialAccount>;
}
export interface V2MoneyManagementFinancialAccountUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v2.money_management.financial_account.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.FinancialAccount>;
  fetchEvent(): Promise<V2MoneyManagementFinancialAccountUpdatedEvent>;
}

/**
 * Occurs when a FinancialAddress is activated and is ready to receive funds.
 */
export interface V2MoneyManagementFinancialAddressActivatedEvent
  extends EventBase {
  type: 'v2.money_management.financial_address.activated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.FinancialAddress>;
}
export interface V2MoneyManagementFinancialAddressActivatedEventNotification
  extends EventNotificationBase {
  type: 'v2.money_management.financial_address.activated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.FinancialAddress>;
  fetchEvent(): Promise<V2MoneyManagementFinancialAddressActivatedEvent>;
}

/**
 * Occurs when a FinancialAddress fails to activate and can not receive funds.
 */
export interface V2MoneyManagementFinancialAddressFailedEvent
  extends EventBase {
  type: 'v2.money_management.financial_address.failed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.FinancialAddress>;
}
export interface V2MoneyManagementFinancialAddressFailedEventNotification
  extends EventNotificationBase {
  type: 'v2.money_management.financial_address.failed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.FinancialAddress>;
  fetchEvent(): Promise<V2MoneyManagementFinancialAddressFailedEvent>;
}

/**
 * Occurs when an InboundTransfer's funds are made available.
 */
export interface V2MoneyManagementInboundTransferAvailableEvent
  extends EventBase {
  type: 'v2.money_management.inbound_transfer.available';
  // Retrieves data specific to this event.
  data: V2MoneyManagementInboundTransferAvailableEvent.Data;
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.InboundTransfer>;
}
export interface V2MoneyManagementInboundTransferAvailableEventNotification
  extends EventNotificationBase {
  type: 'v2.money_management.inbound_transfer.available';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.InboundTransfer>;
  fetchEvent(): Promise<V2MoneyManagementInboundTransferAvailableEvent>;
}

export namespace V2MoneyManagementInboundTransferAvailableEvent {
  export interface Data {
    /**
     * The transaction ID of the received credit.
     */
    transaction_id: string;
  }
}

/**
 * Occurs when an InboundTransfer fails.
 */
export interface V2MoneyManagementInboundTransferBankDebitFailedEvent
  extends EventBase {
  type: 'v2.money_management.inbound_transfer.bank_debit_failed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.InboundTransfer>;
}
export interface V2MoneyManagementInboundTransferBankDebitFailedEventNotification
  extends EventNotificationBase {
  type: 'v2.money_management.inbound_transfer.bank_debit_failed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.InboundTransfer>;
  fetchEvent(): Promise<V2MoneyManagementInboundTransferBankDebitFailedEvent>;
}

/**
 * Occurs when an InboundTransfer starts processing.
 */
export interface V2MoneyManagementInboundTransferBankDebitProcessingEvent
  extends EventBase {
  type: 'v2.money_management.inbound_transfer.bank_debit_processing';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.InboundTransfer>;
}
export interface V2MoneyManagementInboundTransferBankDebitProcessingEventNotification
  extends EventNotificationBase {
  type: 'v2.money_management.inbound_transfer.bank_debit_processing';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.InboundTransfer>;
  fetchEvent(): Promise<
    V2MoneyManagementInboundTransferBankDebitProcessingEvent
  >;
}

/**
 * Occurs when an InboundTransfer is queued.
 */
export interface V2MoneyManagementInboundTransferBankDebitQueuedEvent
  extends EventBase {
  type: 'v2.money_management.inbound_transfer.bank_debit_queued';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.InboundTransfer>;
}
export interface V2MoneyManagementInboundTransferBankDebitQueuedEventNotification
  extends EventNotificationBase {
  type: 'v2.money_management.inbound_transfer.bank_debit_queued';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.InboundTransfer>;
  fetchEvent(): Promise<V2MoneyManagementInboundTransferBankDebitQueuedEvent>;
}

/**
 * Occurs when an InboundTransfer is returned.
 */
export interface V2MoneyManagementInboundTransferBankDebitReturnedEvent
  extends EventBase {
  type: 'v2.money_management.inbound_transfer.bank_debit_returned';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.InboundTransfer>;
}
export interface V2MoneyManagementInboundTransferBankDebitReturnedEventNotification
  extends EventNotificationBase {
  type: 'v2.money_management.inbound_transfer.bank_debit_returned';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.InboundTransfer>;
  fetchEvent(): Promise<V2MoneyManagementInboundTransferBankDebitReturnedEvent>;
}

/**
 * Occurs when an InboundTransfer succeeds.
 */
export interface V2MoneyManagementInboundTransferBankDebitSucceededEvent
  extends EventBase {
  type: 'v2.money_management.inbound_transfer.bank_debit_succeeded';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.InboundTransfer>;
}
export interface V2MoneyManagementInboundTransferBankDebitSucceededEventNotification
  extends EventNotificationBase {
  type: 'v2.money_management.inbound_transfer.bank_debit_succeeded';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.InboundTransfer>;
  fetchEvent(): Promise<
    V2MoneyManagementInboundTransferBankDebitSucceededEvent
  >;
}

/**
 * Occurs when an OutboundPayment transitions into the canceled state.
 */
export interface V2MoneyManagementOutboundPaymentCanceledEvent
  extends EventBase {
  type: 'v2.money_management.outbound_payment.canceled';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.OutboundPayment>;
}
export interface V2MoneyManagementOutboundPaymentCanceledEventNotification
  extends EventNotificationBase {
  type: 'v2.money_management.outbound_payment.canceled';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.OutboundPayment>;
  fetchEvent(): Promise<V2MoneyManagementOutboundPaymentCanceledEvent>;
}

/**
 * Occurs when an OutboundPayment is created.
 */
export interface V2MoneyManagementOutboundPaymentCreatedEvent
  extends EventBase {
  type: 'v2.money_management.outbound_payment.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.OutboundPayment>;
}
export interface V2MoneyManagementOutboundPaymentCreatedEventNotification
  extends EventNotificationBase {
  type: 'v2.money_management.outbound_payment.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.OutboundPayment>;
  fetchEvent(): Promise<V2MoneyManagementOutboundPaymentCreatedEvent>;
}

/**
 * Occurs when an OutboundPayment transitions into the failed state.
 */
export interface V2MoneyManagementOutboundPaymentFailedEvent extends EventBase {
  type: 'v2.money_management.outbound_payment.failed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.OutboundPayment>;
}
export interface V2MoneyManagementOutboundPaymentFailedEventNotification
  extends EventNotificationBase {
  type: 'v2.money_management.outbound_payment.failed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.OutboundPayment>;
  fetchEvent(): Promise<V2MoneyManagementOutboundPaymentFailedEvent>;
}

/**
 * Occurs when an OutboundPayment transitions into the posted state.
 */
export interface V2MoneyManagementOutboundPaymentPostedEvent extends EventBase {
  type: 'v2.money_management.outbound_payment.posted';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.OutboundPayment>;
}
export interface V2MoneyManagementOutboundPaymentPostedEventNotification
  extends EventNotificationBase {
  type: 'v2.money_management.outbound_payment.posted';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.OutboundPayment>;
  fetchEvent(): Promise<V2MoneyManagementOutboundPaymentPostedEvent>;
}

/**
 * Occurs when an OutboundPayment transitions into the returned state.
 */
export interface V2MoneyManagementOutboundPaymentReturnedEvent
  extends EventBase {
  type: 'v2.money_management.outbound_payment.returned';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.OutboundPayment>;
}
export interface V2MoneyManagementOutboundPaymentReturnedEventNotification
  extends EventNotificationBase {
  type: 'v2.money_management.outbound_payment.returned';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.OutboundPayment>;
  fetchEvent(): Promise<V2MoneyManagementOutboundPaymentReturnedEvent>;
}

/**
 * Occurs when an OutboundPayment is updated.
 */
export interface V2MoneyManagementOutboundPaymentUpdatedEvent
  extends EventBase {
  type: 'v2.money_management.outbound_payment.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.OutboundPayment>;
}
export interface V2MoneyManagementOutboundPaymentUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v2.money_management.outbound_payment.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.OutboundPayment>;
  fetchEvent(): Promise<V2MoneyManagementOutboundPaymentUpdatedEvent>;
}

/**
 * Occurs when an OutboundTransfer transitions into the canceled state.
 */
export interface V2MoneyManagementOutboundTransferCanceledEvent
  extends EventBase {
  type: 'v2.money_management.outbound_transfer.canceled';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.OutboundTransfer>;
}
export interface V2MoneyManagementOutboundTransferCanceledEventNotification
  extends EventNotificationBase {
  type: 'v2.money_management.outbound_transfer.canceled';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.OutboundTransfer>;
  fetchEvent(): Promise<V2MoneyManagementOutboundTransferCanceledEvent>;
}

/**
 * Occurs when an OutboundTransfer is created.
 */
export interface V2MoneyManagementOutboundTransferCreatedEvent
  extends EventBase {
  type: 'v2.money_management.outbound_transfer.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.OutboundTransfer>;
}
export interface V2MoneyManagementOutboundTransferCreatedEventNotification
  extends EventNotificationBase {
  type: 'v2.money_management.outbound_transfer.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.OutboundTransfer>;
  fetchEvent(): Promise<V2MoneyManagementOutboundTransferCreatedEvent>;
}

/**
 * Occurs when an OutboundTransfer transitions into the failed state.
 */
export interface V2MoneyManagementOutboundTransferFailedEvent
  extends EventBase {
  type: 'v2.money_management.outbound_transfer.failed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.OutboundTransfer>;
}
export interface V2MoneyManagementOutboundTransferFailedEventNotification
  extends EventNotificationBase {
  type: 'v2.money_management.outbound_transfer.failed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.OutboundTransfer>;
  fetchEvent(): Promise<V2MoneyManagementOutboundTransferFailedEvent>;
}

/**
 * Occurs when an OutboundTransfer transitions into the posted state.
 */
export interface V2MoneyManagementOutboundTransferPostedEvent
  extends EventBase {
  type: 'v2.money_management.outbound_transfer.posted';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.OutboundTransfer>;
}
export interface V2MoneyManagementOutboundTransferPostedEventNotification
  extends EventNotificationBase {
  type: 'v2.money_management.outbound_transfer.posted';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.OutboundTransfer>;
  fetchEvent(): Promise<V2MoneyManagementOutboundTransferPostedEvent>;
}

/**
 * Occurs when an OutboundTransfer transitions into the returned state.
 */
export interface V2MoneyManagementOutboundTransferReturnedEvent
  extends EventBase {
  type: 'v2.money_management.outbound_transfer.returned';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.OutboundTransfer>;
}
export interface V2MoneyManagementOutboundTransferReturnedEventNotification
  extends EventNotificationBase {
  type: 'v2.money_management.outbound_transfer.returned';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.OutboundTransfer>;
  fetchEvent(): Promise<V2MoneyManagementOutboundTransferReturnedEvent>;
}

/**
 * Event that is emitted every time an Outbound Transfer is updated.
 */
export interface V2MoneyManagementOutboundTransferUpdatedEvent
  extends EventBase {
  type: 'v2.money_management.outbound_transfer.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.OutboundTransfer>;
}
export interface V2MoneyManagementOutboundTransferUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v2.money_management.outbound_transfer.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.OutboundTransfer>;
  fetchEvent(): Promise<V2MoneyManagementOutboundTransferUpdatedEvent>;
}

/**
 * Occurs when a PayoutMethod is created.
 */
export interface V2MoneyManagementPayoutMethodCreatedEvent extends EventBase {
  type: 'v2.money_management.payout_method.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.PayoutMethod>;
}
export interface V2MoneyManagementPayoutMethodCreatedEventNotification
  extends EventNotificationBase {
  type: 'v2.money_management.payout_method.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.PayoutMethod>;
  fetchEvent(): Promise<V2MoneyManagementPayoutMethodCreatedEvent>;
}

/**
 * Occurs when a PayoutMethod is updated.
 */
export interface V2MoneyManagementPayoutMethodUpdatedEvent extends EventBase {
  type: 'v2.money_management.payout_method.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.PayoutMethod>;
}
export interface V2MoneyManagementPayoutMethodUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v2.money_management.payout_method.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.PayoutMethod>;
  fetchEvent(): Promise<V2MoneyManagementPayoutMethodUpdatedEvent>;
}

/**
 * Occurs when a ReceivedCredit's funds are received and are available in your balance.
 */
export interface V2MoneyManagementReceivedCreditAvailableEvent
  extends EventBase {
  type: 'v2.money_management.received_credit.available';
  // Retrieves data specific to this event.
  data: V2MoneyManagementReceivedCreditAvailableEvent.Data;
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.ReceivedCredit>;
}
export interface V2MoneyManagementReceivedCreditAvailableEventNotification
  extends EventNotificationBase {
  type: 'v2.money_management.received_credit.available';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.ReceivedCredit>;
  fetchEvent(): Promise<V2MoneyManagementReceivedCreditAvailableEvent>;
}

export namespace V2MoneyManagementReceivedCreditAvailableEvent {
  export interface Data {
    /**
     * The transaction ID of the received credit.
     */
    transaction_id: string;
  }
}

/**
 * Occurs when a ReceivedCredit is attempted to your balance and fails. See the status_details for more information.
 */
export interface V2MoneyManagementReceivedCreditFailedEvent extends EventBase {
  type: 'v2.money_management.received_credit.failed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.ReceivedCredit>;
}
export interface V2MoneyManagementReceivedCreditFailedEventNotification
  extends EventNotificationBase {
  type: 'v2.money_management.received_credit.failed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.ReceivedCredit>;
  fetchEvent(): Promise<V2MoneyManagementReceivedCreditFailedEvent>;
}

/**
 * Occurs when a ReceivedCredit is reversed, returned to the originator, and deducted from your balance.
 */
export interface V2MoneyManagementReceivedCreditReturnedEvent
  extends EventBase {
  type: 'v2.money_management.received_credit.returned';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.ReceivedCredit>;
}
export interface V2MoneyManagementReceivedCreditReturnedEventNotification
  extends EventNotificationBase {
  type: 'v2.money_management.received_credit.returned';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.ReceivedCredit>;
  fetchEvent(): Promise<V2MoneyManagementReceivedCreditReturnedEvent>;
}

/**
 * Occurs when a ReceivedCredit succeeds.
 */
export interface V2MoneyManagementReceivedCreditSucceededEvent
  extends EventBase {
  type: 'v2.money_management.received_credit.succeeded';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.ReceivedCredit>;
}
export interface V2MoneyManagementReceivedCreditSucceededEventNotification
  extends EventNotificationBase {
  type: 'v2.money_management.received_credit.succeeded';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.ReceivedCredit>;
  fetchEvent(): Promise<V2MoneyManagementReceivedCreditSucceededEvent>;
}

/**
 * Occurs when a ReceivedDebit is canceled.
 */
export interface V2MoneyManagementReceivedDebitCanceledEvent extends EventBase {
  type: 'v2.money_management.received_debit.canceled';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.ReceivedDebit>;
}
export interface V2MoneyManagementReceivedDebitCanceledEventNotification
  extends EventNotificationBase {
  type: 'v2.money_management.received_debit.canceled';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.ReceivedDebit>;
  fetchEvent(): Promise<V2MoneyManagementReceivedDebitCanceledEvent>;
}

/**
 * Occurs when a ReceivedDebit fails.
 */
export interface V2MoneyManagementReceivedDebitFailedEvent extends EventBase {
  type: 'v2.money_management.received_debit.failed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.ReceivedDebit>;
}
export interface V2MoneyManagementReceivedDebitFailedEventNotification
  extends EventNotificationBase {
  type: 'v2.money_management.received_debit.failed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.ReceivedDebit>;
  fetchEvent(): Promise<V2MoneyManagementReceivedDebitFailedEvent>;
}

/**
 * Occurs when a ReceivedDebit is set to pending.
 */
export interface V2MoneyManagementReceivedDebitPendingEvent extends EventBase {
  type: 'v2.money_management.received_debit.pending';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.ReceivedDebit>;
}
export interface V2MoneyManagementReceivedDebitPendingEventNotification
  extends EventNotificationBase {
  type: 'v2.money_management.received_debit.pending';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.ReceivedDebit>;
  fetchEvent(): Promise<V2MoneyManagementReceivedDebitPendingEvent>;
}

/**
 * Occurs when a ReceivedDebit succeeds.
 */
export interface V2MoneyManagementReceivedDebitSucceededEvent
  extends EventBase {
  type: 'v2.money_management.received_debit.succeeded';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.ReceivedDebit>;
}
export interface V2MoneyManagementReceivedDebitSucceededEventNotification
  extends EventNotificationBase {
  type: 'v2.money_management.received_debit.succeeded';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.ReceivedDebit>;
  fetchEvent(): Promise<V2MoneyManagementReceivedDebitSucceededEvent>;
}

/**
 * Occurs when a ReceivedDebit is updated.
 */
export interface V2MoneyManagementReceivedDebitUpdatedEvent extends EventBase {
  type: 'v2.money_management.received_debit.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.ReceivedDebit>;
}
export interface V2MoneyManagementReceivedDebitUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v2.money_management.received_debit.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.ReceivedDebit>;
  fetchEvent(): Promise<V2MoneyManagementReceivedDebitUpdatedEvent>;
}

/**
 * Occurs when a RecipientVerification is created.
 */
export interface V2MoneyManagementRecipientVerificationCreatedEvent
  extends EventBase {
  type: 'v2.money_management.recipient_verification.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.RecipientVerification>;
}
export interface V2MoneyManagementRecipientVerificationCreatedEventNotification
  extends EventNotificationBase {
  type: 'v2.money_management.recipient_verification.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.RecipientVerification>;
  fetchEvent(): Promise<V2MoneyManagementRecipientVerificationCreatedEvent>;
}

/**
 * Occurs when a RecipientVerification is updated.
 */
export interface V2MoneyManagementRecipientVerificationUpdatedEvent
  extends EventBase {
  type: 'v2.money_management.recipient_verification.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.RecipientVerification>;
}
export interface V2MoneyManagementRecipientVerificationUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v2.money_management.recipient_verification.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.RecipientVerification>;
  fetchEvent(): Promise<V2MoneyManagementRecipientVerificationUpdatedEvent>;
}

/**
 * Occurs when a Transaction is created.
 */
export interface V2MoneyManagementTransactionCreatedEvent extends EventBase {
  type: 'v2.money_management.transaction.created';
  // Retrieves data specific to this event.
  data: V2MoneyManagementTransactionCreatedEvent.Data;
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.Transaction>;
}
export interface V2MoneyManagementTransactionCreatedEventNotification
  extends EventNotificationBase {
  type: 'v2.money_management.transaction.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.Transaction>;
  fetchEvent(): Promise<V2MoneyManagementTransactionCreatedEvent>;
}

export namespace V2MoneyManagementTransactionCreatedEvent {
  export interface Data {
    /**
     * Id of the v1 Treasury Transaction corresponding to this Transaction.
     */
    treasury_transaction?: string;

    /**
     * Id of the v1 Transaction corresponding to this Transaction.
     */
    v1_id?: string;
  }
}

/**
 * Occurs when a Transaction is updated.
 */
export interface V2MoneyManagementTransactionUpdatedEvent extends EventBase {
  type: 'v2.money_management.transaction.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.Transaction>;
}
export interface V2MoneyManagementTransactionUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v2.money_management.transaction.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<MoneyManagement.Transaction>;
  fetchEvent(): Promise<V2MoneyManagementTransactionUpdatedEvent>;
}

/**
 * Occurs when an Agreement is confirmed by one party.
 */
export interface V2OrchestratedCommerceAgreementConfirmedEvent
  extends EventBase {
  type: 'v2.orchestrated_commerce.agreement.confirmed';
  // Retrieves data specific to this event.
  data: V2OrchestratedCommerceAgreementConfirmedEvent.Data;
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<OrchestratedCommerce.Agreement>;
}
export interface V2OrchestratedCommerceAgreementConfirmedEventNotification
  extends EventNotificationBase {
  type: 'v2.orchestrated_commerce.agreement.confirmed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<OrchestratedCommerce.Agreement>;
  fetchEvent(): Promise<V2OrchestratedCommerceAgreementConfirmedEvent>;
}

export namespace V2OrchestratedCommerceAgreementConfirmedEvent {
  export interface Data {
    /**
     * The time at which the orchestrator confirmed the agreement.
     */
    orchestrator_confirmed_at: string;

    /**
     * Details about the orchestrator.
     */
    orchestrator_details: Data.OrchestratorDetails;

    /**
     * The time at which the seller confirmed the agreement.
     */
    seller_confirmed_at: string;

    /**
     * Details about the seller.
     */
    seller_details: Data.SellerDetails;
  }

  export namespace Data {
    export interface OrchestratorDetails {
      /**
       * The name of the orchestrator. This can be the name of the agent or the name of the business.
       */
      name: string;

      /**
       * The Network ID of the orchestrator.
       */
      network_business_profile: string;
    }

    export interface SellerDetails {
      /**
       * The Network ID of the seller.
       */
      network_business_profile: string;
    }
  }
}

/**
 * Occurs when an Agreement is created.
 */
export interface V2OrchestratedCommerceAgreementCreatedEvent extends EventBase {
  type: 'v2.orchestrated_commerce.agreement.created';
  // Retrieves data specific to this event.
  data: V2OrchestratedCommerceAgreementCreatedEvent.Data;
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<OrchestratedCommerce.Agreement>;
}
export interface V2OrchestratedCommerceAgreementCreatedEventNotification
  extends EventNotificationBase {
  type: 'v2.orchestrated_commerce.agreement.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<OrchestratedCommerce.Agreement>;
  fetchEvent(): Promise<V2OrchestratedCommerceAgreementCreatedEvent>;
}

export namespace V2OrchestratedCommerceAgreementCreatedEvent {
  export interface Data {
    /**
     * The time at which the agreement was created.
     */
    created: string;

    /**
     * The party that initiated the agreement.
     */
    initiated_by: Data.InitiatedBy;

    /**
     * Details about the orchestrator.
     */
    orchestrator_details: Data.OrchestratorDetails;

    /**
     * Details about the seller.
     */
    seller_details: Data.SellerDetails;
  }

  export namespace Data {
    export type InitiatedBy = 'orchestrator' | 'seller';

    export interface OrchestratorDetails {
      /**
       * The name of the orchestrator. This can be the name of the agent or the name of the business.
       */
      name: string;

      /**
       * The Network ID of the orchestrator.
       */
      network_business_profile: string;
    }

    export interface SellerDetails {
      /**
       * The Network ID of the seller.
       */
      network_business_profile: string;
    }
  }
}

/**
 * Occurs when an Agreement is partially confirmed (confirmed by one party but not both).
 */
export interface V2OrchestratedCommerceAgreementPartiallyConfirmedEvent
  extends EventBase {
  type: 'v2.orchestrated_commerce.agreement.partially_confirmed';
  // Retrieves data specific to this event.
  data: V2OrchestratedCommerceAgreementPartiallyConfirmedEvent.Data;
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<OrchestratedCommerce.Agreement>;
}
export interface V2OrchestratedCommerceAgreementPartiallyConfirmedEventNotification
  extends EventNotificationBase {
  type: 'v2.orchestrated_commerce.agreement.partially_confirmed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<OrchestratedCommerce.Agreement>;
  fetchEvent(): Promise<V2OrchestratedCommerceAgreementPartiallyConfirmedEvent>;
}

export namespace V2OrchestratedCommerceAgreementPartiallyConfirmedEvent {
  export interface Data {
    /**
     * The time at which the orchestrator confirmed the agreement.
     */
    orchestrator_confirmed_at: string;

    /**
     * Details about the orchestrator.
     */
    orchestrator_details: Data.OrchestratorDetails;

    /**
     * The time at which the seller confirmed the agreement.
     */
    seller_confirmed_at: string;

    /**
     * Details about the seller.
     */
    seller_details: Data.SellerDetails;
  }

  export namespace Data {
    export interface OrchestratorDetails {
      /**
       * The name of the orchestrator. This can be the name of the agent or the name of the business.
       */
      name: string;

      /**
       * The Network ID of the orchestrator.
       */
      network_business_profile: string;
    }

    export interface SellerDetails {
      /**
       * The Network ID of the seller.
       */
      network_business_profile: string;
    }
  }
}

/**
 * Occurs when an Agreement is terminated.
 */
export interface V2OrchestratedCommerceAgreementTerminatedEvent
  extends EventBase {
  type: 'v2.orchestrated_commerce.agreement.terminated';
  // Retrieves data specific to this event.
  data: V2OrchestratedCommerceAgreementTerminatedEvent.Data;
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<OrchestratedCommerce.Agreement>;
}
export interface V2OrchestratedCommerceAgreementTerminatedEventNotification
  extends EventNotificationBase {
  type: 'v2.orchestrated_commerce.agreement.terminated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<OrchestratedCommerce.Agreement>;
  fetchEvent(): Promise<V2OrchestratedCommerceAgreementTerminatedEvent>;
}

export namespace V2OrchestratedCommerceAgreementTerminatedEvent {
  export interface Data {
    /**
     * Details about the orchestrator.
     */
    orchestrator_details: Data.OrchestratorDetails;

    /**
     * Details about the seller.
     */
    seller_details: Data.SellerDetails;

    /**
     * The time at which the agreement was terminated.
     */
    terminated_at: string;

    /**
     * The party that terminated the agreement.
     */
    terminated_by: Data.TerminatedBy;
  }

  export namespace Data {
    export interface OrchestratorDetails {
      /**
       * The name of the orchestrator. This can be the name of the agent or the name of the business.
       */
      name: string;

      /**
       * The Network ID of the orchestrator.
       */
      network_business_profile: string;
    }

    export interface SellerDetails {
      /**
       * The Network ID of the seller.
       */
      network_business_profile: string;
    }

    export type TerminatedBy = 'orchestrator' | 'seller';
  }
}

/**
 * Sent after a failed attempt if there are still retries available on the OffSessionPayment.
 */
export interface V2PaymentsOffSessionPaymentAttemptFailedEvent
  extends EventBase {
  type: 'v2.payments.off_session_payment.attempt_failed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Payments.OffSessionPayment>;
}
export interface V2PaymentsOffSessionPaymentAttemptFailedEventNotification
  extends EventNotificationBase {
  type: 'v2.payments.off_session_payment.attempt_failed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Payments.OffSessionPayment>;
  fetchEvent(): Promise<V2PaymentsOffSessionPaymentAttemptFailedEvent>;
}

/**
 * Sent when our internal scheduling system kicks off an attempt, whether it's a
 * retry or an initial attempt.
 */
export interface V2PaymentsOffSessionPaymentAttemptStartedEvent
  extends EventBase {
  type: 'v2.payments.off_session_payment.attempt_started';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Payments.OffSessionPayment>;
}
export interface V2PaymentsOffSessionPaymentAttemptStartedEventNotification
  extends EventNotificationBase {
  type: 'v2.payments.off_session_payment.attempt_started';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Payments.OffSessionPayment>;
  fetchEvent(): Promise<V2PaymentsOffSessionPaymentAttemptStartedEvent>;
}

/**
 * Sent after a failed authorization if there are still retries available on the OffSessionPayment.
 * This event has been renamed this to attempt_failed, but we are keeping this around for backwards compatibility.
 */
export interface V2PaymentsOffSessionPaymentAuthorizationAttemptFailedEvent
  extends EventBase {
  type: 'v2.payments.off_session_payment.authorization_attempt_failed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Payments.OffSessionPayment>;
}
export interface V2PaymentsOffSessionPaymentAuthorizationAttemptFailedEventNotification
  extends EventNotificationBase {
  type: 'v2.payments.off_session_payment.authorization_attempt_failed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Payments.OffSessionPayment>;
  fetchEvent(): Promise<
    V2PaymentsOffSessionPaymentAuthorizationAttemptFailedEvent
  >;
}

/**
 * Sent when our internal scheduling system kicks off an attempt at authorization, whether it's a
 * retry or an initial authorization.
 * This event has been renamed this to attempt_failed, but we are keeping this around for backwards compatibility.
 */
export interface V2PaymentsOffSessionPaymentAuthorizationAttemptStartedEvent
  extends EventBase {
  type: 'v2.payments.off_session_payment.authorization_attempt_started';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Payments.OffSessionPayment>;
}
export interface V2PaymentsOffSessionPaymentAuthorizationAttemptStartedEventNotification
  extends EventNotificationBase {
  type: 'v2.payments.off_session_payment.authorization_attempt_started';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Payments.OffSessionPayment>;
  fetchEvent(): Promise<
    V2PaymentsOffSessionPaymentAuthorizationAttemptStartedEvent
  >;
}

/**
 * Sent immediately following a user's call to the Off-Session Payments cancel endpoint.
 */
export interface V2PaymentsOffSessionPaymentCanceledEvent extends EventBase {
  type: 'v2.payments.off_session_payment.canceled';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Payments.OffSessionPayment>;
}
export interface V2PaymentsOffSessionPaymentCanceledEventNotification
  extends EventNotificationBase {
  type: 'v2.payments.off_session_payment.canceled';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Payments.OffSessionPayment>;
  fetchEvent(): Promise<V2PaymentsOffSessionPaymentCanceledEvent>;
}

/**
 * Sent immediately following a user's call to the Off-Session Payments create endpoint.
 */
export interface V2PaymentsOffSessionPaymentCreatedEvent extends EventBase {
  type: 'v2.payments.off_session_payment.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Payments.OffSessionPayment>;
}
export interface V2PaymentsOffSessionPaymentCreatedEventNotification
  extends EventNotificationBase {
  type: 'v2.payments.off_session_payment.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Payments.OffSessionPayment>;
  fetchEvent(): Promise<V2PaymentsOffSessionPaymentCreatedEvent>;
}

/**
 * Sent after a failed authorization if there are no retries remaining, or if the failure is unretryable.
 */
export interface V2PaymentsOffSessionPaymentFailedEvent extends EventBase {
  type: 'v2.payments.off_session_payment.failed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Payments.OffSessionPayment>;
}
export interface V2PaymentsOffSessionPaymentFailedEventNotification
  extends EventNotificationBase {
  type: 'v2.payments.off_session_payment.failed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Payments.OffSessionPayment>;
  fetchEvent(): Promise<V2PaymentsOffSessionPaymentFailedEvent>;
}

/**
 * Sent immediately following a user's call to the Off-Session Payments pause endpoint.
 */
export interface V2PaymentsOffSessionPaymentPausedEvent extends EventBase {
  type: 'v2.payments.off_session_payment.paused';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Payments.OffSessionPayment>;
}
export interface V2PaymentsOffSessionPaymentPausedEventNotification
  extends EventNotificationBase {
  type: 'v2.payments.off_session_payment.paused';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Payments.OffSessionPayment>;
  fetchEvent(): Promise<V2PaymentsOffSessionPaymentPausedEvent>;
}

/**
 * Sent when the off-session payment becomes available for capture.
 */
export interface V2PaymentsOffSessionPaymentRequiresCaptureEvent
  extends EventBase {
  type: 'v2.payments.off_session_payment.requires_capture';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Payments.OffSessionPayment>;
}
export interface V2PaymentsOffSessionPaymentRequiresCaptureEventNotification
  extends EventNotificationBase {
  type: 'v2.payments.off_session_payment.requires_capture';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Payments.OffSessionPayment>;
  fetchEvent(): Promise<V2PaymentsOffSessionPaymentRequiresCaptureEvent>;
}

/**
 * Sent immediately following a user's call to the Off-Session Payments resume endpoint.
 */
export interface V2PaymentsOffSessionPaymentResumedEvent extends EventBase {
  type: 'v2.payments.off_session_payment.resumed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Payments.OffSessionPayment>;
}
export interface V2PaymentsOffSessionPaymentResumedEventNotification
  extends EventNotificationBase {
  type: 'v2.payments.off_session_payment.resumed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Payments.OffSessionPayment>;
  fetchEvent(): Promise<V2PaymentsOffSessionPaymentResumedEvent>;
}

/**
 * Sent immediately after a successful authorization.
 */
export interface V2PaymentsOffSessionPaymentSucceededEvent extends EventBase {
  type: 'v2.payments.off_session_payment.succeeded';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Payments.OffSessionPayment>;
}
export interface V2PaymentsOffSessionPaymentSucceededEventNotification
  extends EventNotificationBase {
  type: 'v2.payments.off_session_payment.succeeded';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Payments.OffSessionPayment>;
  fetchEvent(): Promise<V2PaymentsOffSessionPaymentSucceededEvent>;
}

/**
 * Occurs when a SettlementAllocationIntent is canceled.
 */
export interface V2PaymentsSettlementAllocationIntentCanceledEvent
  extends EventBase {
  type: 'v2.payments.settlement_allocation_intent.canceled';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Payments.SettlementAllocationIntent>;
}
export interface V2PaymentsSettlementAllocationIntentCanceledEventNotification
  extends EventNotificationBase {
  type: 'v2.payments.settlement_allocation_intent.canceled';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Payments.SettlementAllocationIntent>;
  fetchEvent(): Promise<V2PaymentsSettlementAllocationIntentCanceledEvent>;
}

/**
 * Occurs when a SettlementAllocationIntent is created.
 */
export interface V2PaymentsSettlementAllocationIntentCreatedEvent
  extends EventBase {
  type: 'v2.payments.settlement_allocation_intent.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Payments.SettlementAllocationIntent>;
}
export interface V2PaymentsSettlementAllocationIntentCreatedEventNotification
  extends EventNotificationBase {
  type: 'v2.payments.settlement_allocation_intent.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Payments.SettlementAllocationIntent>;
  fetchEvent(): Promise<V2PaymentsSettlementAllocationIntentCreatedEvent>;
}

/**
 * Occurs when an error occurs in reconciling a SettlementAllocationIntent.
 */
export interface V2PaymentsSettlementAllocationIntentErroredEvent
  extends EventBase {
  type: 'v2.payments.settlement_allocation_intent.errored';
  // Retrieves data specific to this event.
  data: V2PaymentsSettlementAllocationIntentErroredEvent.Data;
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Payments.SettlementAllocationIntent>;
}
export interface V2PaymentsSettlementAllocationIntentErroredEventNotification
  extends EventNotificationBase {
  type: 'v2.payments.settlement_allocation_intent.errored';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Payments.SettlementAllocationIntent>;
  fetchEvent(): Promise<V2PaymentsSettlementAllocationIntentErroredEvent>;
}

export namespace V2PaymentsSettlementAllocationIntentErroredEvent {
  export interface Data {
    /**
     * Stripe doc link to debug the issue.
     */
    doc_url?: string;

    /**
     * User Message detailing the reason code and possible resolution .
     */
    message: string;

    /**
     * Open Enum. The `errored` status reason.
     */
    reason_code: 'amount_mismatch';
  }
}

/**
 * Occurs when SettlementAllocationIntent's `expected_settlement_date` is one day away and no matching ReceivedCredit exists.
 */
export interface V2PaymentsSettlementAllocationIntentFundsNotReceivedEvent
  extends EventBase {
  type: 'v2.payments.settlement_allocation_intent.funds_not_received';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Payments.SettlementAllocationIntent>;
}
export interface V2PaymentsSettlementAllocationIntentFundsNotReceivedEventNotification
  extends EventNotificationBase {
  type: 'v2.payments.settlement_allocation_intent.funds_not_received';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Payments.SettlementAllocationIntent>;
  fetchEvent(): Promise<
    V2PaymentsSettlementAllocationIntentFundsNotReceivedEvent
  >;
}

/**
 * Occurs when a SettlementAllocationIntent is matched.
 */
export interface V2PaymentsSettlementAllocationIntentMatchedEvent
  extends EventBase {
  type: 'v2.payments.settlement_allocation_intent.matched';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Payments.SettlementAllocationIntent>;
}
export interface V2PaymentsSettlementAllocationIntentMatchedEventNotification
  extends EventNotificationBase {
  type: 'v2.payments.settlement_allocation_intent.matched';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Payments.SettlementAllocationIntent>;
  fetchEvent(): Promise<V2PaymentsSettlementAllocationIntentMatchedEvent>;
}

/**
 * Occurs when a ReceivedCredit has no SettlementAllocationIntent matching it.
 */
export interface V2PaymentsSettlementAllocationIntentNotFoundEvent
  extends EventBase {
  type: 'v2.payments.settlement_allocation_intent.not_found';
  // Retrieves data specific to this event.
  data: V2PaymentsSettlementAllocationIntentNotFoundEvent.Data;
}
export interface V2PaymentsSettlementAllocationIntentNotFoundEventNotification
  extends EventNotificationBase {
  type: 'v2.payments.settlement_allocation_intent.not_found';
  fetchEvent(): Promise<V2PaymentsSettlementAllocationIntentNotFoundEvent>;
}

export namespace V2PaymentsSettlementAllocationIntentNotFoundEvent {
  export interface Data {
    /**
     * The ID of the ReceivedCredit.
     */
    received_credit_id: string;
  }
}

/**
 * Occurs when a SettlementAllocationIntent is settled.
 */
export interface V2PaymentsSettlementAllocationIntentSettledEvent
  extends EventBase {
  type: 'v2.payments.settlement_allocation_intent.settled';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Payments.SettlementAllocationIntent>;
}
export interface V2PaymentsSettlementAllocationIntentSettledEventNotification
  extends EventNotificationBase {
  type: 'v2.payments.settlement_allocation_intent.settled';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Payments.SettlementAllocationIntent>;
  fetchEvent(): Promise<V2PaymentsSettlementAllocationIntentSettledEvent>;
}

/**
 * Occurs when a SettlementAllocationIntent is submitted.
 */
export interface V2PaymentsSettlementAllocationIntentSubmittedEvent
  extends EventBase {
  type: 'v2.payments.settlement_allocation_intent.submitted';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Payments.SettlementAllocationIntent>;
}
export interface V2PaymentsSettlementAllocationIntentSubmittedEventNotification
  extends EventNotificationBase {
  type: 'v2.payments.settlement_allocation_intent.submitted';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Payments.SettlementAllocationIntent>;
  fetchEvent(): Promise<V2PaymentsSettlementAllocationIntentSubmittedEvent>;
}

/**
 * Occurs when a SettlementAllocationIntentSplit is canceled.
 */
export interface V2PaymentsSettlementAllocationIntentSplitCanceledEvent
  extends EventBase {
  type: 'v2.payments.settlement_allocation_intent_split.canceled';
  // Retrieves data specific to this event.
  data: V2PaymentsSettlementAllocationIntentSplitCanceledEvent.Data;
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Payments.SettlementAllocationIntentSplit>;
}
export interface V2PaymentsSettlementAllocationIntentSplitCanceledEventNotification
  extends EventNotificationBase {
  type: 'v2.payments.settlement_allocation_intent_split.canceled';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Payments.SettlementAllocationIntentSplit>;
  fetchEvent(): Promise<V2PaymentsSettlementAllocationIntentSplitCanceledEvent>;
}

export namespace V2PaymentsSettlementAllocationIntentSplitCanceledEvent {
  export interface Data {
    /**
     * The ID of the SettlementAllocationIntent this split belongs to.
     */
    settlement_allocation_intent_id: string;
  }
}

/**
 * Occurs when a SettlementAllocationIntentSplit is created.
 */
export interface V2PaymentsSettlementAllocationIntentSplitCreatedEvent
  extends EventBase {
  type: 'v2.payments.settlement_allocation_intent_split.created';
  // Retrieves data specific to this event.
  data: V2PaymentsSettlementAllocationIntentSplitCreatedEvent.Data;
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Payments.SettlementAllocationIntentSplit>;
}
export interface V2PaymentsSettlementAllocationIntentSplitCreatedEventNotification
  extends EventNotificationBase {
  type: 'v2.payments.settlement_allocation_intent_split.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Payments.SettlementAllocationIntentSplit>;
  fetchEvent(): Promise<V2PaymentsSettlementAllocationIntentSplitCreatedEvent>;
}

export namespace V2PaymentsSettlementAllocationIntentSplitCreatedEvent {
  export interface Data {
    /**
     * The ID of the SettlementAllocationIntent this split belongs to.
     */
    settlement_allocation_intent_id: string;
  }
}

/**
 * Occurs when a SettlementAllocationIntentSplit is settled.
 */
export interface V2PaymentsSettlementAllocationIntentSplitSettledEvent
  extends EventBase {
  type: 'v2.payments.settlement_allocation_intent_split.settled';
  // Retrieves data specific to this event.
  data: V2PaymentsSettlementAllocationIntentSplitSettledEvent.Data;
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Payments.SettlementAllocationIntentSplit>;
}
export interface V2PaymentsSettlementAllocationIntentSplitSettledEventNotification
  extends EventNotificationBase {
  type: 'v2.payments.settlement_allocation_intent_split.settled';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Payments.SettlementAllocationIntentSplit>;
  fetchEvent(): Promise<V2PaymentsSettlementAllocationIntentSplitSettledEvent>;
}

export namespace V2PaymentsSettlementAllocationIntentSplitSettledEvent {
  export interface Data {
    /**
     * The ID of the SettlementAllocationIntent this split belongs to.
     */
    settlement_allocation_intent_id: string;
  }
}

/**
 * Occurs when a ReportRun is created.
 */
export interface V2ReportingReportRunCreatedEvent extends EventBase {
  type: 'v2.reporting.report_run.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Reporting.ReportRun>;
}
export interface V2ReportingReportRunCreatedEventNotification
  extends EventNotificationBase {
  type: 'v2.reporting.report_run.created';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Reporting.ReportRun>;
  fetchEvent(): Promise<V2ReportingReportRunCreatedEvent>;
}

/**
 * Occurs when a ReportRun has failed to complete.
 */
export interface V2ReportingReportRunFailedEvent extends EventBase {
  type: 'v2.reporting.report_run.failed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Reporting.ReportRun>;
}
export interface V2ReportingReportRunFailedEventNotification
  extends EventNotificationBase {
  type: 'v2.reporting.report_run.failed';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Reporting.ReportRun>;
  fetchEvent(): Promise<V2ReportingReportRunFailedEvent>;
}

/**
 * Occurs when a ReportRun has successfully completed.
 */
export interface V2ReportingReportRunSucceededEvent extends EventBase {
  type: 'v2.reporting.report_run.succeeded';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Reporting.ReportRun>;
}
export interface V2ReportingReportRunSucceededEventNotification
  extends EventNotificationBase {
  type: 'v2.reporting.report_run.succeeded';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Reporting.ReportRun>;
  fetchEvent(): Promise<V2ReportingReportRunSucceededEvent>;
}

/**
 * Occurs when a ReportRun is updated.
 */
export interface V2ReportingReportRunUpdatedEvent extends EventBase {
  type: 'v2.reporting.report_run.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Reporting.ReportRun>;
}
export interface V2ReportingReportRunUpdatedEventNotification
  extends EventNotificationBase {
  type: 'v2.reporting.report_run.updated';
  // Object containing the reference to API resource relevant to the event.
  related_object: V2.Core.Events.RelatedObject;
  // Retrieves the object associated with the event.
  fetchRelatedObject(): Promise<Reporting.ReportRun>;
  fetchEvent(): Promise<V2ReportingReportRunUpdatedEvent>;
}

/**
 * Occurs when a fraudulent merchant signal is ready for an account.
 */
export interface V2SignalsAccountSignalFraudulentMerchantReadyEvent
  extends EventBase {
  type: 'v2.signals.account_signal.fraudulent_merchant_ready';
  // Retrieves data specific to this event.
  data: V2SignalsAccountSignalFraudulentMerchantReadyEvent.Data;
}
export interface V2SignalsAccountSignalFraudulentMerchantReadyEventNotification
  extends EventNotificationBase {
  type: 'v2.signals.account_signal.fraudulent_merchant_ready';
  fetchEvent(): Promise<V2SignalsAccountSignalFraudulentMerchantReadyEvent>;
}

export namespace V2SignalsAccountSignalFraudulentMerchantReadyEvent {
  export interface Data {
    /**
     * Account ID that this signal is associated with.
     */
    account: string;

    /**
     * Timestamp when the signal was evaluated.
     */
    evaluated_at: string;

    /**
     * Fraudulent merchant signal data. Present when type is fraudulent_merchant.
     */
    fraudulent_merchant?: Data.FraudulentMerchant;

    /**
     * Unique identifier for this account signal.
     */
    id: string;

    /**
     * The type of account signal. Currently only fraudulent_merchant is supported.
     */
    type: 'fraudulent_merchant';
  }

  export namespace Data {
    export interface FraudulentMerchant {
      /**
       * Array of objects representing individual factors that contributed to the calculated probability. Maximum of 3.
       */
      indicators: Array<FraudulentMerchant.Indicator>;

      /**
       * The probability of the merchant being fraudulent. Can be between 0.00 and 100.00. May be empty if the risk_level is UNKNOWN or NOT_ASSESSED.
       */
      probability?: Decimal;

      /**
       * Categorical assessment of the fraudulent merchant risk based on probability.
       */
      risk_level: FraudulentMerchant.RiskLevel;
    }

    export namespace FraudulentMerchant {
      export interface Indicator {
        /**
         * A brief explanation of how this indicator contributed to the fraudulent merchant probability.
         */
        description: string;

        /**
         * The effect this indicator had on the overall risk level.
         */
        impact: Indicator.Impact;

        /**
         * The name of the specific indicator used in the risk assessment.
         */
        indicator: Indicator.Indicator;
      }

      export type RiskLevel =
        | 'elevated'
        | 'highest'
        | 'low'
        | 'normal'
        | 'not_assessed'
        | 'unknown';

      export namespace Indicator {
        export type Impact =
          | 'decrease'
          | 'neutral'
          | 'slight_increase'
          | 'strong_increase';

        export type Indicator =
          | 'bank_account'
          | 'business_information_and_account_activity'
          | 'disputes'
          | 'failures'
          | 'geolocation'
          | 'other'
          | 'other_related_accounts'
          | 'other_transaction_activity'
          | 'owner_email'
          | 'web_presence';
      }
    }
  }
}

export declare namespace Events {
  export {
    UnknownEventNotification,
    V1AccountApplicationAuthorizedEvent,
    V1AccountApplicationDeauthorizedEvent,
    V1AccountExternalAccountCreatedEvent,
    V1AccountExternalAccountDeletedEvent,
    V1AccountExternalAccountUpdatedEvent,
    V1AccountUpdatedEvent,
    V1AccountSignalsIncludingDelinquencyCreatedEvent,
    V1ApplicationFeeCreatedEvent,
    V1ApplicationFeeRefundUpdatedEvent,
    V1ApplicationFeeRefundedEvent,
    V1BalanceAvailableEvent,
    V1BillingAlertTriggeredEvent,
    V1BillingMeterErrorReportTriggeredEvent,
    V1BillingMeterNoMeterFoundEvent,
    V1BillingPortalConfigurationCreatedEvent,
    V1BillingPortalConfigurationUpdatedEvent,
    V1BillingPortalSessionCreatedEvent,
    V1CapabilityUpdatedEvent,
    V1CashBalanceFundsAvailableEvent,
    V1ChargeCapturedEvent,
    V1ChargeDisputeClosedEvent,
    V1ChargeDisputeCreatedEvent,
    V1ChargeDisputeFundsReinstatedEvent,
    V1ChargeDisputeFundsWithdrawnEvent,
    V1ChargeDisputeUpdatedEvent,
    V1ChargeExpiredEvent,
    V1ChargeFailedEvent,
    V1ChargePendingEvent,
    V1ChargeRefundUpdatedEvent,
    V1ChargeRefundedEvent,
    V1ChargeSucceededEvent,
    V1ChargeUpdatedEvent,
    V1CheckoutSessionAsyncPaymentFailedEvent,
    V1CheckoutSessionAsyncPaymentSucceededEvent,
    V1CheckoutSessionCompletedEvent,
    V1CheckoutSessionExpiredEvent,
    V1ClimateOrderCanceledEvent,
    V1ClimateOrderCreatedEvent,
    V1ClimateOrderDelayedEvent,
    V1ClimateOrderDeliveredEvent,
    V1ClimateOrderProductSubstitutedEvent,
    V1ClimateProductCreatedEvent,
    V1ClimateProductPricingUpdatedEvent,
    V1CouponCreatedEvent,
    V1CouponDeletedEvent,
    V1CouponUpdatedEvent,
    V1CreditNoteCreatedEvent,
    V1CreditNoteUpdatedEvent,
    V1CreditNoteVoidedEvent,
    V1CustomerCreatedEvent,
    V1CustomerDeletedEvent,
    V1CustomerSubscriptionCreatedEvent,
    V1CustomerSubscriptionDeletedEvent,
    V1CustomerSubscriptionPausedEvent,
    V1CustomerSubscriptionPendingUpdateAppliedEvent,
    V1CustomerSubscriptionPendingUpdateExpiredEvent,
    V1CustomerSubscriptionResumedEvent,
    V1CustomerSubscriptionTrialWillEndEvent,
    V1CustomerSubscriptionUpdatedEvent,
    V1CustomerTaxIdCreatedEvent,
    V1CustomerTaxIdDeletedEvent,
    V1CustomerTaxIdUpdatedEvent,
    V1CustomerUpdatedEvent,
    V1CustomerCashBalanceTransactionCreatedEvent,
    V1EntitlementsActiveEntitlementSummaryUpdatedEvent,
    V1FileCreatedEvent,
    V1FinancialConnectionsAccountCreatedEvent,
    V1FinancialConnectionsAccountDeactivatedEvent,
    V1FinancialConnectionsAccountDisconnectedEvent,
    V1FinancialConnectionsAccountReactivatedEvent,
    V1FinancialConnectionsAccountRefreshedBalanceEvent,
    V1FinancialConnectionsAccountRefreshedOwnershipEvent,
    V1FinancialConnectionsAccountRefreshedTransactionsEvent,
    V1IdentityVerificationSessionCanceledEvent,
    V1IdentityVerificationSessionCreatedEvent,
    V1IdentityVerificationSessionProcessingEvent,
    V1IdentityVerificationSessionRedactedEvent,
    V1IdentityVerificationSessionRequiresInputEvent,
    V1IdentityVerificationSessionVerifiedEvent,
    V1InvoiceCreatedEvent,
    V1InvoiceDeletedEvent,
    V1InvoiceFinalizationFailedEvent,
    V1InvoiceFinalizedEvent,
    V1InvoiceMarkedUncollectibleEvent,
    V1InvoiceOverdueEvent,
    V1InvoiceOverpaidEvent,
    V1InvoicePaidEvent,
    V1InvoicePaymentActionRequiredEvent,
    V1InvoicePaymentFailedEvent,
    V1InvoicePaymentSucceededEvent,
    V1InvoiceSentEvent,
    V1InvoiceUpcomingEvent,
    V1InvoiceUpdatedEvent,
    V1InvoiceVoidedEvent,
    V1InvoiceWillBeDueEvent,
    V1InvoicePaymentPaidEvent,
    V1InvoiceitemCreatedEvent,
    V1InvoiceitemDeletedEvent,
    V1IssuingAuthorizationCreatedEvent,
    V1IssuingAuthorizationRequestEvent,
    V1IssuingAuthorizationUpdatedEvent,
    V1IssuingCardCreatedEvent,
    V1IssuingCardUpdatedEvent,
    V1IssuingCardholderCreatedEvent,
    V1IssuingCardholderUpdatedEvent,
    V1IssuingDisputeClosedEvent,
    V1IssuingDisputeCreatedEvent,
    V1IssuingDisputeFundsReinstatedEvent,
    V1IssuingDisputeFundsRescindedEvent,
    V1IssuingDisputeSubmittedEvent,
    V1IssuingDisputeUpdatedEvent,
    V1IssuingPersonalizationDesignActivatedEvent,
    V1IssuingPersonalizationDesignDeactivatedEvent,
    V1IssuingPersonalizationDesignRejectedEvent,
    V1IssuingPersonalizationDesignUpdatedEvent,
    V1IssuingTokenCreatedEvent,
    V1IssuingTokenUpdatedEvent,
    V1IssuingTransactionCreatedEvent,
    V1IssuingTransactionPurchaseDetailsReceiptUpdatedEvent,
    V1IssuingTransactionUpdatedEvent,
    V1MandateUpdatedEvent,
    V1PaymentIntentAmountCapturableUpdatedEvent,
    V1PaymentIntentCanceledEvent,
    V1PaymentIntentCreatedEvent,
    V1PaymentIntentPartiallyFundedEvent,
    V1PaymentIntentPaymentFailedEvent,
    V1PaymentIntentProcessingEvent,
    V1PaymentIntentRequiresActionEvent,
    V1PaymentIntentSucceededEvent,
    V1PaymentLinkCreatedEvent,
    V1PaymentLinkUpdatedEvent,
    V1PaymentMethodAttachedEvent,
    V1PaymentMethodAutomaticallyUpdatedEvent,
    V1PaymentMethodDetachedEvent,
    V1PaymentMethodUpdatedEvent,
    V1PayoutCanceledEvent,
    V1PayoutCreatedEvent,
    V1PayoutFailedEvent,
    V1PayoutPaidEvent,
    V1PayoutReconciliationCompletedEvent,
    V1PayoutUpdatedEvent,
    V1PersonCreatedEvent,
    V1PersonDeletedEvent,
    V1PersonUpdatedEvent,
    V1PlanCreatedEvent,
    V1PlanDeletedEvent,
    V1PlanUpdatedEvent,
    V1PriceCreatedEvent,
    V1PriceDeletedEvent,
    V1PriceUpdatedEvent,
    V1ProductCreatedEvent,
    V1ProductDeletedEvent,
    V1ProductUpdatedEvent,
    V1PromotionCodeCreatedEvent,
    V1PromotionCodeUpdatedEvent,
    V1QuoteAcceptedEvent,
    V1QuoteCanceledEvent,
    V1QuoteCreatedEvent,
    V1QuoteFinalizedEvent,
    V1RadarEarlyFraudWarningCreatedEvent,
    V1RadarEarlyFraudWarningUpdatedEvent,
    V1RefundCreatedEvent,
    V1RefundFailedEvent,
    V1RefundUpdatedEvent,
    V1ReviewClosedEvent,
    V1ReviewOpenedEvent,
    V1SetupIntentCanceledEvent,
    V1SetupIntentCreatedEvent,
    V1SetupIntentRequiresActionEvent,
    V1SetupIntentSetupFailedEvent,
    V1SetupIntentSucceededEvent,
    V1SigmaScheduledQueryRunCreatedEvent,
    V1SourceCanceledEvent,
    V1SourceChargeableEvent,
    V1SourceFailedEvent,
    V1SourceRefundAttributesRequiredEvent,
    V1SubscriptionScheduleAbortedEvent,
    V1SubscriptionScheduleCanceledEvent,
    V1SubscriptionScheduleCompletedEvent,
    V1SubscriptionScheduleCreatedEvent,
    V1SubscriptionScheduleExpiringEvent,
    V1SubscriptionScheduleReleasedEvent,
    V1SubscriptionScheduleUpdatedEvent,
    V1TaxSettingsUpdatedEvent,
    V1TaxRateCreatedEvent,
    V1TaxRateUpdatedEvent,
    V1TerminalReaderActionFailedEvent,
    V1TerminalReaderActionSucceededEvent,
    V1TerminalReaderActionUpdatedEvent,
    V1TestHelpersTestClockAdvancingEvent,
    V1TestHelpersTestClockCreatedEvent,
    V1TestHelpersTestClockDeletedEvent,
    V1TestHelpersTestClockInternalFailureEvent,
    V1TestHelpersTestClockReadyEvent,
    V1TopupCanceledEvent,
    V1TopupCreatedEvent,
    V1TopupFailedEvent,
    V1TopupReversedEvent,
    V1TopupSucceededEvent,
    V1TransferCreatedEvent,
    V1TransferReversedEvent,
    V1TransferUpdatedEvent,
    V2BillingCadenceBilledEvent,
    V2BillingCadenceCanceledEvent,
    V2BillingCadenceCreatedEvent,
    V2BillingLicenseFeeCreatedEvent,
    V2BillingLicenseFeeUpdatedEvent,
    V2BillingLicenseFeeVersionCreatedEvent,
    V2BillingLicensedItemCreatedEvent,
    V2BillingLicensedItemUpdatedEvent,
    V2BillingMeteredItemCreatedEvent,
    V2BillingMeteredItemUpdatedEvent,
    V2BillingPricingPlanCreatedEvent,
    V2BillingPricingPlanUpdatedEvent,
    V2BillingPricingPlanComponentCreatedEvent,
    V2BillingPricingPlanComponentUpdatedEvent,
    V2BillingPricingPlanSubscriptionCollectionAwaitingCustomerActionEvent,
    V2BillingPricingPlanSubscriptionCollectionCurrentEvent,
    V2BillingPricingPlanSubscriptionCollectionPastDueEvent,
    V2BillingPricingPlanSubscriptionCollectionPausedEvent,
    V2BillingPricingPlanSubscriptionCollectionUnpaidEvent,
    V2BillingPricingPlanSubscriptionServicingActivatedEvent,
    V2BillingPricingPlanSubscriptionServicingCanceledEvent,
    V2BillingPricingPlanSubscriptionServicingPausedEvent,
    V2BillingPricingPlanVersionCreatedEvent,
    V2BillingRateCardCreatedEvent,
    V2BillingRateCardUpdatedEvent,
    V2BillingRateCardCustomPricingUnitOverageRateCreatedEvent,
    V2BillingRateCardRateCreatedEvent,
    V2BillingRateCardSubscriptionActivatedEvent,
    V2BillingRateCardSubscriptionCanceledEvent,
    V2BillingRateCardSubscriptionCollectionAwaitingCustomerActionEvent,
    V2BillingRateCardSubscriptionCollectionCurrentEvent,
    V2BillingRateCardSubscriptionCollectionPastDueEvent,
    V2BillingRateCardSubscriptionCollectionPausedEvent,
    V2BillingRateCardSubscriptionCollectionUnpaidEvent,
    V2BillingRateCardSubscriptionServicingActivatedEvent,
    V2BillingRateCardSubscriptionServicingCanceledEvent,
    V2BillingRateCardSubscriptionServicingPausedEvent,
    V2BillingRateCardVersionCreatedEvent,
    V2CommerceProductCatalogImportsFailedEvent,
    V2CommerceProductCatalogImportsProcessingEvent,
    V2CommerceProductCatalogImportsSucceededEvent,
    V2CommerceProductCatalogImportsSucceededWithErrorsEvent,
    V2CoreAccountClosedEvent,
    V2CoreAccountCreatedEvent,
    V2CoreAccountUpdatedEvent,
    V2CoreAccountIncludingConfigurationCardCreatorCapabilityStatusUpdatedEvent,
    V2CoreAccountIncludingConfigurationCardCreatorUpdatedEvent,
    V2CoreAccountIncludingConfigurationCustomerCapabilityStatusUpdatedEvent,
    V2CoreAccountIncludingConfigurationCustomerUpdatedEvent,
    V2CoreAccountIncludingConfigurationMerchantCapabilityStatusUpdatedEvent,
    V2CoreAccountIncludingConfigurationMerchantUpdatedEvent,
    V2CoreAccountIncludingConfigurationRecipientCapabilityStatusUpdatedEvent,
    V2CoreAccountIncludingConfigurationRecipientUpdatedEvent,
    V2CoreAccountIncludingConfigurationStorerCapabilityStatusUpdatedEvent,
    V2CoreAccountIncludingConfigurationStorerUpdatedEvent,
    V2CoreAccountIncludingDefaultsUpdatedEvent,
    V2CoreAccountIncludingFutureRequirementsUpdatedEvent,
    V2CoreAccountIncludingIdentityUpdatedEvent,
    V2CoreAccountIncludingRequirementsUpdatedEvent,
    V2CoreAccountLinkReturnedEvent,
    V2CoreAccountPersonCreatedEvent,
    V2CoreAccountPersonDeletedEvent,
    V2CoreAccountPersonUpdatedEvent,
    V2CoreAccountSignalsFraudulentWebsiteReadyEvent,
    V2CoreApprovalRequestApprovedEvent,
    V2CoreApprovalRequestCanceledEvent,
    V2CoreApprovalRequestFailedEvent,
    V2CoreApprovalRequestRejectedEvent,
    V2CoreApprovalRequestSucceededEvent,
    V2CoreBatchJobBatchFailedEvent,
    V2CoreBatchJobCanceledEvent,
    V2CoreBatchJobCompletedEvent,
    V2CoreBatchJobCreatedEvent,
    V2CoreBatchJobReadyForUploadEvent,
    V2CoreBatchJobTimeoutEvent,
    V2CoreBatchJobUpdatedEvent,
    V2CoreBatchJobUploadTimeoutEvent,
    V2CoreBatchJobValidatingEvent,
    V2CoreBatchJobValidationFailedEvent,
    V2CoreClaimableSandboxClaimedEvent,
    V2CoreClaimableSandboxCreatedEvent,
    V2CoreClaimableSandboxExpiredEvent,
    V2CoreClaimableSandboxExpiringEvent,
    V2CoreClaimableSandboxUpdatedEvent,
    V2CoreEventDestinationPingEvent,
    V2CoreHealthApiErrorFiringEvent,
    V2CoreHealthApiErrorResolvedEvent,
    V2CoreHealthApiLatencyFiringEvent,
    V2CoreHealthApiLatencyResolvedEvent,
    V2CoreHealthAuthorizationRateDropFiringEvent,
    V2CoreHealthAuthorizationRateDropResolvedEvent,
    V2CoreHealthEventGenerationFailureResolvedEvent,
    V2CoreHealthFraudRateIncreasedEvent,
    V2CoreHealthIssuingAuthorizationRequestErrorsFiringEvent,
    V2CoreHealthIssuingAuthorizationRequestErrorsResolvedEvent,
    V2CoreHealthIssuingAuthorizationRequestTimeoutFiringEvent,
    V2CoreHealthIssuingAuthorizationRequestTimeoutResolvedEvent,
    V2CoreHealthMeterEventSummariesDelayedFiringEvent,
    V2CoreHealthMeterEventSummariesDelayedResolvedEvent,
    V2CoreHealthPaymentMethodErrorFiringEvent,
    V2CoreHealthPaymentMethodErrorResolvedEvent,
    V2CoreHealthSepaDebitDelayedFiringEvent,
    V2CoreHealthSepaDebitDelayedResolvedEvent,
    V2CoreHealthTrafficVolumeDropFiringEvent,
    V2CoreHealthTrafficVolumeDropResolvedEvent,
    V2CoreHealthWebhookLatencyFiringEvent,
    V2CoreHealthWebhookLatencyResolvedEvent,
    V2DataReportingQueryRunCreatedEvent,
    V2DataReportingQueryRunFailedEvent,
    V2DataReportingQueryRunSucceededEvent,
    V2DataReportingQueryRunUpdatedEvent,
    V2ExtendWorkflowRunFailedEvent,
    V2ExtendWorkflowRunStartedEvent,
    V2ExtendWorkflowRunSucceededEvent,
    V2IamApiKeyCreatedEvent,
    V2IamApiKeyDefaultSecretRevealedEvent,
    V2IamApiKeyExpiredEvent,
    V2IamApiKeyPermissionsUpdatedEvent,
    V2IamApiKeyRotatedEvent,
    V2IamApiKeyUpdatedEvent,
    V2IamStripeAccessGrantApprovedEvent,
    V2IamStripeAccessGrantCanceledEvent,
    V2IamStripeAccessGrantDeniedEvent,
    V2IamStripeAccessGrantRemovedEvent,
    V2IamStripeAccessGrantRequestedEvent,
    V2IamStripeAccessGrantUpdatedEvent,
    V2MoneyManagementAdjustmentCreatedEvent,
    V2MoneyManagementFinancialAccountCreatedEvent,
    V2MoneyManagementFinancialAccountUpdatedEvent,
    V2MoneyManagementFinancialAddressActivatedEvent,
    V2MoneyManagementFinancialAddressFailedEvent,
    V2MoneyManagementInboundTransferAvailableEvent,
    V2MoneyManagementInboundTransferBankDebitFailedEvent,
    V2MoneyManagementInboundTransferBankDebitProcessingEvent,
    V2MoneyManagementInboundTransferBankDebitQueuedEvent,
    V2MoneyManagementInboundTransferBankDebitReturnedEvent,
    V2MoneyManagementInboundTransferBankDebitSucceededEvent,
    V2MoneyManagementOutboundPaymentCanceledEvent,
    V2MoneyManagementOutboundPaymentCreatedEvent,
    V2MoneyManagementOutboundPaymentFailedEvent,
    V2MoneyManagementOutboundPaymentPostedEvent,
    V2MoneyManagementOutboundPaymentReturnedEvent,
    V2MoneyManagementOutboundPaymentUpdatedEvent,
    V2MoneyManagementOutboundTransferCanceledEvent,
    V2MoneyManagementOutboundTransferCreatedEvent,
    V2MoneyManagementOutboundTransferFailedEvent,
    V2MoneyManagementOutboundTransferPostedEvent,
    V2MoneyManagementOutboundTransferReturnedEvent,
    V2MoneyManagementOutboundTransferUpdatedEvent,
    V2MoneyManagementPayoutMethodCreatedEvent,
    V2MoneyManagementPayoutMethodUpdatedEvent,
    V2MoneyManagementReceivedCreditAvailableEvent,
    V2MoneyManagementReceivedCreditFailedEvent,
    V2MoneyManagementReceivedCreditReturnedEvent,
    V2MoneyManagementReceivedCreditSucceededEvent,
    V2MoneyManagementReceivedDebitCanceledEvent,
    V2MoneyManagementReceivedDebitFailedEvent,
    V2MoneyManagementReceivedDebitPendingEvent,
    V2MoneyManagementReceivedDebitSucceededEvent,
    V2MoneyManagementReceivedDebitUpdatedEvent,
    V2MoneyManagementRecipientVerificationCreatedEvent,
    V2MoneyManagementRecipientVerificationUpdatedEvent,
    V2MoneyManagementTransactionCreatedEvent,
    V2MoneyManagementTransactionUpdatedEvent,
    V2OrchestratedCommerceAgreementConfirmedEvent,
    V2OrchestratedCommerceAgreementCreatedEvent,
    V2OrchestratedCommerceAgreementPartiallyConfirmedEvent,
    V2OrchestratedCommerceAgreementTerminatedEvent,
    V2PaymentsOffSessionPaymentAttemptFailedEvent,
    V2PaymentsOffSessionPaymentAttemptStartedEvent,
    V2PaymentsOffSessionPaymentAuthorizationAttemptFailedEvent,
    V2PaymentsOffSessionPaymentAuthorizationAttemptStartedEvent,
    V2PaymentsOffSessionPaymentCanceledEvent,
    V2PaymentsOffSessionPaymentCreatedEvent,
    V2PaymentsOffSessionPaymentFailedEvent,
    V2PaymentsOffSessionPaymentPausedEvent,
    V2PaymentsOffSessionPaymentRequiresCaptureEvent,
    V2PaymentsOffSessionPaymentResumedEvent,
    V2PaymentsOffSessionPaymentSucceededEvent,
    V2PaymentsSettlementAllocationIntentCanceledEvent,
    V2PaymentsSettlementAllocationIntentCreatedEvent,
    V2PaymentsSettlementAllocationIntentErroredEvent,
    V2PaymentsSettlementAllocationIntentFundsNotReceivedEvent,
    V2PaymentsSettlementAllocationIntentMatchedEvent,
    V2PaymentsSettlementAllocationIntentNotFoundEvent,
    V2PaymentsSettlementAllocationIntentSettledEvent,
    V2PaymentsSettlementAllocationIntentSubmittedEvent,
    V2PaymentsSettlementAllocationIntentSplitCanceledEvent,
    V2PaymentsSettlementAllocationIntentSplitCreatedEvent,
    V2PaymentsSettlementAllocationIntentSplitSettledEvent,
    V2ReportingReportRunCreatedEvent,
    V2ReportingReportRunFailedEvent,
    V2ReportingReportRunSucceededEvent,
    V2ReportingReportRunUpdatedEvent,
    V2SignalsAccountSignalFraudulentMerchantReadyEvent,
    V1AccountApplicationAuthorizedEventNotification,
    V1AccountApplicationDeauthorizedEventNotification,
    V1AccountExternalAccountCreatedEventNotification,
    V1AccountExternalAccountDeletedEventNotification,
    V1AccountExternalAccountUpdatedEventNotification,
    V1AccountUpdatedEventNotification,
    V1AccountSignalsIncludingDelinquencyCreatedEventNotification,
    V1ApplicationFeeCreatedEventNotification,
    V1ApplicationFeeRefundUpdatedEventNotification,
    V1ApplicationFeeRefundedEventNotification,
    V1BalanceAvailableEventNotification,
    V1BillingAlertTriggeredEventNotification,
    V1BillingMeterErrorReportTriggeredEventNotification,
    V1BillingMeterNoMeterFoundEventNotification,
    V1BillingPortalConfigurationCreatedEventNotification,
    V1BillingPortalConfigurationUpdatedEventNotification,
    V1BillingPortalSessionCreatedEventNotification,
    V1CapabilityUpdatedEventNotification,
    V1CashBalanceFundsAvailableEventNotification,
    V1ChargeCapturedEventNotification,
    V1ChargeDisputeClosedEventNotification,
    V1ChargeDisputeCreatedEventNotification,
    V1ChargeDisputeFundsReinstatedEventNotification,
    V1ChargeDisputeFundsWithdrawnEventNotification,
    V1ChargeDisputeUpdatedEventNotification,
    V1ChargeExpiredEventNotification,
    V1ChargeFailedEventNotification,
    V1ChargePendingEventNotification,
    V1ChargeRefundUpdatedEventNotification,
    V1ChargeRefundedEventNotification,
    V1ChargeSucceededEventNotification,
    V1ChargeUpdatedEventNotification,
    V1CheckoutSessionAsyncPaymentFailedEventNotification,
    V1CheckoutSessionAsyncPaymentSucceededEventNotification,
    V1CheckoutSessionCompletedEventNotification,
    V1CheckoutSessionExpiredEventNotification,
    V1ClimateOrderCanceledEventNotification,
    V1ClimateOrderCreatedEventNotification,
    V1ClimateOrderDelayedEventNotification,
    V1ClimateOrderDeliveredEventNotification,
    V1ClimateOrderProductSubstitutedEventNotification,
    V1ClimateProductCreatedEventNotification,
    V1ClimateProductPricingUpdatedEventNotification,
    V1CouponCreatedEventNotification,
    V1CouponDeletedEventNotification,
    V1CouponUpdatedEventNotification,
    V1CreditNoteCreatedEventNotification,
    V1CreditNoteUpdatedEventNotification,
    V1CreditNoteVoidedEventNotification,
    V1CustomerCreatedEventNotification,
    V1CustomerDeletedEventNotification,
    V1CustomerSubscriptionCreatedEventNotification,
    V1CustomerSubscriptionDeletedEventNotification,
    V1CustomerSubscriptionPausedEventNotification,
    V1CustomerSubscriptionPendingUpdateAppliedEventNotification,
    V1CustomerSubscriptionPendingUpdateExpiredEventNotification,
    V1CustomerSubscriptionResumedEventNotification,
    V1CustomerSubscriptionTrialWillEndEventNotification,
    V1CustomerSubscriptionUpdatedEventNotification,
    V1CustomerTaxIdCreatedEventNotification,
    V1CustomerTaxIdDeletedEventNotification,
    V1CustomerTaxIdUpdatedEventNotification,
    V1CustomerUpdatedEventNotification,
    V1CustomerCashBalanceTransactionCreatedEventNotification,
    V1EntitlementsActiveEntitlementSummaryUpdatedEventNotification,
    V1FileCreatedEventNotification,
    V1FinancialConnectionsAccountCreatedEventNotification,
    V1FinancialConnectionsAccountDeactivatedEventNotification,
    V1FinancialConnectionsAccountDisconnectedEventNotification,
    V1FinancialConnectionsAccountReactivatedEventNotification,
    V1FinancialConnectionsAccountRefreshedBalanceEventNotification,
    V1FinancialConnectionsAccountRefreshedOwnershipEventNotification,
    V1FinancialConnectionsAccountRefreshedTransactionsEventNotification,
    V1IdentityVerificationSessionCanceledEventNotification,
    V1IdentityVerificationSessionCreatedEventNotification,
    V1IdentityVerificationSessionProcessingEventNotification,
    V1IdentityVerificationSessionRedactedEventNotification,
    V1IdentityVerificationSessionRequiresInputEventNotification,
    V1IdentityVerificationSessionVerifiedEventNotification,
    V1InvoiceCreatedEventNotification,
    V1InvoiceDeletedEventNotification,
    V1InvoiceFinalizationFailedEventNotification,
    V1InvoiceFinalizedEventNotification,
    V1InvoiceMarkedUncollectibleEventNotification,
    V1InvoiceOverdueEventNotification,
    V1InvoiceOverpaidEventNotification,
    V1InvoicePaidEventNotification,
    V1InvoicePaymentActionRequiredEventNotification,
    V1InvoicePaymentFailedEventNotification,
    V1InvoicePaymentSucceededEventNotification,
    V1InvoiceSentEventNotification,
    V1InvoiceUpcomingEventNotification,
    V1InvoiceUpdatedEventNotification,
    V1InvoiceVoidedEventNotification,
    V1InvoiceWillBeDueEventNotification,
    V1InvoicePaymentPaidEventNotification,
    V1InvoiceitemCreatedEventNotification,
    V1InvoiceitemDeletedEventNotification,
    V1IssuingAuthorizationCreatedEventNotification,
    V1IssuingAuthorizationRequestEventNotification,
    V1IssuingAuthorizationUpdatedEventNotification,
    V1IssuingCardCreatedEventNotification,
    V1IssuingCardUpdatedEventNotification,
    V1IssuingCardholderCreatedEventNotification,
    V1IssuingCardholderUpdatedEventNotification,
    V1IssuingDisputeClosedEventNotification,
    V1IssuingDisputeCreatedEventNotification,
    V1IssuingDisputeFundsReinstatedEventNotification,
    V1IssuingDisputeFundsRescindedEventNotification,
    V1IssuingDisputeSubmittedEventNotification,
    V1IssuingDisputeUpdatedEventNotification,
    V1IssuingPersonalizationDesignActivatedEventNotification,
    V1IssuingPersonalizationDesignDeactivatedEventNotification,
    V1IssuingPersonalizationDesignRejectedEventNotification,
    V1IssuingPersonalizationDesignUpdatedEventNotification,
    V1IssuingTokenCreatedEventNotification,
    V1IssuingTokenUpdatedEventNotification,
    V1IssuingTransactionCreatedEventNotification,
    V1IssuingTransactionPurchaseDetailsReceiptUpdatedEventNotification,
    V1IssuingTransactionUpdatedEventNotification,
    V1MandateUpdatedEventNotification,
    V1PaymentIntentAmountCapturableUpdatedEventNotification,
    V1PaymentIntentCanceledEventNotification,
    V1PaymentIntentCreatedEventNotification,
    V1PaymentIntentPartiallyFundedEventNotification,
    V1PaymentIntentPaymentFailedEventNotification,
    V1PaymentIntentProcessingEventNotification,
    V1PaymentIntentRequiresActionEventNotification,
    V1PaymentIntentSucceededEventNotification,
    V1PaymentLinkCreatedEventNotification,
    V1PaymentLinkUpdatedEventNotification,
    V1PaymentMethodAttachedEventNotification,
    V1PaymentMethodAutomaticallyUpdatedEventNotification,
    V1PaymentMethodDetachedEventNotification,
    V1PaymentMethodUpdatedEventNotification,
    V1PayoutCanceledEventNotification,
    V1PayoutCreatedEventNotification,
    V1PayoutFailedEventNotification,
    V1PayoutPaidEventNotification,
    V1PayoutReconciliationCompletedEventNotification,
    V1PayoutUpdatedEventNotification,
    V1PersonCreatedEventNotification,
    V1PersonDeletedEventNotification,
    V1PersonUpdatedEventNotification,
    V1PlanCreatedEventNotification,
    V1PlanDeletedEventNotification,
    V1PlanUpdatedEventNotification,
    V1PriceCreatedEventNotification,
    V1PriceDeletedEventNotification,
    V1PriceUpdatedEventNotification,
    V1ProductCreatedEventNotification,
    V1ProductDeletedEventNotification,
    V1ProductUpdatedEventNotification,
    V1PromotionCodeCreatedEventNotification,
    V1PromotionCodeUpdatedEventNotification,
    V1QuoteAcceptedEventNotification,
    V1QuoteCanceledEventNotification,
    V1QuoteCreatedEventNotification,
    V1QuoteFinalizedEventNotification,
    V1RadarEarlyFraudWarningCreatedEventNotification,
    V1RadarEarlyFraudWarningUpdatedEventNotification,
    V1RefundCreatedEventNotification,
    V1RefundFailedEventNotification,
    V1RefundUpdatedEventNotification,
    V1ReviewClosedEventNotification,
    V1ReviewOpenedEventNotification,
    V1SetupIntentCanceledEventNotification,
    V1SetupIntentCreatedEventNotification,
    V1SetupIntentRequiresActionEventNotification,
    V1SetupIntentSetupFailedEventNotification,
    V1SetupIntentSucceededEventNotification,
    V1SigmaScheduledQueryRunCreatedEventNotification,
    V1SourceCanceledEventNotification,
    V1SourceChargeableEventNotification,
    V1SourceFailedEventNotification,
    V1SourceRefundAttributesRequiredEventNotification,
    V1SubscriptionScheduleAbortedEventNotification,
    V1SubscriptionScheduleCanceledEventNotification,
    V1SubscriptionScheduleCompletedEventNotification,
    V1SubscriptionScheduleCreatedEventNotification,
    V1SubscriptionScheduleExpiringEventNotification,
    V1SubscriptionScheduleReleasedEventNotification,
    V1SubscriptionScheduleUpdatedEventNotification,
    V1TaxSettingsUpdatedEventNotification,
    V1TaxRateCreatedEventNotification,
    V1TaxRateUpdatedEventNotification,
    V1TerminalReaderActionFailedEventNotification,
    V1TerminalReaderActionSucceededEventNotification,
    V1TerminalReaderActionUpdatedEventNotification,
    V1TestHelpersTestClockAdvancingEventNotification,
    V1TestHelpersTestClockCreatedEventNotification,
    V1TestHelpersTestClockDeletedEventNotification,
    V1TestHelpersTestClockInternalFailureEventNotification,
    V1TestHelpersTestClockReadyEventNotification,
    V1TopupCanceledEventNotification,
    V1TopupCreatedEventNotification,
    V1TopupFailedEventNotification,
    V1TopupReversedEventNotification,
    V1TopupSucceededEventNotification,
    V1TransferCreatedEventNotification,
    V1TransferReversedEventNotification,
    V1TransferUpdatedEventNotification,
    V2BillingCadenceBilledEventNotification,
    V2BillingCadenceCanceledEventNotification,
    V2BillingCadenceCreatedEventNotification,
    V2BillingLicenseFeeCreatedEventNotification,
    V2BillingLicenseFeeUpdatedEventNotification,
    V2BillingLicenseFeeVersionCreatedEventNotification,
    V2BillingLicensedItemCreatedEventNotification,
    V2BillingLicensedItemUpdatedEventNotification,
    V2BillingMeteredItemCreatedEventNotification,
    V2BillingMeteredItemUpdatedEventNotification,
    V2BillingPricingPlanCreatedEventNotification,
    V2BillingPricingPlanUpdatedEventNotification,
    V2BillingPricingPlanComponentCreatedEventNotification,
    V2BillingPricingPlanComponentUpdatedEventNotification,
    V2BillingPricingPlanSubscriptionCollectionAwaitingCustomerActionEventNotification,
    V2BillingPricingPlanSubscriptionCollectionCurrentEventNotification,
    V2BillingPricingPlanSubscriptionCollectionPastDueEventNotification,
    V2BillingPricingPlanSubscriptionCollectionPausedEventNotification,
    V2BillingPricingPlanSubscriptionCollectionUnpaidEventNotification,
    V2BillingPricingPlanSubscriptionServicingActivatedEventNotification,
    V2BillingPricingPlanSubscriptionServicingCanceledEventNotification,
    V2BillingPricingPlanSubscriptionServicingPausedEventNotification,
    V2BillingPricingPlanVersionCreatedEventNotification,
    V2BillingRateCardCreatedEventNotification,
    V2BillingRateCardUpdatedEventNotification,
    V2BillingRateCardCustomPricingUnitOverageRateCreatedEventNotification,
    V2BillingRateCardRateCreatedEventNotification,
    V2BillingRateCardSubscriptionActivatedEventNotification,
    V2BillingRateCardSubscriptionCanceledEventNotification,
    V2BillingRateCardSubscriptionCollectionAwaitingCustomerActionEventNotification,
    V2BillingRateCardSubscriptionCollectionCurrentEventNotification,
    V2BillingRateCardSubscriptionCollectionPastDueEventNotification,
    V2BillingRateCardSubscriptionCollectionPausedEventNotification,
    V2BillingRateCardSubscriptionCollectionUnpaidEventNotification,
    V2BillingRateCardSubscriptionServicingActivatedEventNotification,
    V2BillingRateCardSubscriptionServicingCanceledEventNotification,
    V2BillingRateCardSubscriptionServicingPausedEventNotification,
    V2BillingRateCardVersionCreatedEventNotification,
    V2CommerceProductCatalogImportsFailedEventNotification,
    V2CommerceProductCatalogImportsProcessingEventNotification,
    V2CommerceProductCatalogImportsSucceededEventNotification,
    V2CommerceProductCatalogImportsSucceededWithErrorsEventNotification,
    V2CoreAccountClosedEventNotification,
    V2CoreAccountCreatedEventNotification,
    V2CoreAccountUpdatedEventNotification,
    V2CoreAccountIncludingConfigurationCardCreatorCapabilityStatusUpdatedEventNotification,
    V2CoreAccountIncludingConfigurationCardCreatorUpdatedEventNotification,
    V2CoreAccountIncludingConfigurationCustomerCapabilityStatusUpdatedEventNotification,
    V2CoreAccountIncludingConfigurationCustomerUpdatedEventNotification,
    V2CoreAccountIncludingConfigurationMerchantCapabilityStatusUpdatedEventNotification,
    V2CoreAccountIncludingConfigurationMerchantUpdatedEventNotification,
    V2CoreAccountIncludingConfigurationRecipientCapabilityStatusUpdatedEventNotification,
    V2CoreAccountIncludingConfigurationRecipientUpdatedEventNotification,
    V2CoreAccountIncludingConfigurationStorerCapabilityStatusUpdatedEventNotification,
    V2CoreAccountIncludingConfigurationStorerUpdatedEventNotification,
    V2CoreAccountIncludingDefaultsUpdatedEventNotification,
    V2CoreAccountIncludingFutureRequirementsUpdatedEventNotification,
    V2CoreAccountIncludingIdentityUpdatedEventNotification,
    V2CoreAccountIncludingRequirementsUpdatedEventNotification,
    V2CoreAccountLinkReturnedEventNotification,
    V2CoreAccountPersonCreatedEventNotification,
    V2CoreAccountPersonDeletedEventNotification,
    V2CoreAccountPersonUpdatedEventNotification,
    V2CoreAccountSignalsFraudulentWebsiteReadyEventNotification,
    V2CoreApprovalRequestApprovedEventNotification,
    V2CoreApprovalRequestCanceledEventNotification,
    V2CoreApprovalRequestFailedEventNotification,
    V2CoreApprovalRequestRejectedEventNotification,
    V2CoreApprovalRequestSucceededEventNotification,
    V2CoreBatchJobBatchFailedEventNotification,
    V2CoreBatchJobCanceledEventNotification,
    V2CoreBatchJobCompletedEventNotification,
    V2CoreBatchJobCreatedEventNotification,
    V2CoreBatchJobReadyForUploadEventNotification,
    V2CoreBatchJobTimeoutEventNotification,
    V2CoreBatchJobUpdatedEventNotification,
    V2CoreBatchJobUploadTimeoutEventNotification,
    V2CoreBatchJobValidatingEventNotification,
    V2CoreBatchJobValidationFailedEventNotification,
    V2CoreClaimableSandboxClaimedEventNotification,
    V2CoreClaimableSandboxCreatedEventNotification,
    V2CoreClaimableSandboxExpiredEventNotification,
    V2CoreClaimableSandboxExpiringEventNotification,
    V2CoreClaimableSandboxUpdatedEventNotification,
    V2CoreEventDestinationPingEventNotification,
    V2CoreHealthApiErrorFiringEventNotification,
    V2CoreHealthApiErrorResolvedEventNotification,
    V2CoreHealthApiLatencyFiringEventNotification,
    V2CoreHealthApiLatencyResolvedEventNotification,
    V2CoreHealthAuthorizationRateDropFiringEventNotification,
    V2CoreHealthAuthorizationRateDropResolvedEventNotification,
    V2CoreHealthEventGenerationFailureResolvedEventNotification,
    V2CoreHealthFraudRateIncreasedEventNotification,
    V2CoreHealthIssuingAuthorizationRequestErrorsFiringEventNotification,
    V2CoreHealthIssuingAuthorizationRequestErrorsResolvedEventNotification,
    V2CoreHealthIssuingAuthorizationRequestTimeoutFiringEventNotification,
    V2CoreHealthIssuingAuthorizationRequestTimeoutResolvedEventNotification,
    V2CoreHealthMeterEventSummariesDelayedFiringEventNotification,
    V2CoreHealthMeterEventSummariesDelayedResolvedEventNotification,
    V2CoreHealthPaymentMethodErrorFiringEventNotification,
    V2CoreHealthPaymentMethodErrorResolvedEventNotification,
    V2CoreHealthSepaDebitDelayedFiringEventNotification,
    V2CoreHealthSepaDebitDelayedResolvedEventNotification,
    V2CoreHealthTrafficVolumeDropFiringEventNotification,
    V2CoreHealthTrafficVolumeDropResolvedEventNotification,
    V2CoreHealthWebhookLatencyFiringEventNotification,
    V2CoreHealthWebhookLatencyResolvedEventNotification,
    V2DataReportingQueryRunCreatedEventNotification,
    V2DataReportingQueryRunFailedEventNotification,
    V2DataReportingQueryRunSucceededEventNotification,
    V2DataReportingQueryRunUpdatedEventNotification,
    V2ExtendWorkflowRunFailedEventNotification,
    V2ExtendWorkflowRunStartedEventNotification,
    V2ExtendWorkflowRunSucceededEventNotification,
    V2IamApiKeyCreatedEventNotification,
    V2IamApiKeyDefaultSecretRevealedEventNotification,
    V2IamApiKeyExpiredEventNotification,
    V2IamApiKeyPermissionsUpdatedEventNotification,
    V2IamApiKeyRotatedEventNotification,
    V2IamApiKeyUpdatedEventNotification,
    V2IamStripeAccessGrantApprovedEventNotification,
    V2IamStripeAccessGrantCanceledEventNotification,
    V2IamStripeAccessGrantDeniedEventNotification,
    V2IamStripeAccessGrantRemovedEventNotification,
    V2IamStripeAccessGrantRequestedEventNotification,
    V2IamStripeAccessGrantUpdatedEventNotification,
    V2MoneyManagementAdjustmentCreatedEventNotification,
    V2MoneyManagementFinancialAccountCreatedEventNotification,
    V2MoneyManagementFinancialAccountUpdatedEventNotification,
    V2MoneyManagementFinancialAddressActivatedEventNotification,
    V2MoneyManagementFinancialAddressFailedEventNotification,
    V2MoneyManagementInboundTransferAvailableEventNotification,
    V2MoneyManagementInboundTransferBankDebitFailedEventNotification,
    V2MoneyManagementInboundTransferBankDebitProcessingEventNotification,
    V2MoneyManagementInboundTransferBankDebitQueuedEventNotification,
    V2MoneyManagementInboundTransferBankDebitReturnedEventNotification,
    V2MoneyManagementInboundTransferBankDebitSucceededEventNotification,
    V2MoneyManagementOutboundPaymentCanceledEventNotification,
    V2MoneyManagementOutboundPaymentCreatedEventNotification,
    V2MoneyManagementOutboundPaymentFailedEventNotification,
    V2MoneyManagementOutboundPaymentPostedEventNotification,
    V2MoneyManagementOutboundPaymentReturnedEventNotification,
    V2MoneyManagementOutboundPaymentUpdatedEventNotification,
    V2MoneyManagementOutboundTransferCanceledEventNotification,
    V2MoneyManagementOutboundTransferCreatedEventNotification,
    V2MoneyManagementOutboundTransferFailedEventNotification,
    V2MoneyManagementOutboundTransferPostedEventNotification,
    V2MoneyManagementOutboundTransferReturnedEventNotification,
    V2MoneyManagementOutboundTransferUpdatedEventNotification,
    V2MoneyManagementPayoutMethodCreatedEventNotification,
    V2MoneyManagementPayoutMethodUpdatedEventNotification,
    V2MoneyManagementReceivedCreditAvailableEventNotification,
    V2MoneyManagementReceivedCreditFailedEventNotification,
    V2MoneyManagementReceivedCreditReturnedEventNotification,
    V2MoneyManagementReceivedCreditSucceededEventNotification,
    V2MoneyManagementReceivedDebitCanceledEventNotification,
    V2MoneyManagementReceivedDebitFailedEventNotification,
    V2MoneyManagementReceivedDebitPendingEventNotification,
    V2MoneyManagementReceivedDebitSucceededEventNotification,
    V2MoneyManagementReceivedDebitUpdatedEventNotification,
    V2MoneyManagementRecipientVerificationCreatedEventNotification,
    V2MoneyManagementRecipientVerificationUpdatedEventNotification,
    V2MoneyManagementTransactionCreatedEventNotification,
    V2MoneyManagementTransactionUpdatedEventNotification,
    V2OrchestratedCommerceAgreementConfirmedEventNotification,
    V2OrchestratedCommerceAgreementCreatedEventNotification,
    V2OrchestratedCommerceAgreementPartiallyConfirmedEventNotification,
    V2OrchestratedCommerceAgreementTerminatedEventNotification,
    V2PaymentsOffSessionPaymentAttemptFailedEventNotification,
    V2PaymentsOffSessionPaymentAttemptStartedEventNotification,
    V2PaymentsOffSessionPaymentAuthorizationAttemptFailedEventNotification,
    V2PaymentsOffSessionPaymentAuthorizationAttemptStartedEventNotification,
    V2PaymentsOffSessionPaymentCanceledEventNotification,
    V2PaymentsOffSessionPaymentCreatedEventNotification,
    V2PaymentsOffSessionPaymentFailedEventNotification,
    V2PaymentsOffSessionPaymentPausedEventNotification,
    V2PaymentsOffSessionPaymentRequiresCaptureEventNotification,
    V2PaymentsOffSessionPaymentResumedEventNotification,
    V2PaymentsOffSessionPaymentSucceededEventNotification,
    V2PaymentsSettlementAllocationIntentCanceledEventNotification,
    V2PaymentsSettlementAllocationIntentCreatedEventNotification,
    V2PaymentsSettlementAllocationIntentErroredEventNotification,
    V2PaymentsSettlementAllocationIntentFundsNotReceivedEventNotification,
    V2PaymentsSettlementAllocationIntentMatchedEventNotification,
    V2PaymentsSettlementAllocationIntentNotFoundEventNotification,
    V2PaymentsSettlementAllocationIntentSettledEventNotification,
    V2PaymentsSettlementAllocationIntentSubmittedEventNotification,
    V2PaymentsSettlementAllocationIntentSplitCanceledEventNotification,
    V2PaymentsSettlementAllocationIntentSplitCreatedEventNotification,
    V2PaymentsSettlementAllocationIntentSplitSettledEventNotification,
    V2ReportingReportRunCreatedEventNotification,
    V2ReportingReportRunFailedEventNotification,
    V2ReportingReportRunSucceededEventNotification,
    V2ReportingReportRunUpdatedEventNotification,
    V2SignalsAccountSignalFraudulentMerchantReadyEventNotification,
  };
}
