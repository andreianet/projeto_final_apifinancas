const app = require('./src/app')
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 3000

app.listen(PORT, function () {
    console.log(`Server OK!Na porta:${PORT}`);
})

module.exports = app