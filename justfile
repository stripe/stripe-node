set quiet

import? '../sdk-codegen/utils.just'

# make locally installed binaries available throughout the tree without a longer specifier
# this is useful in this file, but also depended on by webhook tests that expect to be able to call `eslint` and (I think) don't set it up correctly themselves.
export PATH := `pwd` + "/node_modules/.bin:" + env('PATH')

_default:
    just --list --unsorted

# ⭐ run format, lint, and tests to prepare for CI
prepare: format lint test types-test packages-test

# this uses positional-args so that mixed quoted and unquoted arguments
# (like filtering for a certain test) work the way we expect
# ⭐ run unit tests
[positional-arguments]
test *args: install build
    mocha "$@"

# try to compile the example TS file to make sure exports work
types-test: build
    for dir in types types-cjs types-cjs-node16; do \
        if [ ! -d "testProjects/$dir/node_modules" ]; then (cd "testProjects/$dir" && npm install); fi; \
        tsc --build "testProjects/$dir"; \
    done

# run full integration tests by installing a bunch of packages and starting servers (slow)
integrations-test: build
    RUN_INTEGRATION_TESTS=1 mocha test/Integration.spec.ts

# the separately published companion packages maintained in this repo
PACKAGES := "stripe-aws-workload-identity"

# ⭐ build, typecheck, and test the companion packages in packages/
#
# Run this at a single, modern Node version rather than across the core SDK's
# support matrix. `@stripe/stripe-aws-workload-identity` depends on
# `@aws-sdk/client-sts`, whose current releases require Node >= 20 even though
# the core SDK supports Node >= 18.
packages-test:
    #!/usr/bin/env bash
    set -euo pipefail
    for pkg in {{ PACKAGES }}; do
        cd "{{ justfile_directory() }}/packages/$pkg"
        # each package carries its own dependencies so that the core `stripe`
        # package never gains them, even transitively
        if [ ! -d node_modules ]; then npm install --no-audit --no-fund; fi
        npm run typecheck
        npm run build
        npm test
    done

# verify each companion package produces a publishable archive (does not publish)
packages-pack: packages-test
    #!/usr/bin/env bash
    set -euo pipefail
    for pkg in {{ PACKAGES }}; do
        cd "{{ justfile_directory() }}/packages/$pkg"
        archive=$(npm pack --silent)
        echo "--- $pkg: $archive"
        tar -tzf "$archive" | sort
        rm -f "$archive"
    done

# run the full test suite; you probably want `test`
#
# `packages-test` is deliberately absent: it runs on its own CI job at a single
# Node version, because the companion packages' third-party dependencies do not
# all support every Node version the core SDK supports (see packages-test).
ci-test: install test types-test integrations-test

_build mode packageType tscArgs: install
    mkdir -p {{ mode }}
    tsc -p tsconfig.{{ mode }}.json {{ tscArgs }}
    echo '{"type":"{{ packageType }}"}' > {{ mode }}/package.json

[private]
build-esm *args="": (_build "esm" "module" args)

[private]
build-cjs *args="": (_build "cjs" "commonjs" args)

# generate CJS and ESM versions of the package; mostly used as a pre-req for other steps
build: build-esm build-cjs

# generate CJS and ESM versions of the package including sourceMaps for each build
build-dev: (build-esm "--sourceMap" "true") (build-cjs "--sourceMap" "true")

# ⭐ run style checks, fixing issues if possible
lint: (lint-check "--fix")

# run style checks without changing anything
lint-check *args: install
    eslint --rulesdir eslint-rules --ext .js,.ts . {{ args }}

# reinstall dependencies, if needed
install:
    yarn {{ if is_dependency() == "true" { "--silent" } else { "" } }}

[no-exit-message]
[private]
prettier *args: install
    # all the project-relevant JS code
    prettier "{src,examples,scripts,test,types}/**/*.{ts,js}" "packages/*/{src,test}/**/*.{ts,js}" {{ args }}

# ⭐ format all files
format: (prettier "--write --loglevel error")

# verify formatting of files (without changes)
format-check: (prettier "--check")

# called by tooling
[private]
update-version version:
    echo "{{ version }}" > VERSION
    perl -pi -e 's|"version": "[.\-\d\w]+"|"version": "{{ version }}"|' package.json
    perl -pi -e "s|static PACKAGE_VERSION = '[.\-\d\w]+'|static PACKAGE_VERSION = '{{ version }}'|" src/stripe.core.ts
    perl -pi -e "s|static PACKAGE_VERSION = '[.\-\d\w]+'|static PACKAGE_VERSION = '{{ version }}'|" src/stripe.esm.node.ts

# remove build artifacts
clean:
    rm -rf ./node_modules/.cache ./esm ./cjs

# ⭐ print the API version this SDK pins and the lowest runtime it supports
print-version-info:
    #!/usr/bin/env bash
    set -euo pipefail
    echo "pinned-api-version: $(rg -N --color never -m1 -o '[0-9]{4}-[0-9]{2}-[0-9]{2}[.\w-]*' src/apiVersion.ts)"
    echo "minimum-runtime-version: $(rg -N --color never -o '"node": ">=([^"]+)"' --replace '$1' package.json)"
