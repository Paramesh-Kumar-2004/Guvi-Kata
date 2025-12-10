const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data.trim());
});

inp.on("close", () => {

    let s = userInput[0].split("");
    let n = s.length;

    let i = n - 2;
    while (i >= 0 && s[i] >= s[i + 1]) {
        i--;
    }

    if (i < 0) {
        console.log("-1");
        return;
    }

    let j = n - 1;
    while (s[j] <= s[i]) {
        j--;
    }

    [s[i], s[j]] = [s[j], s[i]];

    let left = i + 1, right = n - 1;
    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }

    console.log(s.join(""));
});
