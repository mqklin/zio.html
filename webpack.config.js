const path = require("path");
const merge = require("webpack-merge");
const sass = require("./webpack/sass.config");


const PATHS = {
  source: path.join(__dirname),
  build: path.join(__dirname)
};

const common = merge([
  {
    entry: PATHS.source + "/app.js",
    output: {
      path: PATHS.build,
      filename: "zio_html.js",
      library: 'zio_html',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["es2016"]
            }
          }
        },
        {
          test: /\.png$/,
          loaders: ["file-loader?name=i/[hash].[ext]"]
        }
      ]
    },
    resolve: {
      modules: ["node_modules"]
    }
  }
]);

module.exports = merge([common, sass()]);
