// Certain sandboxed environments (our known example right now are CloudFlare
// Workers) may make `child_process` unavailable. Because `exec` isn't critical
// to the operation of stripe-node, we handle this unavailability gracefully.
let exec = null;
try {
  exec = require('child_process').exec;
} catch (e) {
  // @ts-ignore
  if (e.code !== 'MODULE_NOT_FOUND') {
    throw e;
  }
}

const commonUtils = {
  determineProcessUserAgentProperties: (): Record<string, string> => {
    return typeof process === 'undefined'
      ? {}
      : {
          lang_version: process.version,
          platform: process.platform,
        };
  },

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
    // Occurs if we couldn't load the `child_process` module, which might
    // happen in certain sandboxed environments like a CloudFlare Worker.
    if (commonUtils._exec === null) {
      cb(new Error('exec not available'), null);
      return;
    }

    try {
      commonUtils._exec(cmd, cb);
    } catch (e) {
      cb(e, null);
    }
  },
  _exec: exec,
  validateInteger: (name: string, n: unknown, defaultVal?: number): number => {
    if (!Number.isInteger(n)) {
      if (defaultVal !== undefined) {
        return defaultVal;
      } else {
        throw new Error(`${name} must be an integer`);
      }
    }

    return n as number;
  },
};

export = commonUtils;
