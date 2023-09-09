module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es2022: true,
	},
	extends: ["eslint:recommended"],
	parserOptions: {
		sourceType: "module",
	},
	rules: {
		indent: ["error", "tab"],
		"linebreak-style": ["error", "unix"],
		quotes: ["error", "double"],
		semi: ["error", "always"],
	},
};
