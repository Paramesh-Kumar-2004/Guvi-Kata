const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {

    let even = []
    let odd = []
    let vp = userInput[0].split("")

    for (let i of vp) {
        if (+i % 2 == 0) {
            even.push(i)
        }
        else {
            odd.push(i)
        }
    }
    even.sort()
    odd.sort()
    console.log(even.join(" "))
    console.log(odd.join(" "))

});