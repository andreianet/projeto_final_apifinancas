const categoryCollections = require('../models/categorySchema')

const getAllCategory = (req, res) => {
    console.log(req.url);
    categoryCollections.find((error, categ) => {
        if (error){
            return res.status(500).send(error)
        }else{
            return res.status(200).send(categ)
        }
    }).sort({name:1})
}

const addCategory = (req, res) => {
    const categoryBody = req.body;
    const category = new categoryCollections(categoryBody);

    category.save((error) => {
        if (error) {
            return res.status(400).send(error);
        }else {
            return res.status(200).send({
                message: 'Category created Successfully!',
                category
            })
        }
    })
}

const delCategory = (req, res) => {
    const id = req.params.id;
    categoryCollections.findByIdAndDelete(id,(error, category) => {

        if (error) {
            return res.status(500).send({
                message: 'Ocorreu ERROR, verificar!',
                error
            })
        }else {
            if(category){
                return res.status(200).send('Category Deleted Success!')                
            }else{
                return res.status(404)
            }
            
        }
        
    })
   
}

module.exports = {
    getAllCategory,
    addCategory,
    delCategory
}