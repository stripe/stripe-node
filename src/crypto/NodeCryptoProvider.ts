import * as crypto from 'crypto';
import {CryptoProvider} from './CryptoProvider.js';

/**
 * `CryptoProvider which uses the Node `crypto` package for its computations.
 */
export class NodeCryptoProvider extends CryptoProvider {
  /** @override */
  computeHMACSignature(payload: string, secret: string): string {
    return crypto
      .createHmac('sha256', secret)
      .update(payload, 'utf8')
      .digest('hex');
  }

  /** @override */
  async computeHMACSignatureAsync(
    payload: string,
    secret: string
  ): Promise<string> {
    const signature = await this.computeHMACSignature(payload, secret);
    return signature;
  }
}
