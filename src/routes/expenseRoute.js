const express = require('express')
const router = express.Router();
const controller = require('../controllers/expenseControllers')

router.get('/', controller.getAllExpense)
router.post('/create', controller.addExpense)


module.exports = router