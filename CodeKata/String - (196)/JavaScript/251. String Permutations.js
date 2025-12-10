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
    let p = v.length;
    let vp = v.split("");
    let pv = 0;
    let vv = 0;
    let pp = 0;

    function permute(l, r) {
        if (l === r) {
            console.log(vp.join(""));
        } else {
            let used = new Set();
            for (let i = l; i <= r; i++) {
                if (used.has(vp[i])) continue;
                used.add(vp[i]);

                [vp[l], vp[i]] = [vp[i], vp[l]];
                permute(l + 1, r);
                [vp[l], vp[i]] = [vp[i], vp[l]];
            }
        }
    }

    permute(0, p - 1);

});
