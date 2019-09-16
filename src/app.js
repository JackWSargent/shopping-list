const express = require("express");
const app = express();
const appConfig = require("./config/main-config.js");
const routeConfig = require("./config/route-config.js");
appConfig.init(app, express);
routeConfig.init(app);

const http = require('http');

const errorHandler = require('errorhandler');

function normalizePort(val) {
  const port = parseInt(val, 10);
  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
}

const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);
const server = http.createServer(app);
server.listen(port);

if ('development' == app.get('env')) {
  app.use(errorHandler());
}

server.on("listening", () => {
  console.log(`server is listening for requests on port ${server.address().port}`);
});
