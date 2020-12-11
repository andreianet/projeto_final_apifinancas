
const mongoose = require('mongoose')
const dotenv = require('dotenv');
const express = require("express");
const cors = require('cors')
const app = express();

dotenv.config();

const PORT = process.env.PORT || 3000

//rotas
const index = require('./src/routes/index');
const expense = require('./src/routes/expenseRoute')
const category = require('./src/routes/categoryRoute')
const finance = require('./src/routes/financeRoute')

//String Connection
    mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true }) //parsea a conexão 
    const connection = mongoose.connection
    //caso der um erro 
    connection.on('error', ()=> console.error("Error Connection"))
    connection.once('open', ()=> console.log("Connected with MongoDB... OK!"))

app.use(cors());
app.use(express.json());

app.use("/", index);
app.use("/expense", expense);
app.use("/category", category);
app.use("/finance", finance);

app.listen(PORT, function () {
    console.log(`Server started on port ${PORT}; ` + 'press Ctrl-C to terminate');
})

module.exports = app