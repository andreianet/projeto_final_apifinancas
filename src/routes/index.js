const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
    res.status(200).send({
        title: "App de Finanças - Projeto Final",
        version: "1.0.0"
    })
})

module.exports = router