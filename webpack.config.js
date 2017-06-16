/**
 * Created by kiost on 2017-06-16.
 */

var webpack = require('webpack');

module.exports = { //이 객체를 모듈로 내보내겠다는 뜻. -> 다른코드에서 이 객체를 import 가능해짐
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
        moduleExtensions: ['-loader']
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}
