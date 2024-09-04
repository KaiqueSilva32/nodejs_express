// Importando o Express na aplicação
const express = require("express"); // CommonJS Modules
// Criando uma instância do Express
const app = express();

// Definindo o EJS como renderizador de páginas
app.set("view engine", "ejs");

// CRIANDO A ROTA PRINCIPAL
app.get("/", (req, res) => {
  res.render("index");
});

// ROTA PERFIL
app.get("/perfil/:nome?", (req, res) => {
  res.render("perfil");
});

// ROTA DE VÍDEOS

app.get("/videos", (req, res) => {
  res.render("videos");
});

// ROTA DE PRODUTOS
app.get("/produtos/:produto?", (req, res) => {
  const listaProdutos = ["Computador", "Celular", "Tablet", "Notebook"];
  const produto = req.params.produto;

  // ENVIANDO A VARIÁVEL PARA A PÁGINA
  res.render("produtos", {
    produto: produto, // Primeira variável será chamada na página e a segunda é o nome do parâmetro que está na index (req.params)
    listaProdutos: listaProdutos,
    // Na página Produtos.ejs haverá uma testagem de condição
  });

  res.render("produtos");
});

// Iniciando o servidor na porta 8080
app.listen(8080, (error) => {
  if (error) {
    console.log(`Ocorreu um erro: ${error}`);
  } else {
    console.log("Servidor iniciado com sucesso!");
  }
});
