const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
    mode: "development", // "production" | "development" | "none"
    entry: { main: "./src/index.js" },
    output: {
        // webpack 如何输出结果的相关选项
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js"
    },
    module: {
        // 模块配置相关
        rules: [
            // 模块规则（配置 loader、解析器等选项）
            {
                test: /\.[jsx|js]?$/,
                include: [
                    path.resolve(__dirname, "src")
                ],
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // 将 JS 字符串生成为 style 节点
                    "style-loader",
                    // 将 CSS 转化成 CommonJS 模块
                    "css-loader",
                    // 将 Sass 编译成 CSS
                    "sass-loader",
                ],
            },
        ]
    },
    resolve: {
        extensions: [".js", ".json", ".jsx", ".css", '.vue'], //引入文件可以不跟后缀名
        // 使用的扩展名
        alias: {
            "@": path.resolve(__dirname, "src"),
            "_c": path.resolve(__dirname, "src/components")
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My App',
            filename: 'public/index.html'
        }),
        new ProgressBarPlugin(), //进度
        new VueLoaderPlugin(),
        new CleanWebpackPlugin()
    ],
    devtool: "source-map", // enum
    devServer: {
        contentBase: './public',
        port: 3300,
        open: true,
        hot: true,
        stats: 'errors-only'  //加上这一行, 代表: 只打印错误日志
    }
}