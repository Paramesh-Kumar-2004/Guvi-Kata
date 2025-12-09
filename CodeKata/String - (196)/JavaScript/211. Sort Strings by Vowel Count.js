const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data.trim());
});

inp.on("close", () => {

    let v = +userInput[0];
    let p = "aeiouAEIOU"
    let vp = []

    for (let i = 1; i <= v; i++) {
        let count = 0
        for (let j of userInput[i]) {
            if (p.includes(j)) {
                count += 1
                // console.log(userInput[i], p.includes(j),j)
            }
        }
        vp.push([userInput[i], count])
    }

    vp.sort((a, b) => b[1] - a[1])
    vp.forEach(ele => {
        console.log(ele[0])
    })

});
