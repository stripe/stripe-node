/**
 * event_notification_webhook_handler.ts - receive and process event notifications like the
 * v1.billing.meter.error_report_triggered event.
 * In this example, we:
 *   - create a Stripe client object called client
 *   - use client.parseEventNotification to parse the received event notification webhook body
 *   - call client.v2.core.events.retrieve to retrieve the full event object
 *   - if it is a v1.billing.meter.error_report_triggered event type, call
 *     event.fetchRelatedObject to retrieve the Billing Meter object associated
 *     with the event.
 */

import {Stripe} from 'stripe';
import express from 'express';

const app = express();

const apiKey = process.env.STRIPE_API_KEY ?? '';
const webhookSecret = process.env.WEBHOOK_SECRET ?? '';

const client = new Stripe(apiKey);

app.post(
  '/webhook',
  express.raw({type: 'application/json'}),
  async (req, res) => {
    const sig = req.headers['stripe-signature'] ?? '';

    try {
      const eventNotification = client.parseEventNotification(
        req.body,
        sig,
        webhookSecret
      );

      // TS will narrow event based on the `type` property
      if (eventNotification.type == 'v1.billing.meter.error_report_triggered') {
        // this this block, eventNotification is correctly a Stripe.Events.V1BillingMeterErrorReportTriggeredEventNotification

        // there's basic info about the related object in the notification
        console.log(
          `Meter w/ id ${eventNotification.related_object.id} had a problem`
        );

        // or you can fetch the full object from the API for more details
        const meter = await eventNotification.fetchRelatedObject();
        console.log(`Meter ${meter.display_name} (${meter.id}) had a problem`);

        // And you can always fetch the full event:
        const event = await eventNotification.fetchEvent();
        console.log(`More info: ${event.data.developer_message_summary}`);
      } else if (eventNotification.type === 'v1.billing.meter.no_meter_found') {
        // in this block, eventNotification is correctly a Stripe.Events.V1BillingMeterNoMeterFoundEventNotification

        // that interface doesn't define `fetchRelatedObject()` because the event has no related object
        // so this line would correctly give a type error:
        // eventNotification.fetchRelatedObject();

        // but fetching the event always works:
        const event = await eventNotification.fetchEvent();
        console.log(
          `Err: No meter found: ${event.data.developer_message_summary}`
        );
        // the above approach works for all event types that predate the SDK version you're using
        // but, you may also need to handle event types that the SDK doesn't know about
        // in that case, you ignore the type mismatch and cast to UnknownEventNotification
        // @ts-expect-error
      } else if (eventNotification.type === 'some.new.event') {
        const unknownEvent = eventNotification as Stripe.Events.UnknownEventNotification;

        // you can still fetch the related object, if one exists
        // but its type is `unknown`
        const obj = await unknownEvent.fetchRelatedObject();

        // and you can still fetch the event:
        const event = await unknownEvent.fetchEvent();
        // @ts-expect-error
        console.log(`Got new event: ${event.data}`);
      }

      res.sendStatus(200);
    } catch (err) {
      console.log(`Webhook Error: ${(err as any).stack}`);
      res.status(400).send(`Webhook Error: ${(err as any).message}`);
    }
  }
);

app.listen(4242, () => console.log('Running on port 4242'));
