'use strict';

import utils from '../testUtils.js';
const stripe = utils.getSpyableStripe();
import {expect} from 'chai';

describe('TaxCodes Resource', () => {
  describe('retrieve', () => {
    it('Sends the correct request', () => {
      stripe.taxCodes.retrieve('txcd_123');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/tax_codes/txcd_123',
        headers: {},
        data: {},
        settings: {},
      });
    });
  });

  describe('list', () => {
    it('Sends the correct request', () => {
      stripe.taxCodes.list();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/tax_codes',
        headers: {},
        data: {},
        settings: {},
      });
    });
  });
});
