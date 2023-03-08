'use strict';

import utils from '../testUtils.js';
const stripe = utils.getSpyableStripe();
import {expect} from 'chai';

describe('ExchangeRates Resource', () => {
  describe('list', () => {
    it('Sends the correct request', () => {
      stripe.exchangeRates.list();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/exchange_rates',
        data: {},
        headers: {},
        settings: {},
      });
    });
  });

  describe('retrieve', () => {
    it('Sends the correct request', () => {
      const currency = 'USD';
      stripe.exchangeRates.retrieve(currency);
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: `/v1/exchange_rates/${currency}`,
        data: {},
        headers: {},
        settings: {},
      });
    });
  });
});
