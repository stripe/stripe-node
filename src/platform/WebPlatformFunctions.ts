import StripeEmitter = require('../StripeEmitter');
import PlatformFunctions = require('./PlatformFunctions');

/**
 * Specializes WebPlatformFunctions using APIs available in Web workers.
 */
class WebPlatformFunctions extends PlatformFunctions {
  /** @override */
  getUname(): Promise<string | null> {
    return Promise.resolve(null);
  }

  /** @override */
  createEmitter(): StripeEmitter {
    return new StripeEmitter();
  }

  /** @override */
  tryBufferData(
    data: MultipartRequestData
  ): Promise<RequestData | BufferedFile> {
    if (data.file.data instanceof ReadableStream) {
      throw new Error(
        'Uploading a file as a stream is not supported in non-Node environments. Please open or upvote an issue at github.com/stripe/stripe-node if you use this, detailing your use-case.'
      );
    }
    return Promise.resolve(data);
  }
}

export = WebPlatformFunctions;
