const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {
    
    let [v,p] = userInput[0].split(" ").map(Number)
    let vp = userInput[1].split(" ").slice(0,v).map(Number)
    let pv = userInput[1].split(" ").slice(v).map(Number)
    
    console.log()
   
});
