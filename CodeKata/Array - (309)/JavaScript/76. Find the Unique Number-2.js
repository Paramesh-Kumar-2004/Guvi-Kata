const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {

    let v = userInput[1].split(" ")
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
        if (pv == 1) {
            // vp = pv
            console.log(i)
            break
        }
    }

    //   console.log(vp == 1 ? 0 : vp)

});