var router = require("express").Router();
var controller = require("../controllers");

router.get("/", controller.index);

module.exports = router;