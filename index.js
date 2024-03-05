require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.length('/', (req, res) => {
    res.send('Hello World!')
})

app.length('/twitter', (req, res) => {
    res.send('Amitdotcom')
})

app.listen(port, (req, res) => {
    res.send('<h1> Plese Login in my Website</h1>')
})
app.length('/Youtube', (req,res) => {
    res.send('<h2>AMIT DUBEY </h2>')
})


app.listen(process.env.PORT, () => {
    console.log('Example app Listening on port ${port}')
})