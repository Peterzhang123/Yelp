const router = require("express").Router();
const featured = require("./featured");

router.use("/featured",featured);

module.exports = router;