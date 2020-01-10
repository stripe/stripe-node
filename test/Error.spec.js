'use strict';

require('../testUtils');

const Error = require('../lib/Error');
const expect = require('chai').expect;

describe('Error', () => {
  describe('StripeError', () => {
    it('Generates specific instance depending on error-type', () => {
      expect(Error.StripeError.generate({type: 'card_error'})).to.be.instanceOf(
        Error.StripeCardError
      );
      expect(
        Error.StripeError.generate({type: 'invalid_request_error'})
      ).to.be.instanceOf(Error.StripeInvalidRequestError);
      expect(Error.StripeError.generate({type: 'api_error'})).to.be.instanceOf(
        Error.StripeAPIError
      );
      expect(
        Error.StripeError.generate({type: 'idempotency_error'})
      ).to.be.instanceOf(Error.StripeIdempotencyError);
    });

    it('copies whitelisted properties', () => {
      const e = new Error.StripeError({
        charge: 'foo',
        unknown_prop: 'bar',
      });
      expect(e).to.have.property('charge', 'foo');
      expect(e).not.to.have.property('unknown_prop', 'bar');
      expect(e).not.to.have.property('decline_code', 'xyzzy');
    });

    it('Pulls in headers', () => {
      const headers = {'Request-Id': '123'};
      const e = Error.StripeError.generate({
        type: 'card_error',
        headers,
      });
      expect(e).to.have.property('headers', headers);
    });

    it('Pulls in request IDs', () => {
      const e = Error.StripeError.generate({
        type: 'card_error',
        requestId: 'foo',
      });
      expect(e).to.have.property('requestId', 'foo');
    });

    it('Pulls in HTTP status code', () => {
      const e = Error.StripeError.generate({
        type: 'card_error',
        statusCode: 400,
      });
      expect(e).to.have.property('statusCode', 400);
    });

    it('has subclasses which provide `.type` as their name', () => {
      class Foo extends Error.StripeError {}
      const err = new Foo({message: 'hi'});
      expect(err).to.have.property('type', 'Foo');
    });
  });
});
