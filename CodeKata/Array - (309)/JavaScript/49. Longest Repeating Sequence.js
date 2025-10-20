const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {

    let v = userInput[0].split(" ");
    let p = userInput[1].split(" ");
    let vp = [];
    let pv = 0;

    for (let i = 0; i < p.length; i++) {
        if (!vp.includes(p[i])) {
            vp.push(p[i])
            let vv = p.filter(num => num == p[i]).length
            //   console.log(vv)
            if (Number(pv) < Number(vv)) {
                pv = vv
            }
        }
    }

    if (pv == 1) {
        console.log(-1)
    } else {
        console.log(pv)
    }

});
