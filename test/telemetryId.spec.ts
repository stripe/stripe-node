// @ts-nocheck

import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';

import {expect} from 'chai';
import {NodePlatformFunctions} from '../src/platform/NodePlatformFunctions.js';

describe('NodePlatformFunctions#getTelemetryId', () => {
  let platform: NodePlatformFunctions;
  let tmpDir: string;
  let origXdg: string | undefined;

  beforeEach(() => {
    platform = new NodePlatformFunctions();
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'stripe-telemetry-test-'));
    origXdg = process.env.XDG_CONFIG_HOME;
    process.env.XDG_CONFIG_HOME = tmpDir;
  });

  afterEach(() => {
    if (origXdg !== undefined) {
      process.env.XDG_CONFIG_HOME = origXdg;
    } else {
      delete process.env.XDG_CONFIG_HOME;
    }
    fs.rmSync(tmpDir, {recursive: true, force: true});
  });

  it('returns a 32-character hex string', () => {
    const id = platform.getTelemetryId();
    expect(id).to.be.a('string');
    expect(id).to.match(/^[0-9a-f]{32}$/);
  });

  it('is deterministic — returns the same value on repeated calls', () => {
    const id1 = platform.getTelemetryId();
    const id2 = platform.getTelemetryId();
    expect(id1).to.equal(id2);
  });

  it('is cached in memory — second call does not re-read the file', () => {
    const id1 = platform.getTelemetryId();

    // Overwrite the file with a different value after the first call
    const filePath = path.join(tmpDir, 'stripe', 'telemetry_id');
    fs.writeFileSync(filePath, 'ffffffffffffffffffffffffffffffff', 'utf8');

    // Second call should return the cached value, not the new file content
    const id2 = platform.getTelemetryId();
    expect(id2).to.equal(id1);
    expect(id2).to.not.equal('ffffffffffffffffffffffffffffffff');
  });

  it('reads an existing telemetry_id from the file', () => {
    const existingId = 'deadbeef1234567890abcdef12345678';
    const filePath = path.join(tmpDir, 'stripe', 'telemetry_id');
    fs.mkdirSync(path.dirname(filePath), {recursive: true});
    fs.writeFileSync(filePath, existingId, 'utf8');

    const id = platform.getTelemetryId();
    expect(id).to.equal(existingId);
  });

  it('generates and persists a new ID when the file is absent', () => {
    // No pre-existing file; the directory exists but the file does not
    const filePath = path.join(tmpDir, 'stripe', 'telemetry_id');
    expect(fs.existsSync(filePath)).to.be.false;

    const id = platform.getTelemetryId();
    expect(id).to.be.a('string');
    expect(id).to.match(/^[0-9a-f]{32}$/);

    // Verify the ID was written to disk
    expect(fs.existsSync(filePath)).to.be.true;
    const persisted = fs.readFileSync(filePath, 'utf8');
    expect(persisted).to.equal(id);
  });

  it('returns null when the file cannot be written', () => {
    // Point to a path whose parent cannot be created: use a file as a directory
    const blockingFile = path.join(tmpDir, 'not-a-dir');
    fs.writeFileSync(blockingFile, 'collision', 'utf8');
    // Redirect XDG_CONFIG_HOME to a subpath that passes through the blocking file
    process.env.XDG_CONFIG_HOME = path.join(blockingFile, 'stripe-nested');

    const id = platform.getTelemetryId();
    expect(id).to.be.null;
  });

  it('creates parent directories automatically when they are missing', () => {
    // XDG_CONFIG_HOME is set to a path that does not yet exist
    const deepDir = path.join(tmpDir, 'a', 'b', 'c');
    process.env.XDG_CONFIG_HOME = deepDir;

    const id = platform.getTelemetryId();
    expect(id).to.be.a('string');
    expect(id).to.match(/^[0-9a-f]{32}$/);

    const filePath = path.join(deepDir, 'stripe', 'telemetry_id');
    expect(fs.existsSync(filePath)).to.be.true;
  });

  describe('_getTelemetryIdPath', () => {
    it('uses XDG_CONFIG_HOME when set', () => {
      const xdgBase = path.join(tmpDir, 'custom-xdg');
      process.env.XDG_CONFIG_HOME = xdgBase;

      const result = (platform as any)._getTelemetryIdPath();
      expect(result).to.equal(path.join(xdgBase, 'stripe', 'telemetry_id'));
    });

    it('falls back to ~/.config/stripe/telemetry_id when XDG_CONFIG_HOME is unset', () => {
      delete process.env.XDG_CONFIG_HOME;

      const result = (platform as any)._getTelemetryIdPath();
      const expected = path.join(
        os.homedir(),
        '.config',
        'stripe',
        'telemetry_id'
      );
      expect(result).to.equal(expected);
    });
  });
});
