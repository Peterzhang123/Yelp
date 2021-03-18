const router = require("express").Router();
const business_search = require("./business_search");

router.use("/:name",business_search);

module.exports  = router;