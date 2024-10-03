// Importando o Express na aplicação
// const express = require("express"); // CommonJS Modules
// Criando uma instância do Express

import express from "express"; //ES6 Modules
const app = express();

// Importando os controllers (onde estão as rotas)
import ClientesController from "./controllers/ClientesController.js"

// Definindo o EJS como renderizador de páginas
app.set("view engine", "ejs");

// Definir a pasta dos arquivos estáticos (public)
app.use(express.static("public"));

// Definindo o uso das rotas que estão nos Controllers
app.use("/", ClientesController);

// CRIANDO A ROTA PRINCIPAL
app.get("/", (req, res) => {
  res.render("index");
});

// Iniciando o servidor na porta 8080
const port = 8080;
app.listen(port, (error) => {
  if (error) {
    console.log(`Ocorreu um erro: ${error}`);
  } else {
    console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
  }
});
