const CracoAlias = require("craco-alias")

module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "options",
        baseUrl: "./",
        aliases: {
          "@components": "./src/components",
          "@actions": "./src/actions",
          "@utils": "./src/utils",
          "@pages": "./src/pages"
        }
      }
    }
  ]
}