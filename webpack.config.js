const webpack = require('webpack');
const path = require('path');

module.exports = {
    context: path.join(__dirname, 'public'),
    entry: {
        editor: './js/editor/editor.js'
    },
    output: {
        path: path.join(__dirname, '/public/js-built'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
            test: /\.js$/,
            exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
            use: [{
                loader: "babel-loader",
                options: {presets: ['es2015']}
            }],

        }]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
};

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}