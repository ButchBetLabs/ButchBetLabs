const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true,
        publicPath: "",
    },

    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@components': path.resolve(__dirname, 'src/components'),
            '@styles': path.resolve(__dirname, 'src/styles'),
            "@images": path.resolve(__dirname, "src/assets/images"),
            "@containers": path.resolve(__dirname, "src/containers"),
            "@routes": path.resolve(__dirname, "src/routes"),
            "@pages": path.resolve(__dirname, "src/pages"),
            "@hooks": path.resolve(__dirname, "src/hooks"),
            "@context": path.resolve(__dirname, "src/context"),
            "@server": path.resolve(__dirname, "src/server"),
            "@pdf": path.resolve(__dirname, "src/assets/pdf"),
            "@context": path.resolve(__dirname, "src/context")
        },

    },

    mode: 'production',

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },

            {
                test: /\.html$/,
                use: [
                    { loader: 'html-loader' }
                ]
            },

            {
              test: /\.(s[ac]ss|css)$/,
              use: [
                'style-loader',
                'css-loader',
              ]
            },

            {
                test: /\.(png|svg|jp?g|gif|pdf)$/i,
                use: [
                    {
                      loader: 'file-loader',
                      options: {
                        limit: 10000
                      }
                    }
                ]
            }
        ],
    },

    plugins: [
        new htmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html',
        }),

        new miniCssExtractPlugin({
          filename: '[name].css',
        }),
    ],
}
