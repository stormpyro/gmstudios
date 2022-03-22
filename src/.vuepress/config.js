const { description } = require("../../package");

module.exports = {
  title: "GM Studios",
  description: description,
  base: "/",
  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],
  themeConfig: {},
  plugins: [],
};
