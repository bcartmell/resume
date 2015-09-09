var server = require('./server/server.js');
var portNumber;

portNumber = (process.env.NODE_ENV === 'production' ? 443 : 3000);
console.log('Environment: '+ process.env.NODE_ENV);
console.log('port: '+ portNumber);
server.server.start(portNumber);
