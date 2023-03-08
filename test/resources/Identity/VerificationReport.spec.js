'use strict';

import utils from '../../testUtils.js';
const {getSpyableStripe} = utils;
const stripe = getSpyableStripe();
import {expect} from 'chai';

describe('Identity', () => {
  describe('VerificationReport Resource', () => {
    describe('retrieve', () => {
      it('Sends the correct request', () => {
        stripe.identity.verificationReports.retrieve('vr_123');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/identity/verification_reports/vr_123',
          data: {},
          headers: {},
          settings: {},
        });
      });
    });

    describe('list', () => {
      it('Sends the correct request', () => {
        stripe.identity.verificationReports.list();
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/identity/verification_reports',
          data: {},
          headers: {},
          settings: {},
        });
      });
    });
  });
});
