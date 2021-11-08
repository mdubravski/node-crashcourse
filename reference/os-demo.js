const os = require('os');

// platform
console.log(os.platform());

// get CPU arch
console.log(os.arch());

// get CPU core info
console.log(os.cpus());

// get free memory
console.log(`Free Memory: ${os.freemem()}`);

//get total memory
console.log(`Total Memory: ${os.totalmem()}`);

// get home dir
console.log(os.homedir());

// get uptime
console.log(os.uptime());