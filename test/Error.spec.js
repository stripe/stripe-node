'use strict';

require('../testUtils');

const Error = require('../lib/Error');
const expect = require('chai').expect;

describe('Error', () => {
  describe('Deprecated base export (DEPRECATED)', () => {
    it('Populates with type and message params (DEPRECATED)', () => {
      const e = new Error('FooError', 'Foo happened');
      expect(e).to.have.property('type', 'FooError');
      expect(e).to.have.property('message', 'Foo happened');
      expect(e).to.have.property('stack');
    });

    it('can be extended via .extend method, with a weird signature (DEPRECATED)', () => {
      const Custom = Error.extend({type: 'MyCustomErrorType'});
      const err = new Custom('MyOverriddenCustomErrorType', 'byaka');
      expect(err).to.be.instanceOf(Error);
      expect(err).to.have.property('type', 'MyOverriddenCustomErrorType');
      expect(err).to.have.property('message', 'byaka');
    });

    it('can be extended via .extend method, with `populate` overridden (DEPRECATED)', () => {
      let populateArgs;
      const Custom = Error.extend({
        type: 'MyCardError',
        populate(...args) {
          populateArgs = args;
          this.message = 'overridden message';
          this.detail = args[0].hello;
          this.customField = 'hi';
        },
      });
      const err = new Custom({hello: 'ee'}, 'foo', 'bar');
      expect(populateArgs).to.deep.equal([{hello: 'ee'}, 'foo', 'bar']);
      expect(err).to.be.instanceOf(Error);
      expect(err).to.have.property('type', 'MyCardError');
      expect(err).to.have.property('name', 'Error');
      expect(err).to.have.property('message', 'overridden message');
      expect(err).to.have.property('detail', 'ee');
      expect(err).to.have.property('customField', 'hi');
    });
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

    it('has subclasses which provide `.type` as their name', () => {
      class Foo extends Error.StripeError {}
      const err = new Foo({message: 'hi'});
      expect(err).to.have.property('type', 'Foo');
    });

    it('can be extended via .extend method (DEPRECATED)', () => {
      const Custom = Error.StripeError.extend({type: 'MyCustomErrorType'});
      const err = new Custom({message: 'byaka'});
      expect(err).to.be.instanceOf(Error.StripeError);
      expect(err).to.have.property('type', 'MyCustomErrorType');
      expect(err).to.have.property('message', 'byaka');
    });

    it('can create custom error via `extend` export (DEPRECATED)', () => {
      let populateArgs;
      const Custom = Error.StripeError.extend({
        type: 'MyCardError',
        populate(...args) {
          populateArgs = args;
          this.detail = 'hello';
          this.customField = 'hi';
        },
      });
      const err = new Custom({message: 'ee'}, 'wat');
      expect(populateArgs).to.deep.equal([{message: 'ee'}, 'wat']);
      expect(err).to.be.instanceOf(Error.StripeError);
      expect(err).to.have.property('type', 'MyCardError');
      expect(err).to.have.property('message', 'ee');
      expect(err).to.have.property('detail', 'hello');
      expect(err).to.have.property('customField', 'hi');
    });
  });
});
