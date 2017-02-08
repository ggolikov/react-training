var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/app/index.html',
    name: 'index.htnl',
    inject: 'body'
});

module.exports = {
    entry: [
        './app/index.js'
    ],
    module: {
        loaders: [
            {test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader"},
            { test: /\.css$/, exclude: /node_modules/, loader: "style-loader!css-loader" },
            { test: /\.png$/, exclude: /node_modules/, loader: "url-loader?limit=100000" },
            { test: /\.jpg$/, exclude: /node_modules/, loader: "file-loader" }
        ]
    },
    output: {
        filename: 'index_bundle.js',
        path: __dirname + '/dist'
    },
    plugins: [
        HTMLWebpackPluginConfig
    ]
}
