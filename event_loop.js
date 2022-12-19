// console.log('first')
// setTimeout(() => {
//     console.log('second')
// }, 0);
// console.log('third')
const http = require('http')
const server = http.createServer((req, res)=>{
    if(req.url === '/') res.write('Welcome')
    else if(req.url === '/about'){
        for(i = 0; i<1000; i++){
            console.log(Math.random() * i)
        }
        res.write('this is about\t')
    }
    else res.write('not found')
    return res.end()
});
server.listen(3000)
console.log('server on port 3000')