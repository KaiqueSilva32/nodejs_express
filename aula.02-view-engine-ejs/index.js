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
  const perfil = req.params.perfil;
  const nome = req.params.nome;
  res.render("perfil", {
    perfil: perfil,
    nome: nome,
  });
});

// ROTA DE VÍDEOS

app.get("/video/:playlist?", (req, res) => {
  const videos = req.params.videos;
  const playlist = [{
    Playlist: "Musicas",
    qtdVideos: "6 vídeos",
  },
  {
    Playlist: "Videos de comédia",
    qtdVideos: "10 vídeos",
  },
  {
    Playlist: "Videos de terror",
    qtdVideos: "2 vídeos",
  },
];
  res.render("videos", {
    videos: videos,
    playlist: playlist,
  });
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

// ROTA PEDIDOS
app.get("/pedidos", (req, res) => {
  // ARRAY DE OBJETOS COM OS PEDIDOS
  const pedidos = [
    {
      produto: "Celular",
      valor: 3000,
    },
    {
      produto: "Computador",
      valor: 4000,
    },
    {
      produto: "Tablet",
      valor: 2000,
    },
    {
      produto: "Notebook",
      valor: 3800,
    },
  ];
  res.render("pedidos", {
    // ENVIANDO O ARRAY DE OBJETOS PARA A PÁGINA
    pedidos: pedidos,
  });
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
