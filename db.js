const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/TasksDb', (err)=>{
    if(!err)
        console.log("connection succesfull");
    else
        console.log('Error in connection' + JSON.stringify(err,undefined,2));
}); 
module.exports = mongoose;