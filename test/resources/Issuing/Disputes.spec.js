'use strict';

import utils from '../../testUtils.js';
const {getSpyableStripe} = utils;
const stripe = getSpyableStripe();

import {expect} from 'chai';

describe('Issuing', () => {
  describe('Disputes Resource', () => {
    describe('retrieve', () => {
      it('Sends the correct request', () => {
        stripe.issuing.disputes.retrieve('idp_123');

        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/issuing/disputes/idp_123',
          headers: {},
          data: {},
          settings: {},
        });
      });
    });

    describe('create', () => {
      it('Sends the correct request', () => {
        stripe.issuing.disputes.create({
          transaction: 'ipi_123',
        });
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/issuing/disputes',
          headers: {},
          data: {
            transaction: 'ipi_123',
          },
          settings: {},
        });
      });
    });

    describe('update', () => {
      it('Sends the correct request', () => {
        stripe.issuing.disputes.update('idp_123', {
          metadata: {
            thing1: true,
            thing2: 'yes',
          },
        });
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/issuing/disputes/idp_123',
          headers: {},
          data: {
            metadata: {
              thing1: true,
              thing2: 'yes',
            },
          },
          settings: {},
        });
      });
    });

    describe('list', () => {
      it('Sends the correct request', () => {
        stripe.issuing.disputes.list();
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/issuing/disputes',
          headers: {},
          data: {},
          settings: {},
        });
      });
    });

    describe('submit', () => {
      it('Sends the correct request', () => {
        stripe.issuing.disputes.submit('idp_123', {
          metadata: {
            thing1: true,
            thing2: 'yes',
          },
        });
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/issuing/disputes/idp_123/submit',
          headers: {},
          data: {
            metadata: {
              thing1: true,
              thing2: 'yes',
            },
          },
          settings: {},
        });
      });
    });
  });
});
