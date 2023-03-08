'use strict';

const stripe = require('../../../testUtils.js').getSpyableStripe();

const expect = require('chai').expect;

describe('Terminal', () => {
  describe('Readers Resource', () => {
    describe('update', () => {
      it('Sends the correct request', () => {
        stripe.testHelpers.terminal.readers.presentPaymentMethod('rdr_123');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url:
            '/v1/test_helpers/terminal/readers/rdr_123/present_payment_method',
          headers: {},
          data: {},
          settings: {},
        });
      });
    });
  });
});
