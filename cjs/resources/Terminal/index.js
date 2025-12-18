"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.Terminal = void 0;
const Configurations_js_1 = require("./Configurations.js");
const ConnectionTokens_js_1 = require("./ConnectionTokens.js");
const Locations_js_1 = require("./Locations.js");
const Readers_js_1 = require("./Readers.js");
class Terminal {
    constructor(stripe) {
        this.stripe = stripe;
        this.configurations = new Configurations_js_1.ConfigurationResource(stripe);
        this.connectionTokens = new ConnectionTokens_js_1.ConnectionTokenResource(stripe);
        this.locations = new Locations_js_1.LocationResource(stripe);
        this.readers = new Readers_js_1.ReaderResource(stripe);
    }
}
exports.Terminal = Terminal;
