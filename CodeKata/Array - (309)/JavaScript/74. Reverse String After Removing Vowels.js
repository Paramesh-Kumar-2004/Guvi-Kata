const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {

    let v = userInput[0].split("")
    let p = ["a", "e", "i", "o", "u"]
    const vp = v.filter((ele) => !p.includes(ele))

    console.log(vp.length === 0 ? -1 : vp.reverse().join(""))

});
