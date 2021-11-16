//Importing the Required module
const fs = require('fs');

//Create folder
fs.mkdir('tutorial', (err)=>{
    if(err){
        console.log(err)
    }
    else{
        //Delete folder
        fs.rmdir('tutorial', (err)=>{
            if(err){
                console.log(err)
            }
            else{
                console.log("Deleted")
            }
        })
    }
})