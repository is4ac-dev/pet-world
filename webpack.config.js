// Módulo para universalizar os diretórios da aplicação (independe do OS)
const path = require('path')

// Importando plugins
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require("copy-webpack-plugin")
const { execFile } = require('child_process')

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

  // Configurações de Plugins do Bundler
  plugins: [

    // Carregando HTML no Bundler
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html"),
      favicon: path.resolve("src", "assets", "logo.svg"),
    }),

    // Carregando Assets no Bundler
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src", "assets"),
          to: path.resolve(__dirname, "dist", "src", "assets")
        },
      ],
    }),
  ],

  // Configurações de Módulos do Bundler
  module: {
    rules: [
      // Carregando CSS no Bundler
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      // Carregando Compiler Babel no Bundler
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          },
        },
      },
    ],
  },
}