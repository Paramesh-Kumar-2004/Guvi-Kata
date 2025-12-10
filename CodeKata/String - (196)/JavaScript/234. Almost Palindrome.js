const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data.trim());
});

inp.on("close", () => {

    let v = userInput[0];
    let n = v.length;

    function isPalindrome(s, left, right) {
        while (left < right) {
            if (s[left] !== s[right]) return false;
            left++;
            right--;
        }
        return true;
    }

    let i = 0;
    let j = n - 1;
    let res = "YES";

    while (i < j) {
        if (v[i] !== v[j]) {
            if (isPalindrome(v, i + 1, j) || isPalindrome(v, i, j - 1)) {
                res = "YES";
            } else {
                res = "NO";
            }
            break;
        }
        i++;
        j--;
    }

    console.log(res);

});