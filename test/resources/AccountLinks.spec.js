'use strict';

import utils from '../testUtils.js';
const stripe = utils.getSpyableStripe();
import {expect} from 'chai';

describe('AccountLinks Resource', () => {
  describe('create', () => {
    it('Sends the correct request', () => {
      stripe.accountLinks.create({
        account: 'acct_123',
        failure_url: 'https://stripe.com/failure',
        success_url: 'https://stripe.com/success',
        type: 'custom_account_verification',
      });

      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/account_links',
        headers: {},
        data: {
          account: 'acct_123',
          failure_url: 'https://stripe.com/failure',
          success_url: 'https://stripe.com/success',
          type: 'custom_account_verification',
        },
        settings: {},
      });
    });
  });
});
