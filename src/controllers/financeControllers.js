const financeCollections = require('../models/financeSchema')

const getAllFinance = (req, res) => { 
    console.log(req.url);
    financeCollections.find({"name":{$type:"array"}},(error, finance) => {
        if (error){
            return res.status(500).send(error)
        }else{
            return res.status(200).send("List of Finances")
        }
    })
}
/*const addFinance = (req, res) => {
    const financeBody = req.body;
    const finance = new financeCollections(financeBody);   

    finance.save(error => {
        if (error) {
            return res.status(400).send(error);
        }else {
            return res.status(200).send({
                message: 'Finance Created Success',
                finance
            })
        }
    })
}*/

module.exports = {
    getAllFinance,
    //addFinance
}