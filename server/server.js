/* jshint node: true */
'use strict';

exports.server = (function(listenOnPort) {
  var sys = require("sys"),
    http = require("http"),
    path = require("path"),
    url = require("url"),
    filesys = require("fs"),
    mime = require("./serverModules/mime.js");

  listenOnPort = listenOnPort || 8080;

  var postHandler = function postHandler(request, response) {
    request.on('data', function(data) {
      console.log('received post data: \n'+ data);
    });
  };

  var fetchFile = function fetchFile(fullPath, response) {
    console.log('fetching '+ fullPath);
    filesys.readFile(fullPath, "binary", function(err, file) {
      if(err) {  
        response.writeHeader(500, {"Content-Type": "text/plain"});  
        response.write(err + "\n");  
        response.end();  
      }  
      else {
        var ext = fullPath.split('.').pop();
        var responseType = mime.mimeType[ext];
        if (responseType === undefined)
      responseType = "text/plain";

    response.writeHeader(200, {"Content-Type": responseType});  
    response.write(file, 'binary');  
    response.end();
      }
    });
  };

  var serverInstance = http.createServer(function(request,response){
    var requests = 0;
    return function(request, response) {
      var requestedPath = url.parse(request.url).pathname;

      if (request.method === 'POST') {
        postHandler(request, response);
      }

      if (requestedPath == "/") {
        requestedPath = "resume.html";
        requests = requests+1;
        console.log('request '+ requests +'received. \n');
      }

      var fullPath = path.join(process.cwd(),requestedPath);
      path.exists(fullPath,function(exists){
        if (!exists) {
          response.writeHeader(404, {"Content-Type": "text/plain"});  
          response.write("404 Not Found\n");  
          response.end();
        }
        else {
          fetchFile(fullPath, response);
        }
      });

    };
  });

  return {
    start: function(listenOnPort) {
      serverInstance.listen(listenOnPort, function() {
        sys.puts("Server Running on " + listenOnPort);			
      });
    },
    stop: function() {
      serverInstance.close(function() {
        sys.puts('Server closed.');
      });
    }
  };
}());
