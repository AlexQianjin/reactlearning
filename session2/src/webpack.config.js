const path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		sourceMapFilename: 'bundle.map'
	},
	devtool: '#source-map',
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /(node_modules)/,
			loader: 'babel-loader'
		},
		{
			test: /\.css$/,
			use: ['style-loader','css-loader', {
				loader: 'postcss-loader',
				options: {
					plugins: () => [require('autoprefixer')]
				}}]
		}]
	},
	mode: 'development' || 'production'
	// devServer: {
	// 	contentBase: path.join(__dirname, 'dist'),
	// 	compress: true,
	// 	port: 8080
	// }
}