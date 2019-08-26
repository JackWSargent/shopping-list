const express = require("express");
const app = express();

const appConfig = require("./config/main-config.js");
const routeConfig = require("./config/route-config.js");
appConfig.init(app, express);
routeConfig.init(app);

const routes = require('./routes');
const user = require('./routes/user');
const http = require('http');

const errorHandler = require('errorhandler');

//const reactViews = require('express-react-views');

//const app = express();
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

//app.set('views', __dirname + '/views');
//app.set('view engine', 'jsx');
//app.engine('jsx', reactViews.createEngine());
//app.use(logger('dev'));
//app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(errorHandler());
}

//app.locals.something = 'value';
//app.locals.qaz = 'qut';

//app.get('/', routes.index);
//app.get('/users', user.list);

server.on("listening", () => {
  console.log(`server is listening for requests on port ${server.address().port}`);
});
