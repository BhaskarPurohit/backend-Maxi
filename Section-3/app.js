//creating a server through node js
//http --> launch a server, send requests
//https --> launch SSL server

const http = require("http")  //global module of http
const fs = require('fs')

const requestListener = (req, res)=>{
    // console.log(req.url, req.method, req.headers)
    const url = req.url
    const method = req.method
    if(url === '/'){
        
    // res.setHeader('Content-Type','text/html')  //  ---> setting header

    res.write('<html>')  //writing response
    res.write('<head><title>My First Page</title></head>')
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
    res.write('</html>')
    return res.end()
        
    }

    if(url === '/message' && method === 'POST'){
        fs.writeFileSync('message.txt', 'dummy text')
        res.statusCode(302)
        res.setHeader('Location','/')
        return res.end()

    }

    res.setHeader('Content-Type','text/html')  //  ---> setting header
    res.write('<html>')  //writing response
    res.write('<head><title>My First Page</title></head>')
    res.write('<body><h1>Hello from my Node js server</h1></body>')
    res.write('</html>')
    res.end()

    // process.exit()  ---> exits the event loop
      
}

const server = http.createServer(requestListener)

server.listen(3000)
