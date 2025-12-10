const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line) => {
    input.push(line.trim());
});

rl.on('close', () => {

    let [L, R, N] = input[0].split(' ').map(Number);

    const target = String(N);
    let count = 0;

    for (let i = L; i <= R; i++) {
        if (String(i).includes(target)) {
            count++;
        }
    }

    console.log(count);
});