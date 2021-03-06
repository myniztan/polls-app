var router = require("express").Router();
var controller = require("../controllers/poll");
var expressSanitized = require("express-sanitize-escape");
expressSanitized.sanitizeParams(router, ["id"]);

router.post("/", controller.create);
router.get("/", controller.new);
router.get("/data/:id", controller.getData);
router.post("/vote/:id", controller.vote);
router.get("/random", controller.random);
router.get("/:id", controller.get);
router.delete("/:id", controller.delete);

module.exports = router;