'use strict';

const stripe = require('../../testUtils').getSpyableStripe();
const expect = require('chai').expect;
const fs = require('fs');
const path = require('path');

const TEST_AUTH_KEY = 'aGN0bIwXnHdw5645VABjPdSn8nWY7G11';

describe('Files Resource', () => {
  describe('retrieve', () => {
    it('Sends the correct request', () => {
      stripe.files.retrieve('fil_12345');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/files/fil_12345',
        headers: {},
        data: {},
        settings: {},
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
        settings: {},
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
        settings: {},
      });
    });
  });

  describe('create', () => {
    it('Sends the correct file upload request', () => {
      const testFilename = path.join(__dirname, 'data/minimal.pdf');
      const f = fs.readFileSync(testFilename);

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
      const testFilename = path.join(__dirname, 'data/minimal.pdf');
      const f = fs.readFileSync(testFilename);

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
      const testFilename = path.join(__dirname, 'data/minimal.pdf');
      const f = fs.createReadStream(testFilename);

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
      const testFilename = path.join(__dirname, 'data/minimal.pdf');
      const f = fs.createReadStream(testFilename);

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
