const CracoEsbuildPlugin = require("craco-esbuild");
const webpack = require("webpack");
const CracoAlias = require("craco-alias");

module.exports = {
  plugins: [
    {
      plugin: CracoEsbuildPlugin,
      options: {
        esbuildMinimizerOptions: {
          target: "es2015",
          css: true,
        },
      },
    },
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        baseUrl: "./src",
        tsConfigPath: "./tsconfig.paths.json",
      },
    },
  ],
  webpack: {
    plugins: {
      add: [
        new webpack.DefinePlugin({
          process: { env: {}, browser: {} },
        }),
      ],
    },
    configure: {
      resolve: {
        fallback: {
          fs: false,
          tls: false,
          net: false,
          path: false,
          zlib: false,
          http: false,
          https: false,
          stream: false,
          buffer: false,
        },
      },
    },
  }
};
