'use strict';

require('../testUtils');

var Error = require('../lib/Error');
var expect = require('chai').expect;

describe('Error', () => {
  it('Populates with type and message params', () => {
    var e = new Error('FooError', 'Foo happened');
    expect(e).to.have.property('type', 'FooError');
    expect(e).to.have.property('message', 'Foo happened');
    expect(e).to.have.property('stack');
  });

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

    it('Pulls in headers', () => {
      var headers = {'Request-Id': '123'};
      var e = Error.StripeError.generate({
        type: 'card_error',
        headers,
      });
      expect(e).to.have.property('headers', headers);
    });

    it('Pulls in request IDs', () => {
      var e = Error.StripeError.generate({
        type: 'card_error',
        requestId: 'foo',
      });
      expect(e).to.have.property('requestId', 'foo');
    });

    it('Pulls in HTTP status code', () => {
      var e = Error.StripeError.generate({type: 'card_error', statusCode: 400});
      expect(e).to.have.property('statusCode', 400);
    });
  });
});
