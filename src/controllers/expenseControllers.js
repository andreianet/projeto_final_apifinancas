const expenseCollections = require('../models/expenseSchema')

const getAllExpense = (req, res) => {
    expenseCollections.find((error, exp) => {
        if (error){
            return res.status(500).send(error)
        }else{
            return res.status(200).send(exp)
        }
    }).sort({name:1})
}
const addExpense = (req, res) => {
    const expenseBody = req.body;
    const expense = new expenseCollections(expenseBody);

    expense.save(error => {
        if (error) {
            return res.status(400).send(error);
        }else {
            return res.status(200).send({
                message: 'Expense Created Success',
                expense
            })
        }
    })
}

module.exports = {
    getAllExpense,
    addExpense
}