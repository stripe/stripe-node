import {CryptoProvider} from '../crypto/CryptoProvider.js';
import {EndpointFetchHttpClient} from '../net/EndpointFetchHttpClient.js';
import {
  FetchHttpClientInterface,
  HttpClient,
  NodeHttpClientInterface,
} from '../net/HttpClient.js';
import {StripeEventEmitter} from '../StripeEventEmitter.js';
import {
  BufferedFile,
  MultipartRequestData,
  RequestAuthenticator,
  RequestData,
} from '../Types.js';
import {PlatformFunctions} from './PlatformFunctions.js';

const unsupportedRuntimeError = (method: string, alternative?: string): Error =>
  new Error(
    `Stripe: \`${method}()\` is not available in the extensibility runtime.` +
      (alternative ? ` ${alternative}` : '')
  );

/**
 * Platform functions for extensibility scripts.
 */
export class ExtensibilityPlatformFunctions extends PlatformFunctions {
  /** @override */
  emitWarning(_warning: string): void {
    // Warnings have no host-visible sink in this runtime.
  }

  /** @override */
  getEnv(): null {
    return null;
  }

  /** @override */
  getRuntimeVersion(): null {
    return null;
  }

  /** @override */
  getDefaultMaxNetworkRetries(): number {
    return 0;
  }

  /** @override */
  createDefaultAuthenticator(): RequestAuthenticator {
    // Authentication is injected automatically.
    return (): Promise<void> => Promise.resolve();
  }

  /** @override */
  createEmitter(): StripeEventEmitter {
    return new StripeEventEmitter();
  }

  /** @override */
  tryBufferData(
    data: MultipartRequestData
  ): Promise<RequestData | BufferedFile> {
    return Promise.resolve(data);
  }

  /** @override */
  createDefaultHttpClient(): HttpClient {
    return new EndpointFetchHttpClient();
  }

  /** @override */
  createFetchHttpClient(): FetchHttpClientInterface {
    throw unsupportedRuntimeError(
      'createFetchHttpClient',
      'Use the default `endpointFetch` HTTP client instead.'
    );
  }

  /** @override */
  createNodeHttpClient(): NodeHttpClientInterface {
    throw unsupportedRuntimeError(
      'createNodeHttpClient',
      'Use the default `endpointFetch` HTTP client instead.'
    );
  }

  /** @override */
  createNodeCryptoProvider(): CryptoProvider {
    throw unsupportedRuntimeError('createNodeCryptoProvider');
  }

  /** @override */
  createDefaultCryptoProvider(): CryptoProvider {
    throw unsupportedRuntimeError(
      'createDefaultCryptoProvider',
      'Pass an explicit `CryptoProvider` for crypto-dependent helpers.'
    );
  }
}
