.PHONY: codegen-format update-version
update-version:
	@echo "$(VERSION)" > VERSION
	@perl -pi -e 's|"version": "[.\-\d\w]+"|"version": "$(VERSION)"|' package.json
	@perl -pi -e "s|version = '[.\-\d\w]+'|version = '$(VERSION)'|" src/version.ts

codegen-format:
	yarn && yarn fix && yarn build
