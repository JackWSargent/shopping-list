const itemQueries = require("../db/queries.items.js");
const Authorizer = require("../db/policies/application");
module.exports = {
    create(req, res, next){
        //console.log("at create controller")
        const authorized = new Authorizer(req.user).create();
        if(authorized) {
          //console.log(req.body + " " + req.user)
          let newitem= {
            name: req.body.name,
            listId: req.params.listId,
            userId: req.user.id
          };
          //console.log(newitem);
          itemQueries.addItem(newitem, (err, item) => {
            if(err){
              console.log(err);
              res.redirect(500, "/" );
            } else {
              res.redirect(303, `/lists/${newitem.listId}`);
            }
          });
        } else {
          req.flash("notice", "You are not authorized to do that.");
          res.redirect("/");
        }
      },
      showOne(req, res, next){
        const authorized = new Authorizer(req.user).create();
        if(authorized) {
          itemQueries.getItem(req.params.id, (err, item) => {
            if(err || item == null){
              res.redirect(404, "/");
            } else {
              console.log("found item");
              res.render("ListItems", {item});
            }
          });
        }
      },
      destroy(req, res, next){
          itemQueries.deleteItem(req, (err, item) => {
            if(err){
              res.redirect(500, `/lists/${req.params.listId}`)
            } else {
              res.redirect(303, `/lists/${req.params.listId}`)
            }
          });
      },
      updatePurchased(req,res,next){
          console.log("update hit")
          itemQueries.updateItem(req, req.body, (err, item)  => {
              if(err || item == null){
                  res.redirect(404, `/lists/${req.params.listId}`)
              } else {
                  res.redirect(`/lists/${req.params.listId}`)
              }
          })
      }
}