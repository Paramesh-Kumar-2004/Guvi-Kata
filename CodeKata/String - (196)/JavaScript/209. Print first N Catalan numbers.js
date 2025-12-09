const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {

    let N = parseInt(userInput[0]);

    function multiply(a, b) {
        a = a.split('').reverse();
        b = b.split('').reverse();
        let result = Array(a.length + b.length).fill(0);

        for (let i = 0; i < a.length; i++) {
            for (let j = 0; j < b.length; j++) {
                result[i + j] += Number(a[i]) * Number(b[j]);
                result[i + j + 1] += Math.floor(result[i + j] / 10);
                result[i + j] %= 10;
            }
        }

        while (result.length > 1 && result[result.length - 1] === 0) {
            result.pop();
        }

        return result.reverse().join('');
    }

    function add(a, b) {
        let res = "";
        let carry = 0;

        a = a.split('').reverse();
        b = b.split('').reverse();

        let len = Math.max(a.length, b.length);

        for (let i = 0; i < len; i++) {
            let x = i < a.length ? Number(a[i]) : 0;
            let y = i < b.length ? Number(b[i]) : 0;
            let sum = x + y + carry;

            res += (sum % 10);
            carry = Math.floor(sum / 10);
        }
        if (carry) res += carry;

        return res.split('').reverse().join('');
    }

    let C = Array(N + 1).fill("0");
    C[0] = "1";

    for (let i = 1; i <= N; i++) {
        let total = "0";

        for (let j = 0; j < i; j++) {
            let prod = multiply(C[j], C[i - 1 - j]);
            total = add(total, prod);
        }

        C[i] = total;
    }

    console.log(C.join(" "));
});