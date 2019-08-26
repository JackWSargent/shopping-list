const List = require("./models").List;
const Authorizer = require("./policies/list");
const User = require("./models").User;
module.exports = {
    addList(newList, callback){
        return List.create(newList)
        .then((list) => {
          callback(null, list);
        })
        .catch((err) => {
          callback(err);
        })
      },
      getList(id, callback){
        return List.findByPk(id, {
          include: [
            {model: Item, as: "items"}
          ]
        })
        .then((list) => {
          callback(null, list);
        })
        .catch((err) => {
          callback(err);
        })
      },
      deleteList(req, callback){
        return List.findByPk(req.params.id)
        .then((list) => { //If list found
          const authorized = new Authorizer(req.user, list).destroy();
          if(authorized) { //Check if authorized to delete
            List.destroy()
            .then((res) => { //Try to delete
              callback(null, list);
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
  updatelist(req, updatedlist, callback){
    return List.findByPk(req.params.id)
    .then((list) => {
      if(!list){
        return callback("list not found");
      }
      const authorized = new Authorizer(req.user, list).update();        
      if(authorized) {
        list.update(updatedlist, {
          fields: Object.keys(updatedlist)
        })
        .then(() => {
          callback(null, list);
        })
        .catch((err) => {
          callback(err);
        });
      } else {
        req.flash("notice", "You are not authorized to do that.");
        callback("Forbidden");
      }
    });
  }
}