"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.Climate = void 0;
const Orders_js_1 = require("./Orders.js");
const Products_js_1 = require("./Products.js");
const Suppliers_js_1 = require("./Suppliers.js");
class Climate {
    constructor(stripe) {
        this.stripe = stripe;
        this.orders = new Orders_js_1.OrderResource(stripe);
        this.products = new Products_js_1.ProductResource(stripe);
        this.suppliers = new Suppliers_js_1.SupplierResource(stripe);
    }
}
exports.Climate = Climate;
