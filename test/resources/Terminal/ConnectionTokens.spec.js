'use strict';

var stripe = require('../../../testUtils').getSpyableStripe();

var expect = require('chai').expect;

describe('Terminal', () => {
  describe('ConnectionToken Resource', () => {
    describe('create', () => {
      it('Sends the correct request', () => {
        stripe.terminal.connectionTokens.create({});
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/terminal/connection_tokens',
          headers: {},
          data: {},
        });
      });
    });
  });
});
