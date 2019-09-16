const express = require("express");
const router = express.Router();
const itemController = require("../controllers/itemController");

router.post("/lists/:listId/create", itemController.create)
router.post("/lists/:listId/:id/destroy", itemController.destroy)

module.exports = router;