const readline = require('readline') 
const rl = readline.createInterface({input:process.stdin,
                         output:process.stdout});
let num1 = Math.floor((Math.random() * 10) + 1);
let num2 = Math.floor((Math.random() * 10) + 1);

let ans = num1 + num2

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