.PHONY: codegen-format update-version
update-version:
	@echo "$(VERSION)" > VERSION
	@perl -pi -e 's|"version": "[.\-\d\w]+"|"version": "$(VERSION)"|' package.json
	@find . -name 'package.json' -exec perl -pi -e 's|"stripe": "[\^\d\w.]*?"|"stripe": "^$(VERSION)"|' {} +

codegen-format:
	yarn && yarn fix && yarn build
