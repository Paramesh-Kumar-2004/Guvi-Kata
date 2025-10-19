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
    let p = userInput[1].split(" ")
    let vp = false

    // console.log(p)
    for (let i = 0; i < p.length; i++) {
        for (let j = i; j < p.length; j++) {
            // console.log(Number(p[i])+Number(p[j]),p[i],p[j])
            // console.log(Number(p[i])+Number(p[j]) == Number(v[0]),p[i],p[j])
            if (Number(p[i]) + Number(p[j]) == Number(v[1])) {
                vp = true
            }
        }
    }
    if (vp) {
        console.log("yes")
    }
    else {
        console.log("no")
    }

});