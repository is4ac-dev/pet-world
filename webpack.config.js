// Módulo para universalizar os diretórios da aplicação (independe do OS)
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// Exportando configurações para o Webpack
module.exports = {
  target: "web",
  mode: "development",

  // Configurações de input e output do Bundler
  entry: path.resolve(__dirname, "src", "main.js"), // Diretório do Enterpoint do Bundler
  output: {                                         // Configurações de saída do Bundler
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },

  // Configurações do Dev Server
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3000,
    open: true,
    liveReload: true,
  },

  // Configurações de Webpack Plugins
  plugins: [

    // Carregando HTML ao Webpack
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html"),
    }),
  ],
}