const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data.trim());
});

inp.on("close", () => {

    let v = Number(userInput[0]);
    let vp = userInput[1].split(" ");

    vp.sort((a, b) => {
        let ab = a + b;
        let ba = b + a; if (ab > ba) return -1;
        if (ab < ba) return 1;
        return 0;
    });

    if (vp[0] === "0") {
        console.log("0");
        return;
    }

    console.log(vp.join(""));
});