require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const express = require('express');

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

const app = express();

// TODO: Use buffer data for stripe webhook routes
app.use(
  express.json({
    verify: (req, _res, buf) => {
      const url = req.originalUrl;
      if (url.startsWith('/webhook')) {
        req.rawBody = buf.toString();
      }
    }
  })
);

// Stripe requires the raw body to construct the event
app.post('/webhook', (req, res) => {
  const sig = req.headers['stripe-signature'];

  let event;

  try {
    event = stripe.webhooks.constructEvent(req.rawBody, sig, webhookSecret);
  } catch (err) {
    // On error, log and return the error message
    console.log(`❌ Error message: ${err.message}`);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Successfully constructed event
  console.log('✅ Success:', event.id);

  // Return a response to acknowledge receipt of the event
  res.json({received: true});
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
