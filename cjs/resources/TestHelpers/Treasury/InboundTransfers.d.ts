import { StripeResource } from '../../../StripeResource.js';
import { RequestOptions } from '../../../Types.js';
import { InboundTransfer } from './../../Treasury/InboundTransfers.js';
import { Response } from '../../../lib.js';
export declare class InboundTransferResource extends StripeResource {
    /**
     * Transitions a test mode created InboundTransfer to the failed status. The InboundTransfer must already be in the processing state.
     */
    fail(id: string, params?: TestHelpers.Treasury.InboundTransferFailParams, options?: RequestOptions): Promise<Response<InboundTransfer>>;
    fail(id: string, options?: RequestOptions): Promise<Response<InboundTransfer>>;
    /**
     * Marks the test mode InboundTransfer object as returned and links the InboundTransfer to a ReceivedDebit. The InboundTransfer must already be in the succeeded state.
     */
    returnInboundTransfer(id: string, params?: TestHelpers.Treasury.InboundTransferReturnInboundTransferParams, options?: RequestOptions): Promise<Response<InboundTransfer>>;
    returnInboundTransfer(id: string, options?: RequestOptions): Promise<Response<InboundTransfer>>;
    /**
     * Transitions a test mode created InboundTransfer to the succeeded status. The InboundTransfer must already be in the processing state.
     */
    succeed(id: string, params?: TestHelpers.Treasury.InboundTransferSucceedParams, options?: RequestOptions): Promise<Response<InboundTransfer>>;
    succeed(id: string, options?: RequestOptions): Promise<Response<InboundTransfer>>;
}
export declare namespace TestHelpers {
    namespace Treasury {
        interface InboundTransferFailParams {
            /**
             * Specifies which fields in the response should be expanded.
             */
            expand?: Array<string>;
            /**
             * Details about a failed InboundTransfer.
             */
            failure_details?: InboundTransferFailParams.FailureDetails;
        }
        namespace InboundTransferFailParams {
            interface FailureDetails {
                /**
                 * Reason for the failure.
                 */
                code?: FailureDetails.Code;
            }
            namespace FailureDetails {
                type Code = 'account_closed' | 'account_frozen' | 'bank_account_restricted' | 'bank_ownership_changed' | 'debit_not_authorized' | 'incorrect_account_holder_address' | 'incorrect_account_holder_name' | 'incorrect_account_holder_tax_id' | 'insufficient_funds' | 'invalid_account_number' | 'invalid_currency' | 'no_account' | 'other';
            }
        }
    }
}
export declare namespace TestHelpers {
    namespace Treasury {
        interface InboundTransferReturnInboundTransferParams {
            /**
             * Specifies which fields in the response should be expanded.
             */
            expand?: Array<string>;
        }
    }
}
export declare namespace TestHelpers {
    namespace Treasury {
        interface InboundTransferSucceedParams {
            /**
             * Specifies which fields in the response should be expanded.
             */
            expand?: Array<string>;
        }
    }
}
