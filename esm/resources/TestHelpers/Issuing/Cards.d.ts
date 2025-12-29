import { StripeResource } from '../../../StripeResource.js';
import { Card } from './../../Issuing/Cards.js';
import { RequestOptions, Response } from '../../../lib.js';
export declare class CardResource extends StripeResource {
    /**
     * Updates the shipping status of the specified Issuing Card object to delivered.
     */
    deliverCard(id: string, params?: TestHelpers.Issuing.CardDeliverCardParams, options?: RequestOptions): Promise<Response<Card>>;
    deliverCard(id: string, options?: RequestOptions): Promise<Response<Card>>;
    /**
     * Updates the shipping status of the specified Issuing Card object to failure.
     */
    failCard(id: string, params?: TestHelpers.Issuing.CardFailCardParams, options?: RequestOptions): Promise<Response<Card>>;
    failCard(id: string, options?: RequestOptions): Promise<Response<Card>>;
    /**
     * Updates the shipping status of the specified Issuing Card object to returned.
     */
    returnCard(id: string, params?: TestHelpers.Issuing.CardReturnCardParams, options?: RequestOptions): Promise<Response<Card>>;
    returnCard(id: string, options?: RequestOptions): Promise<Response<Card>>;
    /**
     * Updates the shipping status of the specified Issuing Card object to shipped.
     */
    shipCard(id: string, params?: TestHelpers.Issuing.CardShipCardParams, options?: RequestOptions): Promise<Response<Card>>;
    shipCard(id: string, options?: RequestOptions): Promise<Response<Card>>;
    /**
     * Updates the shipping status of the specified Issuing Card object to submitted. This method requires Stripe Version ‘2024-09-30.acacia' or later.
     */
    submitCard(id: string, params?: TestHelpers.Issuing.CardSubmitCardParams, options?: RequestOptions): Promise<Response<Card>>;
    submitCard(id: string, options?: RequestOptions): Promise<Response<Card>>;
}
export declare namespace TestHelpers {
    namespace Issuing {
        interface CardDeliverCardParams {
            /**
             * Specifies which fields in the response should be expanded.
             */
            expand?: Array<string>;
        }
    }
}
export declare namespace TestHelpers {
    namespace Issuing {
        interface CardFailCardParams {
            /**
             * Specifies which fields in the response should be expanded.
             */
            expand?: Array<string>;
        }
    }
}
export declare namespace TestHelpers {
    namespace Issuing {
        interface CardReturnCardParams {
            /**
             * Specifies which fields in the response should be expanded.
             */
            expand?: Array<string>;
        }
    }
}
export declare namespace TestHelpers {
    namespace Issuing {
        interface CardShipCardParams {
            /**
             * Specifies which fields in the response should be expanded.
             */
            expand?: Array<string>;
        }
    }
}
export declare namespace TestHelpers {
    namespace Issuing {
        interface CardSubmitCardParams {
            /**
             * Specifies which fields in the response should be expanded.
             */
            expand?: Array<string>;
        }
    }
}
