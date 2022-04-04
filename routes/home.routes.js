//import 
const express = require('express');
const homeControllers = require('../controllers/home.controllers');
const router = express.Router();
const checkAuth = require('../middleware/checkAuth.middleware');

//insert request method
router.get('',checkAuth,homeControllers.index);

//export
module.exports = router