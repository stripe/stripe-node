import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { headers } from 'next/headers'
import { getErrorMessage, logError } from '@/lib/error-methods';

// Initialize Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

// Webhook handler
export async function POST(req: NextRequest) {
  const webhookSecret: string = process.env.STRIPE_WEBHOOK_SECRET!;
  const headersList = headers()
  const sig = headersList.get('stripe-signature')

  let event: Stripe.Event;

  // Handle the construction of the event
  try {
    if (!sig) throw new Error("No signature provided")
    const reqArrayBuffer = await req.arrayBuffer()
    const bodyBuffer = Buffer.from(reqArrayBuffer)
    event = stripe.webhooks.constructEvent(bodyBuffer, sig, webhookSecret);
  } catch (err) {
    logError(err)
    return NextResponse.json({ error: `Webhook Error: ${getErrorMessage(err)}` }, { status: 400 })
  }

  // Deal with the constructed event, according to what it is
  switch (event.type) {
    case 'product.updated': {

    }

    case 'product.created': {

    }

    // other cases as you please
  }

  // Return a response to acknowledge receipt of the event
  return new Response('Event received', { status: 200 });
}
