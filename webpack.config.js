'use strict';

module.exports = {
	entry: {
		main: "./src/js/entry-point",
	},
	output: {
		filename: "./src/bundle.js"
	},
	watch: true,
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.styl$/,
				loader: 'style-loader!css-loader!stylus-loader'
			}
		]
	}
}