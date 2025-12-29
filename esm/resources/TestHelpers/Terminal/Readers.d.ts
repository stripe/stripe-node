import { StripeResource } from '../../../StripeResource.js';
import { Reader } from './../../Terminal/Readers.js';
import { RequestOptions, Response } from '../../../lib.js';
export declare class ReaderResource extends StripeResource {
    /**
     * Presents a payment method on a simulated reader. Can be used to simulate accepting a payment, saving a card or refunding a transaction.
     */
    presentPaymentMethod(id: string, params?: TestHelpers.Terminal.ReaderPresentPaymentMethodParams, options?: RequestOptions): Promise<Response<Reader>>;
    presentPaymentMethod(id: string, options?: RequestOptions): Promise<Response<Reader>>;
    /**
     * Use this endpoint to trigger a successful input collection on a simulated reader.
     */
    succeedInputCollection(id: string, params?: TestHelpers.Terminal.ReaderSucceedInputCollectionParams, options?: RequestOptions): Promise<Response<Reader>>;
    succeedInputCollection(id: string, options?: RequestOptions): Promise<Response<Reader>>;
    /**
     * Use this endpoint to complete an input collection with a timeout error on a simulated reader.
     */
    timeoutInputCollection(id: string, params?: TestHelpers.Terminal.ReaderTimeoutInputCollectionParams, options?: RequestOptions): Promise<Response<Reader>>;
    timeoutInputCollection(id: string, options?: RequestOptions): Promise<Response<Reader>>;
}
export declare namespace TestHelpers {
    namespace Terminal {
        interface ReaderPresentPaymentMethodParams {
            /**
             * Simulated on-reader tip amount.
             */
            amount_tip?: number;
            /**
             * Simulated data for the card payment method.
             */
            card?: ReaderPresentPaymentMethodParams.Card;
            /**
             * Simulated data for the card_present payment method.
             */
            card_present?: ReaderPresentPaymentMethodParams.CardPresent;
            /**
             * Specifies which fields in the response should be expanded.
             */
            expand?: Array<string>;
            /**
             * Simulated data for the interac_present payment method.
             */
            interac_present?: ReaderPresentPaymentMethodParams.InteracPresent;
            /**
             * Simulated payment type.
             */
            type?: ReaderPresentPaymentMethodParams.Type;
        }
        namespace ReaderPresentPaymentMethodParams {
            interface Card {
                /**
                 * Card security code.
                 */
                cvc?: string;
                /**
                 * Two-digit number representing the card's expiration month.
                 */
                exp_month: number;
                /**
                 * Two- or four-digit number representing the card's expiration year.
                 */
                exp_year: number;
                /**
                 * The card number, as a string without any separators.
                 */
                number: string;
            }
            interface CardPresent {
                /**
                 * The card number, as a string without any separators.
                 */
                number?: string;
            }
            interface InteracPresent {
                /**
                 * The Interac card number.
                 */
                number?: string;
            }
            type Type = 'card' | 'card_present' | 'interac_present';
        }
    }
}
export declare namespace TestHelpers {
    namespace Terminal {
        interface ReaderSucceedInputCollectionParams {
            /**
             * Specifies which fields in the response should be expanded.
             */
            expand?: Array<string>;
            /**
             * This parameter defines the skip behavior for input collection.
             */
            skip_non_required_inputs?: ReaderSucceedInputCollectionParams.SkipNonRequiredInputs;
        }
        namespace ReaderSucceedInputCollectionParams {
            type SkipNonRequiredInputs = 'all' | 'none';
        }
    }
}
export declare namespace TestHelpers {
    namespace Terminal {
        interface ReaderTimeoutInputCollectionParams {
            /**
             * Specifies which fields in the response should be expanded.
             */
            expand?: Array<string>;
        }
    }
}
