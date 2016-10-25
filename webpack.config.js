var webpack = require('webpack');
var path    = require('path');
//var hot     = require('react-hot-loader/babel');

var APP_DIR   = path.resolve(__dirname, 'src'   );
var BUILD_DIR = path.resolve(__dirname, ''      );

var config = {
  devServer: { inline: true },
  entry: [
  //'webpack-dev-server/client?http://0.0.0.0:3000',  
  //'webpack/hot/only-dev-server', 
   APP_DIR + '/userInterface.jsx'
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loaders : ['babel']
      },
            {
        test : /\.es6?/,
        include : APP_DIR,
        loaders : ['babel']
      }
    ]
  }
  //,
  //plugins: [
  //  new webpack.HotModuleReplacementPlugin() 
  //]
};

module.exports = config;