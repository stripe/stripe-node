'use strict';

import utils from '../testUtils.js';
const stripe = utils.getSpyableStripe();
import {expect} from 'chai';

const MANDATE_TEST_ID = 'mandate_123';

describe('Mandate Resource', () => {
  describe('retrieve', () => {
    it('Sends the correct request', () => {
      stripe.mandates.retrieve(MANDATE_TEST_ID);
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: `/v1/mandates/${MANDATE_TEST_ID}`,
        data: {},
        headers: {},
        settings: {},
      });
    });
  });
});
