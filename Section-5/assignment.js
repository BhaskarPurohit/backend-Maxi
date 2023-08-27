const express = require('express')
const app = express()
const port = 3002



const firstMiddleWare = (req,res,next)=>{
    console.log("first middleware")
    next()
}

const secondMiddleWare = (req, res, next)=>{
    console.log("second middleware")
    res.send("dummy response from first middleware")
    next()
}





app.use('/',firstMiddleWare)
app.use('/users', secondMiddleWare)
app.use('/add-product', addProduct)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})