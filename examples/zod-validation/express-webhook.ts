/**
 * Express.js webhook handler with Zod validation
 * 
 * This example demonstrates how to:
 * 1. Verify webhook signatures
 * 2. Validate event structure with Zod
 * 3. Handle validated events safely
 */

import express from 'express';
import Stripe from 'stripe';
import { validateEvent } from 'stripe/schemas';
import { ZodError } from 'zod';

const app = express();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET as string;

/**
 * Webhook endpoint with validation
 * 
 * Note: We use express.raw() to get the raw body for signature verification
 */
app.post(
  '/webhook',
  express.raw({ type: 'application/json' }),
  async (req, res) => {
    const sig = req.headers['stripe-signature'] as string;

    try {
      // Step 1: Verify signature and construct event
      const event = stripe.webhooks.constructEvent(
        req.body,
        sig,
        webhookSecret
      );

      console.log(`✅ Webhook signature verified: ${event.type}`);

      // Step 2: Validate event structure with Zod
      const validatedEvent = validateEvent(event);

      console.log(`✅ Event structure validated: ${validatedEvent.id}`);

      // Step 3: Handle the validated event
      await handleValidatedEvent(validatedEvent);

      res.json({ received: true });
    } catch (err) {
      if (err instanceof Stripe.errors.StripeSignatureVerificationError) {
        console.error('❌ Invalid signature:', err.message);
        return res.status(400).send(`Signature verification failed`);
      }

      if (err instanceof ZodError) {
        console.error('❌ Validation failed:', err.errors);
        return res.status(400).send(`Invalid event structure: ${err.message}`);
      }

      console.error('❌ Unexpected error:', err);
      return res.status(500).send('Internal server error');
    }
  }
);

/**
 * Handle validated events
 */
async function handleValidatedEvent(event: any): Promise<void> {
  // Event is now validated and type-safe
  console.log(`Processing event: ${event.type}`);

  switch (event.type) {
    case 'charge.succeeded': {
      const charge = event.data.object;
      console.log(`💰 Charge succeeded: ${charge.id} for ${charge.amount}`);
      // Handle successful charge
      break;
    }

    case 'customer.created': {
      const customer = event.data.object;
      console.log(`👤 New customer: ${customer.id} (${customer.email})`);
      // Handle new customer
      break;
    }

    case 'invoice.paid': {
      const invoice = event.data.object;
      console.log(`📄 Invoice paid: ${invoice.number} for ${invoice.total}`);
      // Handle paid invoice
      break;
    }

    case 'invoice.payment_failed': {
      const invoice = event.data.object;
      console.log(`❌ Invoice payment failed: ${invoice.number}`);
      // Handle failed payment
      break;
    }

    case 'payment_intent.succeeded': {
      const paymentIntent = event.data.object;
      console.log(`✅ Payment intent succeeded: ${paymentIntent.id}`);
      // Handle successful payment intent
      break;
    }

    case 'checkout.session.completed': {
      const session = event.data.object;
      console.log(`🛒 Checkout completed: ${session.id}`);
      // Handle completed checkout
      break;
    }

    case 'customer.subscription.created':
    case 'customer.subscription.updated':
    case 'customer.subscription.deleted': {
      const subscription = event.data.object;
      console.log(
        `📅 Subscription ${event.type.split('.').pop()}: ${subscription.id}`
      );
      // Handle subscription changes
      break;
    }

    default:
      console.log(`⚠️ Unhandled event type: ${event.type}`);
  }
}

/**
 * Health check endpoint
 */
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

/**
 * Start server
 */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Webhook server running on port ${PORT}`);
  console.log(`📍 Webhook URL: http://localhost:${PORT}/webhook`);
});

export default app;
