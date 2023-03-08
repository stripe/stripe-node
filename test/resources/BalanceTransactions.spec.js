'use strict';

import utils from '../testUtils.js';
const stripe = utils.getSpyableStripe();
import {expect} from 'chai';

describe('BalanceTransactions Resource', function() {
  describe('retrieve', function() {
    it('Sends the correct request', function() {
      stripe.balanceTransactions.retrieve('txn_123');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/balance_transactions/txn_123',
        headers: {},
        data: {},
        settings: {},
      });
    });
  });

  describe('list', function() {
    it('Sends the correct request', function() {
      stripe.balanceTransactions.list();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/balance_transactions',
        headers: {},
        data: {},
        settings: {},
      });
    });
  });
});
