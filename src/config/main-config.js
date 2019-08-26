require("dotenv").config();
const path = require("path");
const logger = require('morgan');
const bodyParser = require("body-parser");
const reactViews = require('express-react-views');
const viewsFolder = path.join(__dirname, "..", "views");
module.exports = {
  init(app, express){
    app.set('views', viewsFolder);
    app.set('view engine', 'jsx');
    app.engine('jsx', reactViews.createEngine());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(express.static(path.join(__dirname, "..", "assets")));
    app.use(logger('dev'));
  }
};