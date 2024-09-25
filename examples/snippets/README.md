## Setup

1. From the project root, run `yarn build` to build the modules.
2. Run `yarn` to install node dependencies. This will reference the local Stripe SDK modules created in step 1.

If on step 2 you see an error `Error: unsure how to copy this: /Users/jar/stripe/sdks/node/.git/fsmonitor--daemon.ipc`:
run `rm /path/to/node/sdk/.git/fsmonitor--daemon.ipc && yarn`
This file is used by a file monitor built into git. Removing it temporarily does not seem to affect its operation, and this one liner will let `yarn` succeed.

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
