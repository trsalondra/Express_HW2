const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {

})

app.get('/greetings/:name', (req, res) => {
    res.send(`${req.params.name}! It's so great to see you!`)
})

app.get('/tip/:total/:tipPercentage', (req, res) => {
    let tip = req.params.total * req.params.tipPercentage * 0.01
    res.send(`Based on a total of $${req.params.total} an a tip prcentage of ${req.params.tipPercentage}%, the tip will be $${tip}.`)
})



app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})