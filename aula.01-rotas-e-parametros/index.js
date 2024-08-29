// Importando o Express na aplicação
const express = require("express"); // CommonJS Modules
// Criando uma instância do Express
const app = express();

// CRIANDO A ROTA PRINCIPAL
app.get("/", (req, res) => {
  res.send("<h1>Hello World! Bem-Vindo!</<h1><br><hr>");
});

// ROTA PERFIL
// :nome é um parâmetro obrigátorio
app.get("/perfil/:nome", (req, res) => {
  const nome = req.params.nome
  res.send(`Olá, ${nome}!`);
});

// ROTA DE VÍDEOS
app.get("/videos", (req, res) => {
  res.send("<h1>Pagina de vídeos<h1>");
});

// Iniciando o servidor na porta 8080
app.listen(8080, (error) => {
  if (error) {
    console.log(`Ocorreu um erro: ${error}`);
  } else {
    console.log("Servidor iniciado com sucesso!");
  }
});
