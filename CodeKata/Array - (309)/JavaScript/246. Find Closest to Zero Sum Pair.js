const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const p = [];

inp.on("line", (d) => {
    p.push(d.trim());
});

inp.on("close", () => {

    let v = +p[0];
    let vp = p[1].split(" ").map(Number);

    vp.sort((a, b) => a - b);

    let pv = 0;
    let vv = v - 1;

    let pp = Infinity;
    let pa = vp[pv], pb = vp[vv];

    while (pv < vv) {

        let s = vp[pv] + vp[vv];

        if (Math.abs(s) < Math.abs(pp)) {
            pp = s;
            pa = vp[pv];
            pb = vp[vv];
        }

        if (s === 0) break;
        else if (s < 0) pv++;
        else vv--;
    }

    console.log(pa + " " + pb);
});