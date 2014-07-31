BIN = ./node_modules/.bin

release-patch:
	@$(call release,patch)

release-minor:
	@$(call release,minor)

release-major:
	@$(call release,major)

publish:
	git push --tags origin HEAD:master
	npm publish

define release
	@$(BIN)/cjsx -cb -o dist src/styleguide.cjsx
	npm version $(1)
endef
