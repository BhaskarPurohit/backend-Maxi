const express = require('express')
const app = express()  //creating express application 
const port = 3000
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}))

// const callBackFn = (req, res ,next) =>{
//     // res.send("request sent successfully")
//     console.log("inside the middleware")
//     next()
// }

// const secondCallback = (req,res,next)=>{
//     console.log("second middleware")
//     // next()  //next()allows the request to continue to the next niddleware in the line
//     // res.send('<h1>home page</h1>')
//     res.redirect('/')
// }


// const addProduct = (req, res, next)=>{
//     res.send('<form action="/product" method="post"><input type="text" name="title"><button type="submit">Submit</button></form>')
// }


// app.use(callBackFn)  //---> allows us to create middleware
// app.use('/product',secondCallback)
// app.use('/add-product', addProduct)

const handleRequest = (req, res)=>{
    res.send("express chal gya")
}

app.use('/add-product',(req, res, next)=>{
    res.send('<form action="/product" method="post"><input type="text" name="title"><button type="submit">Submit</button></form>')
})


app.use('/product',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/')

})

app.use('/',(req,res,next)=>{
    res.send('<h1>hello from express</h1>')
})




app.get('/', handleRequest)

app.listen(port, ()=>{
    console.log(`aap is listening on port ${port}`)
})