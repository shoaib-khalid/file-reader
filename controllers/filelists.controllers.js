//import
const fs = require('fs');
var mime = require('mime');
var FroalaEditor = require('../node_modules/wysiwyg-editor-node-sdk/lib/froalaEditor.js');
const dotenv = require('dotenv');
dotenv.config();

//controller method

const editFiles = (req,res) =>{
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    var reqOriUrl = req.originalUrl;
    //hardcode
    // var pathDirectoryFile = reqOriUrl.replace("/file-listing/edit", "file-listing");

    //dynamic
    var dynamicroute = process.env.ROUTE_NAME;
    var pathDirectoryFile = reqOriUrl.replace('/'+dynamicroute+'/edit', '');
    var parentfolder = process.env.FILE_DIRECTORY;
    var pathfile = parentfolder+pathDirectoryFile;
    fs.readFile(pathfile, function(err, data) {
        if (err) throw err // Fail if the file can't be read.
            if(mime.getType(pathfile) !== 'image/jpeg'&& mime.getType(pathfile) !=='image/png'){
                var routerName =process.env.ROUTE_NAME;            
                var stringEditPath =routerName+'/edit';
                var stringUpdatePath =routerName+'/update';

                res.render("viewfile",{displayData:data.toString(),url:fullUrl,editstring:stringEditPath,updatestring:stringUpdatePath,message:''});
                // res.render("viewfile",{ header: displayHeader,fileList:arrFiles}); 
            }
            else {
                //text/html , application/javascript, image/jpeg, image/png
                 res.send("Cannot edit image");
            }
    })

}
const getOpenFiles = (req, res) => {

    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    var reqOriUrl = req.originalUrl;
    //hard code
    // var pathDirectoryFile = reqOriUrl.replace("/file-listing", "file-listing");

    //dynamic
    var dynamicroute = process.env.ROUTE_NAME;
    var pathDirectoryFile = reqOriUrl.replace('/'+dynamicroute, '');
    var parentfolder = process.env.FILE_DIRECTORY;
    var pathfile = parentfolder+pathDirectoryFile;

    fs.readFile(pathfile, function(err, data) {
        if (err) throw err // Fail if the file can't be read.
    
            res.writeHead(200, {'Content-Type': mime.getType(pathDirectoryFile)})//text/html , application/javascript, image/jpeg, image/png
            res.end(data) // Send the file data to the browser.
    });
}

const updateFile = (req, res) =>{
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    var reqOriUrl = req.originalUrl;

    if (typeof window !== 'undefined') {
        console.info('You are on the browser')
    } else {
        console.info('You are on the server')
    }

    var data = req.body.form_data;

    // var stripedHtml = data.replace(/<[^>]+>/g, '');
    //hardcode
    // var pathDirectoryFile = reqOriUrl.replace("/file-listing/update", "file-listing");

    //dynamic
    var dynamicroute = process.env.ROUTE_NAME;
    var pathDirectoryFile = reqOriUrl.replace('/'+dynamicroute+'/update', '');
    var parentfolder = process.env.FILE_DIRECTORY;
    var pathfile = parentfolder+pathDirectoryFile;

    fs.writeFile(pathfile, data, (err) => {
    if (err) console.error(err);
        var routerName =process.env.ROUTE_NAME;            
        var stringEditPath =routerName+'/edit';
        var stringUpdatePath =routerName+'/update';
        res.render("viewfile",{displayData:data.toString(),url:fullUrl,editstring:stringEditPath,updatestring:stringUpdatePath,message:'Successfully Written to File.'});

    });
}


// export
module.exports = {
    editFiles,
    getOpenFiles,
    updateFile
 
   
};