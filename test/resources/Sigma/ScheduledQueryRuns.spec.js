'use strict';

import utils from '../../testUtils.js';
const {getSpyableStripe} = utils;
const stripe = getSpyableStripe();
import {expect} from 'chai';

describe('Sigma', () => {
  describe('ScheduledQueryRun Resource', () => {
    describe('retrieve', () => {
      it('Sends the correct request', () => {
        stripe.sigma.scheduledQueryRuns.retrieve('sqr_123');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/sigma/scheduled_query_runs/sqr_123',
          data: {},
          headers: {},
          settings: {},
        });
      });
    });

    describe('list', () => {
      it('Sends the correct request', () => {
        stripe.sigma.scheduledQueryRuns.list();
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/sigma/scheduled_query_runs',
          data: {},
          headers: {},
          settings: {},
        });
      });
    });
  });
});
