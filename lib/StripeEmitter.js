"use strict";
/** Minimal EventEmitter wrapper around EventTarget. */
class StripeEmitter {
    constructor(eventTarget) {
        this.eventTarget = eventTarget;
    }
    on(eventName, listener) {
        return this.eventTarget.addEventListener(eventName, listener);
    }
    removeListener(eventName, listener) {
        return this.eventTarget.removeEventListener(eventName, listener);
    }
    once(eventName, listener) {
        return this.eventTarget.addEventListener(eventName, listener, {
            once: true,
        });
    }
    emit(eventName, data) {
        return this.eventTarget.dispatchEvent(new Event(eventName, data));
    }
}
module.exports = StripeEmitter;
