import { StripeResource } from '../../../StripeResource.js';
import { OutboundPayment } from './../../Treasury/OutboundPayments.js';
import { RequestOptions, Response } from '../../../lib.js';
export declare class OutboundPaymentResource extends StripeResource {
    /**
     * Updates a test mode created OutboundPayment with tracking details. The OutboundPayment must not be cancelable, and cannot be in the canceled or failed states.
     */
    update(id: string, params: TestHelpers.Treasury.OutboundPaymentUpdateParams, options?: RequestOptions): Promise<Response<OutboundPayment>>;
    /**
     * Transitions a test mode created OutboundPayment to the failed status. The OutboundPayment must already be in the processing state.
     */
    fail(id: string, params?: TestHelpers.Treasury.OutboundPaymentFailParams, options?: RequestOptions): Promise<Response<OutboundPayment>>;
    fail(id: string, options?: RequestOptions): Promise<Response<OutboundPayment>>;
    /**
     * Transitions a test mode created OutboundPayment to the posted status. The OutboundPayment must already be in the processing state.
     */
    post(id: string, params?: TestHelpers.Treasury.OutboundPaymentPostParams, options?: RequestOptions): Promise<Response<OutboundPayment>>;
    post(id: string, options?: RequestOptions): Promise<Response<OutboundPayment>>;
    /**
     * Transitions a test mode created OutboundPayment to the returned status. The OutboundPayment must already be in the processing state.
     */
    returnOutboundPayment(id: string, params?: TestHelpers.Treasury.OutboundPaymentReturnOutboundPaymentParams, options?: RequestOptions): Promise<Response<OutboundPayment>>;
    returnOutboundPayment(id: string, options?: RequestOptions): Promise<Response<OutboundPayment>>;
}
export declare namespace TestHelpers {
    namespace Treasury {
        interface OutboundPaymentUpdateParams {
            /**
             * Details about network-specific tracking information.
             */
            tracking_details: OutboundPaymentUpdateParams.TrackingDetails;
            /**
             * Specifies which fields in the response should be expanded.
             */
            expand?: Array<string>;
        }
        namespace OutboundPaymentUpdateParams {
            interface TrackingDetails {
                /**
                 * ACH network tracking details.
                 */
                ach?: TrackingDetails.Ach;
                /**
                 * The US bank account network used to send funds.
                 */
                type: TrackingDetails.Type;
                /**
                 * US domestic wire network tracking details.
                 */
                us_domestic_wire?: TrackingDetails.UsDomesticWire;
            }
            namespace TrackingDetails {
                interface Ach {
                    /**
                     * ACH trace ID for funds sent over the `ach` network.
                     */
                    trace_id: string;
                }
                type Type = 'ach' | 'us_domestic_wire';
                interface UsDomesticWire {
                    /**
                     * CHIPS System Sequence Number (SSN) for funds sent over the `us_domestic_wire` network.
                     */
                    chips?: string;
                    /**
                     * IMAD for funds sent over the `us_domestic_wire` network.
                     */
                    imad?: string;
                    /**
                     * OMAD for funds sent over the `us_domestic_wire` network.
                     */
                    omad?: string;
                }
            }
        }
    }
}
export declare namespace TestHelpers {
    namespace Treasury {
        interface OutboundPaymentFailParams {
            /**
             * Specifies which fields in the response should be expanded.
             */
            expand?: Array<string>;
        }
    }
}
export declare namespace TestHelpers {
    namespace Treasury {
        interface OutboundPaymentPostParams {
            /**
             * Specifies which fields in the response should be expanded.
             */
            expand?: Array<string>;
        }
    }
}
export declare namespace TestHelpers {
    namespace Treasury {
        interface OutboundPaymentReturnOutboundPaymentParams {
            /**
             * Specifies which fields in the response should be expanded.
             */
            expand?: Array<string>;
            /**
             * Optional hash to set the return code.
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
                type Code = 'account_closed' | 'account_frozen' | 'bank_account_restricted' | 'bank_ownership_changed' | 'declined' | 'incorrect_account_holder_name' | 'invalid_account_number' | 'invalid_currency' | 'no_account' | 'other';
            }
        }
    }
}
