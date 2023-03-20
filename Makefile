.PHONY: codegen-format update-version test ci-test
update-version:
	@echo "$(VERSION)" > VERSION
	@perl -pi -e 's|"version": "[.\-\d\w]+"|"version": "$(VERSION)"|' package.json
	@perl -pi -e "s|Stripe.PACKAGE_VERSION = '[.\-\d\w]+'|Stripe.PACKAGE_VERSION = '$(VERSION)'|" src/stripe.core.ts cjs/stripe.core.js esm/stripe.core.js

codegen-format:
	yarn && yarn fix && yarn build

ci-test:
	yarn && yarn test

test: ci-test
