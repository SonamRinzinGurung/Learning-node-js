// every file is a module
// modules is an encapsulated code (only share minimum)

const name = require('./4-name');
const sayHi = require('./5-utils');

const alternative = require('./6-alternativeMethod')


console.log(alternative);
sayHi('Sonam')

sayHi(name.john)
sayHi(name.peter)

require('./7-mind-grenade') //using require without assigning varaible