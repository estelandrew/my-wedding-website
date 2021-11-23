const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = (env, argv) => {
  let config;
  if (argv.mode === "development") {
    config = {
      mode: "development",
      entry: "./index.js",
      output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "src/bundle")
      },
      devServer: {
        static: {
          directory: path.join(__dirname, "src/static")
        },
        compress: true,
        port: 3000
      },
      module: {
        rules: [
          {
            test: /\.s[ac]ss$/i,
            use: ["style-loader", "css-loader", "sass-loader"]
          }
        ]
      }
    };
  }

  if (argv.mode === "production") {
    config = {
      mode: "production",
      entry: "./index.js",
      output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
      },
      module: {
        rules: [
          {
            test: /\.s[ac]ss$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
          }
        ]
      },
      optimization: {
        minimizer: [new CssMinimizerPlugin()]
      },
      plugins: [
        new MiniCssExtractPlugin(),
        new CopyPlugin({
          patterns: [{ from: "src/static", to: "" }]
        })
      ]
    };
  }
  return config;
};
