const express = require('express')
const router = express.Router()
const controller = require('../controllers/financeControllers')

router.get('/allfinance', controller.getAllFinance)
router.post('/finance/create', controller.addFinance)

module.exports = router