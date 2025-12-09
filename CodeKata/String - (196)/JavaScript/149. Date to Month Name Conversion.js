const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {
    let v = userInput[0].trim();

    let vp = v.split("-");
    let p = vp[1];

    let pv = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    let vv = pv[Number(p) - 1];

    console.log(vv);

});