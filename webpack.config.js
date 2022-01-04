const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports ={
    entry:'./src/js/app.js',
    mode:'development',

    output:{
        path:`${__dirname}/dist`,
        filename:'bundle.js'
    },
    plugins: [new MiniCssExtractPlugin()],

    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    //'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test:/\.(svg|gif|png|eot|woff|ttf)$/,
                use:[
                    'url-loader'
                ]
            }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
          new TerserPlugin({
            extractComments: false,
          }),
          new OptimizeCssAssetsPlugin(),
        ],
      },


}