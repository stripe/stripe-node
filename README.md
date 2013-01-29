# node-stripe

Access to the [Stripe](https://stripe.com/) [API](https://stripe.com/docs/api).


## Installation

`npm install stripe`

## Usage overview


    var api_key = 'abc';  // secret stripe API key
    var stripe = require('stripe')(api_key);

    stripe.customers.create(
       { email: 'foobar@example.org' },
       function(err, customer) {
          if (err) {
             console.log(err.message);
             return;
          }
          console.log("customer id", customer.id);
       }
     );


## API

All methods takes a callback as their last parameter. The callback is
called with a Javascript `Error` (if any) and then the response.

* `stripe.charges` - create, retrieve, refund and list charges
   * `.create(charge)` - [create a charge](https://stripe.com/docs/api#create_charge)
   * `.retrieve(charge_id)` - [retrieve a charge](https://stripe.com/docs/api#retrieve_charge) by charge id
   * `.refund(charge_id, amount)` - [refund a given charge](https://stripe.com/docs/api#refund_charge), amount in cents
   * `.list(data)` - [list charges](https://stripe.com/docs/api#list_charges)
* `stripe.customers` - create, retrieve, update, delete and list customers
   * `.create(customer)` - [create a customer](https://stripe.com/docs/api#create_customer), takes the data as an object
   * `.retrieve(customer_id)` - [retrieve a customer](https://stripe.com/docs/api#retrieve_customer) by customer id.
   * `.update(customer_id, updates)` - [update a customer](https://stripe.com/docs/api#update_customer); `updates` is an object with new parameters
   * `.del(customer_id)` - [delete a customer](https://stripe.com/docs/api#delete_customer)
   * `.list(count, offset)` - [list customers](https://stripe.com/docs/api#list_customers)
   * `.update_subscription(customer_id, data)` - [update subscription](https://stripe.com/docs/api#update_subscription)
   * `.cancel_subscription(customer_id, at_period_end)` - [cancel subscription](https://stripe.com/docs/api#cancel_subscription)
* `stripe.plans` - create, retrieve, delete and list subscription plans
   * `.create(plan)` - [create a plan](https://stripe.com/docs/api#create_plan), takes the data as an object
   * `.retrieve(plan_id)` - [retrieve a plan](https://stripe.com/docs/api#retrieve_plan) by plan id.
   * `.update(plan_id, data)` - [update plan](https://stripe.com/docs/api#update_plan)
   * `.del(plan_id)` - [delete a plan](https://stripe.com/docs/api#delete_plan)
   * `.list(count, offset)` - [list plans](https://stripe.com/docs/api#list_plans)
* `stripe.invoices` - [Invoices API](https://stripe.com/docs/api#invoices)
   * `.retrieve(invoice_id)` - [retrieve an existing invoice](https://stripe.com/docs/api?lang=curl#retrieve_invoice)
   * `.upcoming(customer_id)` - [retrieve the upcoming invoice for a customer](https://stripe.com/docs/api?lang=curl#retrieve_customer_invoice)
   * `.list(parameters)` - [list invoices](https://stripe.com/docs/api#list_customer_invoices)
* `stripe.invoice_items` - create, retrieve, update, delete and list invoice items
   * `.create(invoice_item)` - [create a invoice item](https://stripe.com/docs/api#create_invoiceitem), takes the data as an object
   * `.retrieve(invoice_item_id)` - [retrieve a invoice item](https://stripe.com/docs/api#retrieve_invoiceitem) by invoice item id.
   * `.update(invoice_item_id, updates)` - [update a invoice item](https://stripe.com/docs/api#update_invoiceitem); `updates` is an object with new parameters
   * `.del(invoice_item_id)` - [delete a invoice item](https://stripe.com/docs/api#delete_invoiceitem)
   * `.list(customer_id, count, offset)` - [list invoice items](https://stripe.com/docs/api#list_invoiceitems); all parameters are optional
* `stripe.coupons` - create, retrieve, delete and list coupons
   * `.create(coupon)` - [create a coupon](https://stripe.com/docs/api#create_coupon), takes the data as an object
   * `.retrieve(coupon_id)` - [retrieve a coupon](https://stripe.com/docs/api#retrieve_coupon) by coupon id.
   * `.del(coupon_id)` - [delete a coupon](https://stripe.com/docs/api#delete_coupon)
   * `.list(count, offset)` - [list coupons](https://stripe.com/docs/api#list_coupons)
* `stripe.token` - [Tokens API](https://stripe.com/docs/api#tokens)
   * `.create(card_data)` - [create a token](https://stripe.com/docs/api#create_token)
   * `.retrieve(token_id)` - [retrieve a card token](https://stripe.com/docs/api#retrieve_token)
* `stripe.events` - retrieve and list events
   * `.retrieve(id)` - [retrieve an event](https://stripe.com/docs/api#retrieve_event)
   * `.list()` - [list all events](https://stripe.com/docs/api#list_events)

## TODO

See the [issue tracker](http://github.com/abh/node-stripe).

## Tests

To run the tests, install vows with `npm install vows` and then run

   STRIPE_API=your-test-api-key vows test/*

## Author

Ask Bjørn Hansen (ask@develooper.com). Development was sponsored by [YellowBot](http://www.yellowbot.com/).

## License

Copyright (C) 2011 Ask Bjørn Hansen

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
