const readline = require('readline') 
const rl = readline.createInterface({input:process.stdin,
                         output:process.stdout});

//Random number 
let num1 = Math.floor((Math.random() * 10) + 1);
let num2 = Math.floor((Math.random() * 10) + 1);

//You gerrit, if you don't gerrit, forget abourit
let ans = num1 + num2

//To be shown on screen
rl.question(`What is ${ num1 } + ${num2}?`, 
(userInput) => {if(userInput == ans)
    {
        rl.close()
    }
    else{
        rl.setPrompt("Incorrect daddy wa, please try again\n")
        rl.prompt()
    }
})

rl.on('close', ()=>{
    console.log("Correct")
})

rl.on('line', (userInput) => 
    {
        if(userInput ==ans) {
            rl.close()
        }
        else{
            rl.setPrompt(`Your  answer of ${userInput} is wrong sir, please try again\n`)
            rl.prompt()
        }
    }
)