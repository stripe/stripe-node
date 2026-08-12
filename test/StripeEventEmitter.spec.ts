import {expect} from 'chai';
import {RequestEvent, ResponseEvent} from '../src/lib.js';
import {StripeEventEmitter} from '../src/StripeEventEmitter.js';

const requestEvent: RequestEvent = {
  api_version: '2025-01-01',
  method: 'GET',
  path: '/v1/customers',
  request_start_time: 123,
};
const responseEvent: ResponseEvent = {
  ...requestEvent,
  status: 200,
  request_id: 'req_123',
  elapsed: 10,
  request_end_time: 133,
};

describe('StripeEventEmitter', () => {
  it('emits data to listeners registered with on', () => {
    const emitter = new StripeEventEmitter();
    const calls: Array<RequestEvent | ResponseEvent | undefined> = [];

    emitter.on('request', (data) => calls.push(data));

    expect(emitter.emit('request', requestEvent)).to.equal(true);
    expect(calls).to.deep.equal([requestEvent]);
  });

  it('listeners registered via once only fire once', () => {
    const emitter = new StripeEventEmitter();
    let calls = 0;

    emitter.once('response', () => {
      calls += 1;
    });

    expect(emitter.emit('response', responseEvent)).to.equal(true);
    expect(emitter.emit('response', responseEvent)).to.equal(false);
    expect(calls).to.equal(1);
  });

  it('removes a once listener before invoking it', () => {
    const emitter = new StripeEventEmitter();
    let calls = 0;

    emitter.once('response', () => {
      calls += 1;
      throw new Error('listener failed');
    });

    expect(() => emitter.emit('response', responseEvent)).to.throw(
      'listener failed'
    );
    expect(emitter.emit('response', responseEvent)).to.equal(false);
    expect(calls).to.equal(1);
  });

  it('removes a listener from only the requested event name', () => {
    const emitter = new StripeEventEmitter();
    const calls: Array<RequestEvent | ResponseEvent | undefined> = [];
    const listener = (data?: RequestEvent | ResponseEvent): void => {
      calls.push(data);
    };

    emitter.on('request', listener);
    emitter.on('response', listener);
    emitter.removeListener('request', listener);

    expect(emitter.emit('request', requestEvent)).to.equal(false);
    expect(emitter.emit('response', responseEvent)).to.equal(true);
    expect(calls).to.deep.equal([responseEvent]);
  });

  it('ignores removing listeners for never-registered event names', () => {
    const emitter = new StripeEventEmitter();

    expect(() => emitter.removeListener('request', () => {})).to.not.throw();
  });

  it('ignores removing listeners that were not registered', () => {
    const emitter = new StripeEventEmitter();
    let calls = 0;

    emitter.on('request', () => {
      calls += 1;
    });
    emitter.removeListener('request', () => {});

    expect(emitter.emit('request', requestEvent)).to.equal(true);
    expect(calls).to.equal(1);
  });

  it('supports the same listener registered more than once', () => {
    const emitter = new StripeEventEmitter();
    let calls = 0;
    const listener = () => {
      calls += 1;
    };

    emitter.on('request', listener);
    emitter.once('request', listener);

    expect(emitter.emit('request')).to.equal(true);
    expect(calls).to.equal(2);
    expect(emitter.emit('request')).to.equal(true);
    expect(calls).to.equal(3);
  });
});
