// async = non blocking
// sync = blocking


// working with syncronous 
const {readFileSync,writeFileSync} = require('fs')

const firstFile = readFileSync('./content/first.txt','utf8')
const secondFile = readFileSync('./content/second.txt','utf8')

// console.log(firstFile,secondFile);

writeFileSync(
    './content/result-sync.txt',
    `Here is the result: ${firstFile},${secondFile}`,
    { flag: 'a' }
    )
