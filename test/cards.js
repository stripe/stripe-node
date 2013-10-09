var vows = require('vows'),
    assert = require('assert'),
    sys = require('sys');

var api_key = process.env.STRIPE_API;

if (!api_key) {
    sys.puts('To run vows, you must have a STRIPE_API environment variable with a test api key');
    process.exit(2)
}

var stripe = require('./../lib/main.js')(api_key);

var customer, card;

vows.describe("Card API").addBatch({
        'Create a customer': {
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
            'Create a card': {
                topic: function(cust, customer) {
                    stripe.cards.create(customer.id, {card:{
                        number: '4012888888881881', 
                        exp_month: '12', 
                        exp_year: '2020', 
                        cvc: '888', 
                        name: 'A. Ketchum', 
                        address_line1: '123 Pallet Town', 
                    }}, this.callback)
                },
                'created a card': function(err, response) {
                    assert.isNull(err);
                    
                    assert.isDefined(response);
                    assert.equal(response.name, 'A. Ketchum');

                    card = response; 
                }, 
                'Retrieve a card': {
                    topic: function(create_err, card){
                        stripe.cards.retrieve(card.id, customer.id, this.callback); 
                    }, 
                    'Got card': function(err, response) {
                        assert.equal(response.name, 'A. Ketchum'); 
                    }
                }, 
                'Update a card': {
                    topic: function(create_err, card) {
                        stripe.cards.update(card.id, customer.id, {
                            exp_month: '11', 
                            address_line2: 'apt 304'
                        }, this.callback); 
                    }, 
                    'Card updated': function(err, response){
                        assert.equal(response.exp_month, '11'); 
                        assert.equal(response.address_line2, 'apt 304')
                    }, 
                    'List cards': {
                        topic: function(create_err, card) {
                            stripe.cards.list(customer.id, {}, this.callback); 
                        }, 
                        'Got count': function(err, response) {
                            assert.isNumber(response.count); 
                        }
                    }, 
                    'Delete card': {
                        topic: function(create_err, card) {
                            stripe.cards.del(card.id, customer.id, this.callback); 
                        }, 
                        'Deleted card': function(err, response) {
                            assert.isNull(err); 
                            assert.isTrue(response.deleted); 
                        }, 
                        'Delete customer': {
                            topic: function() {
                                stripe.customers.del(customer.id, this.callback); 
                            }, 
                            'Customer was deleted': function(err, response) {
                                assert.isNull(err); 
                                assert.isTrue(response.deleted); 
                            }
                        }
                    }
                }
            }
        }
    }).export(module, {error: false});
