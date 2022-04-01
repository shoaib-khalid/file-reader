//import 
const express = require('express');
const defaultControllers = require('../controllers/default.controllers');
const router = express.Router();

//insert request method
router.get('',defaultControllers.index);

//export
module.exports = router