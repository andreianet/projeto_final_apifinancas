require('dotenv-safe').config();
//const app = require('../../src/app')
const mongoose = require('mongoose')

//String Connection
const connect = () => {
    mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true }) //parsea a conexão 
    const connection = mongoose.connection
    //caso der um erro 
    connection.on('error', ()=> console.error("Error Connection"))
    connection.once('open', ()=> console.log("Conncetion MongoDB Success..."))
}

module.exports = {connect}