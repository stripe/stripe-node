/**
 * event_notification_handler_endpoint.ts - receive and process event notifications like the
 * v1.billing.meter.error_report_triggered event.
 * In this example, we:
 *   - write a fallback callback to handle unrecognized event notifications
 *   - create a StripeClient called client
 *   - Initialize an EventNotificationHandler with the client, webhook secret, and fallback callback
 *   - register a preHandle hook that deduplicates events by id before any callback runs
 *   - register a specific handler for the "v1.billing.meter.no_meter_found" event notification type
 *   - use handler.handle() to process the received notification webhook body
 */

import {Stripe} from 'stripe';
import express from 'express';

const apiKey = process.env.STRIPE_API_KEY ?? '';
const webhookSecret = process.env.WEBHOOK_SECRET ?? '';

const app = express();
const client = new Stripe(apiKey);
const handler = client.notificationHandler(
  webhookSecret,
  async (unhandledEvent, client, details) => {
    console.log(`Received unhandled event type: ${unhandledEvent.type}`);
  }
);

// Handles events delivered through a channel that has already authenticated them, such as
// AWS EventBridge or Azure Event Grid. Those payloads carry no Stripe-Signature header, so
// this handler skips verification. Callbacks are registered separately from the one above.
const unverifiedHandler = client.notificationHandlerWithoutVerification(
  async (unhandledEvent, client, details) => {
    console.log(`Received unhandled event type: ${unhandledEvent.type}`);
  }
);

// Webhooks can be delivered more than once, so we track ids we've already
// processed. In production, back this with something durable and shared
// across processes (e.g. Redis or a database table) instead of an in-memory Set.
const processedEventIds = new Set<string>();

/**
 * Runs before any registered callback. Returning false
 * here skips handling entirely for this delivery, which is useful for
 * deduplicating webhooks.
 */
async function deduplicateEvents(
  event: Stripe.V2.Core.EventNotification
): Promise<boolean> {
  if (processedEventIds.has(event.id)) {
    console.log(`Skipping already-processed event: ${event.id}`);
    return false;
  }
  processedEventIds.add(event.id);
  return true;
}

handler.preHandle(deduplicateEvents);
unverifiedHandler.preHandle(deduplicateEvents);

// can be anywhere in your codebase; registering on both handlers means either
// endpoint below will route this event type
handler.on('v1.billing.meter.error_report_triggered', async (event) => {
  const meter = await event.fetchRelatedObject();
  console.log(`Billing Meter ${meter.display_name} had a problem`);
});

unverifiedHandler.on(
  'v1.billing.meter.error_report_triggered',
  async (event) => {
    const meter = await event.fetchRelatedObject();
    console.log(`Billing Meter ${meter.display_name} had a problem`);
  }
);

app.post(
  '/webhook',
  express.raw({type: 'application/json'}),
  async (req, res) => {
    await handler.handle(req.body, req.headers['stripe-signature']!);
  }
);

app.post(
  '/webhook-from-cloud-provider',
  express.raw({type: 'application/json'}),
  async (req, res) => {
    // handle() takes only the body here; there's no signature to check
    await unverifiedHandler.handle(req.body);
  }
);

app.listen(4242, () => console.log('Running on port 4242'));
