const EventEmitter = require('events');

const customEmitter = new EventEmitter()

//on - listen for an event
//emit - emits the event
//the order of on and emit is important
customEmitter.on('response', (name,id) => { //passing argument in call back
    console.log(`data received user ${name} id is ${id}`)
})

customEmitter.on('response', () => {
    console.log(`some other things here `)
})

customEmitter.emit('response','Sonam',123)