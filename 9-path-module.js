const path = require('path')

console.log(path.sep)

const filePath = path.join('/content','sub-folder','test.txt')
console.log(filePath);

const base = path.basename(filePath)
console.log(base);


//getting the absolute path to the test text
const absolutePath = path.resolve(__dirname,'content','sub-folder','test.txt')
console.log(absolutePath);