const path = require("path");

module.exports = {
  stories: ["../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-essentials", "@storybook/addon-interactions"],
  features: {
    interactionsDebugger: true,
  },
  staticDirs: ["../public"],
  core: {
    builder: "webpack5",
  },
  webpackFinal: (config) => ({
    ...config,
    resolve: {
      ...config.resolve,
      extensions: [".js", ".jsx", "..."],
      modules: [...config.resolve.modules, path.resolve(__dirname, "../src")],
    },
  }),
};
