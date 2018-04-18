var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    //入口
    entry: __dirname + "/src/js/app.js",
    //出口
    output: {
        path: __dirname + "/build/",
        filename: "js/[name]-[hash].js"
    },
    //插件
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: __dirname + '/src/index.html'
        })
    ],
    //扩展名  这里不能写      ""
    resolve: {
        extensions: ['.js', '.json', '.scss', '.css'],
        // alias: {
        //     filter:path.join(__dirname,'src/filters')
        // }
    },
    //资源模块;
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader:'style-loader!css-loader'
            }
        ]
    }
};
