'use strict';

require('./testUtils');

var Error = require('../lib/Error');
var expect = require('chai').expect;

describe('Error', function() {
  it('Populates with type and message params', function() {
    var e = new Error('FooError', 'Foo happened');
    expect(e).to.have.property('type', 'FooError');
    expect(e).to.have.property('message', 'Foo happened');
    expect(e).to.have.property('stack');
  });

  describe('StripeError', function() {
    it('Generates specific instance depending on error-type', function() {
      expect(Error.StripeError.generate({type: 'card_error'})).to.be.instanceOf(Error.StripeCardError);
      expect(Error.StripeError.generate({type: 'invalid_request_error'})).to.be.instanceOf(
        Error.StripeInvalidRequestError
      );
      expect(Error.StripeError.generate({type: 'api_error'})).to.be.instanceOf(Error.StripeAPIError);
      expect(Error.StripeError.generate({type: 'idempotency_error'})).to.be.instanceOf(Error.StripeIdempotencyError);
    });

    it('Pulls in headers', function() {
      var headers = {'Request-Id': '123'};
      var e = Error.StripeError.generate({type: 'card_error', headers: headers});
      expect(e).to.have.property('headers', headers);
    });

    it('Pulls in request IDs', function() {
      var e = Error.StripeError.generate({type: 'card_error', requestId: 'foo'});
      expect(e).to.have.property('requestId', 'foo');
    });

    it('Pulls in HTTP status code', function() {
      var e = Error.StripeError.generate({type: 'card_error', statusCode: 400});
      expect(e).to.have.property('statusCode', 400);
    });
  });
});
