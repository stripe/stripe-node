import { buffer, stripe } from "@/lib/stripe";
import { NextRequest } from "next/server";

export const config = {
    api: {
        bodyParser: false,
    },
};

export async function POST(req : NextRequest){
  const sig = req.headers.get("stripe-signature")
  const wh_sec = process.env.STRIPE_WEBHOOK_SECRET
  let event: Stripe.Event;
  if (!sig){
      throw new Error("Invalid Signature")
  }
  try {
      const body = Uint8Array.from(await buffer(req)) as Buffer<ArrayBufferLike>
      event = stripe.webhooks.constructEvent(body, sig!, wh_sec)
  }
  catch (err : any){
      console.log(`❌ Error message: ${err.message}`);
      return new Response(`Webhook Error: ${err.message}`, {status : 400})
  }
  console.log('✅ Success:', event.id);

  // Cast event data to Stripe object
  if (event.type === 'payment_intent.succeeded') {
    const stripeObject: Stripe.PaymentIntent = event.data
      .object as Stripe.PaymentIntent;
    console.log(`💰 PaymentIntent status: ${stripeObject.status}`);
  } else if (event.type === 'charge.succeeded') {
    const charge = event.data.object as Stripe.Charge;
    console.log(`💵 Charge id: ${charge.id}`);
  } else {
    console.warn(`🤷‍♀️ Unhandled event type: ${event.type}`);
  }

  // Return a response to acknowledge receipt of the event
  return Response.json({received: true}, {status : 200});
}

const buffer = async(req: NextRequest) => {
    const body = req.body;
    if (!body) {
        throw new Error('Request body is null');
    }
    const reader = body.getReader();
    const chunks = [];
    let done, value;
    while ({ done, value } = await reader.read(), !done) {
        chunks.push(value);
    }
    const buf = new Uint8Array(chunks.reduce((acc, chunk) => acc + chunk.length, 0));
    let offset = 0;
    for (const chunk of chunks) {
        buf.set(chunk, offset);
        offset += chunk.length;
    }
    return buf;
};
