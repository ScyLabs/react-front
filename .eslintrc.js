module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
  },
  plugins: ["@typescript-eslint/eslint-plugin", "react", "prettier"],
  extends: ["plugin:@typescript-eslint/recommended", "plugin:react/recommended", "prettier"],
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  ignorePatterns: [".eslintrc.js", "/var/**/**"],

  rules: {
    "prettier/prettier": "error",
    "react/react-in-jsx-scope": "off",
    "react/jsx-key": "off",
    "react/prop-types": "off",
    "react/display-name": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "react/jsx-props-no-spreading": [
      1,
      {
        custom: "ignore",
      },
    ],
    "react/require-default-props": "off",
    "react/prop-types": "off",
    "react/jsx-curly-spacing": [2, "never"],
  },

  settings: { "import/resolver": { node: { paths: ["src"] } } },
};
