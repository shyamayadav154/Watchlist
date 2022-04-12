//entry -> output

// const path = require('path')

// const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// console.log(path.join(__dirname, 'public'))

const HtmlWebpackPlugin = require('html-webpack-plugin')
const { EnvironmentPlugin } = require('webpack')
const webpack = require('webpack')


module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
        },
      },
    ],
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),

    new EnvironmentPlugin({
      REACT_APP_TMDB_KEY: '0bb3deb6ee6103afd35ab08c1011cf42',
    }),
  ],
}



// module.exports = {
//   mode: 'production',
//   plugins: [new MiniCssExtractPlugin()],
//   entry: './src/index.js',
//   output: {
//     path: path.join(__dirname, 'public'),
//     filename: 'bundle.js',
//   },
//   module: {
//     rules: [
//       {
//         test: /\.m?js$/,
//         exclude: /(node_modules | bower_components)/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-env'],
//           },
//         },
//       },
//       {
//         test: /\.css$/i,
//         use:[MiniCssExtractPlugin.loader, "css-loader"],
        
//       },
//     ],
//   },

//   devtool: 'source-map',
// }

// loader
