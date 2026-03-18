import * as crypto from 'crypto';
import * as http from 'http';
import {CryptoProvider} from '../crypto/CryptoProvider.js';
import {EventEmitter} from 'events';
import {HttpClient} from '../net/HttpClient.js';
import {NodeCryptoProvider} from '../crypto/NodeCryptoProvider.js';
import {NodeHttpClient} from '../net/NodeHttpClient.js';
import {PlatformFunctions} from './PlatformFunctions.js';
import {StripeError} from '../Error.js';
import {concat} from '../utils.js';
import {arch, release} from 'os';
import {MultipartRequestData, RequestData, BufferedFile} from '../Types.js';

class StreamProcessingError extends StripeError {}

/**
 * Specializes WebPlatformFunctions using APIs available in Node.js.
 */
export class NodePlatformFunctions extends PlatformFunctions {
  /** @override */
  uuid4(): string {
    // available in: v14.17.x+
    if (crypto.randomUUID) {
      return crypto.randomUUID();
    }
    return super.uuid4();
  }

  /** @override */
  getPlatformInfo(): string {
    return `${process.platform} ${release()} ${arch()}`;
  }

  /**
   * @override
   * Secure compare, from https://github.com/freewil/scmp
   */
  secureCompare(a: string, b: string): boolean {
    if (!a || !b) {
      throw new Error('secureCompare must receive two arguments');
    }

    // return early here if buffer lengths are not equal since timingSafeEqual
    // will throw if buffer lengths are not equal
    if (a.length !== b.length) {
      return false;
    }

    // use crypto.timingSafeEqual if available (since Node.js v6.6.0),
    // otherwise use our own scmp-internal function.
    if (crypto.timingSafeEqual) {
      const textEncoder = new TextEncoder();
      const aEncoded: Uint8Array = textEncoder.encode(a);
      const bEncoded: Uint8Array = textEncoder.encode(b);
      return crypto.timingSafeEqual(aEncoded, bEncoded);
    }

    return super.secureCompare(a, b);
  }

  createEmitter(): EventEmitter {
    return new EventEmitter();
  }

  /** @override */
  tryBufferData(
    data: MultipartRequestData
  ): Promise<RequestData | BufferedFile> {
    if (!(data.file.data instanceof EventEmitter)) {
      return Promise.resolve(data);
    }
    const bufferArray: Array<Uint8Array> = [];
    return new Promise<BufferedFile>((resolve, reject) => {
      data.file.data
        .on('data', (line: Uint8Array) => {
          bufferArray.push(line);
        })
        .once('end', () => {
          // @ts-ignore
          const bufferData: BufferedFile = Object.assign({}, data);
          bufferData.file.data = concat(bufferArray);
          resolve(bufferData);
        })
        .on('error', (err: Error) => {
          reject(
            new StreamProcessingError({
              message:
                'An error occurred while attempting to process the file for upload.',
              detail: err,
            })
          );
        });
    });
  }

  /** @override */
  createNodeHttpClient(agent?: http.Agent): HttpClient {
    return new NodeHttpClient(agent);
  }

  /** @override */
  createDefaultHttpClient(): HttpClient {
    return new NodeHttpClient();
  }

  /** @override */
  createNodeCryptoProvider(): CryptoProvider {
    return new NodeCryptoProvider();
  }

  /** @override */
  createDefaultCryptoProvider(): CryptoProvider {
    return this.createNodeCryptoProvider();
  }
}
