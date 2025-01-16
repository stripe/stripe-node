set quiet

import? '../sdk-codegen/utils.just'

# make locally installed binaries available throughout the tree without a longer specifier
# this is useful in this file, but also depended on by webhook tests that expect to be able to call `eslint` and (I think) don't set it up correctly themselves.
export PATH := `pwd` + "/node_modules/.bin:" + env('PATH')

_default:
    just --list --unsorted

# this uses positional-args so that mixed quoted and unquoted arguments
# (like filtering for a certain test) work the way we expect
# ⭐ run unit tests
[positional-arguments]
test *args: install build
    mocha "$@"

# try to compile the example TS file to make sure exports work
types-test: build
    tsc --build types/test

# run full integration tests by installing a bunch of packages and starting servers (slow)
integrations-test: build
    RUN_INTEGRATION_TESTS=1 mocha test/Integration.spec.ts

# run the full test suite; you probably want `test`
ci-test: install test types-test integrations-test

_build mode packageType: install
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
lint-check *args: install
    eslint --ext .js,.ts . {{ args }}

# reinstall dependencies, if needed
install:
    yarn {{ if is_dependency() == "true" { "--silent" } else { "" } }}

[no-exit-message]
[private]
prettier *args: install
    # all the project-relevant JS code
    prettier "{src,examples,scripts,test,types}/**/*.{ts,js}" {{ args }}

# ⭐ format all files
format: (prettier "--write --loglevel silent") _update-api-version

# verify formatting of files (without changes)
format-check: (prettier "--check")

# propagate automatic changes; should be run after generation
# in practice, that means it runs after formatting, since that's the only recipe that the generator calls
_update-api-version:
    ./scripts/updateAPIVersion.js

# called by tooling
[private]
update-version version:
    echo "{{ version }}" > VERSION
    perl -pi -e 's|"version": "[.\-\d\w]+"|"version": "{{ version }}"|' package.json
    perl -pi -e "s|Stripe.PACKAGE_VERSION = '[.\-\d\w]+'|Stripe.PACKAGE_VERSION = '{{ version }}'|" src/stripe.core.ts

# remove build artifacts
clean:
    rm -rf ./node_modules/.cache ./esm ./cjs
