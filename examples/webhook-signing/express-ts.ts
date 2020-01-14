import Stripe from 'stripe';
import express from 'express';
import bodyParser from 'body-parser';
import env from 'dotenv';

env.config();

const stripe: Stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2019-12-03',
  typescript: true,
});

const webhookSecret: string = process.env.STRIPE_WEBHOOK_SECRET!;

const app: express.Application = express();

// Only use the raw body parser for webhooks.
app.use(
  (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): void => {
    if (req.originalUrl === '/webhook') {
      next();
    } else {
      bodyParser.json()(req, res, next);
    }
  }
);

// Stripe requires the raw body to construct the event
app.post(
  '/webhook',
  bodyParser.raw({type: 'application/json'}),
  (req: express.Request, res: express.Response): void => {
    const sig: string | string[] = req.headers['stripe-signature']!;

    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret);
    } catch (err) {
      // On error, return the error message
      res.status(400).send(`Webhook Error: ${err.message}`);
      return;
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
    res.json({received: true});
  }
);

app.listen(3000, (): void => {
  console.log('Example app listening on port 3000!');
});
