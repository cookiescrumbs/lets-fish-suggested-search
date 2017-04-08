var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
    entry: `${APP_DIR}/index.jsx`,
    devtool: 'source-map',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.min.js'
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: [/node_modules/],
            use: [{
                loader: 'babel-loader'
            }]
        },
        {
            test: /\.jsx?$/,
            exclude: [/node_modules/],
            use: [{
                loader: 'eslint-loader',
            }]
        }]
    }
};

module.exports = config;


