/**
 * ESLint rule: wintertc-compat
 *
 * Flags usage of APIs not in the WinterTC Minimum Common Web Platform API
 * spec (ECMA-429). Designed to catch cross-runtime compatibility issues in
 * code that must run in Node.js, browsers, Deno, Bun, and other runtimes.
 *
 * Spec: https://min-common-api.proposal.wintertc.org/
 */

'use strict';

// Complete list of Node.js built-in modules.
// See: https://nodejs.org/api/modules.html#built-in-modules
const NODE_BUILTIN_MODULES = new Set([
  'assert',
  'assert/strict',
  'async_hooks',
  'buffer',
  'child_process',
  'cluster',
  'console',
  'constants',
  'crypto',
  'dgram',
  'diagnostics_channel',
  'dns',
  'dns/promises',
  'domain',
  'events',
  'fs',
  'fs/promises',
  'http',
  'http2',
  'https',
  'inspector',
  'module',
  'net',
  'os',
  'path',
  'path/posix',
  'path/win32',
  'perf_hooks',
  'process',
  'punycode',
  'querystring',
  'readline',
  'readline/promises',
  'repl',
  'stream',
  'stream/consumers',
  'stream/promises',
  'stream/web',
  'string_decoder',
  'sys',
  'test',
  'timers',
  'timers/promises',
  'tls',
  'trace_events',
  'tty',
  'url',
  'util',
  'util/types',
  'v8',
  'vm',
  'wasi',
  'worker_threads',
  'zlib',
]);

// Node.js-specific globals that are not in the WinterTC spec or ECMAScript.
const NODE_GLOBALS = new Set([
  'Buffer',
  'process',
  '__dirname',
  '__filename',
  'global',
  'require',
  'module',
  'exports',
]);

function findVariable(scope, name) {
  let s = scope;
  while (s) {
    const found = s.variables.find((v) => v.name === name);
    if (found) {
      return found;
    }
    s = s.upper;
  }
  return null;
}

module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description:
        'Disallow Node.js-specific APIs in cross-runtime code per the WinterTC Minimum Common Web Platform API spec (ECMA-429)',
      url: 'https://min-common-api.proposal.wintertc.org/',
    },
    messages: {
      nodeImport:
        "Import from Node.js built-in module '{{source}}' is not available in all runtimes.",
      nodeGlobal:
        "'{{name}}' is a Node.js-specific global not available in all runtimes.",
      nodeType:
        "'NodeJS.{{name}}' is a Node.js-specific type. Use a cross-runtime alternative.",
    },
    schema: [],
  },

  create(context) {
    return {
      // Flag imports from Node.js built-in modules (both bare and node: prefix).
      ImportDeclaration(node) {
        const source = node.source.value;
        const moduleName = source.startsWith('node:')
          ? source.slice(5)
          : source;

        if (NODE_BUILTIN_MODULES.has(moduleName)) {
          context.report({
            node: node.source,
            messageId: 'nodeImport',
            data: {source},
          });
        }
      },

      // Flag require() calls for Node.js built-in modules.
      CallExpression(node) {
        if (
          node.callee.type === 'Identifier' &&
          node.callee.name === 'require' &&
          node.arguments.length > 0 &&
          node.arguments[0].type === 'Literal' &&
          typeof node.arguments[0].value === 'string'
        ) {
          const source = node.arguments[0].value;
          const moduleName = source.startsWith('node:')
            ? source.slice(5)
            : source;

          if (NODE_BUILTIN_MODULES.has(moduleName)) {
            context.report({
              node: node.arguments[0],
              messageId: 'nodeImport',
              data: {source},
            });
          }
        }
      },

      // Flag references to Node.js-specific globals.
      Identifier(node) {
        if (!NODE_GLOBALS.has(node.name)) {
          return;
        }

        // Skip property accesses: obj.Buffer, obj.process, etc.
        if (
          node.parent.type === 'MemberExpression' &&
          node.parent.property === node &&
          !node.parent.computed
        ) {
          return;
        }

        // Skip variable declarations: const Buffer = ...
        if (
          node.parent.type === 'VariableDeclarator' &&
          node.parent.id === node
        ) {
          return;
        }

        // Skip function parameter names
        if (
          node.parent.type === 'FunctionDeclaration' ||
          node.parent.type === 'FunctionExpression' ||
          node.parent.type === 'ArrowFunctionExpression'
        ) {
          if (node.parent.params && node.parent.params.includes(node)) {
            return;
          }
        }

        // Skip object property keys: { process: ... }
        if (
          node.parent.type === 'Property' &&
          node.parent.key === node &&
          !node.parent.computed
        ) {
          return;
        }

        // Skip import specifiers: import { Buffer } from '...' (caught by ImportDeclaration)
        if (
          node.parent.type === 'ImportSpecifier' ||
          node.parent.type === 'ImportDefaultSpecifier' ||
          node.parent.type === 'ImportNamespaceSpecifier'
        ) {
          return;
        }

        // Only flag actual global references, not locally-scoped variables.
        const scope = context.getScope();
        const variable = findVariable(scope, node.name);
        if (variable && variable.defs.length > 0) {
          return;
        }

        context.report({
          node,
          messageId: 'nodeGlobal',
          data: {name: node.name},
        });
      },

      // Flag NodeJS.* type references (e.g., NodeJS.ReadableStream, NodeJS.Timeout).
      TSTypeReference(node) {
        if (
          node.typeName &&
          node.typeName.type === 'TSQualifiedName' &&
          node.typeName.left &&
          node.typeName.left.type === 'Identifier' &&
          node.typeName.left.name === 'NodeJS'
        ) {
          context.report({
            node,
            messageId: 'nodeType',
            data: {name: node.typeName.right.name},
          });
        }
      },
    };
  },
};
