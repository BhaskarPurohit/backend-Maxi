const express = require('express')
const app = express()
const port = 3000

const handleRequest = (req, res)=>{
    res.send("express chal gya")
}

app.get('/', handleRequest)

app.listen(port, ()=>{
    console.log(`aap is listening on port ${port}`)
})