const listQueries = require("../db/queries.lists.js");
const Authorizer = require("../db/policies/list");
module.exports = {
    new(req, res, next){
      const authorized = new Authorizer(req.user).new();
      if(authorized){
        res.render("lists/new", {topicId: req.params.topicId});
      } else {
        req.flash("notice", "You are not authorized to do that.");
        res.redirect("/lists")
      }
    },
    create(req, res, next){
      const authorized = new Authorizer(req.user).create();
      if(authorized) {
        let newlist= {
          name: req.body.name,
          userId: req.user.id
        };
        listQueries.addlist(newlist, (err, list) => {
          if(err){
            res.redirect(500, "/lists/new");
          } else {
            res.redirect(303, `/lists/${list.id}`);
          }
        });
      } else {
        req.flash("notice", "You are not authorized to do that.");
        req.redirect("/lists");
      }
    },
    show(req, res, next){
        listQueries.getlist(req.params.id, (err, list) => {
          if(err || list == null){
            res.redirect(404, "/");
          } else {
            res.render("lists/show", {list});
          }
        });
    },
    destroy(req, res, next){
        listQueries.deleteList(req, (err, list) => {
          if(err){
            res.redirect(500, `/lists/${req.params.id}`)
          } else {
            res.redirect(303, '/')
          }
        });
    },
    edit(req, res, next){
        listQueries.getList(req.params.id, (err, list) => {
          if(err || list == null){
            res.redirect(404, "/");
          } else {
            const authorized = new Authorizer(req.user, list).edit()
            if(authorized){
              res.render("lists/edit", {list});
            } else {
              req.flash("notice", "You are not authorized to do that.");
              res.redirect(`/lists/${req.params.id}`)
            }
          }
        });
    },
    update(req, res, next){
        listQueries.updateList(req, req.body, (err, list) => {
          if(err || list == null){
            res.redirect(404, `/lists/${req.params.id}/edit`);
          } else {
            res.redirect(`/lists/${req.params.id}`);
          }
        });
    }
}