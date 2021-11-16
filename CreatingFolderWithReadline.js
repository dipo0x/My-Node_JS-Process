const readline = require('readline') 
const fs = require('fs')
const rl = readline.createInterface({input:process.stdin,
                         output:process.stdout});

rl.question("Input the name of the folder to be created\n", (userInput)=>
    {
        fs.mkdir(userInput, (err)=>{
        if (err){
            console.log(err)
        }
        else{
            console.log("Created sir")
        }
    })
    rl.close()
})