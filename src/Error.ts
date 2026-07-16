/* eslint-disable camelcase */
/* eslint-disable no-warning-comments */

import {HttpClientResponseError} from './RequestSender.js';
import {RawErrorType, StripeRawError} from './Types.js';
// errorImports: The beginning of the section generated from our OpenAPI spec
import {GiftCardOperation} from './resources/GiftCardOperations.js';
import {PaymentIntent} from './resources/PaymentIntents.js';
import {PaymentMethod} from './resources/PaymentMethods.js';
import {SetupIntent} from './resources/SetupIntents.js';
import {CustomerSource} from './resources/CustomerSources.js';
// errorImports: The end of the section generated from our OpenAPI spec

export const generateV1Error = (
  rawStripeError: StripeRawError
): StripeError => {
  const statusCode = rawStripeError.statusCode;

  if (
    statusCode === 429 ||
    (statusCode === 400 && rawStripeError.code === 'rate_limit')
  ) {
    return new StripeRateLimitError(rawStripeError);
  }

  if (statusCode === 400 || statusCode === 404) {
    if (rawStripeError.type === 'idempotency_error') {
      return new StripeIdempotencyError(rawStripeError);
    }
    return new StripeInvalidRequestError(rawStripeError);
  }

  if (statusCode === 401) {
    return new StripeAuthenticationError(rawStripeError);
  }

  if (statusCode === 402) {
    return new StripeCardError(rawStripeError);
  }

  if (statusCode === 403) {
    return new StripePermissionError(rawStripeError);
  }

  return new StripeAPIError(rawStripeError);
};

export const generateOAuthError = (
  rawStripeError: StripeRawError
): StripeError => {
  const oauthType = rawStripeError.type;
  switch (oauthType) {
    case 'invalid_grant':
      return new StripeInvalidGrantError(rawStripeError);
    case 'invalid_client':
      return new StripeInvalidClientError(rawStripeError);
    case 'invalid_request':
      return new StripeOAuthInvalidRequestError(rawStripeError);
    case 'invalid_scope':
      return new StripeInvalidScopeError(rawStripeError);
    case 'unsupported_grant_type':
      return new StripeUnsupportedGrantTypeError(rawStripeError);
    case 'unsupported_response_type':
      return new StripeUnsupportedResponseTypeError(rawStripeError);
    default:
      return new StripeOAuthError(rawStripeError);
  }
};

// eslint-disable-next-line complexity
export const generateV2Error = (
  rawStripeError: StripeRawError
): StripeError => {
  switch (rawStripeError.type) {
    case 'idempotency_error':
      return new StripeIdempotencyError(rawStripeError);
    // switchCases: The beginning of the section generated from our OpenAPI spec
    case 'already_canceled':
      return new AlreadyCanceledError(rawStripeError);
    case 'already_exists':
      return new AlreadyExistsError(rawStripeError);
    case 'blocked_by_stripe':
      return new BlockedByStripeError(rawStripeError);
    case 'cannot_proceed':
      return new CannotProceedError(rawStripeError);
    case 'controlled_by_alternate_resource':
      return new ControlledByAlternateResourceError(rawStripeError);
    case 'controlled_by_dashboard':
      return new ControlledByDashboardError(rawStripeError);
    case 'feature_not_enabled':
      return new FeatureNotEnabledError(rawStripeError);
    case 'financial_account_not_open':
      return new FinancialAccountNotOpenError(rawStripeError);
    case 'fx_quote_expired':
      return new FxQuoteExpiredError(rawStripeError);
    case 'insufficient_funds':
      return new InsufficientFundsError(rawStripeError);
    case 'invalid_payment_method':
      return new InvalidPaymentMethodError(rawStripeError);
    case 'invalid_payout_method':
      return new InvalidPayoutMethodError(rawStripeError);
    case 'non_zero_balance':
      return new NonZeroBalanceError(rawStripeError);
    case 'not_cancelable':
      return new NotCancelableError(rawStripeError);
    case 'quota_exceeded':
      return new QuotaExceededError(rawStripeError);
    case 'rate_limit':
      return new RateLimitError(rawStripeError);
    case 'recipient_not_notifiable':
      return new RecipientNotNotifiableError(rawStripeError);
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
  readonly detail?: string | Error | HttpClientResponseError;
  readonly statusCode?: number;

  // errorProperties: The beginning of the section generated from our OpenAPI spec
  /**
   * For card errors resulting from a card issuer decline, a short string indicating [how to proceed with an error](https://docs.stripe.com/declines#retrying-issuer-declines) if they provide one.
   */
  readonly advice_code?: string;
  /**
   * For card errors, the ID of the failed charge.
   */
  readonly charge?: string;
  /**
   * For some errors that could be handled programmatically, a short string indicating the [error code](https://docs.stripe.com/error-codes) reported.
   */
  readonly code?: string;
  /**
   * For card errors resulting from a card issuer decline, a short string indicating the [card issuer's reason for the decline](https://docs.stripe.com/declines#issuer-declines) if they provide one.
   */
  readonly decline_code?: string;
  /**
   * A URL to more information about the [error code](https://docs.stripe.com/error-codes) reported.
   */
  readonly doc_url?: string;
  /**
   * The GiftCardOperation object for errors returned on a request involving a GiftCardOperation.
   */
  readonly gift_card_operation?: GiftCardOperation;
  /**
   * For card errors resulting from a card issuer decline, a 2 digit code which indicates the advice given to merchant by the card network on how to proceed with an error.
   */
  readonly network_advice_code?: string;
  /**
   * For payments declined by the network, an alphanumeric code which indicates the reason the payment failed.
   */
  readonly network_decline_code?: string;
  /**
   * If the error is parameter-specific, the parameter related to the error. For example, you can use this to display a message near the correct form field.
   */
  readonly param?: string;
  /**
   * The PaymentIntent object for errors returned on a request involving a PaymentIntent.
   */
  readonly payment_intent?: PaymentIntent;
  /**
   * The PaymentMethod object for errors returned on a request involving a PaymentMethod.
   */
  readonly payment_method?: PaymentMethod;
  /**
   * If the error is specific to the type of payment method, the payment method type that had a problem. This field is only populated for invoice-related errors.
   */
  readonly payment_method_type?: string;
  /**
   * A URL to the request log entry in your dashboard.
   */
  readonly request_log_url?: string;
  /**
   * The SetupIntent object for errors returned on a request involving a SetupIntent.
   */
  readonly setup_intent?: SetupIntent;
  /**
   * The CustomerSource object for errors returned on a request involving a CustomerSource.
   */
  readonly source?: CustomerSource;
  /**
   * The user message associated with the error.
   */
  readonly user_message?: string;
  // errorProperties: The end of the section generated from our OpenAPI spec

  constructor(raw: StripeRawError = {}, type: string | null = null) {
    super(raw.message);
    this.type = type || this.constructor.name;
    this.raw = raw;
    this.rawType = raw.type;
    this.detail = raw.detail;
    this.headers = raw.headers;
    this.requestId = raw.requestId;
    this.statusCode = raw.statusCode;
    this.message = raw.message ?? '';
    this.userMessage = raw.user_message;
    // errorAssignments: The beginning of the section generated from our OpenAPI spec
    this.advice_code = raw.advice_code;
    this.charge = raw.charge;
    this.code = raw.code;
    this.decline_code = raw.decline_code;
    this.doc_url = raw.doc_url;
    this.gift_card_operation = raw.gift_card_operation;
    this.network_advice_code = raw.network_advice_code;
    this.network_decline_code = raw.network_decline_code;
    this.param = raw.param;
    this.payment_intent = raw.payment_intent;
    this.payment_method = raw.payment_method;
    this.payment_method_type = raw.payment_method_type;
    this.request_log_url = raw.request_log_url;
    this.setup_intent = raw.setup_intent;
    this.source = raw.source;
    this.user_message = raw.user_message;
    // errorAssignments: The end of the section generated from our OpenAPI spec
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
  readonly decline_code: string;
  constructor(raw: StripeRawError = {}) {
    super(raw, 'StripeCardError');
    this.decline_code = raw.decline_code ?? '';
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
 * StripeOAuthError is the base error for OAuth-specific errors.
 */
export class StripeOAuthError extends StripeError {
  constructor(raw: StripeRawError = {}, type = 'StripeOAuthError') {
    super(raw, type);
  }
}

/**
 * InvalidGrantError is raised when a specified code doesn't exist, is
 * expired, has been used, or doesn't belong to you; a refresh token doesn't
 * exist, or doesn't belong to you; or if an API key's mode (live or test)
 * doesn't match the mode of a code or refresh token.
 */
export class StripeInvalidGrantError extends StripeOAuthError {
  constructor(raw: StripeRawError = {}) {
    super(raw, 'StripeInvalidGrantError');
  }
}

/**
 * InvalidClientError is raised when the client_id does not belong to you,
 * or an API key is required but not provided.
 */
export class StripeInvalidClientError extends StripeOAuthError {
  constructor(raw: StripeRawError = {}) {
    super(raw, 'StripeInvalidClientError');
  }
}

/**
 * OAuthInvalidRequestError is raised when a required parameter is missing,
 * or an unsupported parameter or value is provided in the OAuth request.
 */
export class StripeOAuthInvalidRequestError extends StripeOAuthError {
  constructor(raw: StripeRawError = {}) {
    super(raw, 'StripeOAuthInvalidRequestError');
  }
}

/**
 * InvalidScopeError is raised when an invalid scope is provided in the
 * OAuth request.
 */
export class StripeInvalidScopeError extends StripeOAuthError {
  constructor(raw: StripeRawError = {}) {
    super(raw, 'StripeInvalidScopeError');
  }
}

/**
 * UnsupportedGrantTypeError is raised when an unsupported grant_type is
 * provided in the OAuth request.
 */
export class StripeUnsupportedGrantTypeError extends StripeOAuthError {
  constructor(raw: StripeRawError = {}) {
    super(raw, 'StripeUnsupportedGrantTypeError');
  }
}

/**
 * UnsupportedResponseTypeError is raised when an unsupported response_type
 * is provided in the OAuth request.
 */
export class StripeUnsupportedResponseTypeError extends StripeOAuthError {
  constructor(raw: StripeRawError = {}) {
    super(raw, 'StripeUnsupportedResponseTypeError');
  }
}

// classDefinitions: The beginning of the section generated from our OpenAPI spec
export class AlreadyCanceledError extends StripeError {
  constructor(rawStripeError: StripeRawError = {}) {
    super(rawStripeError, 'AlreadyCanceledError');
  }
}
export class AlreadyExistsError extends StripeError {
  constructor(rawStripeError: StripeRawError = {}) {
    super(rawStripeError, 'AlreadyExistsError');
  }
}
export class BlockedByStripeError extends StripeError {
  constructor(rawStripeError: StripeRawError = {}) {
    super(rawStripeError, 'BlockedByStripeError');
  }
}
export class CannotProceedError extends StripeError {
  reason: string;
  constructor(rawStripeError: StripeRawError) {
    super(rawStripeError, 'CannotProceedError');
    // @ts-ignore
    this.reason = this.raw.reason;
  }
}
export class ControlledByAlternateResourceError extends StripeError {
  constructor(rawStripeError: StripeRawError = {}) {
    super(rawStripeError, 'ControlledByAlternateResourceError');
  }
}
export class ControlledByDashboardError extends StripeError {
  constructor(rawStripeError: StripeRawError = {}) {
    super(rawStripeError, 'ControlledByDashboardError');
  }
}
export class FeatureNotEnabledError extends StripeError {
  constructor(rawStripeError: StripeRawError = {}) {
    super(rawStripeError, 'FeatureNotEnabledError');
  }
}
export class FinancialAccountNotOpenError extends StripeError {
  constructor(rawStripeError: StripeRawError = {}) {
    super(rawStripeError, 'FinancialAccountNotOpenError');
  }
}
export class FxQuoteExpiredError extends StripeError {
  constructor(rawStripeError: StripeRawError = {}) {
    super(rawStripeError, 'FxQuoteExpiredError');
  }
}
export class InsufficientFundsError extends StripeError {
  constructor(rawStripeError: StripeRawError = {}) {
    super(rawStripeError, 'InsufficientFundsError');
  }
}
export class InvalidPaymentMethodError extends StripeError {
  invalid_param: InvalidPaymentMethodError.InvalidParam;
  constructor(rawStripeError: StripeRawError) {
    super(rawStripeError, 'InvalidPaymentMethodError');
    // @ts-ignore
    this.invalid_param = this.raw.invalid_param;
  }
}
export namespace InvalidPaymentMethodError {
  export type InvalidParam =
    | 'account_number'
    | 'currency'
    | 'fedwire_routing_number'
    | 'routing_number';
}
export class InvalidPayoutMethodError extends StripeError {
  constructor(rawStripeError: StripeRawError = {}) {
    super(rawStripeError, 'InvalidPayoutMethodError');
  }
}
export class NonZeroBalanceError extends StripeError {
  constructor(rawStripeError: StripeRawError = {}) {
    super(rawStripeError, 'NonZeroBalanceError');
  }
}
export class NotCancelableError extends StripeError {
  constructor(rawStripeError: StripeRawError = {}) {
    super(rawStripeError, 'NotCancelableError');
  }
}
export class QuotaExceededError extends StripeError {
  constructor(rawStripeError: StripeRawError = {}) {
    super(rawStripeError, 'QuotaExceededError');
  }
}
export class RateLimitError extends StripeError {
  constructor(rawStripeError: StripeRawError = {}) {
    super(rawStripeError, 'RateLimitError');
  }
}
export class RecipientNotNotifiableError extends StripeError {
  constructor(rawStripeError: StripeRawError = {}) {
    super(rawStripeError, 'RecipientNotNotifiableError');
  }
}
export class TemporarySessionExpiredError extends StripeError {
  constructor(rawStripeError: StripeRawError = {}) {
    super(rawStripeError, 'TemporarySessionExpiredError');
  }
}
// classDefinitions: The end of the section generated from our OpenAPI spec
