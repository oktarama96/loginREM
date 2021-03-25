const express = require("express");
const router = express.Router();
const { DaftarUser, LoginUser, getUser } = require('../controllers/userController');
const middleware = require("../middleware/middleware");

router.post('/daftar', DaftarUser);
router.post('/auth', LoginUser);
router.get('/home', middleware, getUser);

module.exports = router;