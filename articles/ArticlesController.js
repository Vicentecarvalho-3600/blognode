const express = require("express");
const router = express.Router();

router.get("/articles", (req, res) => {
  res.send("Rota de Artigos");
});

router.get("/articles/adm", (req, res) => {
  res.send("articles administrador");
});

module.exports = router;
