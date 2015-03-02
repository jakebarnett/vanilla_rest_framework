This is a simple framework for setting up a server in node.js that can handle
REST requests.

To create the server, require in the index.js file and use the .start method, which takes the URL as an argument.

example:

var server = require('index.js');
server.start(3000)

This will start a server at localhost:3000 .



To create a resource to handle REST requests, use the .createResource method.  This will create
a new directory to handle your reuqests.  The .createResource method takes a directory name as a
parameter.

example:
var server = require('index.js');
server.createResource('users');
server.start(3000);

This creates a directory at localhost:3000/users that can handle REST requests.
