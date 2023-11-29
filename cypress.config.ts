

import { defineConfig } from "cypress";
const cucumber = require('cypress-cucumber-preprocessor').default

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("file:preprocessor", cucumber())
    },
  },
});


