"use strict";
const StripeEmitter = require("../StripeEmitter");
const PlatformFunctions = require("./PlatformFunctions");
/**
 * Specializes WebPlatformFunctions using APIs available in Web workers.
 */
class WebPlatformFunctions extends PlatformFunctions {
    /** @override */
    getUname() {
        return Promise.resolve(null);
    }
    /** @override */
    uuid4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
            const r = (Math.random() * 16) | 0;
            const v = c === 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    }
    /** @override */
    secureCompare(a, b) {
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
    createEmitter() {
        return new StripeEmitter(new EventTarget());
    }
    /** @override */
    tryBufferData(data) {
        if (data.file.data instanceof ReadableStream) {
            throw new Error('Uploading a file as a stream is not supported in non-Node environments. Please open or upvote an issue at github.com/stripe/stripe-node if you use this, detailing your use-case.');
        }
        return Promise.resolve(data);
    }
}
module.exports = WebPlatformFunctions;
