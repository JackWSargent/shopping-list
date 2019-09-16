const listQueries = require("../db/queries.lists.js");
const Authorizer = require("../db/policies/application");
module.exports = {
    // new(req, res, next){
    //   const authorized = new Authorizer(req.user).new();
    //   if(authorized){
    //     res.render("lists/new", {topicId: req.params.topicId});
    //   } else {
    //     req.flash("notice", "You are not authorized to do that.");
    //     res.redirect("/lists")
    //   }
    // },
    create(req, res, next){
      //console.log("at create controller")
      const authorized = new Authorizer(req.user).create();
      if(authorized) {
        //console.log(req.body + " " + req.user)
        let newlist= {
          name: req.body.name,
          UserId: req.user.id
        };
        //console.log(newlist);
        listQueries.addList(newlist, (err, list) => {
          if(err){
            console.log(err);
            res.redirect(500, "/" );
          } else {
            res.redirect(303, "/");
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
        listQueries.getList(req.params.id, (err, list) => {
          if(err || list == null){
            res.redirect(404, "/");
          } else {
            console.log("found list");
            res.render("ListItems", {list});
          }
        });
      }
    },
    destroy(req, res, next){
        listQueries.deleteList(req, (err, list) => {
          if(err){
            res.redirect(500, `/lists/${req.params.id}`)
          } else {
            res.redirect(303, '/')
          }
        });
    }
}