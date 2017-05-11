'use strict';

const Stripe = require('stripe');
const Express = require('express');
const bodyParser = require('body-parser')

/**
 * You'll need to make sure this is externally accessible.  ngrok (https://ngrok.com/)
 * makes this really easy.
 *
 * To run this file, just provide your Secret API Key and Webhook Secret, like so:
 * STRIPE_API_KEY=sk_test_XXX WEBHOOK_SECRET=whsec_XXX node express.js
 */

const apiKey = process.env['STRIPE_API_KEY'];
const webhookSecret = process.env['WEBHOOK_SECRET']

const stripe = Stripe(apiKey);

// We use a router here so it can use its own `bodyParser` instance to add
// the raw POST data to the `request`
const router = Express.Router();

router.use(bodyParser.json({
  verify: function(request, response, buffer) {
    request.rawBody = buffer.toString();
  },
}));

router.post('/webhooks', function(request, response) {
  var event;

  try {
    // Try adding the Event as `request.event`
    event = stripe.webhooks.constructEvent(
      request.rawBody,
      request.headers['stripe-signature'],
      webhookSecret
    );
  } catch (e) {
    // If `constructEvent` throws an error, respond with the message and return.
    console.log('Error', e.message);

    return response.status(400).send('Webhook Error:' + e.message);
  }

  console.log('Success', event.id);

  // Event was 'constructed', so we can respond with a 200 OK
  response.status(200).send('Signed Webhook Received: ' + event.id);
});

// You could either create this app, or just return the `Router` for use in an
// existing Express app - up to you!

const app = Express();
app.use(router);
app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
});
