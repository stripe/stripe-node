# Checking webhook signatures

Verify the events that Stripe sends to your webhook endpoints. Additional details in the Stripe [docs](https://stripe.com/docs/webhooks/signatures).

You can find a Node.js TypeScript server example in [stripe-samples](https://github.com/stripe-samples/accept-a-card-payment/tree/master/using-webhooks/server/node-typescript).

### Requirements

You’ll need the following:

- [Node.js](http://nodejs.org) >=10.0.0
- Stripe account to accept payments ([sign up](https://dashboard.stripe.com/register) for free).
- [Stripe CLI](https://github.com/stripe/stripe-cli) or [ngrok](https://ngrok.com/) to tunnel requests to your local server.

### Setup

In this directory (`cd examples/webhook-signing/`), copy the environment variables file:

    cp .env.example .env

Update `.env` with your own [Stripe API keys](https://dashboard.stripe.com/account/apikeys).

### Install and run

Install dependencies:

    npm install

Next, follow [these installation steps](https://github.com/stripe/stripe-cli#installation) to install the Stripe CLI which we'll use for webhook forwarding.

After the installation has finished, authenticate the CLI with your Stripe account:

    stripe login

To start the webhook forwarding run:

    stripe listen --forward-to localhost:3000/webhook

The Stripe CLI will let you know that webhook forwarding is ready and output your webhook signing secret:

    > Ready! Your webhook signing secret is whsec_xxx

Copy the webhook signing secret (`whsec_xxx`) to your `.env` file.

In a separate terminal window, start the local server:

    npm run vanilla # Runs the vanilla JavaScript example.
    npm run typescript # Compiles and runs the TypeScript example.

In another separate terminal window, trigger an event, for example:

    stripe trigger payment_intent.succeeded

You should now see some webhook event details being logged to your Node.js console.
