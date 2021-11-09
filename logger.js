const EventEmitter = require('events');
const uuid = require('uuid');
const fs = require('fs');
const path = require('path');

class Logger extends EventEmitter{
    log(msg){
        // call event
        this.emit('message', {id: uuid.v4(), msg});
    }

    logFile(msg){
        this.emit('event', fs.writeFile(path.join(__dirname,'./reference/test','hello2.txt'), `id: ${uuid.v4()}, ${msg}` , function(err){
            if(err) throw err;
            console.log('File written too ...');
        }));
    }

}

//module.exports = Logger;
const logger = new Logger();
logger.on('message', data => console.log('Called Listener:',data));

logger.logFile('Hello');