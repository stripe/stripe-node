'use strict';

import utils from '../../../testUtils.js';
const stripe = utils.getSpyableStripe();

import {expect} from 'chai';

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
