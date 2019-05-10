'use strict';

const stripe = require('../../testUtils').getSpyableStripe();
const expect = require('chai').expect;

const ACCOUNT_ID = 'acct_EXPRESS';

describe('LoginLink Resource', () => {
  describe('create', () => {
    it('Sends the correct request', () => {
      stripe.loginLinks.create(ACCOUNT_ID);
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: `/v1/accounts/${ACCOUNT_ID}/login_links`,
        headers: {},
        data: {},
      });
    });
  });
});
