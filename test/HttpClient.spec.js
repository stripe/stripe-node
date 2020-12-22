const {NodeHttpClient} = require('../lib/HttpClient');
const expect = require('chai').expect;

describe('_calculateRetryDelayMs', () => {
  it('should not exceed the maximum or minimum values', () => {
    const max = 2000;
    const min = 500;
    const afterWait = 60000;

    for (let i = 1; i < 11; i++) {
      const delayed = NodeHttpClient._calculateRetryDelayMs(
        {},
        i,
        max,
        min,
        afterWait
      );

      expect(delayed).to.be.at.most(max);
      expect(delayed).to.be.at.least(min);
    }
  });
});
