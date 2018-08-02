'use strict';

var stripe = require('../testUtils').getSpyableStripe();
var expect = require('chai').expect;

describe('FileLinks Resource', function() {
  describe('retrieve', function() {
    it('Sends the correct request', function() {
      stripe.fileLinks.retrieve('link_123');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/file_links/link_123',
        headers: {},
        data: {},
      });
    });
  });

  describe('create', function() {
    it('Sends the correct request', function() {
      stripe.fileLinks.create({file: 'file_123'});
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/file_links',
        headers: {},
        data: {file: 'file_123'},
      });
    });
  });

  describe('update', function() {
    it('Sends the correct request', function() {
      stripe.fileLinks.update('link_123', {metadata: {key: 'value'}});
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/file_links/link_123',
        headers: {},
        data: {metadata: {key: 'value'}},
      });
    });
  });

  describe('list', function() {
    it('Sends the correct request', function() {
      stripe.fileLinks.list();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/file_links',
        headers: {},
        data: {},
      });
    });
  });
});
