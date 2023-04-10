module.exports = {
  "stories": [
    "../src/**/__stories__/*.@(js|jsx|ts|tsx|mdx)",
    "../src/**/*.stories.@(js|jsx|ts|tsx|mdx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app"
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
}