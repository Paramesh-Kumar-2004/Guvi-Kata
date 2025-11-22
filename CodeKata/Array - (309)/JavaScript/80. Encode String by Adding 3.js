const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
    
    let v = userInput[0].split("");
    let p = "";

    for (let i of v) {

        let code = i.charCodeAt(0);

        if (code >= 65 && code <= 90) {

            let shift = ((code - 65 + 3) % 26) + 65;
            p += String.fromCharCode(shift);

        } else {
            p += i;
        }

    }

    console.log(p);
});