var path = require('path');
var webpack = require('webpack');

module.exports ={
	entry: './client/react/index.js',
	output:{
		path: path.join(__dirname, 'client/dist'),
		filename:'bundle.js'
	},
	module: {
		loaders:[
			{
				test: /.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets:['es2015','react']
				}
			}
		]
	}
};