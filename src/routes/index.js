"use strict"

const router = require('express').Router()

router.use('/blogs', require('./blog'))
router.use("/user", require("./user"));
router.use("/categories", require("./category"));
router.use("/comments", require("./comment"));


router.use('/documents', require('./document'));


module.exports = router