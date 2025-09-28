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
    let vp = userInput[1].split(" ")
    let FS = false
    let SS = false

    for (let i of vp.map(Number)) {
        if (FS > i) {
            SS = FS
            FS = i
        }
        else if (i > FS && i < SS) {
            SS = i;
        }
    }
    if (FS) {
        console.log(SS)
    }
    else {
        console.log(-1)
    }

});