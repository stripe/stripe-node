'use strict';

import utils from '../testUtils.js';
const stripe = utils.getSpyableStripe();
import {expect} from 'chai';

describe('Balance Resource', () => {
  describe('retrieve', () => {
    it('Sends the correct request', () => {
      stripe.balance.retrieve();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/balance',
        data: {},
        headers: {},
        settings: {},
      });
    });

    it('Sends the correct request [with specified auth]', () => {
      stripe.balance.retrieve('aGN0bIwXnHdw5645VABjPdSn8nWY7G11');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/balance',
        data: {},
        auth: 'aGN0bIwXnHdw5645VABjPdSn8nWY7G11',
        headers: {},
        settings: {},
      });
    });
  });
});
