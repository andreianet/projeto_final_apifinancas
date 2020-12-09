const express = require('express')
const router = express.Router();
const controller = require('../controllers/expenseControllers')

/**
 * @route GET /
 * @desc Retornar todas despesas(expense)
 * @access Public
 * @endpoint htt://localhost:porta/expense
 */
router.get('/allexpense', controller.getAllExpense)


router.post('/create', controller.addExpense)
router.delete('/delete/:id', controller.delExpense)
router.put('/update/:id', controller.updateExpense)


module.exports = router