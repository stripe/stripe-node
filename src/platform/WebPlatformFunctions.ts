import EventEmitter = require('events');
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
  uuid4(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  /** @override */
  secureCompare(a: string, b: string): boolean {
    // return early here if buffer lengths are not equal
    if (a.length !== b.length) {
      return false;
    }

    const len = a.length;
    let result = 0;

    for (let i = 0; i < len; ++i) {
      result |= a.charCodeAt(i) ^ b.charCodeAt(i);
    }
    return result === 0;
  }

  /** @override */
  createEmitter(): StripeEmitter {
    return new StripeEmitter(new EventTarget());
  }
}

export = WebPlatformFunctions;
