//creating a server through node js
//http --> launch a server, send requests
//https --> launch SSL server

const http = require("http")  //global module of http

const requestListener = (req, res)=>{
    console.log(req)
    // process.exit()  ---> exits the event loop
      
}

const server = http.createServer(requestListener)

server.listen(3000)
