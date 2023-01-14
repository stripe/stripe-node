"use strict";
// Utility functions that rely on Node.js built-in libraries.
const nodeUtils = {
    /**
     * Node's built in `exec` function sometimes throws outright,
     * and sometimes has a callback with an error,
     * depending on the type of error.
     *
     * This unifies that interface.
     */
    safeExec: (cmd, cb) => {
        // Occurs if we couldn't load the `child_process` module, which might
        // happen in certain sandboxed environments like a CloudFlare Worker.
        if (nodeUtils._exec === null) {
            cb(new Error('exec not available'), null);
            return;
        }
        try {
            // @ts-ignore
            nodeUtils._exec(cmd, cb);
        }
        catch (e) {
            cb(e, null);
        }
    },
    // For mocking in tests. To be set when exporting Stripe.
    _exec: null,
};
module.exports = nodeUtils;
