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
    let vp = v.split("");

    let n = vp.length;

    let i = n - 2;
    while (i >= 0 && vp[i] >= vp[i + 1]) {
        i--;
    }

    if (i < 0) {
        console.log("impossible");
        return;
    }

    let j = n - 1;
    while (vp[j] <= vp[i]) {
        j--;
    }

    [vp[i], vp[j]] = [vp[j], vp[i]];

    let left = i + 1, right = n - 1;
    while (left < right) {
        [vp[left], vp[right]] = [vp[right], vp[left]];
        left++;
        right--;
    }

    console.log(vp.join(""));

});