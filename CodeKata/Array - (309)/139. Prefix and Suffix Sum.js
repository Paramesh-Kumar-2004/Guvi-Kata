const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {

    let v = +userInput[0]
    let p = userInput[1].split(" ").map(Number)
    let vp1 = []
    let vp2 = []

    let vv = []

    // Prefix
    for (let i = 0; i < v; i++) {
        let pv1 = 0
        for (let j = 0; j <= i; j++) {
            pv1 += p[j]
        }
        vp1.push(pv1)
    }

    // Suffix
    for (let i = 0; i < v; i++) {
        let pv2 = 0
        for (let j = i; j < v; j++) {
            pv2 += p[j]
        }
        vp2.push(pv2)
    }

    // Prefix + Suffix
    for (let i = 0; i < vp1.length; i++) {
        vv.push(vp1[i] + vp2[i])
    }

    console.log(vv.join(" "))

});
