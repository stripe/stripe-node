import Stripe from 'stripe';
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

const stripe: Stripe = new Stripe(process.env.STRIPE_API_KEY!, {
  apiVersion: '2019-12-03',
  typescript: true,
});

/**
 * You'll need to make sure this is externally accessible. ngrok (https://ngrok.com/)
 * makes this really easy.
 *
 * Alternatively, you could use the stripe-cli in forward mode: https://github.com/stripe/stripe-cli
 *
 * To run this file, just provide your Secret API Key and Webhook Secret in a .env file in this directory like so:
 *
 * STRIPE_API_KEY=sk_test_XXX
 * WEBHOOK_SECRET=whsec_XXX
 *
 * Then run "npm run tsc", which will convert this TypeScript file to JS and then run it.
 *
 * For use with the stripe-cli, run the following:
 *
 * 1. "stripe listen --forward-to localhost:3000/webhooks"
 * 2. Copy the provided webhook signing secret to your .env file
 * 3. In a new terminal window: "npm run tsc"
 * 4. In yet another new terminal window: "stripe trigger payment_intents.succeeded"
 */

const webhookSecret: string = process.env.WEBHOOK_SECRET!;
const app: express.Application = express();

// Only use the raw body parser for webhooks
app.use(
  (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): void => {
    if (req.originalUrl === '/webhooks') {
      next();
    } else {
      bodyParser.json()(req, res, next);
    }
  }
);

// Stripe requires the raw body to construct the event
app.post(
  '/webhooks',
  bodyParser.raw({type: 'application/json'}),
  (req: express.Request, res: express.Response): express.Response | void => {
    const sig: string = req.headers['stripe-signature'] as string;

    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret);
    } catch (err) {
      // On error, return the error message
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    // Do something with event
    console.log('Success:', event.id);

    // Cast event data to Stripe object
    switch (event.type) {
      case 'payment_intent.succeeded':
        const pi = event.data.object as Stripe.PaymentIntent;
        console.log(`PaymentIntent status: ${pi.status}`);
        break;
    }

    // Return a response to acknowledge receipt of the event
    return res.json({received: true});
  }
);

app.listen(
  3000,
  (): void => {
    console.log('Example app listening on port 3000!');
  }
);
