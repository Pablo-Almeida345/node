const express = require('express')

//aqui vai quardar tudo que tem dentro do express
const app = express()

app.get('/usuarios', (req, res) => {
    res.send("Ola mundo")
})

app.listen(3000)