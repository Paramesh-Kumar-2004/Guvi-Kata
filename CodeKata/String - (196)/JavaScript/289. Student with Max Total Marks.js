const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data.trim());
});

inp.on("close", () => {

    let maxMarks = -1;
    let student = "";

    for (let i = 0; i < userInput.length; i++) {
        let parts = userInput[i].split("#");
        let name = parts[0];
        let total = Number(parts[1]) + Number(parts[2]) + Number(parts[3]);

        if (total > maxMarks) {
            maxMarks = total;
            student = name;
        }
    }

    console.log(student);

});
