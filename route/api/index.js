
const router = require("express").Router();
const business = require('./business/index');
const category = require("./category/index");
const event = require("./event/index");
const search = require("./search/index");


router.use("/business",business);
router.use("/category",category);
router.use("/events",event);
router.use("/search",search);


module.exports = router;