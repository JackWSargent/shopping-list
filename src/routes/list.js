const express = require("express");
const router = express.Router();
const listController = require("../controllers/listController");

//router.get("/", listController.show);
router.post("/lists/create", listController.create);
router.post("/lists/destroy", listController.destroy);
router.get("/lists/:id", listController.showOne)
module.exports = router;