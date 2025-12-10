const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data.trim());
});

inp.on("close", () => {

    let [s1, s2] = userInput[0].split(" ");

    function multiplyStrings(num1, num2) {
        if (num1 === "0" || num2 === "0") return "0";

        let n1 = num1.split('').reverse();
        let n2 = num2.split('').reverse();
        let res = new Array(n1.length + n2.length).fill(0);

        for (let i = 0; i < n1.length; i++) {
            for (let j = 0; j < n2.length; j++) {
                let mul = Number(n1[i]) * Number(n2[j]);
                res[i + j] += mul;
                res[i + j + 1] += Math.floor(res[i + j] / 10);
                res[i + j] %= 10;
            }
        }

        while (res.length > 1 && res[res.length - 1] === 0) res.pop();

        return res.reverse().join('');
    }

    console.log(multiplyStrings(s1, s2));

});
