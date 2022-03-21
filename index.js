const http = require('http');
const HOSTNAME = '127.0.0.1'
const PORT = 4500

const server= http.createServer((req,res) =>{
    res.statusCode = 200
    res.setHeader('Content-type', 'text/plain')
    res.end('Hello World')
})

server.listen(PORT,HOSTNAME =>{
    console.log('server running at local address')
})