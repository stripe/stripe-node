.PHONY: codegen-format update-version test check-prereqs ci-test
update-version:
	@echo "$(VERSION)" > VERSION
	@perl -pi -e 's|"version": "[.\-\d\w]+"|"version": "$(VERSION)"|' package.json
	@perl -pi -e "s|Stripe.PACKAGE_VERSION = '[.\-\d\w]+'|Stripe.PACKAGE_VERSION = '$(VERSION)'|" src/stripe.core.ts

codegen-format:
	yarn && yarn fix

ci-test:
	yarn && yarn test

check-prereqs:
# tests depend on `deno` being available
	@command -v deno >/dev/null 2>&1 || { echo "Error: deno is not installed." >&2; exit 1; }
# stripe mock must be running; check its default port for a listener
	@lsof -i :12112 >/dev/null 2>&1 || { echo "Error: stripe-mock is not running (on port 12112)." >&2; exit 1; }

test: check-prereqs ci-test
