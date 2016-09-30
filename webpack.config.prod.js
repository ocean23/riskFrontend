const webpack = require('webpack');
const postcssImport = require('postcss-import');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');

function getEntrySources(sources) {
	if (process.env.NODE_ENV !== 'production') {
		sources.push('webpack-dev-server/client?http://localhost:8080');
		sources.push('webpack/hot/only-dev-server');
	}

	return sources;
}

const baseHostValue = process.env.BASE_HOST;
module.exports = {
	devtool: process.env.NODE_ENV !== 'production' ? 'eval-source-map' : '',
	entry: {
		build: getEntrySources([
			'./src/entry/entry.js'
		])
	},
	output: {
		filename: 'dist/[name].js'
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		}),
		new webpack.DefinePlugin({
			__DEV__: JSON.stringify(JSON.parse(process.env.NODE_ENV !== 'production')),
			__DEBUG__: false,
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
		}),
		new HtmlWebpackPlugin({
			template: 'index.ejs',
			baseHost: baseHostValue
		}),
		new ExtractTextPlugin('dist/style.css', {
				allChunks: true
		})
	],
	module: {
		preLoaders: [{
			test: /\.js$/,
			loader: 'source-map-loader'
		}],
		loaders: [{
			test: /\.js$/,
			loader: 'babel!eslint-loader',
			exclude: /node_modules/
		}, {
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract('css!sass')
		}, {
			test: /\.css$/,
			loader: ExtractTextPlugin.extract('style','css')
		}, {
			test: /\.(png|jpg|jpeg|gif|svg)$/,
			loader: 'url-loader?prefix=img/&limit=53248'
		}, {
			test: /\.(woff|woff2|ttf|eot)$/,
			loader: 'url-loader?prefix=font/&limit=53248'
		}]
	},
	postcss: function (webpack) {
			return [
					autoprefixer({ browsers: ['last 2 versions'] }),
					postcssImport({
							addDependencyTo: webpack
					})
			];
	}
};
