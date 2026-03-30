// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {RedactionJobValidationError} from './RedactionJobValidationErrors.js';
import {PaginationParams} from '../../shared.js';
import {RequestOptions, ApiListPromise, Response} from '../../lib.js';
const stripeMethod = StripeResource.method;

export class RedactionJobResource extends StripeResource {
  /**
   * Returns a list of redaction jobs.
   */
  list(
    params?: Privacy.RedactionJobListParams,
    options?: RequestOptions
  ): ApiListPromise<RedactionJob>;
  list(options?: RequestOptions): ApiListPromise<RedactionJob>;
  list(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/privacy/redaction_jobs',
      methodType: 'list',
    }).call(this, ...args);
  }

  /**
   * Creates a redaction job. When a job is created, it will start to validate.
   */
  create(
    params: Privacy.RedactionJobCreateParams,
    options?: RequestOptions
  ): Promise<Response<RedactionJob>>;
  create(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/privacy/redaction_jobs',
    }).call(this, ...args);
  }

  /**
   * Retrieves the details of a previously created redaction job.
   */
  retrieve(
    id: string,
    params?: Privacy.RedactionJobRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<RedactionJob>>;
  retrieve(
    id: string,
    options?: RequestOptions
  ): Promise<Response<RedactionJob>>;
  retrieve(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/privacy/redaction_jobs/{job}',
    }).call(this, ...args);
  }

  /**
   * Updates the properties of a redaction job without running or canceling the job.
   *
   * If the job to update is in a failed status, it will not automatically start to validate. Once you applied all of the changes, use the validate API to start validation again.
   */
  update(
    id: string,
    params?: Privacy.RedactionJobUpdateParams,
    options?: RequestOptions
  ): Promise<Response<RedactionJob>>;
  update(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/privacy/redaction_jobs/{job}',
    }).call(this, ...args);
  }

  /**
   * You can cancel a redaction job when it's in one of these statuses: ready, failed.
   *
   * Canceling the redaction job will abandon its attempt to redact the configured objects. A canceled job cannot be used again.
   */
  cancel(
    id: string,
    params?: Privacy.RedactionJobCancelParams,
    options?: RequestOptions
  ): Promise<Response<RedactionJob>>;
  cancel(id: string, options?: RequestOptions): Promise<Response<RedactionJob>>;
  cancel(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/privacy/redaction_jobs/{job}/cancel',
    }).call(this, ...args);
  }

  /**
   * Run a redaction job in a ready status.
   *
   * When you run a job, the configured objects will be redacted asynchronously. This action is irreversible and cannot be canceled once started.
   *
   * The status of the job will move to redacting. Once all of the objects are redacted, the status will become succeeded. If the job's validation_behavior is set to fix, the automatic fixes will be applied to objects at this step.
   */
  run(
    id: string,
    params?: Privacy.RedactionJobRunParams,
    options?: RequestOptions
  ): Promise<Response<RedactionJob>>;
  run(id: string, options?: RequestOptions): Promise<Response<RedactionJob>>;
  run(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/privacy/redaction_jobs/{job}/run',
    }).call(this, ...args);
  }

  /**
   * Validate a redaction job when it is in a failed status.
   *
   * When a job is created, it automatically begins to validate on the configured objects' eligibility for redaction. Use this to validate the job again after its validation errors are resolved or the job's validation_behavior is changed.
   *
   * The status of the job will move to validating. Once all of the objects are validated, the status of the job will become ready. If there are any validation errors preventing the job from running, the status will become failed.
   */
  validate(
    id: string,
    params?: Privacy.RedactionJobValidateParams,
    options?: RequestOptions
  ): Promise<Response<RedactionJob>>;
  validate(
    id: string,
    options?: RequestOptions
  ): Promise<Response<RedactionJob>>;
  validate(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/privacy/redaction_jobs/{job}/validate',
    }).call(this, ...args);
  }

  /**
   * Returns a list of validation errors for the specified redaction job.
   */
  listValidationErrors(
    id: string,
    params?: Privacy.RedactionJobListValidationErrorsParams,
    options?: RequestOptions
  ): ApiListPromise<RedactionJobValidationError>;
  listValidationErrors(
    id: string,
    options?: RequestOptions
  ): ApiListPromise<RedactionJobValidationError>;
  listValidationErrors(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/privacy/redaction_jobs/{job}/validation_errors',
      methodType: 'list',
    }).call(this, ...args);
  }
}
export interface RedactionJob {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'privacy.redaction_job';

  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;

  /**
   * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
   */
  livemode: boolean;

  /**
   * The objects to redact in this job.
   */
  objects?: Privacy.RedactionJob.Objects | null;

  /**
   * The status of the job.
   */
  status: Privacy.RedactionJob.Status;

  /**
   * Validation behavior determines how a job validates objects for redaction eligibility. Default is `error`.
   */
  validation_behavior: Privacy.RedactionJob.ValidationBehavior | null;
}
export namespace Privacy {
  export namespace RedactionJob {
    export interface Objects {
      /**
       * Charge object identifiers usually starting with `ch_`
       */
      charges: Array<string> | null;

      /**
       * CheckoutSession object identifiers starting with `cs_`
       */
      checkout_sessions: Array<string> | null;

      /**
       * Customer object identifiers starting with `cus_`
       */
      customers: Array<string> | null;

      /**
       * Identity VerificationSessions object identifiers starting with `vs_`
       */
      identity_verification_sessions: Array<string> | null;

      /**
       * Invoice object identifiers starting with `in_`
       */
      invoices: Array<string> | null;

      /**
       * Issuing Cardholder object identifiers starting with `ich_`
       */
      issuing_cardholders: Array<string> | null;

      /**
       * PaymentIntent object identifiers starting with `pi_`
       */
      payment_intents: Array<string> | null;

      /**
       * Fraud ValueListItem object identifiers starting with `rsli_`
       */
      radar_value_list_items: Array<string> | null;

      /**
       * SetupIntent object identifiers starting with `seti_`
       */
      setup_intents: Array<string> | null;
    }

    export type Status =
      | 'canceled'
      | 'canceling'
      | 'created'
      | 'failed'
      | 'ready'
      | 'redacting'
      | 'succeeded'
      | 'validating';

    export type ValidationBehavior = 'error' | 'fix';
  }
}
export namespace Privacy {
  export interface RedactionJobCreateParams {
    /**
     * The objects to redact. These root objects and their related ones will be validated for redaction.
     */
    objects: RedactionJobCreateParams.Objects;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Determines the validation behavior of the job. Default is `error`.
     */
    validation_behavior?: RedactionJobCreateParams.ValidationBehavior;
  }

  export namespace RedactionJobCreateParams {
    export interface Objects {
      charges?: Array<string>;

      checkout_sessions?: Array<string>;

      customers?: Array<string>;

      identity_verification_sessions?: Array<string>;

      invoices?: Array<string>;

      issuing_cardholders?: Array<string>;

      issuing_cards?: Array<string>;

      payment_intents?: Array<string>;

      radar_value_list_items?: Array<string>;

      setup_intents?: Array<string>;
    }

    export type ValidationBehavior = 'error' | 'fix';
  }
}
export namespace Privacy {
  export interface RedactionJobRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
export namespace Privacy {
  export interface RedactionJobUpdateParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Determines the validation behavior of the job. Default is `error`.
     */
    validation_behavior?: RedactionJobUpdateParams.ValidationBehavior;
  }

  export namespace RedactionJobUpdateParams {
    export type ValidationBehavior = 'error' | 'fix';
  }
}
export namespace Privacy {
  export interface RedactionJobListParams extends PaginationParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * If provided, only RedactionJob objects with the given status will be returned.
     */
    status?: RedactionJobListParams.Status;
  }

  export namespace RedactionJobListParams {
    export type Status =
      | 'canceled'
      | 'canceling'
      | 'created'
      | 'failed'
      | 'ready'
      | 'redacting'
      | 'succeeded'
      | 'validating';
  }
}
export namespace Privacy {
  export interface RedactionJobCancelParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
export namespace Privacy {
  export interface RedactionJobListValidationErrorsParams
    extends PaginationParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
export namespace Privacy {
  export interface RedactionJobRunParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
export namespace Privacy {
  export interface RedactionJobValidateParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
