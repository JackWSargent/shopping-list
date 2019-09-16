const List = require("./models").List;
const Authorizer = require("./policies/application");
const User = require("./models").User;
const Item = require("./models").Item;

module.exports = {
    addItem(newitem, callback){
        return Item.create(newitem)
        .then((item) => {
          console.log('success')
          callback(null, item);
        })
        .catch((err) => {
          console.log(err)
          callback(err);
        })
      },
      getItems(id, callback){
        return Item.findAll({where: {listId: id}})
        .then((items) => {
          //console.log(items);
          callback(null, items);
        })
        .catch((err) => {
          console.log("Error in query items")
          console.log(err);
          callback(err);
        })
      },
      getItem(id, callback){
        return Item.findByPk(id)
        .then((item) => {
          //console.log(items);
          callback(null, item);
        })
        .catch((err) => {
          console.log("Error in query")
          console.log(err);
          callback(err);
        })
      },
      deleteItem(req, callback){
        return Item.findByPk(req.params.id)
        .then((item) => { 
          const authorized = new Authorizer(req.user, item).destroy();
          if(authorized) { 
            item.destroy()
            .then((res) => { 
              callback(null, item);
            });
          } else {
            req.flash("notice", "You are not authorized to do that.");
            callback(401);
          }
        })
        .catch((err) => {
          callback(err);
        })
      },
    }