const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = new Schema({
    expenseId:{
        type: Schema.Types.ObjectId,
        ref: 'expense',
        require: true
    },
    name:{
        type: String,
        required: true
    },
})

const categoryCollections = mongoose.model('category', categorySchema);

module.exports = categoryCollections
