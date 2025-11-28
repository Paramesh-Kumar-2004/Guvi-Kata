const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {

    const v = userInput[0]
    let vp = []

    for (let i = v.length - 1; i >= 0; i--) {
        vp.push(v[i])
        // console.log(v[i])
    }

    console.log(vp.join(""));

});
