//import 
const express = require('express');
const defaultControllers = require('../controllers/default.controllers');
const router = express.Router();
const checkAuth = require('../middleware/checkAuth.middleware');


//insert request method
router.get('',checkAuth,defaultControllers.index);

//export
module.exports = router