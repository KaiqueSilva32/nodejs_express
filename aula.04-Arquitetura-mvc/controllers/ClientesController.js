import express from 'express' // ES6 Modules
const router = express.Router()

// ROTA DE CLIENTES
router.get("/clientes", (req,res) => {
    const clientes = [
        {
            nome: "Ana Silva", 
            cpf: "123.456.789-00",
            endereco: "Rua das Flores, 123 - Bairro Jardim Primavera - Felicidade - SP"
        },
        {
            nome: "Ana Silva", cpf: "123.456.789-00",
            cpf: "123.456.789-00",
            endereco: "Rua das Flores, 123 - Bairro Jardim Primavera - Felicidade - SP"
        },
        {
            nome: "Ana Silva", 
            cpf: "123.456.789-00",
            endereco: "Rua das Flores, 123 - Bairro Jardim Primavera - Felicidade - SP"
        },
        {
            nome: "Ana Silva", 
            cpf: "123.456.789-00",
            endereco: "Rua das Flores, 123 - Bairro Jardim Primavera - Felicidade - SP"
        }
    ]
    res.render("clientes", {
        clientes: clientes
    })
})
export default router