const Stripe = require('stripe');
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const env = require('dotenv');

const app = new Koa();

env.config();
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2022-11-15',
});

const handleWebhook = async (ctx, next) => {
  const sig = ctx.request.headers['stripe-signature'];

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      ctx.request.rawBody,
      sig,
      webhookSecret
    );
  } catch (err) {
    // On error, log and return the error message
    console.log(`❌ Error message: ${err.message}`);
    ctx.response.status = 400;
    ctx.body = `Webhook Error: ${err.message}`;
    return await next();
  }

  // Successfully constructed event
  console.log('✅ Success:', event.id);

  // Cast event data to Stripe object
  if (event.type === 'payment_intent.succeeded') {
    const stripeObject = event.data.object;
    console.log(`💰 PaymentIntent status: ${stripeObject.status}`);
  } else if (event.type === 'charge.succeeded') {
    const charge = event.data.object;
    console.log(`💵 Charge id: ${charge.id}`);
  } else {
    console.warn(`🤷‍♀️ Unhandled event type: ${event.type}`);
  }

  // Return a response to acknowledge receipt of the event
  ctx.response.body = JSON.stringify({received: true});
  ctx.response.set('Content-Type', 'application/json');
  return await next();
};

app.use(bodyParser({enableTypes: ['json']}));
app.use(async (ctx, next) => {
  if (ctx.request.path === '/webhook') {
    return handleWebhook(ctx, next);
  }
  const name = ctx.request.body?.name ?? 'world';
  ctx.body = `hello ${name}, you hit ${ctx.request.path}`;
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
