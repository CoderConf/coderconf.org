var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'source-map',

    entry: __dirname + '/src/script.js',
    output: {
        path: __dirname + "/web",
        filename: "bundle.js"
    },

    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: "json"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.css$|.sass$/,
                loader: 'style!css?modules!sass'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                loader: 'file'
            },
            {
                test: /\.(woff|woff2|ttf|eot)$/,
                loader: 'file'
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/src/index.tmpl.html'
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ]

}   
