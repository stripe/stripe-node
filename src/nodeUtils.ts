// Utility functions that rely on Node.js built-in libraries.
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
};

export = nodeUtils;
