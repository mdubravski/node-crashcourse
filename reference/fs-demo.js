const fs = require('fs');
const path = require('path');

// create folder
fs.mkdir(path.join(__dirname,'/test'), {}, function(err){
    if(err) throw err;
    console.log('Folder created...');
});

// create and write to file
fs.writeFile(path.join(__dirname,'/test','hello.txt'), 'Hello World!', function(err){
    if(err) throw err;
    console.log('File written too ...');

    // append to file
    fs.appendFile(path.join(__dirname,'/test','hello.txt'), 'I love node.js', function(err){
        if(err) throw err;
        console.log('File appended too ...');
});

});

// read from file
fs.readFile(path.join(__dirname,'/test','hello.txt'), 'utf8', (err,data) =>{
    if(err) throw err;
    console.log(data);
});

// rename file
fs.rename(path.join(__dirname,'/test','hello.txt'), path.join(__dirname,'/test','helloWorld.txt'), (err) =>{
    if(err) throw err;
    console.log('File renamed ...');
});

