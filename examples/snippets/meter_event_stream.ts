/**
 * meter_event_stream.ts - Use the high-throughput meter event stream to report create billing meter events.
 *
 * In this example, we:
 *   - create a meter event session and store the session's authentication token
 *   - define an event with a payload
 *   - use the meterEventStream service to create an event stream that reports this event
 *
 * This example expects a billing meter with an event_name of 'alpaca_ai_tokens'.  If you have
 * a different meter event name, you can change it before running this example.
 */

import {Stripe} from 'stripe';

const apiKey = '{{API_KEY}}';
const customerId = '{{CUSTOMER_ID}}';

let meterEventSession: null | any = null;

async function refreshMeterEventSession() {
  if (
    meterEventSession === null ||
    new Date(meterEventSession.expires_at * 1000) <= new Date()
  ) {
    // Create a new meter event session in case the existing session expired
    const client = new Stripe(apiKey);
    meterEventSession = await client.v2.billing.meterEventSession.create();
  }
}

async function sendMeterEvent(meterEvent: any) {
  // Refresh the meter event session, if necessary
  await refreshMeterEventSession();

  // Create a meter event
  const client = new Stripe(meterEventSession.authentication_token);
  await client.v2.billing.meterEventStream.create({
    events: [meterEvent],
  });
}

// Send meter events
sendMeterEvent({
  event_name: 'alpaca_ai_tokens',
  payload: {
    stripe_customer_id: customerId, // Replace with actual customer ID
    value: '27',
  },
}).catch((error) => {
  console.error('Error sending meter event:', error);
});
