const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data.trim());
});

inp.on("close", () => {

    let v = userInput[0]
    let p = userInput[1].split(" ")
    // console.log(p)
    let vp = []

    for (let i = 0; i < p.length; i++) {
        let pv = 0
        for (let j = 0; j < i + 1; j++) {
            pv += (+p[j])
        }

        if (pv % 2 == 0) {
            vp.push(pv)
        }
        else {
            vp.push(p[i])
        }
    }
    console.log(vp.join(" "))

});
