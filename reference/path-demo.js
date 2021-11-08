// common js module import
const path = require('path');

// base file name
console.log(path.basename(__filename));

// directory name
console.log(path.dirname(__filename));

// file extension
console.log(path.extname(__filename));

// create path objct
console.log(path.parse(__filename));

// Concatenate paths
console.log(path.join(__dirname, 'test','hello.html'));
