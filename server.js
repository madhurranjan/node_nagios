var http = require("http");
var url = require('url');
var ls = require('./nagios');

http.createServer(function(request, response) {
    var url_parts = url.parse(request.url, true);
    switch(request.url) {
      case "/restart": 
        console.log("running restart");
        break;
      default:
        var query = url_parts.query;
        if(query['hostname'] != undefined) {
          console.log(ls.CreateHostEntry(query['hostname'],query['ip']));
          response.writeHead(200, {"Content-Type": "text/plain"});
          response.write("Added entry ");
        }
    }
    response.end();
}).listen(8888);
