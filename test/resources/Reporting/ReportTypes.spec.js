'use strict';

var stripe = require('../../testUtils').getSpyableStripe();

var expect = require('chai').expect;

describe('Reporting', function () {
  describe('ReportTypes Resource', function () {
    describe('retrieve', function () {
      it('Sends the correct request', function () {
        stripe.reporting.reportTypes.retrieve('activity.summary.1');

        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/reporting/report_types/activity.summary.1',
          headers: {},
          data: {},
        });
      });
    });

    describe('list', function () {
      it('Sends the correct request', function () {
        stripe.reporting.reportTypes.list();
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/reporting/report_types',
          headers: {},
          data: {},
        });
      });
    });
  });
});
