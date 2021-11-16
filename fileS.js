//Importing the Required module
const fs = require('fs');

//Creating a file
fs.writeFile('example.txt', 'this is a text file', (err)=> {
    if (err){
        console.log(err)
    }
    else{
        console.log("File successfully created")
        fs.readFile('example.txt', 'utf8', (err, File)=> {
            if (err){
                console.log(err)
            }
            else{
                console.log(File)
            }
        })
    }
});

//Renaming the Required module
fs.rename('example.txt', 'example2.txt', (err)=> {
    if (err){
        console.log(err)      
    }
    else{
        console.log("Done")
    }
})


//Appending more data to the file
fs.appendFile('example2.txt', ', the data I want to append', (err)=> {
    if (err){
        console.log(err)      
    }
    else{
        console.log("Appended")
    }
})

//Deleting the specified the file
fs.unlink('example2.txt', (err)=> {
    if (err){
        console.log(err)      
    }
    else{
        console.log("Deleted")
    }
})