const EventEmitter = require('events')

const myFirstEmitter = new EventEmitter()

// register first event emitter named greet
myFirstEmitter.on('greet', (name) => {
    console.log(`Hello, ${name}!!`)
})

myFirstEmitter.emit('greet', 'Anand')