.PHONY: update-version codegen-format
update-version:
	@echo "$(VERSION)" > VERSION
	@perl -pi -e 's|"version": "[.\d]+"|"version": "$(VERSION)"|' package.json

codegen-format:
	yarn && yarn fix
