
const router = require('express').Router();
const api_router = require("./api/index");

router.use("/api",api_router);

module.exports = router;