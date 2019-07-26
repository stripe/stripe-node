/**
 * Constants for Stripe HTTP headers
 *
 * REMEMBERS: HTTP headers are case insensitive by standard, so, always use lowercase
 *
 * Stripe using three types of private headers: prefixed with 'stripe-', prefixed with 'x-stripe-' and just generic names
 * In June, 2012, Internet Engineering Task Force released a new RFC (https://tools.ietf.org/html/rfc6648),
 * recommending deprecation of X- prefix.
 * So, probably correct way for future headers is to be just 'Stripe-' prefixed
 *
 */

/**
 * Company prefixed headers
 */

/** Stripe API version */
const STRIPE_VERSION = 'stripe-version';

/** Stripe Account */
const STRIPE_ACCOUNT = 'stripe-account';

/** Stripe Webhook signature */
const STRIPE_SIGNATURE = 'stripe-signature';

/**
 * Genetic names headers
 */

/** Request ID */
const REQUEST_ID = 'request-id';

/** Idempotency Key */
const IDEMPOTENCY_KEY = 'idempotency-key';

/**
 * X- prefixed headers
 */

/** Telemetry - typical value JSON.stringify({ last_request_metrics: metrics }) */
const STRIPE_TELEMETRY = 'x-stripe-client-telemetry';

/** Stripe SDK user-agent */
const STRIPE_CLIENT_UA = 'x-stripe-client-user-agent';

module.exports = {
  REQUEST_ID,
  IDEMPOTENCY_KEY,
  STRIPE_VERSION,
  STRIPE_ACCOUNT,
  STRIPE_SIGNATURE,
  STRIPE_TELEMETRY,
  STRIPE_CLIENT_UA,
};
