# stripe-node

## Testing

- Run all tests: `just test` (builds first)
- Run a specific test: `just test --grep "test name pattern"`
- Tests use mocha
- Must build TypeScript before testing (handled automatically by `just` commands)

## Formatting & Linting

- Format: `just format` (uses prettier)
- Lint: `just lint` (uses eslint, also auto-fixes)
- Lint check only: `just lint-check`

## Key Locations

- HTTP client interface: `src/net/HttpClient.ts`
- Node.js HTTP implementation: `src/net/NodeHttpClient.ts`
- Fetch-based HTTP implementation: `src/net/FetchHttpClient.ts`
- Request orchestration (headers, auth, retries): `src/RequestSender.ts`
- Core client setup: `src/stripe.core.ts`
- API version: `src/apiVersion.ts`

## Generated Code

- Files containing `File generated from our OpenAPI spec` at the top are generated; do not edit. Similarly, any code block starting with `The beginning of the section generated from our OpenAPI spec` is generated and should not be edited directly.
  - If something in a generated file/range needs to be updated, add a summary of the change to your report but don't attempt to edit it directly.

## Conventions

- TypeScript source in `src/`, compiled to `cjs/` (CommonJS) and `esm/` (ES modules)
- Multi-platform: exports for Node.js, browser, Deno, Bun, workers
- Dependencies installed via yarn
- Work is not complete until `just test`, `just format`, and `just lint` complete successfully.
- All code must run on all supported Node versions (full list in the test section of @.github/workflows/ci.yml)

### Comments

- Comments MUST only be used to:
  1. Document a function
  2. Explain the WHY of a piece of code
  3. Explain a particularly complicated piece of code
- Comments NEVER should be used to:
  1. Say what used to be there. That's no longer relevant!
  2. Explain the WHAT of a piece of code (unless it's very non-obvious)

It's ok not to put comments on/in a function if their addition wouldn't meaningfully clarify anything.
