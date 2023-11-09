const express = require('express');
const router = express.Router();

router.get('/categories', (req, res) => {
    res.send("Rota de categoria");
});

router.get('/categories/adm', (req, res) => {
    res.send("categories administrador");
})

module.exports = router;