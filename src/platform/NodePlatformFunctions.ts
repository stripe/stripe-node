import * as crypto from 'crypto';
import * as http from 'http';
import {CryptoProvider} from '../crypto/CryptoProvider';
import {EventEmitter} from 'events';
import {HttpClient} from '../net/HttpClient';
import {NodeCryptoProvider} from '../crypto/NodeCryptoProvider';
import {NodeHttpClient} from '../net/NodeHttpClient';
import {PlatformFunctions} from './PlatformFunctions';
import {StripeError} from '../Error';
import {concat} from '../utils';

class StreamProcessingError extends StripeError {}

/**
 * Specializes WebPlatformFunctions using APIs available in Node.js.
 */
export class NodePlatformFunctions extends PlatformFunctions {
  /** For mocking in tests */
  _exec: any;
  _UNAME_CACHE: Promise<string | null> | null;

  constructor() {
    super();

    this._exec = require('child_process').exec;
    this._UNAME_CACHE = null;
  }

  /** @override */
  uuid4(): string {
    // available in: v14.17.x+
    if (crypto.randomUUID) {
      return crypto.randomUUID();
    }
    return super.uuid4();
  }

  /**
   * @override
   * Node's built in `exec` function sometimes throws outright,
   * and sometimes has a callback with an error,
   * depending on the type of error.
   *
   * This unifies that interface by resolving with a null uname
   * if an error is encountered.
   */
  getUname(): Promise<string | null> {
    if (!this._UNAME_CACHE) {
      this._UNAME_CACHE = new Promise<string | null>((resolve, reject) => {
        try {
          this._exec('uname -a', (err: unknown, uname: string | null) => {
            if (err) {
              return resolve(null);
            }
            resolve(uname!);
          });
        } catch (e) {
          resolve(null);
        }
      });
    }
    return this._UNAME_CACHE;
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
