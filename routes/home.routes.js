//import 
const express = require('express');
const homeControllers = require('../controllers/home.controllers');
const router = express.Router();

//insert request method
router.get('',homeControllers.index);

//export
module.exports = router