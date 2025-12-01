const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data.trim());
});

inp.on("close", () => {
    let N = parseInt(userInput[0]);
    let arr = userInput[1].split(" ").map(Number);

    let stars = [];
    let maxRight = -Infinity;

    for (let i = N - 1; i >= 0; i--) {
        if (arr[i] > maxRight) {
            stars.push(arr[i]);
        }
        maxRight = Math.max(maxRight, arr[i]);
    }

    stars.reverse();

    console.log(stars.join(" "));

    let maxLeft = -Infinity;
    let superStars = [];

    for (let i = 0; i < N; i++) {
        if (arr[i] > maxLeft && stars.includes(arr[i])) {
            superStars.push(arr[i]);
        }
        maxLeft = Math.max(maxLeft, arr[i]);
    }

    console.log(superStars.join(" "));
});