//import 
const express = require('express');
const fileListControllers = require('../controllers/filelists.controllers');
const router = express.Router();

//insert request method
router.get('/edit/*/:filepathname',fileListControllers.editFiles);
router.get('/edit/:filepathname',fileListControllers.editFiles);

router.get('/*/:filepathname',fileListControllers.getOpenFiles);
router.get('/:filepathname',fileListControllers.getOpenFiles);

router.post('/update/*/:filepathname',fileListControllers.updateFile);
router.post('/update/:filepathname',fileListControllers.updateFile);

//export
module.exports = router