set quiet := true

import? '../sdk-codegen/justfile'

# make locally installed binaries available without a longer specifier
# export PATH := "./node_modules/.bin:" + env_var('PATH')
export PATH := `pwd` + "/node_modules/.bin:" + env('PATH')

_default:
    just --list --unsorted

# this uses positional-args so that mixed quoted and unquoted arguments
# (like filtering for a certain test) work the way we expect
# ⭐ run unit tests
[positional-arguments]
test *args: build
    mocha "$@"

# try to compile the example TS file to make sure exports work
types-test: build
    tsc --build types/test

# run full integration tests by installing a bunch of packages and starting servers (slow)
[positional-arguments]
integrations-test *args: build
    RUN_INTEGRATION_TESTS=1 mocha test/Integration.spec.ts "$@"

# run the full test suite; you probably want `test`
ci-test: install test types-test integrations-test

_build mode packageType:
    mkdir -p {{ mode }}
    tsc -p tsconfig.{{ mode }}.json
    echo '{"type":"{{ packageType }}"}' > {{ mode }}/package.json

[private]
build-esm: (_build "esm" "module")

[private]
build-cjs: (_build "cjs" "commonjs")

# generate CJS and ESM versions of the package; mostly used as a pre-req for other steps
build: build-esm build-cjs

# ⭐ run style checks, fixing issues if possible
lint: (lint-check "--fix")

# run style checks without changing anything
lint-check *args:
    eslint --ext .js,.ts . {{ args }}

# reinstall dependencies, if needed
install:
    yarn {{ if is_dependency() == "true" { "--silent" } else { "" } }}

[no-exit-message]
[private]
prettier *args:
    # all the project-relevant JS code
    prettier "{src,examples,scripts,test,types}/**/*.{ts,js}" {{ args }}

# `format` needs to install since other scripts run it cold
# ⭐ format all files
format: install (prettier "--write --loglevel silent")
    # ensure other files reflect the version in package.json
    ./scripts/updateAPIVersion.js

# verify formatting of files (without changes)
format-check: (prettier "--check")

# called by tooling
[private]
update-version version:
    echo "{{ version }}" > VERSION
    perl -pi -e 's|"version": "[.\-\d\w]+"|"version": "{{ version }}"|' package.json
    perl -pi -e "s|Stripe.PACKAGE_VERSION = '[.\-\d\w]+'|Stripe.PACKAGE_VERSION = '{{ version }}'|" src/stripe.core.ts

# remove build artifacts
clean:
    rm -rf ./node_modules/.cache ./esm ./cjs
