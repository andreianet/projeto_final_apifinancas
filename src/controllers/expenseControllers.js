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

/*const groupIDExpense = (req, res) => {
    const financeID = req.params.finance;
    const categoryID = req.params.category;
    expenseCollections.findById(financeID, categoryID,(error, expense) =>{
        if (error) {
            return res.status(500).send(error)
        }else if(expense) {
            return res.status(200).send({
                message:'Ok!',
                expense
            })
        }else{
            return res.status(404).send('testando....')
        }

    })
}*/

const addExpense = (req, res) => {
    const financeId = req.body.financeId;
    const categoryId = req.body.categoryId;
    const expenseBody= req.body;
    
    const expense = new expenseCollections(expenseBody)

    expense.save(error => {
        console.log(financeId, categoryId,expense);
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

const delExpense = (req, res) => {
    const id = req.params.id
    expenseCollections.findByIdAndDelete(id,(error, expense) => {
        if (error) {
            return res.status(500).send({
                message: 'Ocorreu ERROR, Verificar!',
                error
            })            
        }else{
            if(expense){
                return res.status(200).send("Expense Deleted Success!")
            }else{
                return res.status(400)
            }
        }
    })

}

const updateExpense = (req, res) => {
    const id = req.params.id
    const expenseBody = req.body
    const newExpense = {new:true}

    expenseCollections.findByIdAndUpdate(
        id,
        {$set:expenseBody},
        newExpense,
        (error, expense) => {
            if (error){
                return res.status(500).send(error)
            }else if (expense){
                return res.status(200).send("Expense Update Successfully!!")
                
            }else{
                return res.sendStatus(404)
            }
        }
        
    )
}

module.exports = {
    getAllExpense,
    addExpense,
    delExpense,
    updateExpense,
    //groupIDExpense
}