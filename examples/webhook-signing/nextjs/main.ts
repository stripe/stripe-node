#!/usr/bin/env -S npm run-script run

/*
  ATTENTION: this file exists to support github/stripe/stripe-node example test infrastructure
  You don't need to copy this file to your NextJS project.
*/

import child_process from 'child_process';

const process = child_process.exec('npm run dev --verbose');
process.stdout.on('data', (line) => {
  const match = /url: (.*)/gm.exec(line);
  if (match) {
    console.log(`Webhook endpoint available at ${match[1]}/api/webhooks`);
  }
  console.log(line);
});
