import {expect} from 'chai';
import {StripeContext} from '../src/StripeContext.js';

describe('StripeContext', () => {
  describe('constructor', () => {
    it('should create empty context with no segments', () => {
      const context = new StripeContext();
      expect(context.segments).to.deep.equal([]);
    });

    it('should create context with given segments', () => {
      const segments = ['a', 'b', 'c'];
      const context = new StripeContext(segments);
      expect(context.segments).to.deep.equal(segments);
    });

    it('should not freeze the segments array', () => {
      const context = new StripeContext(['a', 'b']);
      // don't actually need to freeze, it's a private property
      expect(Object.isFrozen(context.segments)).to.be.false;
    });
  });

  describe('push', () => {
    it('should return new context with added segment', () => {
      const context = new StripeContext(['a', 'b']);
      const newContext = context.push('c');

      expect(context.segments).to.deep.equal(['a', 'b']);
      expect(newContext.segments).to.deep.equal(['a', 'b', 'c']);
      expect(context).to.not.equal(newContext);
    });

    it('should throw error for null segment', () => {
      const context = new StripeContext();
      expect(() => context.push(null as any)).to.throw(
        'Segment cannot be null or undefined'
      );
    });

    it('should throw error for undefined segment', () => {
      const context = new StripeContext();
      expect(() => context.push(undefined as any)).to.throw(
        'Segment cannot be null or undefined'
      );
    });
  });

  describe('pop', () => {
    it('should return new context with last segment removed', () => {
      const context = new StripeContext(['a', 'b', 'c']);
      const newContext = context.pop();

      expect(context.segments).to.deep.equal(['a', 'b', 'c']);
      expect(newContext.segments).to.deep.equal(['a', 'b']);
      expect(context).to.not.equal(newContext);
    });

    it('should throw error when popping empty context', () => {
      const context = new StripeContext();
      expect(() => context.pop()).to.throw('Cannot pop from an empty context');
    });
  });

  describe('toString', () => {
    it('should return empty string for empty context', () => {
      const context = new StripeContext();
      expect(context.toString()).to.equal('');
    });

    it('should return single segment for single segment context', () => {
      const context = new StripeContext(['a']);
      expect(context.toString()).to.equal('a');
    });

    it('should return slash-separated segments for multiple segments', () => {
      const context = new StripeContext(['a', 'b', 'c']);
      expect(context.toString()).to.equal('a/b/c');
    });
  });

  describe('parse', () => {
    it('should return empty context for null input', () => {
      const context = StripeContext.parse(null);
      expect(context.segments).to.deep.equal([]);
    });

    it('should return empty context for undefined input', () => {
      const context = StripeContext.parse(undefined);
      expect(context.segments).to.deep.equal([]);
    });

    it('should return empty context for empty string', () => {
      const context = StripeContext.parse('');
      expect(context.segments).to.deep.equal([]);
    });

    it('should return single segment context for single segment string', () => {
      const context = StripeContext.parse('a');
      expect(context.segments).to.deep.equal(['a']);
    });

    it('should return multiple segment context for slash-separated string', () => {
      const context = StripeContext.parse('a/b/c');
      expect(context.segments).to.deep.equal(['a', 'b', 'c']);
    });
  });

  describe('immutability', () => {
    it('should not modify original context on push', () => {
      const original = new StripeContext(['a', 'b']);
      const pushed = original.push('c');
      const popped = original.pop();

      expect(original.segments).to.deep.equal(['a', 'b']);
      expect(pushed.segments).to.deep.equal(['a', 'b', 'c']);
      expect(popped.segments).to.deep.equal(['a']);

      expect(original).to.not.equal(pushed);
      expect(original).to.not.equal(popped);
      expect(pushed).to.not.equal(popped);
    });
  });

  describe('usage patterns', () => {
    it('should support context hierarchy building', () => {
      const base = StripeContext.parse('workspace_123');
      const child = base.push('account_456');
      const grandchild = child.push('customer_789');

      expect(base.toString()).to.equal('workspace_123');
      expect(child.toString()).to.equal('workspace_123/account_456');
      expect(grandchild.toString()).to.equal(
        'workspace_123/account_456/customer_789'
      );

      const backToChild = grandchild.pop();
      const backToBase = backToChild.pop();

      expect(backToChild.toString()).to.equal('workspace_123/account_456');
      expect(backToBase.toString()).to.equal('workspace_123');
    });
  });
});
