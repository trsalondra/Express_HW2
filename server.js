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

app.get('/magic/:message', (req, res) => {
    let responses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
    let randomResponse = Math.floor(Math.random() * responses.length) + 1
    res.send(`<h1>${req.params.message}?<br>${responses[randomResponse]}</h1>`)
})

app.get('/fibonacci/:number', (req, res) => {
    let fibSequence = [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181]
    let number = parseInt(req.params.number)
    let goldenRatio = (1 + Math.sqrt(5)) / 2 
    
    if (number <= 4181) {
        if(fibSequence.includes(number)){
            res.send(`Very good.<br>${number} is Fibonacci.`)
        } else {
            res.send(`I can tell ${number} is not a fibonacci number.`)
        }
    } else {
        let quotient = number / goldenRatio

        if (quotient !== 0 && number > 4181){

        }
        
        for(let i = 0;)
        res.send('bigger than 4181 case')

        
    }
    
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})