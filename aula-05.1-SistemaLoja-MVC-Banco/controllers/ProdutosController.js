import express, {Router} from "express";
const router = express.Router();

import Produto from "../models/Produto.js";
import connection from "../config/sequelize-config.js";

// ROTA PRODUTOS
router.get("/produtos", function (req, res) {
  Produto.findAll().then((produtos) => {
    res.render("produtos", {
      produtos: produtos,
    });
  });
});

// Rota de cadastro de produtos
router.post("/produtos/new", (req, res) => {
  //Recebendo os dados do formulário e gravando nas variáveis
  const nome = req.body.nome;
  const preco = req.body.preco;
  const categoria = req.body.categoria;
  Produto.create({
    nome: nome,
    preco: preco,
    categoria: categoria,
  }).then(() => {
    res.redirect("/produtos");
  });
});

// Rota de delete de dados
router.get("/produtos/delete/:id", (req, res) => {
  // COLETAR O ID QUE VEIO NA URL
  const id = req.params.id;
  // MÉTODO PARA EXCLUIR
  Produto.destroy({
    where: {
      id: id,
    },
  })
    .then(() => {
      res.redirect("/produtos");
    })
    .catch((error) => {
      console.log(`Meu programador é muito burro ${error}`);
    });
});

export default router;
