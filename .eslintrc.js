module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  settings: {
    "import/extensions": [".js", ".jsx", ".ts", ".tsx",".scss"],
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx",".scss"]
      },
      "alias": {
        "map": [
          ['scss','./src/scss'],
          ['components','./src/components']
        ],
        "extensions": ['.scss','.tsx']
      }
    }
  },
  rules: {
    "react/jsx-filename-extension": ["warn", {
      "extensions": [".jsx", ".tsx",".scss"]
    }],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never",
        "scss":"never"
      }
    ,
  ]
  },
};
