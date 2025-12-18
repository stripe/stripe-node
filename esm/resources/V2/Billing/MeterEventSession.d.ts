import { StripeResource } from '../../../StripeResource.js';
import { RequestOptions } from '../../../Types.js';
import { Response } from '../../../lib.js';
export declare class MeterEventSessionResource extends StripeResource {
    /**
     * Creates a meter event session to send usage on the high-throughput meter event stream. Authentication tokens are only valid for 15 minutes, so you will need to create a new meter event session when your token expires.
     */
    create(params?: V2.Billing.MeterEventSessionCreateParams, options?: RequestOptions): Promise<Response<MeterEventSession>>;
    create(options?: RequestOptions): Promise<Response<MeterEventSession>>;
}
export /**
 * The MeterEventSession object.
 */ interface MeterEventSession {
    /**
     * The unique id of this auth session.
     */
    id: string;
    /**
     * String representing the object's type. Objects of the same type share the same value of the object field.
     */
    object: 'v2.billing.meter_event_session';
    /**
     * The authentication token for this session.  Use this token when calling the
     * high-throughput meter event API.
     */
    authentication_token: string;
    /**
     * The creation time of this session.
     */
    created: string;
    /**
     * The time at which this session will expire.
     */
    expires_at: string;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
}
export declare namespace V2 {
    namespace Billing {
        interface MeterEventSessionCreateParams {
        }
    }
}
