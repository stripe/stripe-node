'use strict';

var stripe = require('../../testUtils').getSpyableStripe();
var expect = require('chai').expect;

describe('Sigma', function () {
  describe('ScheduledQueryRun Resource', function() {
    describe('retrieve', function() {
      it('Sends the correct request', function() {
        stripe.sigma.scheduledQueryRuns.retrieve('sqr_123');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/sigma/scheduled_query_runs/sqr_123',
          data: {},
          headers: {},
        });
      });
    });

    describe('list', function() {
      it('Sends the correct request', function() {
        stripe.sigma.scheduledQueryRuns.list();
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/sigma/scheduled_query_runs',
          data: {},
          headers: {},
        });
      });
    });
  });
});
