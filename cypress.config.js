const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1366,
    viewportHeight: 768,
      "baseUrl": "https://magento2-demo.magebit.com/",
      "chromeWebSecurity": true,

    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    
    },
  },
});

