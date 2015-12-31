var server = require('./server/server.js');
var portNumber;

portNumber = 8080;
console.log('Environment: '+ process.env.NODE_ENV);
console.log('port: '+ portNumber);
server.server.start(portNumber);
