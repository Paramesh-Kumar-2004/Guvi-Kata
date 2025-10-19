const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {

    let v = userInput[0]
    let p = userInput[1].split(" ")
    let vp = userInput[2].split(" ")

    const pv = p.filter(ele => vp.includes(ele))

    if (pv.length < 1) {
        console.log(-1)
    }
    else {
        console.log(pv.join(" "))
    }

});