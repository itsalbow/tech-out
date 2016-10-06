/*
 * This is just a developing config file not meant for production.
 * In a real app I would add a webpack.config.dev.js and a webpack.config.prod.js
 */
var path = require('path');
var webpack = require('webpack');

var srcPath = path.join(__dirname, 'src');
var distPath = path.join(__dirname, 'dist');

module.exports = {
	devtool: 'source-map',
	entry: ['./src/index'],
	output: {
		path: distPath,
		filename: 'bundle.js',
		publicPath: '/static/'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loaders: ['babel'],
				include: srcPath
			},{
				test: /\.css$/,
				loader: "style-loader!css-loader"
			},
			{
				test: /\.ico$/,
				loader: 'favicon.ico'
			}
		]
	}
};
