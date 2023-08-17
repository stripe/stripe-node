import Stripe from 'stripe';

export async function onRequestPost({env, request}) {
  const sig = request.headers.get('Stripe-Signature');
  const body = await request.text();

  const stripe = new Stripe(env.STRIPE_API_KEY, {
    apiVersion: '2023-08-16',
    httpClient: Stripe.createFetchHttpClient(),
  });
  const webCrypto = Stripe.createSubtleCryptoProvider();

  try {
    const event = await stripe.webhooks.constructEventAsync(
      body, // raw request body
      sig, // signature header
      env.STRIPE_SIGNING_SECRET,
      undefined,
      webCrypto
    );
  } catch (err) {
    console.error(err);
    return new Response(`Error: ${err.message}`, {
      status: 400,
    });
  }

  return new Response(JSON.stringify({ received: true }), {
    headers: {
        "Content-Type": "application/json;charset=utf-8",
    },
});
}
