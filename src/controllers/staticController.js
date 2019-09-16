const listQueries = require("../db/queries.lists.js");
const Authorizer = require("../db/policies/application");
module.exports = {
    index(req, res, next){
        const authorized = new Authorizer(req.user).create();
        if(authorized) {
            listQueries.getLists(req.user.id, (err, lists) => {
            if(err || lists == null){
                res.redirect(404, "/");
            } else {
                res.render("index", {title: "Shopping List", lists});
                //console.log(lists)
            }
            });
        } else {
            res.render("index", {title: "Shopping List"});
        }
    },
}