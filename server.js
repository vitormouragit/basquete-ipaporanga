const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const jogadores = [
  { nome: "Lucas Andrade", posicao: "Armador" },
  { nome: "Marcos Silva", posicao: "Ala" },
  { nome: "João Pereira", posicao: "Pivô" }
];

app.get("/jogadores", (req, res) => {
  res.json(jogadores);
});

app.post("/contato", (req, res) => {
  const { nome, email, mensagem } = req.body;
  console.log(Mensagem de ${nome} <${email}>: ${mensagem});
  res.json({ mensagem: "Mensagem recebida! Obrigado pelo contato." });
});

const PORT = 3000;
app.listen(PORT, () => console.log(Servidor rodando em http://localhost:${PORT}));