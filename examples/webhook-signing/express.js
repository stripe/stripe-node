const stripe = require('stripe')(process.env.STRIPE_API_KEY);
const express = require('express');
const bodyParser = require('body-parser');

/**
 * You'll need to make sure this is externally accessible.  ngrok (https://ngrok.com/)
 * makes this really easy.
 *
 * To run this file, just provide your Secret API Key and Webhook Secret, like so:
 * STRIPE_API_KEY=sk_test_XXX WEBHOOK_SECRET=whsec_XXX node express.js
 */

const webhookSecret = process.env.WEBHOOK_SECRET;
const app = express();

app.use(bodyParser.raw({type: '*/*'}));

app.post('/webhooks', (req, res) => {
  const sig = req.headers['stripe-signature'];

  try {
    const event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret);

    // Do something with event

  } catch (err) {
    // On error, return the error message
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Return a response to acknowledge receipt of the event
  res.json({received: true});
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
});
