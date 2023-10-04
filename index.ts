import inquirer from "inquirer";

    interface anstype {
        userpid: string,
        userpin: number,
        accountType: string,
        transactionType: string,
        amount: number
    }

let answer: anstype = await inquirer.prompt ([
    {
        type: "input",
        name: "userid",
        message: "kindly Enter your id:"

},
{
    type: "number",
    name: "userpin",
    message: "kindly Enter Your pin:"

},
{
    type: "list",
    name: "accountType",
    choices: ["Current", "Saving"],
    message:"Select Your AccountType:",
        
      
},
{
    type: "list",
    name: "transactionType",
    choices: ["FastCash", "withdrew"],
    message:"Select Your AccountType:",
    when(answers) {
        return answers.accountType
    },
},
{
    type: "list",
    name: "Amount",
    choices: [1000, 2000, 10000, 20000],
    message:"Select Your Amount:",
    when(answers) {
        return answers.transactionType === "FastCash"
    },
}, Math.random ()  * 1000000
 
{
    type: "number",
    name: "Amount",
    choices: [1000, 2000, 10000, 20000],
    message:"Enter Your Amount:",
    when(answers) {
        return answers.transactionType === "FastCash"
    },
}
])
    if(answer.userpid && answer.userpin) {
        const Balance =Math.floor ( Math.random ()  * 1000000)
        console.log(Balance)
        const EnterdAmounr = answer.amount;
        if (Balance >= EnterdAmounr){
              const remianing =   Balance - EnterdAmounr;
              console .log ("Your remianing Balance Is ", remianing)
        } else{
            console.log ("Insuficient Balance")
        }
    }





