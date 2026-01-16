import { StripeResource } from '../../StripeResource.js';
import { File } from './../Files.js';
import { PaginationParams } from '../../shared.js';
import { RequestOptions, ApiListPromise, Response } from '../../lib.js';
export declare class ScheduledQueryRunResource extends StripeResource {
    /**
     * Returns a list of scheduled query runs.
     */
    list(params?: Sigma.ScheduledQueryRunListParams, options?: RequestOptions): ApiListPromise<ScheduledQueryRun>;
    list(options?: RequestOptions): ApiListPromise<ScheduledQueryRun>;
    /**
     * Retrieves the details of an scheduled query run.
     */
    retrieve(id: string, params?: Sigma.ScheduledQueryRunRetrieveParams, options?: RequestOptions): Promise<Response<ScheduledQueryRun>>;
    retrieve(id: string, options?: RequestOptions): Promise<Response<ScheduledQueryRun>>;
}
export interface ScheduledQueryRun {
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'scheduled_query_run';
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;
    /**
     * When the query was run, Sigma contained a snapshot of your Stripe data at this time.
     */
    data_load_time: number;
    error?: Sigma.ScheduledQueryRun.Error;
    /**
     * The file object representing the results of the query.
     */
    file: File | null;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * Time at which the result expires and is no longer available for download.
     */
    result_available_until: number;
    /**
     * SQL for the query.
     */
    sql: string;
    /**
     * The query's execution status, which will be `completed` for successful runs, and `canceled`, `failed`, or `timed_out` otherwise.
     */
    status: string;
    /**
     * Title of the query.
     */
    title: string;
}
export declare namespace Sigma {
    namespace ScheduledQueryRun {
        interface Error {
            /**
             * Information about the run failure.
             */
            message: string;
        }
    }
}
export declare namespace Sigma {
    interface ScheduledQueryRunRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
    }
}
export declare namespace Sigma {
    interface ScheduledQueryRunListParams extends PaginationParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
    }
}
