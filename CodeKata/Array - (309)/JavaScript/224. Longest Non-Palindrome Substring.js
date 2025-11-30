const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data.trim());
});

inp.on("close", () => {

    function isPalindrome(s) {
        return s === s.split("").reverse().join("");
    }

    userInput.forEach(str => {
        if (!isPalindrome(str)) {
            console.log(str);
        } else {
            let temp = str;
            while (isPalindrome(temp)) {
                temp = temp.slice(0, -1);
            }
            console.log(temp);
        }

    });

});