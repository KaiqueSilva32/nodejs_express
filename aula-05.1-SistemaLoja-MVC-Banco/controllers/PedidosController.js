import express from "express";
const router = express.Router();

import Pedido from "../models/Pedido.js";
import connection from "../config/sequelize-config.js";

// ROTA PEDIDOS
router.get("/pedidos", function (req, res) {
  Pedido.findAll().then((pedidos) => {
    res.render("pedidos", {
      pedidos: pedidos,
    });
  });
});

// Rota de cadastro de pedidos
router.post("/pedidos/new", (req, res) => {
  const numero = req.body.numero;
  const valor = req.body.valor;
  Pedido.create({
    numero: numero,
    valor: valor,
  }).then(() => {
    res.redirect("/pedidos");
  });
});

// Rota delete de dados
// Essa rota possui um parâmetro id
router.get("/pedidos/delete/:id", (req,res) => {
    const id = req.params.id;

    Pedido
    .destroy({
        where: {
            id: id
        },
    })
    .then (() => {
        res.redirect("/pedidos")
    })
    .catch((error) => {
        console.log(`Nada da certo que merda ${error}`);
    });
});

export default router;
