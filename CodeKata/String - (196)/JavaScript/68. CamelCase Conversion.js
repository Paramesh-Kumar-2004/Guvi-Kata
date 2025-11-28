const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data.trim());
});

inp.on("close", () => {

    const v = userInput[0].split(" ");
    vp = []

    for (let i of v) {
        pv = ""
        for (let j = 0; j < i.length; j++) {
            if (j == 0) {
                pv += i[j].toUpperCase()
            }
            else {
                pv += i[j]
            }
        }
        vp.push(pv)
    }
    console.log(vp.join(""))
});
