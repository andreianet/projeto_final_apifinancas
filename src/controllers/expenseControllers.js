const expenseCollections = require('../models/expenseSchema')

        
const getAllExpense = (req, res) => {
    const finance = req.params.id;
    const category = req.params.category           
        expenseCollections.findById(finance, category,(error, exp) => {
            if (error){
                return res.status(500).send(error)
            }else{
                return res.status(200).send(exp)
            }
        }).populate(
            "finance", 
            "category"
        )//.sort({name:1})
}

const addExpense = (req, res) => {   
    const expenseBody= req.body;    
    
    const expense = new expenseCollections(expenseBody);
    expense.save(error => {             
        if (error) {  
             console.log(error);            
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
    updateExpense
    
}