'use strict'
var server = require('./okie-serv/server.js').server;
var portNumber = 8020;
var defaultPage = 'resume.html';
server.start(portNumber);
