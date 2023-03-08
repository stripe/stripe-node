'use strict';

import http from 'http';
import {expect} from 'chai';
import  {createHttpClientTestSuite, ArrayReadable} from './helpers.js';

import Stripe from '../../lib/stripe.node.js';
const {createNodeHttpClient} = Stripe;

describe('NodeHttpClient', () => {
  createHttpClientTestSuite(createNodeHttpClient, (setupNock, sendRequest) => {
    describe('raw stream', () => {
      it('getRawResponse()', async () => {
        setupNock().reply(200);

        const response = await sendRequest();

        expect(response.getRawResponse()).to.be.an.instanceOf(
          http.IncomingMessage
        );
      });

      it('toStream returns a readable stream', async () => {
        setupNock().reply(200, () => new ArrayReadable(['hello, world!']));

        const response = await sendRequest();

        return new Promise((resolve) => {
          const stream = response.toStream(() => true);

          let streamedContent = '';
          stream.on('data', (chunk) => {
            streamedContent += chunk;
          });
          stream.on('end', () => {
            expect(streamedContent).to.equal('hello, world!');
            resolve();
          });
        });
      });

      it('toStream invokes the streamCompleteCallback', async () => {
        setupNock().reply(200, () => new ArrayReadable(['hello, world!']));

        const response = await sendRequest();

        return new Promise((resolve) => {
          let streamedContent = '';

          const stream = response.toStream(() => {
            expect(streamedContent).to.equal('hello, world!');
            resolve();
          });

          stream.on('data', (chunk) => {
            streamedContent += chunk;
          });
        });
      });
    });
  });
});
