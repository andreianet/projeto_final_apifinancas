const express = require('express');
const app = express();
const cors = require('cors');
const database = require('./models/repository');

//rotas
const index = require('./routes/index');
const expense = require('./routes/expenseRoute')
const category = require('./routes/categoryRoute')
const finance = require('./routes/financeRoute')

database.connect();
app.use(cors());
app.use(express.json());

app.use("/", index);
app.use("/expense", expense);
app.use("/category", category);
app.use("/finance", finance);

module.exports = app