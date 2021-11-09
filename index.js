// console.log('Hello From Node Js');
// const Person = require('./person');

// let person1 = new Person('michael', 22);
// console.log(person1);

// const Logger = require('./logger.js');
/*************************************************************************** */

const http = require('http');
const path = require('path');
const fs = require('fs');
const nodemon = require('nodemon');


// const server = http.createServer((req,res) => {
//     if(req.url === '/'){
//         fs.readFile(path.join(__dirname,'public','index.html'), (err, content) =>{
//             if(err) throw err;
//             res.writeHead(200, {'Content-Type': 'text/html'});
//             res.end(content);
//         });
//     }

//     if(req.url === '/about'){
//         fs.readFile(path.join(__dirname,'public','about.html'), (err, content) =>{
//             if(err) throw err;
//             res.writeHead(200, {'Content-Type': 'text/html'});
//             res.end(content);
//         });
//     }
    
//     if(req.url === '/api/users'){
//         const users = [
//             {name : 'Bob Smith', age: '40'},
//             {name : 'Michael Dubravski', age: '22'},
//             {name : 'John Doe', age: '30'}
//         ];

//         res.writeHead(200, {'Content-Type': 'application/json'});
//         res.end(JSON.stringify(users));
//     }
// });


const server = http.createServer((req,res) =>{
    // build file path
    let filePath = path.join(__dirname,'public',req.url === '/' ?
    'index.html' : req.url);
    
    // get extension of file
    let extName = path.extname(filePath);
    
    //  set initial content type
    let contentType = 'text/html';

    // check ext and set content 
    switch(extName){
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    // read file
    fs.readFile(filePath, (err, content) => {
        if(err){
            if(err.code == "ENOENT"){
                //Page not fount
                fs.readFile(path.join(__dirname,'public','404.html'),(err,content) =>{
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.end(content, 'utf8');
                });
            }else{
                // Some server error
                res.writeHead(500);
                res.end(`Server Error ${err.code}`);
            }
        }else{
            // Success
            res.writeHead(200, {'Content-Type' : contentType});
            res.end(content,'utf8');
        }
    });

});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));