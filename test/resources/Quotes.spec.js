'use strict';

const stripe = require('../../testUtils').getSpyableStripe();
const testUtils = require('../../testUtils');
const expect = require('chai').expect;

const QUOTE_TEST_ID = 'qt_123';

describe('Quotes Resource', () => {
  describe('create', () => {
    it('Sends the correct request', () => {
      const params = {
        customer: 'cus_xyz',
        line_items: [{price: 'price_abc', quantity: 5}, {price: 'price_xyz'}],
      };
      stripe.quotes.create(params);
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/quotes',
        headers: {},
        data: params,
        settings: {},
      });
    });
  });

  describe('list', () => {
    it('Sends the correct request', () => {
      stripe.quotes.list();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/quotes',
        headers: {},
        data: {},
        settings: {},
      });
    });
  });

  describe('retrieve', () => {
    it('Sends the correct request', () => {
      stripe.quotes.retrieve(QUOTE_TEST_ID);
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: `/v1/quotes/${QUOTE_TEST_ID}`,
        headers: {},
        data: {},
        settings: {},
      });
    });
  });

  describe('update', () => {
    it('Sends the correct request', () => {
      stripe.quotes.update(QUOTE_TEST_ID, {
        metadata: {key: 'value'},
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: `/v1/quotes/${QUOTE_TEST_ID}`,
        headers: {},
        data: {metadata: {key: 'value'}},
        settings: {},
      });
    });
  });

  describe('accept', () => {
    it('Sends the correct request', () => {
      stripe.quotes.accept(QUOTE_TEST_ID);
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: `/v1/quotes/${QUOTE_TEST_ID}/accept`,
        headers: {},
        data: {},
        settings: {},
      });
    });
  });

  describe('cancel', () => {
    it('Sends the correct request', () => {
      stripe.quotes.cancel(QUOTE_TEST_ID);
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: `/v1/quotes/${QUOTE_TEST_ID}/cancel`,
        headers: {},
        data: {},
        settings: {},
      });
    });
  });

  describe('finalize', () => {
    it('Sends the correct request', () => {
      stripe.quotes.finalizeQuote(QUOTE_TEST_ID);
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: `/v1/quotes/${QUOTE_TEST_ID}/finalize`,
        headers: {},
        data: {},
        settings: {},
      });
    });
  });

  describe('listLineItems', () => {
    it('Sends the correct request', () => {
      stripe.quotes.listLineItems(QUOTE_TEST_ID);
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: `/v1/quotes/${QUOTE_TEST_ID}/line_items`,
        headers: {},
        data: {},
        settings: {},
      });
    });
  });

  describe('listComputedUpfrontLineItems', () => {
    it('Sends the correct request', () => {
      stripe.quotes.listComputedUpfrontLineItems(QUOTE_TEST_ID);
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: `/v1/quotes/${QUOTE_TEST_ID}/computed_upfront_line_items`,
        headers: {},
        data: {},
        settings: {},
      });
    });
  });

  describe('pdf', () => {
    it('success', (callback) => {
      const handleRequest = (req, res) => {
        res.write('Stripe binary response');
        res.end();
      };

      testUtils.getTestServerStripe(
        {},
        handleRequest,
        (err, stripe, closeServer) => {
          if (err) {
            return callback(err);
          }

          return stripe.quotes.pdf(
            'foo_123',
            {host: 'localhost'},
            (err, res) => {
              closeServer();
              if (err) {
                return callback(err);
              }
              const chunks = [];
              res.on('data', (chunk) => chunks.push(chunk));
              res.on('error', callback);
              res.on('end', () => {
                expect(Buffer.concat(chunks).toString()).to.equal(
                  'Stripe binary response'
                );
                return callback();
              });
            }
          );
        }
      );
    });

    it('failure', (callback) => {
      const handleRequest = (req, res) => {
        setTimeout(() => res.writeHead(500));
        setTimeout(
          () =>
            res.write(
              '{"error": "api_error", "error_description": "this is bad"}'
            ),
          10
        );
        setTimeout(() => res.end(), 20);
      };

      testUtils.getTestServerStripe(
        {},
        handleRequest,
        (err, stripe, closeServer) => {
          if (err) {
            return callback(err);
          }

          return stripe.quotes.pdf(
            'foo_123',
            {host: 'localhost'},
            (err, res) => {
              closeServer();
              expect(err).to.exist;
              expect(err.raw.type).to.equal('api_error');
              expect(err.raw.message).to.equal('this is bad');
              return callback();
            }
          );
        }
      );
    });
  });
});
