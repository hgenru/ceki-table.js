const IS_PROD = process.env.NODE_ENV !== 'development';
const path = require('path');
const webpack = require('webpack');

const basicPlugins = [
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(
            process.env.NODE_ENV || 'production')
    })
];

let loaders = [
    {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
    },
    {
        test: /\.jsx$/,
        loader: 'babel',
        exclude: /node_modules/
    },
    {
        test: /\.json$/,
        loader: 'json-loader'
    }
];

let baseConfig = {
    devtool: IS_PROD ? 'none' : 'inline-source-map',
    externals: [
        {
            react: {
                root: 'React',
                commonjs2: 'react',
                commonjs: 'react',
                amd: 'react'
            }
        },
        {
            'react-dom': {
                root: 'ReactDOM',
                commonjs2: 'react-dom',
                commonjs: 'react-dom',
                amd: 'react-dom'
            }
        }
    ],
    plugins: [...basicPlugins],
    module: {loaders: loaders}
};

module.exports = [
    Object.assign({}, {
        entry: {'ceki-table': './ceki-table/CekiTable.jsx'},
        output: {
            path: path.resolve('./dist'),
            filename: '[name].js',
            library: 'ReactCekiTable',
            libraryTarget: 'umd'
        }
    }, baseConfig),
    Object.assign({}, {
        entry: {'anime-table': './ceki-table/AnimeTable.jsx'},
        output: {
            path: path.resolve('./dist'),
            filename: '[name].js',
            library: 'ReactAnimeTable',
            libraryTarget: 'umd'
        }
    }, baseConfig)
];
