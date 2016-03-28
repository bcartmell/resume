/* jshint esversion: 6, node: true */
'use strict'
var server = require('./okie-serv/server.js').server;
var portNumber = 8020;
server.start(portNumber, 'resume.html');
