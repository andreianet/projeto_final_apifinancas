const mongoose = require('mongoose')
const Schema = mongoose.Schema

const financeSchema = new Schema({
    financeId:{
        type: Schema.Types.ObjectId,
        require: true
    },    
    name:{
        type: String,
        required: true
    },

})


const financeCollections = mongoose.model('finance', financeSchema);

module.exports = financeCollections
/*
{
    collection: "finance"
    versionKey: false //apenas para versionar, não é obrigatório
}
*/