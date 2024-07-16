#!/usr/bin/env -S npm run-script run

import {serve} from '@hono/node-server';
import {Hono} from 'hono';
import Stripe from 'stripe';
import env from 'dotenv';

env.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

const app = new Hono();

app.post('/webhook', async (context) => {
  const header = context.req.header('stripe-signature');

  try {
    const payload = await context.req.text();
    const event = await stripe.webhooks.constructEventAsync(
      payload,
      header,
      webhookSecret
    );

    console.log('Success constructing event:', event.id);

    switch (event.type) {
      case 'payment_intent.created': {
        console.log('PaymentIntent', event.data.object);
        break;
      }
      case 'charge.succeeded': {
        console.log('Charge id:', event.data.object.id);
        break;
      }

      default:
        console.log('Unhandled event type:', event.type);
        break;
    }

    return context.json({received: true}, 200);
  } catch (err) {
    const errorMessage = `⚠️  Webhook signature verification failed. ${
      err instanceof Error ? err.message : 'Internal server error'
    }`;
    console.log(errorMessage);
    return context.text(errorMessage, 400);
  }
});

export default app;

const port = 8741;
console.log(`Webhook endpoint available at http://localhost:${port}/webhook`);

serve({
  fetch: app.fetch,
  port,
});
