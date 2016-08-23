
'use strict';

var webpack = require('webpack');
var path = require('path');
var WebpackNotifierPlugin = require('webpack-notifier');

var config_webpack = {
	context : __dirname + "/app",
	entry : {
		main: "./scripts/app.js",
		vendor: [
			'angular',
			'angular-route',
			'bootstrap-loader',
			'angular-animate'
		]
	},
	output : {
		path : __dirname + "/dist",
		filename : "[name].js"
	},
	module: {
			loaders: [
					{
						test: /\.html$/,
						loader: 'ngtemplate?relativeTo=' +  __dirname + '/app/!html'
					},
					{ 
						test: /\.css$/, loaders: [ 'style', 'css', 'postcss' ] 
					},
					{ 
						test: /\.scss$/, loaders: [ 'style', 'css', 'postcss', 'sass' ] 
					},
					{
						test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
						loader: "url?limit=10000"
					},
					{
						test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
						loader: 'file'
					},
					{ 
						test: /bootstrap-sass\/assets\/javascripts\//, loader: 'imports?jQuery=jquery' 
					}
			]
	},
	plugins: [
				new webpack.HotModuleReplacementPlugin(),
				new webpack.optimize.CommonsChunkPlugin({
						name: 'vendor',
						filename: 'vendor.js'
				}),
				new webpack.NoErrorsPlugin(),
				new WebpackNotifierPlugin({
						excludeWarnings: true
				})
		]
};

module.exports = config_webpack;