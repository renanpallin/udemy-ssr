const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const config = {
	// Inform webpack that we're building a bundle
	// server application
	entry: './src/client/client.js',

	// Tell webpack where to put the output file
	// that is generated
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public')
	},
};

module.exports = merge(baseConfig, config);