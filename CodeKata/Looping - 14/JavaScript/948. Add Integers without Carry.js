const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {
    let [a, b] = userInput[0].split(" ");

    a = a.split("").reverse().join("");
    b = b.split("").reverse().join("");

    let max_len = Math.max(a.length, b.length);

    a = a.padEnd(max_len, "0");
    b = b.padEnd(max_len, "0");

    let result = "";

    for (let i = 0; i < max_len; i++) {
        let digitSum = (parseInt(a[i]) + parseInt(b[i])) % 10;
        result = digitSum.toString() + result;
    }

    result = result.replace(/^0+/, "");

    console.log(result === "" ? "0" : result);
});