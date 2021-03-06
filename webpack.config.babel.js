const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')
const path = require('path')
const StatsWriterPlugin = require('webpack-stats-plugin').StatsWriterPlugin

export default {

  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'serverside/'),
    ],
    extensions: ['.js', '.scss'],

  },

  entry: {
    app: './src/client/app/app',
    www: './src/client/app/vndr',




  },
  output: {

    publicPath: '/client/',
    filename: '[name].js',
    chunkFilename: '[id].js',
    // sourceMapFilename: '[name].map',
  },

  // devtool: 'cheap-module-source-map',

  module: {
    rules: [

      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
        }],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
                   { loader: 'css-loader', query: { modules: false } },
                   { loader: 'postcss-loader' },
                   { loader: 'sass-loader' },


          ],
        }),
      },
      {
          test: /\.woff$|\.woff2$|\.ttf$|.eot$|.svg$/,
          exclude: /node_modules/,
          loader:[{
            loader: 'file-loader',
            query:{
              name:'assets/fonts/[name].[ext]'
            }
          }]

      },
      {
          test: /\.jpe?g$|\.gif$|\.png$|\.ico$/,
          exclude: /node_modules/,
          loader:[{
            loader: 'file-loader',
            query:{
              name:'assets/img/[name].[ext]'
            }
          }]

      },

],
  },

  plugins: [

    new webpack.LoaderOptionsPlugin({

      minimize: false,
      debug: true,
      options: {
        context: path.resolve(__dirname, 'www/client'),
        postcss: [
          // require('postcss-cssnext'),
          // require('lost')(),
          // require('postcss-reporter')()

        ],
          // ...other configs that used to directly on `modules.exports`
      },

    }),

    new webpack.optimize.CommonsChunkPlugin({
      names: ['app', 'www'],
      minChunks: Infinity,
      // children: true,
      async: true,

    }),
    new ExtractTextPlugin({
      filename: '[name].css',
      disable: false,
      allChunks: true,
    }),
    new StatsWriterPlugin({
      filename: 'stats.json', // Default
    }),

  ],

}
