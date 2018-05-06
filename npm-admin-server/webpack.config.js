const path = require('path');

const CleanWebpackPlugin = require('clean-webpack-plugin');
var NodeExternals = require('webpack-node-externals');
const NodemonWebpackPlugin = require('nodemon-webpack-plugin');

const config = {
	mode: 'development',

	target: 'node',

	entry: './app.js',

	output: {
		filename: 'app.bundle.js',
		path: path.resolve(__dirname, 'dist')
	},

	devServer: {
		contentBase: './dist'
	},

	module: {
		rules: [
		{
			test: /\.js$/,
			use: {
				loader: 'babel-loader'
			},
			exclude: [path.resolve(__dirname, 'dist'), path.resolve(__dirname, 'node_modules')]
		}
		]
	},

	plugins: [
	new CleanWebpackPlugin('dist/'),

	new NodemonWebpackPlugin()
	],

	externals: [NodeExternals()]
};

module.exports = config;