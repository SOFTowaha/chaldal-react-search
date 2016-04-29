var webpack = require('webpack');

module.exports = {
	context: __dirname + "/src",
	entry: "./js/app.js",
	devtool: "cheap-module-source-map",
	module: {
		loaders: [
			{
				test: /\.js?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015']
				}
			}
		]
	},
	output: {
		path: __dirname+ "/src",
		filename: "app.min.js"
	},
	plugins: [
	  new webpack.DefinePlugin({
	    'process.env': {
	      'NODE_ENV': JSON.stringify('production')
	    }
	  })
	],
}