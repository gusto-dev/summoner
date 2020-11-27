const path = require('path') // node가 지원하는 path라이브러리 사용
const HtmlWebpackPlugin = require('html-webpack-plugin') // html관련 플러그인 (설치해야함)

module.exports = {
  entry: path.resolve(__dirname, './src'), // 어떤 파일을 기준으로 할 것인가 ?
  output: {
    // 빌드된 결과물을 어디로 내보낼 것인가 ?
    filename: 'bundle.[hash].js', // 파일이 빌드될 때 캐싱을 위해 사용
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
      filename: './index.html',
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    inline: true,
    hot: true,
    open: true,
    historyApiFallback: true,
  },
}
