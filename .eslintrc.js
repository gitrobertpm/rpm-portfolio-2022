module.exports = {
	parser:  '@typescript-eslint/parser',  // Specifies the ESLint parser
	extends: [
		'plugin:react/recommended',  // Uses the recommended rules from @eslint-plugin-react
		'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from @typescript-eslint/eslint-plugin
	],
	parserOptions:  {
		ecmaVersion:  'latest',  // Allows for the parsing of modern ECMAScript features
		sourceType:  'module',  // Allows for the use of imports
		ecmaFeatures:  {
			jsx:  true,  // Allows for the parsing of JSX
		}
	},
	settings:  {
		react:  {
			version:  'detect',  // Tells eslint-plugin-react to automatically detect the version of React to use
		},
	},
	'plugins': [
		'react'
	],
	'rules': {
		// Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
		// e.g. "@typescript-eslint/explicit-function-return-type": "off",
		'indent': [
			'error',
			'tab'
		],
		'quotes': [
			'warn',
			'single',
			{ 'allowTemplateLiterals': true }
		],
		'semi': [
			'error',
			'always'
		]
	},
	'env': {
		'browser': true,
		'es2021': true
	},
};
