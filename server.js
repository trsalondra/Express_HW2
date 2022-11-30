const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {

})

app.get('/greetings/:name', (req, res) => {
    res.send(`${req.params.name}! It's so great to see you!`)
})

app.get('/tip/:total/:tipPercentage', (req, res) => {
    res.send(`${req.params.total} and ${req.params.tipPercentage}`)
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})