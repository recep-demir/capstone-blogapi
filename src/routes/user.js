"use strict";

const router = require("express").Router();

const { list, create, read, update, deletee } = require('../controllers/user');
const { isAdmin,islogin } = require('../middlewares/permissions');

router.route('/').get(isAdmin,list).post(islogin,create);
router.route('/:id').get(read).put(islogin,update).patch(islogin,update).delete(isAdmin,deletee)

module.exports = router

