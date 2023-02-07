#!/usr/bin/env bash
set -eu -o pipefail

cp -f ../.eslintrc.js .
cp -f ../tsconfig.json .
cp -n ../.env.example ./.env || true
eslint --quiet .
