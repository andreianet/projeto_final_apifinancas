const app = require('./src/app')
const PORT = process.env.PORT || 3000

app.listen(PORT, function () {
    console.log(`Server OK!Na porta:${PORT}`);
})

module.exports = app