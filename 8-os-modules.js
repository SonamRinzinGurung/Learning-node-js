const os = require('os')


//info about current user

const user1 = os.userInfo()
console.log(user1);

//method returns the system uptime in secs

console.log(`The system Uptime is: ${os.uptime()}`);

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMemory: os.freemem()
}
console.log(currentOS);