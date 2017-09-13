

const stripe = require('../testUtils').getSpyableStripe();
const { expect } = require('chai');
const fs = require('fs');
const path = require('path');

const TEST_AUTH_KEY = 'aGN0bIwXnHdw5645VABjPdSn8nWY7G11';

describe('File Uploads Resource', () => {
  describe('retrieve', () => {
    it('Sends the correct request', () => {
      stripe.fileUploads.retrieve('fil_12345');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/files/fil_12345',
        headers: {},
        data: {},
      });
    });

    it('Sends the correct request [with specified auth]', () => {
      stripe.fileUploads.retrieve('fil_12345', TEST_AUTH_KEY);
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
      stripe.fileUploads.list();
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
      const testFilename = path.join(__dirname, 'data/minimal.pdf');
      const f = fs.readFileSync(testFilename);

      stripe.fileUploads.create({
        purpose: 'dispute_evidence',
        file: {
          data: f,
          name: 'minimal.pdf',
          type: 'application/octet-stream',
        },
      });

      expect(stripe.LAST_REQUEST).to.deep.property('method', 'POST');
      expect(stripe.LAST_REQUEST).to.deep.property('url', '/v1/files');
    });

    it('Sends the correct file upload request [with specified auth]', () => {
      const testFilename = path.join(__dirname, 'data/minimal.pdf');
      const f = fs.readFileSync(testFilename);

      stripe.fileUploads.create({
        purpose: 'dispute_evidence',
        file: {
          data: f,
          name: 'minimal.pdf',
          type: 'application/octet-stream',
        },
      }, TEST_AUTH_KEY);

      expect(stripe.LAST_REQUEST).to.deep.property('method', 'POST');
      expect(stripe.LAST_REQUEST).to.deep.property('url', '/v1/files');
      expect(stripe.LAST_REQUEST).to.deep.property('auth', TEST_AUTH_KEY);
    });
  });
});
