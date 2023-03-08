'use strict';

import utils from '../../testUtils.js';
const {getSpyableStripe} = utils;
const stripe = getSpyableStripe();

import {expect} from 'chai';

describe('Terminal', () => {
  describe('ConnectionToken Resource', () => {
    describe('create', () => {
      it('Sends the correct request', () => {
        stripe.terminal.connectionTokens.create({});
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/terminal/connection_tokens',
          headers: {},
          data: {},
          settings: {},
        });
      });
    });
  });
});
