/**
 * Base event schemas for Stripe webhook events.
 * 
 * This module defines the core schema structure that all Stripe events share,
 * including the event object itself and common nested structures.
 */

import {z} from 'zod';

/**
 * Schema for the event request object containing request metadata
 */
const requestSchema = z
  .object({
    id: z.string().nullable(),
    idempotency_key: z.string().nullable(),
  })
  .nullable();

/**
 * Schema for the event data object containing the resource and previous attributes
 */
const eventDataSchema = z.object({
  object: z.unknown(), // Will be refined in specific event schemas
  previous_attributes: z.record(z.string(), z.unknown()).optional(),
});

/**
 * Base schema for all Stripe events
 * 
 * This schema validates the common structure shared by all event types.
 * Specific event types should extend this schema with their own data object validation.
 */
export const baseEventSchema = z.object({
  id: z.string().startsWith('evt_'),
  object: z.literal('event'),
  account: z.string().optional(),
  api_version: z.string().nullable(),
  context: z.string().optional(),
  created: z.number().int().positive(),
  data: eventDataSchema,
  livemode: z.boolean(),
  pending_webhooks: z.number().int().nonnegative(),
  request: requestSchema,
  type: z.string(), // Will be refined to specific event types in discriminated unions
});

/**
 * Generic event schema that validates basic structure
 * For specific event type validation, use the schemas from eventTypes.ts
 */
export const eventSchema = baseEventSchema;

/**
 * Type representing a validated Stripe event
 */
export type ValidatedEvent = z.infer<typeof eventSchema>;

/**
 * Validates a webhook event against the base event schema
 * 
 * @param event - The event object to validate
 * @returns The validated event
 * @throws {ZodError} If the event does not match the expected schema
 * 
 * @example
 * ```typescript
 * try {
 *   const validatedEvent = validateEvent(rawEvent);
 *   console.log('Event is valid:', validatedEvent.type);
 * } catch (error) {
 *   console.error('Invalid event:', error);
 * }
 * ```
 */
export function validateEvent(event: unknown): ValidatedEvent {
  return eventSchema.parse(event);
}

/**
 * Safely validates a webhook event, returning a result object instead of throwing
 * 
 * @param event - The event object to validate
 * @returns A result object with either the validated data or an error
 * 
 * @example
 * ```typescript
 * const result = safeValidateEvent(rawEvent);
 * if (result.success) {
 *   console.log('Valid event:', result.data.type);
 * } else {
 *   console.error('Validation error:', result.error);
 * }
 * ```
 */
export function safeValidateEvent(
  event: unknown
): ReturnType<typeof eventSchema.safeParse> {
  return eventSchema.safeParse(event);
}
