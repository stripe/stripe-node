/**
 * event_notification_webhook_handler.js - receive and process event notifications like the
 * v1.billing.meter.error_report_triggered event.
 * In this example, we:
 *   - create a Stripe client object called client
 *   - use client.parseEventNotification to parse the received event notification webhook body
 *   - call client.v2.core.events.retrieve to retrieve the full event object
 *   - if it is a v1.billing.meter.error_report_triggered event type, call
 *     event.fetchRelatedObject to retrieve the Billing Meter object associated
 *     with the event.
 */

const express = require('express');
const {Stripe} = require('stripe');

const app = express();

const apiKey = process.env.STRIPE_API_KEY;
const webhookSecret = process.env.WEBHOOK_SECRET;

const client = new Stripe(apiKey);

app.post(
  '/webhook',
  express.raw({type: 'application/json'}),
  async (req, res) => {
    const sig = req.headers['stripe-signature'];

    try {
      const eventNotification = client.parseEventNotification(
        req.body,
        sig,
        webhookSecret
      );

      if (eventNotification.type == 'v1.billing.meter.error_report_triggered') {
        // Fetch the event data to understand the failure
        const event = await eventNotification.fetchEvent();
        const meter = await event.fetchRelatedObject();
        // or:
        // const meter = await eventNotification.fetchRelatedObject();

        console.log(
          `Meter ${meter.display_name} (id: ${meter.id}) encountered an error: ${event.data.developer_message_summary}`
        );
        // Add additional logic here
      }
      res.sendStatus(200);
    } catch (err) {
      console.log(`Webhook Error: ${err.stack}`);
      res.status(400).send(`Webhook Error: ${err.message}`);
    }
  }
);

app.listen(4242, () => console.log('Running on port 4242'));
