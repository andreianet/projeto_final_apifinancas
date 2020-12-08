const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = new Schema({
    categoryId:{
        type: Schema.Types.ObjectId,
        ref: 'expense',
        require: true
    },
    name:{
        type:['Alimentacao','Farmacia','Colegio','Vestuario'],
        required: true
    },
})

const categoryCollections = mongoose.model('category', categorySchema);

module.exports = categoryCollections
