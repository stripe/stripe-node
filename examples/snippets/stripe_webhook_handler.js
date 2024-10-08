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
      const thinEvent = client.parseThinEvent(req.body, sig, webhookSecret);

      // Fetch the event data to understand the failure
      const event = await client.v2.core.events.retrieve(thinEvent.id);
      if (event.type == 'v1.billing.meter.error_report_triggered') {
        const meter = await event.fetchRelatedObject();
        const meterId = meter.id;
        console.log(`Success! ${meterId}`);

        // Record the failures and alert your team
        // Add your logic here
      }
      res.sendStatus(200);
    } catch (err) {
      console.log(`Webhook Error: ${err.stack}`);
      res.status(400).send(`Webhook Error: ${err.message}`);
    }
  }
);

app.listen(4242, () => console.log('Running on port 4242'));
