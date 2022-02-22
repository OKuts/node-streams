const EventEmitter = require('events');

class Logger extends EventEmitter {
    log = msg => {
        this.emit('some_event', {text: msg});
    };
}



module.exports = Logger;
