module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true
	},
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended"
	],
	globals: {
		Atomics: "readonly",
		SharedArrayBuffer: "readonly"
	},
	parser: "@typescript-eslint/parser",
	parserOptions: {
		project: "tsconfig.json",
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 2018,
		sourceType: "module"
	},
	settings: {
		react: {
			version: "detect"
		}
	},
	plugins: [
		"react",
		"@typescript-eslint"
	],
	rules: {
		indent: [
			"error",
			"tab"
		],
		"linebreak-style": [
			"error",
			"unix"
		],

		quotes: "off",
		"@typescript-eslint/quotes": [
			"error",
			"single",
			{ avoidEscape: true }
		],

		semi: "off",
		"@typescript-eslint/semi": [
			"error",
			"never"
		],

		"no-unused-expressions": "off",
		"@typescript-eslint/no-unused-expressions": ["error", { "allowTernary": true }],

		"@typescript-eslint/adjacent-overload-signatures": "error",
		"@typescript-eslint/array-type": [
			"error",
			{
				default: 'generic'
			}
		],
		"@typescript-eslint/explicit-module-boundary-types": "off",
		"@typescript-eslint/ban-types": "error",
		"@typescript-eslint/consistent-type-assertions": "error",
		"@typescript-eslint/consistent-type-definitions": "error",
		"@typescript-eslint/explicit-member-accessibility": [
			"error",
			{
				accessibility: "explicit"
			}
		],
		"@typescript-eslint/interface-name-prefix": "off",
		"@typescript-eslint/member-delimiter-style": [
			"error",
			{
				multiline: {
					delimiter: "none",
					requireLast: true
				},
				singleline: {
					delimiter: "comma",
					requireLast: false
				}
			}
		],
		"@typescript-eslint/member-ordering": "error",
		"@typescript-eslint/no-empty-function": "error",
		"@typescript-eslint/no-empty-interface": "error",
		"@typescript-eslint/no-explicit-any": "off",
		"@typescript-eslint/no-misused-new": "error",
		"@typescript-eslint/no-namespace": "error",
		"@typescript-eslint/no-parameter-properties": "off",
		"@typescript-eslint/no-use-before-define": "off",
		"@typescript-eslint/prefer-for-of": "error",
		"@typescript-eslint/prefer-function-type": "error",
		"@typescript-eslint/prefer-namespace-keyword": "error",

		"@typescript-eslint/triple-slash-reference": "error",
		"@typescript-eslint/type-annotation-spacing": "error",
		"@typescript-eslint/unified-signatures": "error",
		"arrow-body-style": "error",
		"arrow-parens": [
			"error",
			"always"
		],

		complexity: "off",
		"constructor-super": "error",
		curly: "error",
		"dot-notation": "error",
		"eol-last": "error",
		eqeqeq: [
			"error",
			"smart"
		],
		"guard-for-in": "error",
		"id-blacklist": [
			"error",
			"any",
			"Number",
			"number",
			"String",
			"string",
			"Boolean",
			"boolean",
			"Undefined"
		],
		"id-match": "error",
		"max-classes-per-file": [
			"error",
			1
		],
		"max-len": [
			"warn",
			{
				code: 200
			}
		],
		"new-parens": "error",
		"no-bitwise": "error",
		"no-caller": "error",
		"no-cond-assign": "error",
		"no-debugger": "error",
		"no-empty": "error",
		"no-eval": "error",
		"no-fallthrough": "off",
		"no-invalid-this": "off",
		"no-multiple-empty-lines": "error",
		"no-new-wrappers": "error",
		"no-shadow": [
			"error",
			{
				hoist: "all"
			}
		],
		"no-throw-literal": "error",
		"no-trailing-spaces": "error",
		"no-undef-init": "error",
		"no-underscore-dangle": "error",
		"no-unsafe-finally": "error",
		"no-unused-labels": "error",
		"no-unused-vars": "off",
		"no-var": "error",
		"object-shorthand": "error",
		"one-var": [
			"error",
			"never"
		],
		"prefer-const": "error",
		"quote-props": [
			"error",
			"consistent-as-needed"
		],
		"radix": "error",

		"space-before-function-paren": "off",
		"@typescript-eslint/space-before-function-paren": ["error", {
			asyncArrow: "always",
			anonymous: "never",
			named: "never"
		}],
		"spaced-comment": "error",
		"use-isnan": "error",
		"valid-typeof": "off",
	}
};
