"use strict";
/**
 * @private
 * (For internal use in stripe-node.)
 * Wrapper around the Event Web API.
 */
class _StripeEvent extends Event {
    constructor(eventName, data) {
        super(eventName);
        this.data = data;
    }
}
/** Minimal EventEmitter wrapper around EventTarget. */
class StripeEmitter {
    constructor(eventTarget) {
        this.eventTarget = eventTarget;
        this.listenerMapping = {};
    }
    on(eventName, listener) {
        const listenerWrapper = (event) => {
            listener(event.data);
        };
        this.listenerMapping[listener.toString()] = listenerWrapper;
        return this.eventTarget.addEventListener(eventName, listenerWrapper);
    }
    removeListener(eventName, listener) {
        const listenerWrapper = this.listenerMapping[listener.toString()];
        delete this.listenerMapping[listener.toString()];
        return this.eventTarget.removeEventListener(eventName, listenerWrapper);
    }
    once(eventName, listener) {
        const listenerWrapper = (event) => {
            listener(event.data);
        };
        this.listenerMapping[listener.toString()] = listenerWrapper;
        return this.eventTarget.addEventListener(eventName, listenerWrapper, {
            once: true,
        });
    }
    emit(eventName, data) {
        return this.eventTarget.dispatchEvent(new _StripeEvent(eventName, data));
    }
}
module.exports = StripeEmitter;
