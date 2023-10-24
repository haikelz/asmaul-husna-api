module.exports = {
  printWidth: 80,
  trailingComma: "all",
  semi: true,
  importOrder: ["^@core/(.*)$", "^@server/(.*)$", "^@ui/(.*)$", "^[./]"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderParserPlugins: ["typescript", "decorators-legacy"],
  plugins: ["@trivago/prettier-plugin-sort-imports"],
};
