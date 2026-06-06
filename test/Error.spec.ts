require('./testUtils.ts');

import * as Error from '../src/Error.js';
import {expect} from 'chai';

describe('Error', () => {
  describe('StripeError', () => {
    it('Generates specific instance depending on status code', () => {
      expect(Error.StripeError.generate({statusCode: 402})).to.be.instanceOf(
        Error.StripeCardError
      );
      expect(Error.StripeError.generate({statusCode: 400})).to.be.instanceOf(
        Error.StripeInvalidRequestError
      );
      expect(Error.StripeError.generate({statusCode: 401})).to.be.instanceOf(
        Error.StripeAuthenticationError
      );
      expect(Error.StripeError.generate({statusCode: 403})).to.be.instanceOf(
        Error.StripePermissionError
      );
      expect(Error.StripeError.generate({statusCode: 429})).to.be.instanceOf(
        Error.StripeRateLimitError
      );
      expect(
        Error.StripeError.generate({statusCode: 400, type: 'idempotency_error'})
      ).to.be.instanceOf(Error.StripeIdempotencyError);
      expect(Error.StripeError.generate({statusCode: 500})).to.be.instanceOf(
        Error.StripeAPIError
      );
    });

    it('Falls back to StripeAPIError for unknown status codes', () => {
      expect(Error.StripeError.generate({statusCode: 418})).to.be.instanceOf(
        Error.StripeAPIError
      );
    });

    it('Returns StripeRateLimitError for 400 with rate_limit code', () => {
      expect(
        Error.StripeError.generate({statusCode: 400, code: 'rate_limit'})
      ).to.be.instanceOf(Error.StripeRateLimitError);
    });

    it('Returns StripeInvalidRequestError for 404', () => {
      expect(Error.StripeError.generate({statusCode: 404})).to.be.instanceOf(
        Error.StripeInvalidRequestError
      );
    });

    it('Generates specific instance of v2 errors depending on error-type', () => {
      // Falls back to V1 parsing logic if code is absent
      expect(
        Error.generateV2Error({type: 'card_error', statusCode: 402})
      ).to.be.instanceOf(Error.StripeCardError);
      // Falls back to V1 parsing logic if code is unrecognized
      expect(
        Error.generateV2Error({
          type: 'card_error',
          code: 'no_such_error',
          statusCode: 402,
        })
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

    it('Generates StripeIdempotencyError for idempotency_error in v2', () => {
      expect(
        Error.generateV2Error({type: 'idempotency_error'})
      ).to.be.instanceOf(Error.StripeIdempotencyError);
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
        statusCode: 402,
      });
      expect(e).to.have.property('headers', headers);
    });

    it('Pulls in request IDs', () => {
      const e = Error.StripeError.generate({
        type: 'card_error',
        requestId: 'foo',
        statusCode: 402,
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

  describe('generateOAuthError', () => {
    it('returns StripeInvalidGrantError for invalid_grant', () => {
      const err = Error.generateOAuthError({type: 'invalid_grant'});
      expect(err).to.be.instanceOf(Error.StripeInvalidGrantError);
      expect(err).to.be.instanceOf(Error.StripeOAuthError);
      expect(err).to.be.instanceOf(Error.StripeError);
    });

    it('returns StripeInvalidClientError for invalid_client', () => {
      const err = Error.generateOAuthError({type: 'invalid_client'});
      expect(err).to.be.instanceOf(Error.StripeInvalidClientError);
      expect(err).to.be.instanceOf(Error.StripeOAuthError);
    });

    it('returns StripeOAuthInvalidRequestError for invalid_request', () => {
      const err = Error.generateOAuthError({type: 'invalid_request'});
      expect(err).to.be.instanceOf(Error.StripeOAuthInvalidRequestError);
      expect(err).to.be.instanceOf(Error.StripeOAuthError);
    });

    it('returns StripeInvalidScopeError for invalid_scope', () => {
      const err = Error.generateOAuthError({type: 'invalid_scope'});
      expect(err).to.be.instanceOf(Error.StripeInvalidScopeError);
      expect(err).to.be.instanceOf(Error.StripeOAuthError);
    });

    it('returns StripeUnsupportedGrantTypeError for unsupported_grant_type', () => {
      const err = Error.generateOAuthError({type: 'unsupported_grant_type'});
      expect(err).to.be.instanceOf(Error.StripeUnsupportedGrantTypeError);
      expect(err).to.be.instanceOf(Error.StripeOAuthError);
    });

    it('returns StripeUnsupportedResponseTypeError for unsupported_response_type', () => {
      const err = Error.generateOAuthError({
        type: 'unsupported_response_type',
      });
      expect(err).to.be.instanceOf(Error.StripeUnsupportedResponseTypeError);
      expect(err).to.be.instanceOf(Error.StripeOAuthError);
    });

    it('returns generic StripeOAuthError for unrecognized codes', () => {
      const err = Error.generateOAuthError({
        type: 'some_future_oauth_error' as any,
      });
      expect(err).to.be.instanceOf(Error.StripeOAuthError);
      expect(err).to.be.instanceOf(Error.StripeError);
      expect(err.type).to.equal('StripeOAuthError');
    });
  });
});
