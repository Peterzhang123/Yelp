
const router = require("express").Router();
const category = require("./category.js");
const category_detail = require("./category_detail/category_detail");


router.use("/:alias",category_detail);

router.use("", category);



module.exports = router;