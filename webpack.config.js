const path = require("path");
const webpack = require('webpack')
const merge = require("webpack-merge");
const CircularDependencyPlugin = require('circular-dependency-plugin')
const sass = require("./webpack/sass.config");

const PATHS = {
  source: path.join(__dirname),
  build: path.join(__dirname)
};

const common = merge([
  {
    entry: {
      app: PATHS.source + "/app.js"
    },
    output: {
      path: PATHS.build,
      filename: "zio_html.js",
      library: 'zio_html'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: "babel-loader",
            options: {
                plugins: ["transform-class-properties","transform-object-rest-spread","transform-export-extensions"],
                presets: ["es2016"]
            }
          }
        }
      ]
    },
    resolve: {
      modules: ["node_modules"]
    },
    plugins:[
      new CircularDependencyPlugin()
    ]

  }
]);

module.exports =  merge([common, sass()]);
