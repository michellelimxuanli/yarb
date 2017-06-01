var path = require('path');

module.exports = {
    entry: './src/app/index.jsx',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react'],
                babelrc: './internals/config/.babelrc',
            }
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    }
};