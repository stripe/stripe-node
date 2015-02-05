'use strict';

var stripe = require('../testUtils').getSpyableStripe();
var expect = require('chai').expect;
var Promise = require('bluebird');
var fs = require('fs');
var path = require('path');

var TEST_AUTH_KEY = 'aGN0bIwXnHdw5645VABjPdSn8nWY7G11';

describe('File Uploads Resource', function() {

  describe('retrieve', function() {

    it('Sends the correct request', function() {

      stripe.fileUploads.retrieve('fil_12345');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/files/fil_12345',
        headers: {},
        data: {}
      });

    });

    it('Sends the correct request [with specified auth]', function() {

      stripe.fileUploads.retrieve('fil_12345', TEST_AUTH_KEY);
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/files/fil_12345',
        headers: {},
        data: {},
        auth: TEST_AUTH_KEY
      });

    });

  });

  describe('list', function() {

    it ('Sends the correct request', function() {
      stripe.fileUploads.list();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/files',
        headers: {},
        data: {},
      });
    });

  });

  describe('create', function() {

    it('Sends the correct file upload request', function() {

      var testFilename = path.join(__dirname, "data/minimal.pdf");
      var f = fs.readFileSync(testFilename);

      stripe.fileUploads.create({
        purpose: 'dispute_evidence',
        file: {
          data: f,
          name: 'minimal.pdf',
          type: 'application/octet-stream'
        }
      });

      expect(stripe.LAST_REQUEST).to.deep.property('method', 'POST');
      expect(stripe.LAST_REQUEST).to.deep.property('url', '/v1/files');

    });

    it('Sends the correct file upload request [with specified auth]', function() {

      var testFilename = path.join(__dirname, "data/minimal.pdf");
      var f = fs.readFileSync(testFilename);

      stripe.fileUploads.create({
        purpose: 'dispute_evidence',
        file: {
          data: f,
          name: 'minimal.pdf',
          type: 'application/octet-stream'
        }
      }, TEST_AUTH_KEY);

      expect(stripe.LAST_REQUEST).to.deep.property('method', 'POST');
      expect(stripe.LAST_REQUEST).to.deep.property('url', '/v1/files');
      expect(stripe.LAST_REQUEST).to.deep.property('auth', TEST_AUTH_KEY);

    });

  });

});
