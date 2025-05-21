var router = require("express").Router();
var controller = require("./../controllers/api_controller.js");

router.post("/quote",controller.ProcessQuote);

module.exports = router;
