/**
 * Zod schemas for runtime validation of Stripe webhook events.
 * 
 * This module provides opt-in runtime validation for Stripe webhook events
 * using Zod schemas. The schemas mirror the TypeScript types but enable
 * fail-fast validation at runtime to catch malformed events early.
 * 
 * Usage:
 * ```typescript
 * import { validateEvent } from 'stripe/schemas';
 * 
 * const event = stripe.webhooks.constructEvent(payload, sig, secret);
 * const validatedEvent = validateEvent(event);
 * ```
 * 
 * @module schemas
 */

export {
  baseEventSchema,
  eventSchema,
  validateEvent,
  type ValidatedEvent,
} from './events.js';

export {
  chargeSucceededEventSchema,
  customerCreatedEventSchema,
  customerUpdatedEventSchema,
  customerDeletedEventSchema,
  invoicePaidEventSchema,
  invoicePaymentFailedEventSchema,
  paymentIntentSucceededEventSchema,
  paymentIntentPaymentFailedEventSchema,
  checkoutSessionCompletedEventSchema,
  subscriptionCreatedEventSchema,
  subscriptionUpdatedEventSchema,
  subscriptionDeletedEventSchema,
} from './eventTypes.js';

export type {EventType} from './eventTypes.js';
