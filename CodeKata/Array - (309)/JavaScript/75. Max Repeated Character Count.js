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
    let p = [...new Set(v)]
    //   console.log("V :",v)
    //   console.log("P :",p)
    let vp = 0

    for (let i of p) {
        let pv = 0
        for (let j of v) {
            if (i == j) {
                pv += 1
            }
        }
        // console.log(i,pv)
        if (vp <= pv) {
            vp = pv
        }
    }

    console.log(vp == 1 ? 0 : vp)

});