var newServer = require('./server.js');

newServer.addResource("pandas");
newServer.addResource("penguins");

newServer.start(3000);
