"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodePlatformFunctions = void 0;
const crypto = require("crypto");
const events_1 = require("events");
const NodeCryptoProvider_1 = require("../crypto/NodeCryptoProvider");
const NodeHttpClient_1 = require("../net/NodeHttpClient");
const PlatformFunctions_1 = require("./PlatformFunctions");
const Error_1 = require("../Error");
const utils_1 = require("../utils");
class StreamProcessingError extends Error_1.StripeError {
}
/**
 * Specializes WebPlatformFunctions using APIs available in Node.js.
 */
class NodePlatformFunctions extends PlatformFunctions_1.PlatformFunctions {
    constructor() {
        super();
        this._exec = require('child_process').exec;
        this._UNAME_CACHE = null;
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
     * This unifies that interface by resolving with a null uname
     * if an error is encountered.
     */
    getUname() {
        if (!this._UNAME_CACHE) {
            this._UNAME_CACHE = new Promise((resolve, reject) => {
                try {
                    this._exec('uname -a', (err, uname) => {
                        if (err) {
                            return resolve(null);
                        }
                        resolve(uname);
                    });
                }
                catch (e) {
                    resolve(null);
                }
            });
        }
        return this._UNAME_CACHE;
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
    createEmitter() {
        return new events_1.EventEmitter();
    }
    /** @override */
    tryBufferData(data) {
        if (!(data.file.data instanceof events_1.EventEmitter)) {
            return Promise.resolve(data);
        }
        const bufferArray = [];
        return new Promise((resolve, reject) => {
            data.file.data
                .on('data', (line) => {
                bufferArray.push(line);
            })
                .once('end', () => {
                // @ts-ignore
                const bufferData = Object.assign({}, data);
                bufferData.file.data = (0, utils_1.concat)(bufferArray);
                resolve(bufferData);
            })
                .on('error', (err) => {
                reject(new StreamProcessingError({
                    message: 'An error occurred while attempting to process the file for upload.',
                    detail: err,
                }));
            });
        });
    }
    /** @override */
    createNodeHttpClient(agent) {
        return new NodeHttpClient_1.NodeHttpClient(agent);
    }
    /** @override */
    createDefaultHttpClient() {
        return new NodeHttpClient_1.NodeHttpClient();
    }
    /** @override */
    createNodeCryptoProvider() {
        return new NodeCryptoProvider_1.NodeCryptoProvider();
    }
    /** @override */
    createDefaultCryptoProvider() {
        return this.createNodeCryptoProvider();
    }
}
exports.NodePlatformFunctions = NodePlatformFunctions;
