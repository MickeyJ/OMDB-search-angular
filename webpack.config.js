const webpack = require('webpack');
const strip = require('strip-loader');

const DEV = process.env.NODE_ENV==='development';
const PROD = process.env.NODE_ENV==='production';

const config = {
  entry: './src/app.js',
  output: {
    path: `${__dirname}/public`,
    filename: 'bundle.js'
  },
  devtool: !PROD ? 'source-map' : null,
  devServer: {
    contentBase: 'public',
    historyApiFallback: {
      index: '/index.html'
    }
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.html/,
        loader: 'raw-loader',
        exclude: /node_modules/
      },
      {
        test: /\.s?css/,
        loaders: ["style", "css", "sass"],
        exclude: /node_modules/
      }
    ]
  }
};

if(!DEV){
  config.module.loaders.push({
    test: /\.js/,
    exclude: /node_modules/,
    loaders: [
      'ng-annotate',
      strip.loader('console.log')
    ]
  });
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compressor: { warnings: true }
    })
  )
}

module.exports = config;