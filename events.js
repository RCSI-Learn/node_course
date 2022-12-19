const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('x', (data, secondData)=>{
    console.log('received')
    console.log(data)
    console.log(secondData)
})

// customEmitter.emit('x', 'hello world')
// customEmitter.emit('x', 'rcsi')
// customEmitter.emit('x', 50)
// customEmitter.emit('x', [10, 20 , 30])
// customEmitter.emit('x', {name: 'rc'})
customEmitter.emit('x', 'hello world', 'rcsi')