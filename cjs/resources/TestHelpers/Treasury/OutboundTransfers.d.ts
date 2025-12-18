import { StripeResource } from '../../../StripeResource.js';
import { RequestOptions } from '../../../Types.js';
import { OutboundTransfer } from './../../Treasury/OutboundTransfers.js';
import { Response } from '../../../lib.js';
export declare class OutboundTransferResource extends StripeResource {
    /**
     * Updates a test mode created OutboundTransfer with tracking details. The OutboundTransfer must not be cancelable, and cannot be in the canceled or failed states.
     */
    update(id: string, params: TestHelpers.Treasury.OutboundTransferUpdateParams, options?: RequestOptions): Promise<Response<OutboundTransfer>>;
    /**
     * Transitions a test mode created OutboundTransfer to the failed status. The OutboundTransfer must already be in the processing state.
     */
    fail(id: string, params?: TestHelpers.Treasury.OutboundTransferFailParams, options?: RequestOptions): Promise<Response<OutboundTransfer>>;
    fail(id: string, options?: RequestOptions): Promise<Response<OutboundTransfer>>;
    /**
     * Transitions a test mode created OutboundTransfer to the posted status. The OutboundTransfer must already be in the processing state.
     */
    post(id: string, params?: TestHelpers.Treasury.OutboundTransferPostParams, options?: RequestOptions): Promise<Response<OutboundTransfer>>;
    post(id: string, options?: RequestOptions): Promise<Response<OutboundTransfer>>;
    /**
     * Transitions a test mode created OutboundTransfer to the returned status. The OutboundTransfer must already be in the processing state.
     */
    returnOutboundTransfer(id: string, params?: TestHelpers.Treasury.OutboundTransferReturnOutboundTransferParams, options?: RequestOptions): Promise<Response<OutboundTransfer>>;
    returnOutboundTransfer(id: string, options?: RequestOptions): Promise<Response<OutboundTransfer>>;
}
export declare namespace TestHelpers {
    namespace Treasury {
        interface OutboundTransferUpdateParams {
            /**
             * Details about network-specific tracking information.
             */
            tracking_details: OutboundTransferUpdateParams.TrackingDetails;
            /**
             * Specifies which fields in the response should be expanded.
             */
            expand?: Array<string>;
        }
        namespace OutboundTransferUpdateParams {
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
        interface OutboundTransferFailParams {
            /**
             * Specifies which fields in the response should be expanded.
             */
            expand?: Array<string>;
        }
    }
}
export declare namespace TestHelpers {
    namespace Treasury {
        interface OutboundTransferPostParams {
            /**
             * Specifies which fields in the response should be expanded.
             */
            expand?: Array<string>;
        }
    }
}
export declare namespace TestHelpers {
    namespace Treasury {
        interface OutboundTransferReturnOutboundTransferParams {
            /**
             * Specifies which fields in the response should be expanded.
             */
            expand?: Array<string>;
            /**
             * Details about a returned OutboundTransfer.
             */
            returned_details?: OutboundTransferReturnOutboundTransferParams.ReturnedDetails;
        }
        namespace OutboundTransferReturnOutboundTransferParams {
            interface ReturnedDetails {
                /**
                 * Reason for the return.
                 */
                code?: ReturnedDetails.Code;
            }
            namespace ReturnedDetails {
                type Code = 'account_closed' | 'account_frozen' | 'bank_account_restricted' | 'bank_ownership_changed' | 'declined' | 'incorrect_account_holder_name' | 'invalid_account_number' | 'invalid_currency' | 'no_account' | 'other';
            }
        }
    }
}
