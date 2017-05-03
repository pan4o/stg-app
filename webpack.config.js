'use strict';

module.exports = {
	entry: {
		main: "./src/js/entry-point",
	},
	output: {
		filename: "./src/bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			}
		]
	}
}