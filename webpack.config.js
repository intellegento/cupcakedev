const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './dist/bundle.js'
  },
  module: {
    rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react']
            }
          }
        },
        {
            test: /\.scss$/,
            use: [
              'style-loader',
              'css-loader',
              'postcss-loader',
              'sass-loader',
            ],
          }
      ]
  },
  devServer: {
    static: path.join(__dirname, 'public'),
    port: 3500,
    hot: true,
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
