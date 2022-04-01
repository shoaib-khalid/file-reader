//import


//controller method
const index = (req, res) => {
    arrNames = ['Iman', 'Nazirah'];
    res.render("homeindex",{nameList:arrNames}); 
}



// export
module.exports = {
    index,
   
};