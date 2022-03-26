const {createReadStream} = require('fs')

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })

//high water mark lets us change the buffer size of the size from 64 kb to anything
const stream = createReadStream('./content/big.txt', { highWaterMark: 90000});

stream.on('data',(result)=>{
    console.log(result);
})
stream.on('error',(err)=> console.log(err))