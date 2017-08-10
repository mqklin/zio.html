module.exports = paths => {
  return {
    module: {
      rules: [
        {
          test: /\.s?css$/,
          include: paths,
          use: ["style-loader", "css-loader", "sass-loader"]
        }
      ]
    }
  };
};
