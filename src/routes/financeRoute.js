const express = require('express')
const router = express.Router()
const controller = require('../controllers/financeControllers')

/**
 * @route GET /
 * @desc Retornar od tipos de Rendas(Finance)
 * @access Public
 * @endpoint htt://localhost:porta/finance/allfinance
 */
router.get('/allfinance', controller.getAllFinance)
router.post('/create', controller.addFinance)

module.exports = router