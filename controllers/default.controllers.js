//import
const fs = require('fs');
const dotenv = require('dotenv');
dotenv.config();

//controller method
const index = (req, res) => {

    //hardcode
    // getFiles('file-listing');

    //dynamic
    getFiles(process.env.FILE_DIRECTORY);

    var routerName =process.env.ROUTE_NAME;
    var editRoutePath =routerName+'/edit';
    var displayHeader = "This is an EJS page";
    res.render("index",{ header: displayHeader,fileList:arrFiles,routename:routerName,navigateEdit:editRoutePath}); 
}

// get file listing 
function getFiles (dir, files_){
    files_ = files_ || [];
    var files = fs.readdirSync(dir);

    for (var i in files){
        var name = dir + '/' + files[i];
        if (fs.statSync(name).isDirectory()){
            getFiles(name, files_);
        } else {
            files_.push(name);
        }
    }

    arrFiles = files_;
    return files_;
}


// export
module.exports = {
    index,
   
};