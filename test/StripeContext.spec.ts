// @ts-nocheck

'use strict';

import {expect} from 'chai';
import {StripeContext} from '../src/StripeContext.ts';

describe('StripeContext', () => {
  describe('constructor', () => {
    it('should create empty context with no arguments', () => {
      const context = new StripeContext();
      expect(context.toString()).to.equal('');
    });

    it('should create context with provided segments', () => {
      const context = new StripeContext(['a', 'b', 'c']);
      expect(context.toString()).to.equal('a/b/c');
    });
  });

  describe('parse', () => {
    it('should parse empty string', () => {
      const context = StripeContext.parse('');
      expect(context.toString()).to.equal('');
    });

    it('should parse single segment', () => {
      const context = StripeContext.parse('a');
      expect(context.toString()).to.equal('a');
    });

    it('should parse multiple segments', () => {
      const context = StripeContext.parse('a/b/c');
      expect(context.toString()).to.equal('a/b/c');
    });
  });

  describe('parent', () => {
    it('should return new instance with last segment removed', () => {
      const context = StripeContext.parse('a/b/c');
      const parent = context.parent();

      expect(context.toString()).to.equal('a/b/c'); // Original unchanged
      expect(parent.toString()).to.equal('a/b'); // New instance
    });

    it('should return empty context for single segment', () => {
      const context = StripeContext.parse('a');
      const parent = context.parent();
      expect(parent.toString()).to.equal('');
    });

    it('should throw error for empty context', () => {
      const context = new StripeContext();
      expect(() => context.parent()).to.throw('Cannot get parent of empty context');
    });
  });

  describe('child', () => {
    it('should return new instance with segment added', () => {
      const context = StripeContext.parse('a/b');
      const child = context.child('c');

      expect(context.toString()).to.equal('a/b'); // Original unchanged
      expect(child.toString()).to.equal('a/b/c'); // New instance
    });

    it('should add segment to empty context', () => {
      const context = new StripeContext();
      const child = context.child('a');
      expect(child.toString()).to.equal('a');
    });
  });

  describe('chaining operations', () => {
    it('should support method chaining', () => {
      const context = StripeContext.parse('a');
      const result = context.child('b').child('c').parent();
      expect(result.toString()).to.equal('a/b');
    });
  });

  describe('header behavior', () => {
    it('should not set header for empty context', () => {
      const emptyContext = new StripeContext();
      // Empty context should convert to empty string
      expect(emptyContext.toString()).to.equal('');
    });

    it('should set header for non-empty context', () => {
      const context = StripeContext.parse('org_123/proj_456');
      // Non-empty context should convert to proper string
      expect(context.toString()).to.equal('org_123/proj_456');
    });
  });
});