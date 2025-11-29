/**
 * Specific event type schemas for common Stripe webhook events.
 * 
 * This module provides validation schemas for the most commonly used
 * Stripe webhook event types. Each schema validates both the event structure
 * and the specific data object for that event type.
 * 
 * Note: This is a pilot implementation covering the top 12 most common events.
 * Additional event types can be added as needed.
 */

import {z} from 'zod';
import {baseEventSchema} from './events.js';

/**
 * Union type of all supported event types
 */
export type EventType =
  | 'charge.succeeded'
  | 'customer.created'
  | 'customer.updated'
  | 'customer.deleted'
  | 'invoice.paid'
  | 'invoice.payment_failed'
  | 'payment_intent.succeeded'
  | 'payment_intent.payment_failed'
  | 'checkout.session.completed'
  | 'customer.subscription.created'
  | 'customer.subscription.updated'
  | 'customer.subscription.deleted';

// ============================================================================
// Charge Events
// ============================================================================

/**
 * Schema for charge.succeeded event
 * Triggered when a charge is successfully processed
 */
export const chargeSucceededEventSchema = baseEventSchema.extend({
  type: z.literal('charge.succeeded'),
  data: z.object({
    object: z.object({
      id: z.string().startsWith('ch_'),
      object: z.literal('charge'),
      amount: z.number().int().nonnegative(),
      amount_captured: z.number().int().nonnegative(),
      amount_refunded: z.number().int().nonnegative(),
      application: z.string().nullable().optional(),
      application_fee: z.string().nullable().optional(),
      application_fee_amount: z.number().int().nullable().optional(),
      balance_transaction: z.string().nullable().optional(),
      billing_details: z
        .object({
          address: z
            .object({
              city: z.string().nullable().optional(),
              country: z.string().nullable().optional(),
              line1: z.string().nullable().optional(),
              line2: z.string().nullable().optional(),
              postal_code: z.string().nullable().optional(),
              state: z.string().nullable().optional(),
            })
            .nullable()
            .optional(),
          email: z.string().nullable().optional(),
          name: z.string().nullable().optional(),
          phone: z.string().nullable().optional(),
        })
        .optional(),
      calculated_statement_descriptor: z.string().nullable().optional(),
      captured: z.boolean(),
      created: z.number().int().positive(),
      currency: z.string(),
      customer: z.string().nullable().optional(),
      description: z.string().nullable().optional(),
      disputed: z.boolean(),
      failure_balance_transaction: z.string().nullable().optional(),
      failure_code: z.string().nullable().optional(),
      failure_message: z.string().nullable().optional(),
      invoice: z.string().nullable().optional(),
      livemode: z.boolean(),
      metadata: z.record(z.string(), z.string()),
      paid: z.boolean(),
      payment_intent: z.string().nullable().optional(),
      payment_method: z.string().nullable().optional(),
      payment_method_details: z.unknown().optional(),
      receipt_email: z.string().nullable().optional(),
      receipt_number: z.string().nullable().optional(),
      receipt_url: z.string().nullable().optional(),
      refunded: z.boolean(),
      source: z.unknown().nullable().optional(),
      status: z.enum(['succeeded', 'pending', 'failed']),
    }),
    previous_attributes: z.record(z.string(), z.unknown()).optional(),
  }),
});

// ============================================================================
// Customer Events
// ============================================================================

/**
 * Schema for customer.created event
 * Triggered when a new customer is created
 */
export const customerCreatedEventSchema = baseEventSchema.extend({
  type: z.literal('customer.created'),
  data: z.object({
    object: z.object({
      id: z.string().startsWith('cus_'),
      object: z.literal('customer'),
      address: z
        .object({
          city: z.string().nullable().optional(),
          country: z.string().nullable().optional(),
          line1: z.string().nullable().optional(),
          line2: z.string().nullable().optional(),
          postal_code: z.string().nullable().optional(),
          state: z.string().nullable().optional(),
        })
        .nullable()
        .optional(),
      balance: z.number().int().optional(),
      created: z.number().int().positive(),
      currency: z.string().nullable().optional(),
      default_source: z.string().nullable().optional(),
      delinquent: z.boolean().nullable().optional(),
      description: z.string().nullable().optional(),
      discount: z.unknown().nullable().optional(),
      email: z.string().nullable().optional(),
      invoice_prefix: z.string().optional(),
      invoice_settings: z
        .object({
          custom_fields: z.unknown().nullable().optional(),
          default_payment_method: z.string().nullable().optional(),
          footer: z.string().nullable().optional(),
        })
        .optional(),
      livemode: z.boolean(),
      metadata: z.record(z.string(), z.string()),
      name: z.string().nullable().optional(),
      phone: z.string().nullable().optional(),
      preferred_locales: z.array(z.string()).optional(),
      shipping: z.unknown().nullable().optional(),
      tax_exempt: z.enum(['none', 'exempt', 'reverse']).nullable().optional(),
    }),
    previous_attributes: z.record(z.string(), z.unknown()).optional(),
  }),
});

/**
 * Schema for customer.updated event
 * Triggered when customer details are updated
 */
export const customerUpdatedEventSchema = baseEventSchema.extend({
  type: z.literal('customer.updated'),
  data: z.object({
    object: z.object({
      id: z.string().startsWith('cus_'),
      object: z.literal('customer'),
      address: z
        .object({
          city: z.string().nullable().optional(),
          country: z.string().nullable().optional(),
          line1: z.string().nullable().optional(),
          line2: z.string().nullable().optional(),
          postal_code: z.string().nullable().optional(),
          state: z.string().nullable().optional(),
        })
        .nullable()
        .optional(),
      balance: z.number().int().optional(),
      created: z.number().int().positive(),
      currency: z.string().nullable().optional(),
      default_source: z.string().nullable().optional(),
      delinquent: z.boolean().nullable().optional(),
      description: z.string().nullable().optional(),
      discount: z.unknown().nullable().optional(),
      email: z.string().nullable().optional(),
      invoice_prefix: z.string().optional(),
      invoice_settings: z
        .object({
          custom_fields: z.unknown().nullable().optional(),
          default_payment_method: z.string().nullable().optional(),
          footer: z.string().nullable().optional(),
        })
        .optional(),
      livemode: z.boolean(),
      metadata: z.record(z.string(), z.string()),
      name: z.string().nullable().optional(),
      phone: z.string().nullable().optional(),
      preferred_locales: z.array(z.string()).optional(),
      shipping: z.unknown().nullable().optional(),
      tax_exempt: z.enum(['none', 'exempt', 'reverse']).nullable().optional(),
    }),
    previous_attributes: z.record(z.string(), z.unknown()).optional(),
  }),
});

/**
 * Schema for customer.deleted event
 * Triggered when a customer is deleted
 */
export const customerDeletedEventSchema = baseEventSchema.extend({
  type: z.literal('customer.deleted'),
  data: z.object({
    object: z.object({
      id: z.string().startsWith('cus_'),
      object: z.literal('customer'),
      deleted: z.literal(true),
    }),
    previous_attributes: z.record(z.string(), z.unknown()).optional(),
  }),
});

// ============================================================================
// Invoice Events
// ============================================================================

/**
 * Schema for invoice.paid event
 * Triggered when an invoice payment succeeds
 */
export const invoicePaidEventSchema = baseEventSchema.extend({
  type: z.literal('invoice.paid'),
  data: z.object({
    object: z.object({
      id: z.string().startsWith('in_'),
      object: z.literal('invoice'),
      amount_due: z.number().int().nonnegative(),
      amount_paid: z.number().int().nonnegative(),
      amount_remaining: z.number().int().nonnegative(),
      attempt_count: z.number().int().nonnegative(),
      attempted: z.boolean(),
      auto_advance: z.boolean().optional(),
      billing_reason: z
        .enum([
          'subscription_cycle',
          'subscription_create',
          'subscription_update',
          'subscription',
          'manual',
          'upcoming',
          'subscription_threshold',
          'automatic_pending_invoice_item_invoice',
        ])
        .nullable()
        .optional(),
      charge: z.string().nullable().optional(),
      collection_method: z.enum(['charge_automatically', 'send_invoice']),
      created: z.number().int().positive(),
      currency: z.string(),
      customer: z.string(),
      customer_email: z.string().nullable().optional(),
      customer_name: z.string().nullable().optional(),
      description: z.string().nullable().optional(),
      due_date: z.number().int().nullable().optional(),
      hosted_invoice_url: z.string().nullable().optional(),
      invoice_pdf: z.string().nullable().optional(),
      livemode: z.boolean(),
      metadata: z.record(z.string(), z.string()),
      number: z.string().nullable().optional(),
      paid: z.boolean(),
      payment_intent: z.string().nullable().optional(),
      status: z.enum([
        'draft',
        'open',
        'paid',
        'uncollectible',
        'void',
      ]).nullable(),
      subscription: z.string().nullable().optional(),
      subtotal: z.number().int(),
      total: z.number().int(),
    }),
    previous_attributes: z.record(z.string(), z.unknown()).optional(),
  }),
});

/**
 * Schema for invoice.payment_failed event
 * Triggered when an invoice payment fails
 */
export const invoicePaymentFailedEventSchema = baseEventSchema.extend({
  type: z.literal('invoice.payment_failed'),
  data: z.object({
    object: z.object({
      id: z.string().startsWith('in_'),
      object: z.literal('invoice'),
      amount_due: z.number().int().nonnegative(),
      amount_paid: z.number().int().nonnegative(),
      amount_remaining: z.number().int().nonnegative(),
      attempt_count: z.number().int().nonnegative(),
      attempted: z.boolean(),
      auto_advance: z.boolean().optional(),
      billing_reason: z
        .enum([
          'subscription_cycle',
          'subscription_create',
          'subscription_update',
          'subscription',
          'manual',
          'upcoming',
          'subscription_threshold',
          'automatic_pending_invoice_item_invoice',
        ])
        .nullable()
        .optional(),
      charge: z.string().nullable().optional(),
      collection_method: z.enum(['charge_automatically', 'send_invoice']),
      created: z.number().int().positive(),
      currency: z.string(),
      customer: z.string(),
      customer_email: z.string().nullable().optional(),
      customer_name: z.string().nullable().optional(),
      description: z.string().nullable().optional(),
      due_date: z.number().int().nullable().optional(),
      hosted_invoice_url: z.string().nullable().optional(),
      invoice_pdf: z.string().nullable().optional(),
      livemode: z.boolean(),
      metadata: z.record(z.string(), z.string()),
      number: z.string().nullable().optional(),
      paid: z.boolean(),
      payment_intent: z.string().nullable().optional(),
      status: z.enum([
        'draft',
        'open',
        'paid',
        'uncollectible',
        'void',
      ]).nullable(),
      subscription: z.string().nullable().optional(),
      subtotal: z.number().int(),
      total: z.number().int(),
    }),
    previous_attributes: z.record(z.string(), z.unknown()).optional(),
  }),
});

// ============================================================================
// Payment Intent Events
// ============================================================================

/**
 * Schema for payment_intent.succeeded event
 * Triggered when a payment intent succeeds
 */
export const paymentIntentSucceededEventSchema = baseEventSchema.extend({
  type: z.literal('payment_intent.succeeded'),
  data: z.object({
    object: z.object({
      id: z.string().startsWith('pi_'),
      object: z.literal('payment_intent'),
      amount: z.number().int().nonnegative(),
      amount_capturable: z.number().int().nonnegative().optional(),
      amount_received: z.number().int().nonnegative().optional(),
      application: z.string().nullable().optional(),
      application_fee_amount: z.number().int().nullable().optional(),
      canceled_at: z.number().int().nullable().optional(),
      cancellation_reason: z
        .enum([
          'duplicate',
          'fraudulent',
          'requested_by_customer',
          'abandoned',
          'failed_invoice',
          'void_invoice',
          'automatic',
        ])
        .nullable()
        .optional(),
      capture_method: z.enum(['automatic', 'manual']),
      charges: z.unknown().optional(),
      client_secret: z.string().nullable().optional(),
      confirmation_method: z.enum(['automatic', 'manual']),
      created: z.number().int().positive(),
      currency: z.string(),
      customer: z.string().nullable().optional(),
      description: z.string().nullable().optional(),
      invoice: z.string().nullable().optional(),
      livemode: z.boolean(),
      metadata: z.record(z.string(), z.string()),
      payment_method: z.string().nullable().optional(),
      payment_method_types: z.array(z.string()),
      receipt_email: z.string().nullable().optional(),
      setup_future_usage: z
        .enum(['on_session', 'off_session'])
        .nullable()
        .optional(),
      shipping: z.unknown().nullable().optional(),
      status: z.enum([
        'requires_payment_method',
        'requires_confirmation',
        'requires_action',
        'processing',
        'requires_capture',
        'canceled',
        'succeeded',
      ]),
    }),
    previous_attributes: z.record(z.string(), z.unknown()).optional(),
  }),
});

/**
 * Schema for payment_intent.payment_failed event
 * Triggered when a payment intent fails
 */
export const paymentIntentPaymentFailedEventSchema = baseEventSchema.extend({
  type: z.literal('payment_intent.payment_failed'),
  data: z.object({
    object: z.object({
      id: z.string().startsWith('pi_'),
      object: z.literal('payment_intent'),
      amount: z.number().int().nonnegative(),
      amount_capturable: z.number().int().nonnegative().optional(),
      amount_received: z.number().int().nonnegative().optional(),
      application: z.string().nullable().optional(),
      application_fee_amount: z.number().int().nullable().optional(),
      canceled_at: z.number().int().nullable().optional(),
      cancellation_reason: z
        .enum([
          'duplicate',
          'fraudulent',
          'requested_by_customer',
          'abandoned',
          'failed_invoice',
          'void_invoice',
          'automatic',
        ])
        .nullable()
        .optional(),
      capture_method: z.enum(['automatic', 'manual']),
      charges: z.unknown().optional(),
      client_secret: z.string().nullable().optional(),
      confirmation_method: z.enum(['automatic', 'manual']),
      created: z.number().int().positive(),
      currency: z.string(),
      customer: z.string().nullable().optional(),
      description: z.string().nullable().optional(),
      invoice: z.string().nullable().optional(),
      last_payment_error: z
        .object({
          code: z.string().optional(),
          message: z.string(),
          type: z.string(),
        })
        .nullable()
        .optional(),
      livemode: z.boolean(),
      metadata: z.record(z.string(), z.string()),
      payment_method: z.string().nullable().optional(),
      payment_method_types: z.array(z.string()),
      receipt_email: z.string().nullable().optional(),
      setup_future_usage: z
        .enum(['on_session', 'off_session'])
        .nullable()
        .optional(),
      shipping: z.unknown().nullable().optional(),
      status: z.enum([
        'requires_payment_method',
        'requires_confirmation',
        'requires_action',
        'processing',
        'requires_capture',
        'canceled',
        'succeeded',
      ]),
    }),
    previous_attributes: z.record(z.string(), z.unknown()).optional(),
  }),
});

// ============================================================================
// Checkout Session Events
// ============================================================================

/**
 * Schema for checkout.session.completed event
 * Triggered when a Checkout Session is completed
 */
export const checkoutSessionCompletedEventSchema = baseEventSchema.extend({
  type: z.literal('checkout.session.completed'),
  data: z.object({
    object: z.object({
      id: z.string().startsWith('cs_'),
      object: z.literal('checkout.session'),
      amount_subtotal: z.number().int().nullable().optional(),
      amount_total: z.number().int().nullable().optional(),
      billing_address_collection: z
        .enum(['auto', 'required'])
        .nullable()
        .optional(),
      cancel_url: z.string().nullable().optional(),
      client_reference_id: z.string().nullable().optional(),
      currency: z.string().nullable().optional(),
      customer: z.string().nullable().optional(),
      customer_email: z.string().nullable().optional(),
      livemode: z.boolean(),
      locale: z.string().nullable().optional(),
      metadata: z.record(z.string(), z.string()),
      mode: z.enum(['payment', 'setup', 'subscription']),
      payment_intent: z.string().nullable().optional(),
      payment_status: z.enum(['paid', 'unpaid', 'no_payment_required']),
      setup_intent: z.string().nullable().optional(),
      shipping: z.unknown().nullable().optional(),
      status: z.enum(['complete', 'expired', 'open']).nullable(),
      submit_type: z.enum(['auto', 'book', 'donate', 'pay']).nullable().optional(),
      subscription: z.string().nullable().optional(),
      success_url: z.string().nullable().optional(),
      url: z.string().nullable().optional(),
    }),
    previous_attributes: z.record(z.string(), z.unknown()).optional(),
  }),
});

// ============================================================================
// Subscription Events
// ============================================================================

/**
 * Schema for customer.subscription.created event
 * Triggered when a new subscription is created
 */
export const subscriptionCreatedEventSchema = baseEventSchema.extend({
  type: z.literal('customer.subscription.created'),
  data: z.object({
    object: z.object({
      id: z.string().startsWith('sub_'),
      object: z.literal('subscription'),
      application_fee_percent: z.number().nullable().optional(),
      billing_cycle_anchor: z.number().int().positive(),
      cancel_at: z.number().int().nullable().optional(),
      cancel_at_period_end: z.boolean(),
      canceled_at: z.number().int().nullable().optional(),
      collection_method: z.enum(['charge_automatically', 'send_invoice']),
      created: z.number().int().positive(),
      current_period_end: z.number().int().positive(),
      current_period_start: z.number().int().positive(),
      customer: z.string(),
      days_until_due: z.number().int().nullable().optional(),
      default_payment_method: z.string().nullable().optional(),
      default_source: z.string().nullable().optional(),
      discount: z.unknown().nullable().optional(),
      ended_at: z.number().int().nullable().optional(),
      items: z.unknown(),
      latest_invoice: z.string().nullable().optional(),
      livemode: z.boolean(),
      metadata: z.record(z.string(), z.string()),
      start_date: z.number().int().positive(),
      status: z.enum([
        'active',
        'past_due',
        'unpaid',
        'canceled',
        'incomplete',
        'incomplete_expired',
        'trialing',
        'paused',
      ]),
      trial_end: z.number().int().nullable().optional(),
      trial_start: z.number().int().nullable().optional(),
    }),
    previous_attributes: z.record(z.string(), z.unknown()).optional(),
  }),
});

/**
 * Schema for customer.subscription.updated event
 * Triggered when a subscription is updated
 */
export const subscriptionUpdatedEventSchema = baseEventSchema.extend({
  type: z.literal('customer.subscription.updated'),
  data: z.object({
    object: z.object({
      id: z.string().startsWith('sub_'),
      object: z.literal('subscription'),
      application_fee_percent: z.number().nullable().optional(),
      billing_cycle_anchor: z.number().int().positive(),
      cancel_at: z.number().int().nullable().optional(),
      cancel_at_period_end: z.boolean(),
      canceled_at: z.number().int().nullable().optional(),
      collection_method: z.enum(['charge_automatically', 'send_invoice']),
      created: z.number().int().positive(),
      current_period_end: z.number().int().positive(),
      current_period_start: z.number().int().positive(),
      customer: z.string(),
      days_until_due: z.number().int().nullable().optional(),
      default_payment_method: z.string().nullable().optional(),
      default_source: z.string().nullable().optional(),
      discount: z.unknown().nullable().optional(),
      ended_at: z.number().int().nullable().optional(),
      items: z.unknown(),
      latest_invoice: z.string().nullable().optional(),
      livemode: z.boolean(),
      metadata: z.record(z.string(), z.string()),
      start_date: z.number().int().positive(),
      status: z.enum([
        'active',
        'past_due',
        'unpaid',
        'canceled',
        'incomplete',
        'incomplete_expired',
        'trialing',
        'paused',
      ]),
      trial_end: z.number().int().nullable().optional(),
      trial_start: z.number().int().nullable().optional(),
    }),
    previous_attributes: z.record(z.string(), z.unknown()).optional(),
  }),
});

/**
 * Schema for customer.subscription.deleted event
 * Triggered when a subscription is deleted/canceled
 */
export const subscriptionDeletedEventSchema = baseEventSchema.extend({
  type: z.literal('customer.subscription.deleted'),
  data: z.object({
    object: z.object({
      id: z.string().startsWith('sub_'),
      object: z.literal('subscription'),
      application_fee_percent: z.number().nullable().optional(),
      billing_cycle_anchor: z.number().int().positive(),
      cancel_at: z.number().int().nullable().optional(),
      cancel_at_period_end: z.boolean(),
      canceled_at: z.number().int().nullable().optional(),
      collection_method: z.enum(['charge_automatically', 'send_invoice']),
      created: z.number().int().positive(),
      current_period_end: z.number().int().positive(),
      current_period_start: z.number().int().positive(),
      customer: z.string(),
      days_until_due: z.number().int().nullable().optional(),
      default_payment_method: z.string().nullable().optional(),
      default_source: z.string().nullable().optional(),
      discount: z.unknown().nullable().optional(),
      ended_at: z.number().int().nullable().optional(),
      items: z.unknown(),
      latest_invoice: z.string().nullable().optional(),
      livemode: z.boolean(),
      metadata: z.record(z.string(), z.string()),
      start_date: z.number().int().positive(),
      status: z.enum([
        'active',
        'past_due',
        'unpaid',
        'canceled',
        'incomplete',
        'incomplete_expired',
        'trialing',
        'paused',
      ]),
      trial_end: z.number().int().nullable().optional(),
      trial_start: z.number().int().nullable().optional(),
    }),
    previous_attributes: z.record(z.string(), z.unknown()).optional(),
  }),
});
