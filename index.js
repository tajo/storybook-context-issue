#!/usr/bin/env node
const storybook = require("@storybook/react/standalone");

storybook({
  mode: "dev",
  configDir: "./.storybook"
});
