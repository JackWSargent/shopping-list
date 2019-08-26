module.exports = {
    init(app){
      const staticRoutes = require("../routes/index");
      const userRoutes = require("../routes/user");
      const listRoutes = require("../routes/list");
      const itemRoutes = require("../routes/item");
      app.use(staticRoutes);
      app.use(userRoutes);
      app.use(listRoutes);
      app.use(itemRoutes);
    }
}