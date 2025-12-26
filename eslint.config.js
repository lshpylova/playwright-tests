
const config /** : Linter.FlatConfig[] */ = [
  {
    files: ["*.ts", "*.tsx", "*.js", "*.jsx"],
    languageOptions: {
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": require("@typescript-eslint/eslint-plugin"),
      prettier: require("eslint-plugin-prettier"),
    },
    rules: {
      "prettier/prettier": "error",
      semi: ["error", "always"],
      quotes: ["error", "double"],
      "@typescript-eslint/no-unused-vars": ["warn"],
    },
    extends: ["plugin:@typescript-eslint/recommended", "prettier"],
  },
];

export default config;
