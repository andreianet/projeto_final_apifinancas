const mongoose = require('mongoose')
const Schema = mongoose.Schema

const financeSchema = new Schema({
    financeId:{
        type: Schema.Types.ObjectId,
        ref: 'expense',
        require: true
    },
    name:{
        type:['Renda Fixa', 'Renda Extra'],
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