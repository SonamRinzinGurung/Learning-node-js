// NPM
// check version npm -v


//install a package

//locally npm i <packagename>

// globally
// npm install -g <packagename>


//package json - manifest file (store important info about project/package)

// npm init (step by step approach)
//npm init -y (default approach)


//show casing how to use packages

const _ = require('lodash')

const items = [1,[2,[3,[4]]]]

const newItems = _.flattenDeep(items); //makes the nested array to flat array

console.log(newItems);