const webpack = require('webpack');
const postcssImport = require('postcss-import');
const autoprefixer = require('autoprefixer');

function getEntrySources(sources) {
	if (process.env.NODE_ENV !== 'production') {
		sources.push('webpack-dev-server/client?http://localhost:8080');
		sources.push('webpack/hot/only-dev-server');
	}

	return sources;
}

module.exports = {
	devtool: process.env.NODE_ENV !== 'production' ? 'eval-source-map' : '',
	entry: {
		build: getEntrySources([
			'./src/entry/navigation.js'
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
			__DEBUG__: true,
			__DEV__: JSON.stringify(JSON.parse(process.env.NODE_ENV !== 'production')),
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
		})
	],
	module: {
		preLoaders: [{
			test: /\.js$/,
			loader: 'source-map-loader'
		}],
		loaders: [{
			test: /\.js$/,
			loader: 'react-hot!babel!eslint-loader',
			exclude: /node_modules/
		}, {
				test: /\.scss$/,
				loader: 'style-loader!css-loader!sass-loader'
		}, {
			test: /\.css$/,
			loader: 'style-loader!css-loader!postcss-loader'
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
