const path = require("path");
const webpack = require("webpack")
const merge = require("webpack-merge");
const sass = require("./webpack/sass.config");


const PATHS = {
  source: path.join(__dirname),
  build: path.join(__dirname)
};

const common = merge([
  {
    entry: {
      app : PATHS.source + "/app.js"
    },
    output: {
      path: PATHS.build,
      filename: "zio_html.js"
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    },
    resolve: {
      modules: ["node_modules"]
    }
  }
]);

module.exports = merge([common, sass()]);
