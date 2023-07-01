const express = require('express')

const app = express()
const PORT = 3000

app.use(express.static('./dist/'))

app.get('*', (req, res) => {
    // eslint-disable-next-line n/no-path-concat
    res.sendFile(__dirname + '/dist/index.html')
})
app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}!`)
})
