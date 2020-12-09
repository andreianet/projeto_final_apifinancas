const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = new Schema({
    categoryId:{
        type: Schema.Types.ObjectId,
        require: true
    },    
    name:{
        type:String,
        required: true
    },
})

const categoryCollections = mongoose.model('category', categorySchema);

module.exports = categoryCollections
