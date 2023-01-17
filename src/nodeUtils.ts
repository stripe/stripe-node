const crypto = require('crypto');
import utils = require('./utils');

/**
 * Utility functions that rely on Node.js built-in libraries.
 */
const nodeUtils = {
  /**
   * Node's built in `exec` function sometimes throws outright,
   * and sometimes has a callback with an error,
   * depending on the type of error.
   *
   * This unifies that interface.
   */
  safeExec: (
    cmd: string,
    cb: (error: unknown, stdout: string | null) => void
  ): void => {
    try {
      nodeUtils._exec(cmd, cb);
    } catch (e) {
      cb(e, null);
    }
  },

  // For mocking in tests.
  _exec: require('child_process').exec,

  /**
   * https://stackoverflow.com/a/2117523
   */
  uuid4: (): string => {
    // available in: v14.17.x+
    if (crypto.randomUUID) {
      return crypto.randomUUID();
    }

    return utils.uuid4();
  },

  /**
   * Secure compare, from https://github.com/freewil/scmp
   */
  secureCompare: (a: string, b: string): boolean => {
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

    return utils.secureCompare(a, b);
  },
};

export = nodeUtils;
