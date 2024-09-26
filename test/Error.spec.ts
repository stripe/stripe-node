require('./testUtils.ts');

import * as Error from '../src/Error.js';
import {expect} from 'chai';

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
      expect(
        Error.StripeError.generate({type: 'weird_error' as any})
      ).to.be.instanceOf(Error.StripeUnknownError);
    });

    it('Generates specific instance of v2 errors depending on error-type', () => {
      // Falls back to V1 parsing logic if code is absent
      expect(Error.generateV2Error({type: 'card_error'})).to.be.instanceOf(
        Error.StripeCardError
      );
      // Falls back to V1 parsing logic if code is unrecognized
      expect(
        Error.generateV2Error({type: 'card_error', code: 'no_such_error'})
      ).to.be.instanceOf(Error.StripeCardError);
      expect(
        Error.generateV2Error({
          code: 'invalid_fields',
        })
      ).to.be.instanceOf(Error.StripeInvalidRequestError);
      expect(
        Error.generateV2Error({type: 'temporary_session_expired'})
      ).to.be.instanceOf(Error.TemporarySessionExpiredError);

      expect(Error.generateV2Error({code: 'invalid_fields'})).to.be.instanceOf(
        Error.StripeInvalidRequestError
      );
    });

    it('copies whitelisted properties', () => {
      const e = new Error.StripeError({
        charge: 'foo',
        unknown_prop: 'bar',
      } as any);
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

    it('respects subclasses overriding `.type` in constructor', () => {
      class Foo extends Error.StripeError {
        constructor(raw: any) {
          super(raw, 'Foo');
        }
      }
      const err = new Foo({message: 'hi'});
      expect(err).to.have.property('type', 'Foo');
    });

    it('defaults setting `.type` to subclass name', () => {
      class Foo extends Error.StripeError {}
      const err = new Foo({message: 'hi'});
      expect(err).to.have.property('type', 'Foo');
    });
  });
});
