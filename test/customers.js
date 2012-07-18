var vows = require('vows'),
    assert = require('assert'),
    sys = require('sys');

var api_key = process.env.STRIPE_API;

if (!api_key) {
    sys.puts('To run vows, you must have a STRIPE_API environment variable with a test api key');
    process.exit(2)
}

var stripe = require('./../lib/main.js')(api_key);

vows.describe("Customer API").addBatch({
   'Create customer' : {
        topic: function() {
           stripe.customers.create({email: "foo@example.com"}, this.callback);
        },
        'returns a customer': function(err, response) {
            assert.isNull(err);
            assert.isDefined(response);
            assert.equal(response.object, 'customer');
            assert.equal(response.email, "foo@example.com");
        },
        'Retrieve customer' : {
            topic: function(create_err, customer) {
                stripe.customers.retrieve(customer.id, this.callback);
            },
            'Got customer' : function(err, response) {
                assert.equal( response.email, 'foo@example.com' );
            },
        },
        'Update customer' : {
            topic: function(create_err, customer) {
                stripe.customers.update(customer.id, {
                    description: "test",
                    card: { number: "4242424242424242",
                            exp_month: 12,
                            exp_year:  2020,
                            name: "T. Ester"
                    }
                }, this.callback);
            },
            'Customer updated' : function (err, response) {
                assert.equal(response.description, 'test');
                assert.equal(response.active_card.exp_year, 2020);
                assert.equal(response.active_card.type, 'Visa');
                assert.equal(response.email, 'foo@example.com');
            },
            'Delete customer' : {
                topic: function(create_err, customer) {
                    stripe.customers.del(customer.id, this.callback);
                },
                'Customer was deleted': function(err,response) {
                    assert.isNull(err);
                    assert.isTrue(response.deleted);
                }
            },
        },
   },
   'Customer list' : {
       topic: function() {
           stripe.customers.list(5, 0, this.callback);
       },
       'Got count': function(err, response) {
           assert.isNumber(response.count);
       },
   }
}).export(module, {error: false});
