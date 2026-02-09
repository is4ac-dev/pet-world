// Módulo para universalizar os diretórios da aplicação (independe do OS)
const path = require('path')
const { EntryOptionPlugin } = require('webpack')

// Exportando configurações para o Webpack
module.exports = {
  target: "web",
  mode: "development",

  entry: path.resolve(__dirname, "src", "main.js"), // Diretório do Enterpoint do Bundler
  output: {                                         // Configurações de saída do Bundler
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  }
}