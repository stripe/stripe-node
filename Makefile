.PHONY: codegen-format update-version
update-version:
	@echo "$(VERSION)" > VERSION
	@perl -pi -e 's|"version": "[.\-\d\w]+"|"version": "$(VERSION)"|' package.json
	@perl -pi -e "s|Stripe.PACKAGE_VERSION = '[.\-\d\w]+'|Stripe.PACKAGE_VERSION = '$(VERSION)'|" src/stripe.core.ts

codegen-format:
	yarn && yarn fix && yarn build
