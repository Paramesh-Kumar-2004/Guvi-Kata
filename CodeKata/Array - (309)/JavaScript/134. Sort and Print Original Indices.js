const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {

    const v = Number(userInput[0]);
    const p = userInput[1].split(" ").map(Number);

    let vp = [...p]
    vp.sort((a, b) => a - b)

    let pv = []
    // console.log(vp,p)

    for (let i of vp) {
        pv.push(p.indexOf(i) + 1)
        // console.log(i,p.indexOf(i)+1)
    }

    console.log(pv.join(" "))

});
