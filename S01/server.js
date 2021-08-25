const http = require('http'); //using ou #include

const server = http.createServer((request,response)=> {

    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Bonjour mon premier serveur.');
    console.log(request);
});

server.listen(1337, '127.0.0.1',() =>{
    console.log('Serveur bi boo bip hacker man');
} );
