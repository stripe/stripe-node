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
    createEmitter() {
        return new StripeEmitter();
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
