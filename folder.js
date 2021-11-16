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

//Create a folder and a file to it
fs.mkdir('tutorial', (err)=>{
    if(err){
        console.log(err)
    }
    else{
        fs.writeFile('tutorial/tutorial_file.js', 'an example', (err)=>{
            if(err){
                console.log(err)
            }
            else{
                console.log("Folder created, file added")
            }
        })
    }
})