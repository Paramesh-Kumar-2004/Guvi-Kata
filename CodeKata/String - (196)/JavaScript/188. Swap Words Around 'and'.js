const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data.trim());
});

inp.on("close", () => {

    let v = userInput[0].split(" ")
    let p = []

    for (let i = 0; i < v.length; i++) {
        if (v[i] == "and" && i > 0 && i < v.length - 1) {
            let vp = v[i - 1]
            let pp = v[i + 1]
            p[p.length - 1] = pp
            p.push("and")
            p.push(vp)
            i++
        }
        else {
            p.push(v[i])
        }
    }

    console.log(p.join(" "))

});