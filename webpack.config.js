/**
 * Created by kiost on 2017-06-16.
 */
import webpack from 'webpack';

module.exports = {
    entry: './src/index.js',

    output: {
        path: __dirname + '/public/',
        filename: 'bundle.js'
    },

    devServer: {
        hot: true,
        inline: true,
        host: '0.0.0.0',
        port: 4000,
        contentBase: __dirname + '/public/',
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: ['react-hot', 'babel?' + JSON.stringify({
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                })],
                exclude: /node_modules/
            }
        ]
    },

    resolveLoader: {
        moduleExtensions: ['-resolver']
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};
