const express = require('express')
const app = express()  //creating express application 
const port = 3000

const callBackFn = (req, res ,next) =>{
    // res.send("request sent successfully")
    console.log("inside the middleware")
    next()
}

const secondCallback = (req,res,next)=>{
    console.log("second middleware")
    next()  //next()allows the request to continue to the next niddleware in the line
}


app.use(callBackFn)  //---> allows us to create middleware
app.use(secondCallback)

const handleRequest = (req, res)=>{
    res.send("express chal gya")
}

app.get('/', handleRequest)

app.listen(port, ()=>{
    console.log(`aap is listening on port ${port}`)
})