// create payment controller

import {
  Controller,
  Post,
  Headers,
  Get,
  RawBodyRequest,
  Req,
  Res,
} from '@nestjs/common'
import { Request,Response } from 'express'
import Stripe from 'stripe'

@Controller()
export class AppController {
  private readonly client: Stripe;
  constructor(
    private config: ConfigService
  ) {
    this.client = new Stripe(
      config.get('Stripe.secret_key'),
      {
        apiVersion: '2022-11-15',
        typescript: true,
      }
    );
  }

  @Get('/')
  async index(): Promise<string> {
    return 'ok'
  }

  @Post('/webhooks')
  async webhooks(
    @Headers('stripe-signature') sig: string,
    @Req() req: RawBodyRequest<Request>,
    @Res() res: Response
  ) {

    let event: Stripe.Event;

    try {
      event = this.client.webhooks.constructEvent(
        req.rawBody, 
        sig, 
        this.config.get('Stripe.webhook_secret'));
    } catch (err) {
      // On error, log and return the error message
      console.log(`❌ Error message: ${err.message}`);
      res.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }

    // Successfully constructed event
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
    res.json({received: true});
  }
}
