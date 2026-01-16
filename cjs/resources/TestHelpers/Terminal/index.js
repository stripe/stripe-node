"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.Terminal = void 0;
const Readers_js_1 = require("./Readers.js");
class Terminal {
    constructor(stripe) {
        this.stripe = stripe;
        this.readers = new Readers_js_1.ReaderResource(stripe);
    }
}
exports.Terminal = Terminal;
//# sourceMappingURL=index.js.map