/**
 * This file does not exist to be executed, just compiled,
 * so that we can ensure that the definition files
 * only reference names that exist,
 * and to perform a basic sanity check that types are exported as intended.
 */

///<reference types="../types/v2019-11-05" />
import Stripe from 'stripe';

const stripe = new Stripe('sk_test_123');

const params: Stripe.CustomerCreateParams = {
  description: 'test',
};
const customer: Promise<Stripe.Customer> = stripe.customers.create(params);
