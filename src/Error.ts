/* eslint-disable camelcase */
/* eslint-disable no-warning-comments */

import {RawErrorType, StripeRawError} from './Types.js';

export const generateV1Error = (
  rawStripeError: StripeRawError
): StripeError => {
  switch (rawStripeError.type) {
    case 'card_error':
      return new StripeCardError(rawStripeError);
    case 'invalid_request_error':
      return new StripeInvalidRequestError(rawStripeError);
    case 'api_error':
      return new StripeAPIError(rawStripeError);
    case 'authentication_error':
      return new StripeAuthenticationError(rawStripeError);
    case 'rate_limit_error':
      return new StripeRateLimitError(rawStripeError);
    case 'idempotency_error':
      return new StripeIdempotencyError(rawStripeError);
    case 'invalid_grant':
      return new StripeInvalidGrantError(rawStripeError);
    default:
      return new StripeUnknownError(rawStripeError);
  }
};

// eslint-disable-next-line complexity
export const generateV2Error = (
  rawStripeError: StripeRawError
): StripeError => {
  switch (rawStripeError.type) {
    // switchCases: The beginning of the section generated from our OpenAPI spec
    case 'temporary_session_expired':
      return new TemporarySessionExpiredError(rawStripeError);
    // switchCases: The end of the section generated from our OpenAPI spec
  }

  // Special handling for requests with missing required fields in V2 APIs.
  // invalid_field response in V2 APIs returns the field 'code' instead of 'type'.
  switch (rawStripeError.code) {
    case 'invalid_fields':
      return new StripeInvalidRequestError(rawStripeError);
  }

  return generateV1Error(rawStripeError);
};

/**
 * StripeError is the base error from which all other more specific Stripe errors derive.
 * Specifically for errors returned from Stripe's REST API.
 */
export class StripeError extends Error {
  readonly message: string;
  readonly userMessage?: string;
  readonly type: string;
  readonly raw: unknown;
  readonly rawType?: RawErrorType;
  readonly headers?: {[header: string]: string};
  readonly requestId?: string;

  readonly code?: string;
  readonly doc_url?: string;
  readonly param?: string;
  readonly detail?: string | Error;
  readonly statusCode?: number;
  readonly charge?: string;
  readonly decline_code?: string;
  readonly payment_method_type?: string;

  readonly payment_intent?: any;
  readonly payment_method?: any;
  readonly setup_intent?: any;
  readonly source?: any;

  constructor(raw: StripeRawError = {}, type: string | null = null) {
    super(raw.message);
    this.type = type || this.constructor.name;

    this.raw = raw;
    this.rawType = raw.type;
    this.code = raw.code;
    this.doc_url = raw.doc_url;
    this.param = raw.param;
    this.detail = raw.detail;
    this.headers = raw.headers;
    this.requestId = raw.requestId;
    this.statusCode = raw.statusCode;
    // @ts-ignore
    this.message = raw.message;
    this.userMessage = raw.user_message;
    this.charge = raw.charge;
    this.decline_code = raw.decline_code;
    this.payment_intent = raw.payment_intent;
    this.payment_method = raw.payment_method;
    this.payment_method_type = raw.payment_method_type;
    this.setup_intent = raw.setup_intent;
    this.source = raw.source;
  }

  /**
   * Helper factory which takes raw stripe errors and outputs wrapping instances
   */
  static generate = generateV1Error;
}

// Specific Stripe Error types:

/**
 * CardError is raised when a user enters a card that can't be charged for
 * some reason.
 */
export class StripeCardError extends StripeError {
  constructor(raw: StripeRawError = {}) {
    super(raw, 'StripeCardError');
  }
}

/**
 * InvalidRequestError is raised when a request is initiated with invalid
 * parameters.
 */
export class StripeInvalidRequestError extends StripeError {
  constructor(raw: StripeRawError = {}) {
    super(raw, 'StripeInvalidRequestError');
  }
}

/**
 * APIError is a generic error that may be raised in cases where none of the
 * other named errors cover the problem. It could also be raised in the case
 * that a new error has been introduced in the API, but this version of the
 * Node.JS SDK doesn't know how to handle it.
 */
export class StripeAPIError extends StripeError {
  constructor(raw: StripeRawError = {}) {
    super(raw, 'StripeAPIError');
  }
}

/**
 * AuthenticationError is raised when invalid credentials are used to connect
 * to Stripe's servers.
 */
export class StripeAuthenticationError extends StripeError {
  constructor(raw: StripeRawError = {}) {
    super(raw, 'StripeAuthenticationError');
  }
}

/**
 * PermissionError is raised in cases where access was attempted on a resource
 * that wasn't allowed.
 */
export class StripePermissionError extends StripeError {
  constructor(raw: StripeRawError = {}) {
    super(raw, 'StripePermissionError');
  }
}

/**
 * RateLimitError is raised in cases where an account is putting too much load
 * on Stripe's API servers (usually by performing too many requests). Please
 * back off on request rate.
 */
export class StripeRateLimitError extends StripeError {
  constructor(raw: StripeRawError = {}) {
    super(raw, 'StripeRateLimitError');
  }
}

/**
 * StripeConnectionError is raised in the event that the SDK can't connect to
 * Stripe's servers. That can be for a variety of different reasons from a
 * downed network to a bad TLS certificate.
 */
export class StripeConnectionError extends StripeError {
  constructor(raw: StripeRawError = {}) {
    super(raw, 'StripeConnectionError');
  }
}

/**
 * SignatureVerificationError is raised when the signature verification for a
 * webhook fails
 */
export class StripeSignatureVerificationError extends StripeError {
  header: string | Uint8Array;
  payload: string | Uint8Array;

  constructor(
    header: string | Uint8Array,
    payload: string | Uint8Array,
    raw: StripeRawError = {}
  ) {
    super(raw, 'StripeSignatureVerificationError');
    this.header = header;
    this.payload = payload;
  }
}

/**
 * IdempotencyError is raised in cases where an idempotency key was used
 * improperly.
 */
export class StripeIdempotencyError extends StripeError {
  constructor(raw: StripeRawError = {}) {
    super(raw, 'StripeIdempotencyError');
  }
}

/**
 * InvalidGrantError is raised when a specified code doesn't exist, is
 * expired, has been used, or doesn't belong to you; a refresh token doesn't
 * exist, or doesn't belong to you; or if an API key's mode (live or test)
 * doesn't match the mode of a code or refresh token.
 */
export class StripeInvalidGrantError extends StripeError {
  constructor(raw: StripeRawError = {}) {
    super(raw, 'StripeInvalidGrantError');
  }
}

/**
 * Any other error from Stripe not specifically captured above
 */
export class StripeUnknownError extends StripeError {
  constructor(raw: StripeRawError = {}) {
    super(raw, 'StripeUnknownError');
  }
}

// classDefinitions: The beginning of the section generated from our OpenAPI spec
export class TemporarySessionExpiredError extends StripeError {
  constructor(rawStripeError: StripeRawError = {}) {
    super(rawStripeError, 'TemporarySessionExpiredError');
  }
}
// classDefinitions: The end of the section generated from our OpenAPI spec
