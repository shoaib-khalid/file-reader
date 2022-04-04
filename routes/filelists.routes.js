//import 
const express = require('express');
const fileListControllers = require('../controllers/filelists.controllers');
const router = express.Router();
const checkAuth = require('../middleware/checkAuth.middleware');


//insert request method
router.get('/edit/*/:filepathname',checkAuth,fileListControllers.editFiles);
router.get('/edit/:filepathname',checkAuth,fileListControllers.editFiles);

// router.get('/*/:filepathname',checkAuth,fileListControllers.getOpenFiles);
router.get('/*/:filepathname',checkAuth,fileListControllers.getOpenFiles);
router.get('/:filepathname',checkAuth,fileListControllers.getOpenFiles);

router.post('/update/*/:filepathname',checkAuth,fileListControllers.updateFile);
router.post('/update/:filepathname',checkAuth,fileListControllers.updateFile);

//export
module.exports = router