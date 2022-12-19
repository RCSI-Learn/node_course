const http = require('http')

http.createServer((request, response) => {
    if(request.url === '/') response.write('<h1>welcome</h1>')
    else response.write(`
    <h1>hello from ${request.url} </h1>
    <a href='/'>main page</a>`)
    response.end()
}).listen(1000);
console.log('server listen on port 1000')