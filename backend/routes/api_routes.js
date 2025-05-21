const router = require("express").Router();
const controller = require("./../controllers/api_controller.js");
const multer = require("multer");

const storage = multer.memoryStorage(); // or configure diskStorage if you want to save files
const upload = multer({ storage });

router.post("/quote", upload.array("images"), controller.ProcessQuote);


module.exports = router;
