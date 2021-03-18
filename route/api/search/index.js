
const router = require("express").Router();
const search = require("./search");

router.use("/:category/:location",search);

module.exports = router;