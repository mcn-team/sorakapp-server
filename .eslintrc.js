module.exports = {
    'env': {
        'commonjs': true,
        'es6': true,
        'node': true
    },
    'extends': 'eslint:recommended',
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parserOptions': {
        'ecmaVersion': 2018
    },
    'rules': {
        'eqeqeq': ['error', 'always', {'null': 'ignore'}],
        'comma-dangle': ['error', {
            'arrays': 'never',
            'objects': 'never',
            'imports': 'never',
            'exports': 'never',
            'functions': 'never'
        }],
        'array-bracket-spacing': ['error', 'always'],
        'object-curly-spacing': ['error', 'always'],
        'multiline-ternary': ['warn', 'always-multiline'],
        'no-return-await': [2],
        'arrow-body-style': ['error', 'always'],
        'no-magic-numbers': ['error', {
            ignore: [-1, 0, 1],
            "ignoreArrayIndexes": true
        }],
        'array-callback-return': 'error',
        'indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ]
    }
};
