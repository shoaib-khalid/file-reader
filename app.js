//================== Import
var app = require("express")(); 
var express = require('express');
var path = require('path');


var bodyParser = require("body-parser"); 
const port = 3000;
const dotenv = require('dotenv');
dotenv.config();

var fileListRouter = require('./routes/filelists.routes');
var defaultRouter = require('./routes/default.routes');
var homeRouter = require('./routes/home.routes');


var FroalaEditor = require('wysiwyg-editor-node-sdk/lib/froalaEditor');

//Set view engine to ejs
app.set("view engine", "ejs"); 

//Tell Express where we keep our index.ejs
app.set("views", __dirname + "/views"); 

//Use body-parser
app.use(bodyParser.urlencoded({ extended: false })); 

// ===================== List of Route
// app.get('/home', (req, res) => {res.send('Home')})
app.use('/', defaultRouter);
app.use('/'+process.env.ROUTE_NAME, fileListRouter);
//  app.use('/file-listing', fileListRouter);

/* New Route to the TinyMCE Node module */
app.use('/tinymce', express.static(path.join(__dirname, 'node_modules', 'tinymce')));

app.use('/microlight', express.static(path.join(__dirname, 'node_modules', 'microlight')));

app.use('/monaco-editor', express.static(path.join(__dirname, 'node_modules', 'monaco-editor')));


// =====================  listen port  
app.listen(port, () => {
  // console.info(`Example app listening on port ${port}`)
})

