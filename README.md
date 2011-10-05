# node-stripe

Access to the [Stripe](https://stripe.com/) [API](http://stripe.com/api).


## Installation

`npm install node-strip`

## Usage overview


    var api_key = 'abc';  // secret stripe API key
    var stripe = require('stripe')(api_key);

    stripe.customers.create(
       { email: 'foobar@example.org' },
       function(err, customer) {
          if (err) {
             console.log("Couldn't create the customer record");
             return;
          }
          console.log("customer id", customer.id);
       }
     );


## API

All methods takes a callback as their last parameter. The callback is
called with an error code (if any) and then the response.

* `stripe.charges` - create, retrieve, refund and list charges
	 * `.create(charge) - create a charge
	 * `.retrieve(charge_id) - retrieve a charge by charge id
	 * `.refund(charge_id, amount) - refund a given charge, amount in cents
	 * `.list(count, offset, customer_id) - list of charges; all parameters optional where default count is 10 and default offset is 0
* `stripe.customers` - create, retrieve, update and delete customers
   * `.create(customer)` - create a customer, takes the data as an object
   * `.retrieve(customer_id)` - retrieve a customer by customer id.
   * `.update(customer_id, updates)` - update a customer; `updates` is an object with new parameters
   * `.del(customer_id)` - mark the customer deleted
   * `.list(count, offset)` - [List customers](https://stripe.com/api/docs#list_customers)
* `stripe.tokens` - [Tokens API](https://stripe.com/api/docs#tokens)
   * `.create(card_data)` - [create a token](https://stripe.com/api/docs#create_token)
   * `.retrieve(token_id)` - [retrieve a card token](https://stripe.com/api/docs#retrieve_token)

## TODO

See the [issue tracker](http://github.com/abh/node-stripe).

## Tests

To run the tests, install vows with `npm install vows` and then run

   STRIPE_API=your-test-api-key vows tests/*

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