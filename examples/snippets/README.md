## Setup

1. From the stripe-node root folder, run `just build` or `just build-dev` to build the modules. `just build-dev` produces source maps for each of the SDK .ts files. This is optional but very useful when troubleshooting SDK behavior.
2. Then, from this snippets folder, run `yarn` to install node dependencies for the example snippets. This will reference the local Stripe SDK modules created in step 1.

If on step 2 you see an error `Error: unsure how to copy this: /Users/jar/stripe/sdks/node/.git/fsmonitor--daemon.ipc`:
run `rm /path/to/node/sdk/.git/fsmonitor--daemon.ipc && yarn`
This file is used by a file monitor built into git. Removing it temporarily does not seem to affect its operation, and this one liner will let `yarn` succeed.

Note that if you modify the stripe-node code, rerun step 1 and then run `yarn upgrade stripe` from this folder to pull in the new built package.

## Running an example

If your example is in typescript, run:
`yarn run ts-node your_example.ts`

If your example is in javascript, run:
`node your_example.js`
or
`node your_example.mjs`

## Adding a new example

1. Clone new_example.ts
2. Implement your example
3. Run it (as per above)
4. 👍
