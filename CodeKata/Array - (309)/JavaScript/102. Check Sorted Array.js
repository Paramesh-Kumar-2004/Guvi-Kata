const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data.trim());
});

inp.on("close", () => {

    let v = userInput[1].split(" ").map(Number);

    let asc = [...v].sort((a, b) => a - b);
    let desc = [...v].sort((a, b) => b - a);

    function ArrayMatch(vp1, vp2) {
        if (vp1.length != vp2.length) return false
        for (let i = 0; i < vp1.length; i++) {
            if (vp1[i] != vp2[i]) {
                return false
            }
        }
        return true
    }

    if (ArrayMatch(v, asc) || ArrayMatch(v, desc)) {
        console.log("yes")
    }
    else {
        console.log("no")
    }


});