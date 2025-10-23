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
    let p = v.split(" ");
    let vp = p.map(words => {
        if (words.length <= 2) return words;
        let middle = words.slice(1, -1).split("").reverse().join("")
        return words[0] + middle + words[words.length - 1]
    })

    console.log(vp.join(" "))

});
