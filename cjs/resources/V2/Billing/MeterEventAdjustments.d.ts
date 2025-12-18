import { StripeResource } from '../../../StripeResource.js';
import { RequestOptions } from '../../../Types.js';
import { Response } from '../../../lib.js';
export declare class MeterEventAdjustmentResource extends StripeResource {
    /**
     * Creates a meter event adjustment to cancel a previously sent meter event.
     */
    create(params: V2.Billing.MeterEventAdjustmentCreateParams, options?: RequestOptions): Promise<Response<MeterEventAdjustment>>;
}
export /**
 * The MeterEventAdjustment object.
 */ interface MeterEventAdjustment {
    /**
     * The unique id of this meter event adjustment.
     */
    id: string;
    /**
     * String representing the object's type. Objects of the same type share the same value of the object field.
     */
    object: 'v2.billing.meter_event_adjustment';
    /**
     * Specifies which event to cancel.
     */
    cancel: V2.Billing.MeterEventAdjustment.Cancel;
    /**
     * The time the adjustment was created.
     */
    created: string;
    /**
     * The name of the meter event. Corresponds with the `event_name` field on a meter.
     */
    event_name: string;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * Open Enum. The meter event adjustment's status.
     */
    status: V2.Billing.MeterEventAdjustment.Status;
    /**
     * Open Enum. Specifies whether to cancel a single event or a range of events for a time period. Time period cancellation is not supported yet.
     */
    type: 'cancel';
}
export declare namespace V2 {
    namespace Billing {
        namespace MeterEventAdjustment {
            interface Cancel {
                /**
                 * Unique identifier for the event. You can only cancel events within 24 hours of Stripe receiving them.
                 */
                identifier: string;
            }
            type Status = 'complete' | 'pending';
        }
    }
}
export declare namespace V2 {
    namespace Billing {
        interface MeterEventAdjustmentCreateParams {
            /**
             * Specifies which event to cancel.
             */
            cancel: MeterEventAdjustmentCreateParams.Cancel;
            /**
             * The name of the meter event. Corresponds with the `event_name` field on a meter.
             */
            event_name: string;
            /**
             * Specifies whether to cancel a single event or a range of events for a time period. Time period cancellation is not supported yet.
             */
            type: 'cancel';
        }
        namespace MeterEventAdjustmentCreateParams {
            interface Cancel {
                /**
                 * Unique identifier for the event. You can only cancel events within 24 hours of Stripe receiving them.
                 */
                identifier: string;
            }
        }
    }
}
