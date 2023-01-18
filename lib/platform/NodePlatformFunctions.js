"use strict";
const crypto = require("crypto");
const DefaultPlatformFunctions = require("./DefaultPlatformFunctions");
/**
 * Specializes DefaultPlatformFunctions using APIs available in Node.js.
 */
class NodePlatformFunctions extends DefaultPlatformFunctions {
    constructor() {
        super();
        this._exec = require('child_process').exec;
    }
    /** @override */
    uuid4() {
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
     * This unifies that interface.
     */
    safeExec(cmd, cb) {
        try {
            this._exec(cmd, cb);
        }
        catch (e) {
            cb(e, null);
        }
    }
    /**
     * @override
     * Secure compare, from https://github.com/freewil/scmp
     */
    secureCompare(a, b) {
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
            const aEncoded = textEncoder.encode(a);
            const bEncoded = textEncoder.encode(b);
            return crypto.timingSafeEqual(aEncoded, bEncoded);
        }
        return super.secureCompare(a, b);
    }
}
module.exports = NodePlatformFunctions;
