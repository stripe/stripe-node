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

            customer = response;
        },
        'Retrieve customer' : {
            topic: function(create_err, customer) {
                stripe.customers.retrieve(customer.id, this.callback);
            },
            'Got customer' : function(err, response) {
                assert.equal( response.email, 'foo@example.com' );
            },
            'Create card' : {
                topic: function(create_err, customer) {
                    stripe.customers.card.create(customer.id, {
                        card: { number: "4242424242424242",
                                exp_month: 12,
                                exp_year:  2020,
                                name: "J. Doe"}
                        }, this.callback);
                },
                'returns a card': function(err, response, customer) {
                    assert.isNull(err);
                    assert.isDefined(response);
                    assert.equal(response.object, 'card');
                    assert.equal(response.type, 'Visa');
                    assert.equal(response.exp_year, 2020);
                },
                'Retrieve card' : {
                    topic: function(err, card) {
                        stripe.customers.card.retrieve(customer.id, card.id, this.callback);
                    },
                    'Got card': function(err, response) {
                        assert.isNull(err);
                        assert.isDefined(response);
                        assert.equal(response.object, 'card');
                        assert.equal(response.type, 'Visa');
                        assert.equal(response.name, "J. Doe");
                    },
                    'Card updated' : {
                        topic: function(err, card) {
                            stripe.customers.card.update(customer.id, card.id,
                                {name: "Jane Doe"}, this.callback);
                        },
                        'Got card': function(err, response) {
                            assert.isNull(err);
                            assert.isDefined(response);
                            assert.equal(response.object, 'card');
                            assert.equal(response.type, 'Visa');
                            assert.equal(response.name, 'Jane Doe');
                            assert.equal(response.exp_year, 2020);
                        },
                        'Delete card' : {
                            topic: function(create_err, card) {
                                stripe.customers.card.del(customer.id, card.id, this.callback);
                            },
                            'Customer was deleted': function(err,response) {
                                assert.isNull(err);
                                assert.isTrue(response.deleted);
                            }
                        },
                        'Card list' : {
                            topic: function() {
                                stripe.customers.card.list(customer.id, 5, 0, this.callback);
                            },
                            'Got count': function(err, response) {
                                assert.isNumber(response.count);
                            },
                            'Update customer' : {
                                topic: function(create_err, card) {
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
                                    assert.equal(response.active_card.name, "T. Ester");
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
                    },
                },
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
