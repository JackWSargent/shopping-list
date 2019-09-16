const List = require("./models").List;
const Authorizer = require("./policies/application");
const User = require("./models").User;
const Item = require("./models").Item;
module.exports = {
    addList(newList, callback){
        return List.create(newList)
        .then((list) => {
          //console.log('success')
          callback(null, list);
        })
        .catch((err) => {
          console.log(err)
          callback(err);
        })
      },
      getLists(id, callback){
        return List.findAll( {where: {UserId: id}}, {
          include: [{model: Item, as: "items"}]
        })
        .then((lists) => {
          //console.log(lists);
          callback(null, lists);
        })
        .catch((err) => {
          console.log("Error in query")
          console.log(err);
          callback(err);
        })
      },
      getList(id, callback){
        return List.findByPk(id, {
          include: [{model: Item, as: "items"}]
        })
        .then((list) => {
          //console.log(lists);
          callback(null, list);
        })
        .catch((err) => {
          console.log("Error in query")
          console.log(err);
          callback(err);
        })
      },
      deleteList(req, callback){
        return List.findByPk(req.params.id)
        .then((list) => { 
          const authorized = new Authorizer(req.user, list).destroy();
          if(authorized) { 
            List.destroy()
            .then((res) => { 
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
  // updatelist(req, updatedlist, callback){
  //   return List.findByPk(req.params.id)
  //   .then((list) => {
  //     if(!list){
  //       return callback("list not found");
  //     }
  //     const authorized = new Authorizer(req.user, list).update();        
  //     if(authorized) {
  //       list.update(updatedlist, {
  //         fields: Object.keys(updatedlist)
  //       })
  //       .then(() => {
  //         callback(null, list);
  //       })
  //       .catch((err) => {
  //         callback(err);
  //       });
  //     } else {
  //       req.flash("notice", "You are not authorized to do that.");
  //       callback("Forbidden");
  //     }
  //   });
  // }
}