const http = require('http');
 
const HOSTNAME= '127.0.0.1'
const PORT = 2900

const server = http.createServer((req,res) =>{
    console.log('here');
    res.statusCode= 200
    //res.setHeader('Content-type', 'text/plain')
    res.write('Hello Viewers')
    res.end
})

server.listen(PORT,HOSTNAME =>{
    console.log('server listening at the usual address')
})