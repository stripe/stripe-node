'use strict';

var stripe = require('../../testUtils').getSpyableStripe();
var expect = require('chai').expect;
var fs = require('fs');
var path = require('path');

var TEST_AUTH_KEY = 'aGN0bIwXnHdw5645VABjPdSn8nWY7G11';

describe('Files Resource', () => {
  describe('retrieve', () => {
    it('Sends the correct request', () => {
      stripe.files.retrieve('fil_12345');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/files/fil_12345',
        headers: {},
        data: {},
      });
    });

    it('Sends the correct request [with specified auth]', () => {
      stripe.files.retrieve('fil_12345', TEST_AUTH_KEY);
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/files/fil_12345',
        headers: {},
        data: {},
        auth: TEST_AUTH_KEY,
      });
    });
  });

  describe('list', () => {
    it('Sends the correct request', () => {
      stripe.files.list();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/files',
        headers: {},
        data: {},
      });
    });
  });

  describe('create', () => {
    it('Sends the correct file upload request', () => {
      var testFilename = path.join(__dirname, 'data/minimal.pdf');
      var f = fs.readFileSync(testFilename);

      stripe.files.create({
        purpose: 'dispute_evidence',
        file: {
          data: f,
          name: 'minimal.pdf',
          type: 'application/octet-stream',
        },
        file_link_data: {create: true},
      });

      expect(stripe.LAST_REQUEST).to.deep.property('host', 'files.stripe.com');
      expect(stripe.LAST_REQUEST).to.deep.property('method', 'POST');
      expect(stripe.LAST_REQUEST).to.deep.property('url', '/v1/files');
    });

    it('Sends the correct file upload request [with specified auth]', () => {
      var testFilename = path.join(__dirname, 'data/minimal.pdf');
      var f = fs.readFileSync(testFilename);

      stripe.files.create(
        {
          purpose: 'dispute_evidence',
          file: {
            data: f,
            name: 'minimal.pdf',
            type: 'application/octet-stream',
          },
          file_link_data: {create: true},
        },
        TEST_AUTH_KEY
      );

      expect(stripe.LAST_REQUEST).to.deep.property('host', 'files.stripe.com');
      expect(stripe.LAST_REQUEST).to.deep.property('method', 'POST');
      expect(stripe.LAST_REQUEST).to.deep.property('url', '/v1/files');
      expect(stripe.LAST_REQUEST).to.deep.property('auth', TEST_AUTH_KEY);
    });

    it('Streams a file and sends the correct file upload request', () => {
      var testFilename = path.join(__dirname, 'data/minimal.pdf');
      var f = fs.createReadStream(testFilename);

      return stripe.files
        .create({
          purpose: 'dispute_evidence',
          file: {
            data: f,
            name: 'minimal.pdf',
            type: 'application/octet-stream',
          },
          file_link_data: {create: true},
        })
        .then(() => {
          expect(stripe.LAST_REQUEST).to.deep.property(
            'host',
            'files.stripe.com'
          );
          expect(stripe.LAST_REQUEST).to.deep.property('method', 'POST');
          expect(stripe.LAST_REQUEST).to.deep.property('url', '/v1/files');
        });
    });

    it('Streams a file and sends the correct file upload request [with specified auth]', () => {
      var testFilename = path.join(__dirname, 'data/minimal.pdf');
      var f = fs.createReadStream(testFilename);

      return stripe.files
        .create(
          {
            purpose: 'dispute_evidence',
            file: {
              data: f,
              name: 'minimal.pdf',
              type: 'application/octet-stream',
            },
            file_link_data: {create: true},
          },
          TEST_AUTH_KEY
        )
        .then(() => {
          expect(stripe.LAST_REQUEST).to.deep.property(
            'host',
            'files.stripe.com'
          );
          expect(stripe.LAST_REQUEST).to.deep.property('method', 'POST');
          expect(stripe.LAST_REQUEST).to.deep.property('url', '/v1/files');
          expect(stripe.LAST_REQUEST).to.deep.property('auth', TEST_AUTH_KEY);
        });
    });
  });
});
