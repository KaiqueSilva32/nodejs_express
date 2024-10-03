import express, { Router } from "express";
const router = express.Router();

import Cliente from "../models/Cliente.js";
import connection from "../config/sequelize-config.js";

// ROTA CLIENTES
router.get("/clientes", function (req, res) {
  Cliente.findAll().then((clientes) => {
    res.render("clientes", {
      clientes: clientes,
    });
  });
});

// Rota de Cadastro de clientes
router.post("/clientes/new", (req, res) => {
  //Recebendo os dados do formulário e gravando nas variáveis
  const nome = req.body.nome;
  const cpf = req.body.cpf;
  const endereco = req.body.endereco;
  Cliente.create({
    nome: nome,
    cpf: cpf,
    endereco: endereco,
  }).then(() => {
    res.redirect("/clientes");
  });
});

// Rota de delete de dados
// Essa rota possui um parâmetro id
router.get("/clientes/delete/:id", (req, res) => {
  // COLETAR O ID QUE VEIO NA URL
  const id = req.params.id;
  // MÉTODO PARA EXCLUIR
  Cliente.destroy({
    where: {
      id: id,
    },
  })
    .then(() => {
      res.redirect("/clientes");
    })
    .catch((error) => {
      console.log(`Deu bosta patrão ${error}`);
    });
});

// Rota de edição de cliente
router.get("/clientes/edit/:id", (req, res) => {
  const id = req.params.id;
  // Método para achar a PK de um dado
  Cliente.findByPk(id)
    .then((cliente) => {
      res.render("clienteEdit", {
        cliente: cliente,
      });
    })
    .catch((error) => {
      console.log(`Faz o bagulho direito irmão ${error}`);
    });
});

// Rota de alteração
router.post("/clientes/update", (req, res) => {
  const id = req.body.id;
  const nome = req.body.nome;
  const cpf = req.body.cpf;
  const endereco = req.body.endereco;
  // Atualizar dados
  Cliente.update(
    {
      nome: nome,
      cpf: cpf,
      endereco: endereco,
    },
    { where: { id: id } }
  )
    .then(() => {
      res.redirect("/clientes");
    })
    .catch((error) => {
      console.log(error);
    });
});
export default router;
