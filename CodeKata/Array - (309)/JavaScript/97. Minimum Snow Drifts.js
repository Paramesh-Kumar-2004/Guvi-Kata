const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data.trim());
});

inp.on("close", () => {

    const n = parseInt(userInput[0]);
    const drifts = [];

    for (let i = 1; i <= n; i++) {
        const [x, y] = userInput[i].split(" ").map(Number);
        drifts.push([x, y]);
    }

    const visited = Array(n).fill(false);

    function connected(i, j) {
        return drifts[i][0] === drifts[j][0] || drifts[i][1] === drifts[j][1];
    }

    function dfs(i) {
        visited[i] = true;
        for (let j = 0; j < n; j++) {
            if (!visited[j] && connected(i, j)) {
                dfs(j);
            }
        }
    }

    let components = 0;
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            components++;
            dfs(i);
        }
    }

    const result = components - 1;

    console.log(result);
});
