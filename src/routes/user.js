"use strict";

const router = require("express").Router();

const { list, create, read, update, deletee } = require('../controllers/user');
const { isAdmin,isLogin } = require('../middlewares/permissions');


router.route('/').get(isAdmin, list).post(isLogin, create);
router.route('/:id').get(read).put(isLogin,update).patch(isLogin,update).delete(isAdmin,deletee)

module.exports = router

