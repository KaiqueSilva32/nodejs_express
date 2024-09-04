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
// :nome? é um parâmetro opcional
app.get("/perfil/:nome?", (req, res) => {
  const nome = req.params.nome;
  // Verficando se o parâmetro nome existe
  if (nome) {
    res.send(`Olá, ${nome}, Seja bem-vindo!`);
  } else {
    res.send(`<h2>Faça login para acessar o seu perfil</h2>`);
  }
  res.send(`Olá, ${nome}!`);
});

// ROTA DE VÍDEOS
// /:Playlist? e /:Video? parâmetros opcionais
app.get("/videos/:playlist?/:video?", (req, res) => {
  const playlist = req.params.playlist;
  const video = req.params.video;

  //Verificando se playlist == True e video == undefined
  if (playlist && video == undefined) {
    res.send(`<h2>Você está na playlist de ${playlist}.{</h2>`)
  }
  //Verificando se os dois parâmetros são verdadeiros
  if (playlist && video) {
    res.send(`<h2>Você está na playlist de ${playlist}</h2><br>
      Reproduzindo o vídeo ${video}`);
  }
  // Se nenhum parâmetro foi informado volta a página inicial de videos
  else {
    res.send("<h1>Pagina de vídeos<h1>");
  }
});

// Iniciando o servidor na porta 8080
app.listen(8080, (error) => {
  if (error) {
    console.log(`Ocorreu um erro: ${error}`);
  } else {
    console.log("Servidor iniciado com sucesso!");
  }
});
