const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // arquivo de entrada
  output: {
    filename: 'bundle.js', // nome do arquivo de saída
    path: path.resolve(__dirname, 'dist'), // pasta de saída
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // arquivos que serão transformados
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // transformador do Babel
        },
      },
      {
        test: /\.css$/, // para arquivos CSS
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // arquivo HTML de template
      filename: 'index.html',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'], // extensões a serem resolvidas
  },
  devtool: 'source-map', // ajuda na depuração
  devServer: {
    contentBase: path.join(__dirname, 'dist'), // pasta a ser servida
    compress: true,
    port: 3000,
  },
};
