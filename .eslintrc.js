// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ["expo", "prettier"],
  plugins: ["prettier", "unused-imports"],
  ignorePatterns: ["/dist/*", "/app-example/*"],
  rules: {
    "prettier/prettier": "error",
    "unused-imports/no-unused-imports": "warn",
  },
};
