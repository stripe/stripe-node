'use strict';

require('../testUtils');

const Error = require('../lib/Error');
const expect = require('chai').expect;

describe('Error', () => {
  it('Populates with type and message params', () => {
    const e = new Error('FooError', 'Foo happened');
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

    it('can be extended via .extend method', () => {
      const Custom = Error.extend({type: 'MyCustomErrorType'});
      const err = new Custom({message: 'byaka'});
      expect(err).to.be.instanceOf(Error.StripeError);
      expect(err).to.have.property('type', 'MyCustomErrorType');
      expect(err).to.have.property('name', 'MyCustomErrorType');
      expect(err).to.have.property('message', 'byaka');
    });

    it('can create custom error via `extend` export', () => {
      const Custom = Error.extend({
        type: 'MyCardError',
        populate(raw) {
          this.detail = 'hello';
          this.customField = 'hi';
        },
      });
      const err = new Custom({
        message: 'ee',
      });
      expect(err).to.be.instanceOf(Error.StripeError);
      expect(err).to.have.property('type', 'MyCardError');
      expect(err).to.have.property('name', 'MyCardError');
      expect(err).to.have.property('message', 'ee');
      expect(err).to.have.property('detail', 'hello');
      expect(err).to.have.property('customField', 'hi');
    });

    it('ignores invalid constructor parameters for StripeError', () => {
      const a = new Error.StripeError(false, 'a string');
      expect(a).to.be.instanceOf(Error.StripeError);
      expect(a).to.have.property('type', 'StripeError');
      expect(a).to.have.property('message', '');

      const b = new Error.StripeError('a string');
      expect(b).to.be.instanceOf(Error.StripeError);
      expect(b).to.have.property('type', 'StripeError');
      expect(b).to.have.property('message', '');

      const c = new Error.StripeError({some: 'object'}, {another: 'object'});
      expect(c).to.be.instanceOf(Error.StripeError);
      expect(c).to.have.property('type', 'StripeError');
    });
  });
});
