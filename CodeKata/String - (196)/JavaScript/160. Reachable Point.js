const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const u = [];

inp.on("line", (d) => {
    u.push(d.trim());
});

inp.on("close", () => {

    let v = u[0].split(" ");
    let n = Number(v[0]);
    let m = Number(v[1]);

    let vp = [];

    for (let i = 1; i <= n; i++) {
        let p = u[i].split(" ");
        let a = Number(p[0]);
        let b = Number(p[1]);
        vp.push([a, b]);
    }

    vp.sort((x, y) => x[0] - y[0]);

    let pv = vp[0][0];
    let pp = vp[0][1];

    for (let i = 1; i < vp.length; i++) {
        let vv = vp[i][0];
        let pp2 = vp[i][1];

        if (vv <= pp + 1) {
            if (pp2 > pp) {
                pp = pp2;
            }
        }
    }

    if (m >= pv && m <= pp) {
        console.log("yes");
    } else {
        console.log("no");
    }

});