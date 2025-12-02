const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data.trim());
});

inp.on("close", () => {

    let N = Number(userInput[0]);
    let arr = userInput[1].split(" ").map(Number);
    let [U, V] = userInput[2].split(" ").map(Number);

    function Node(v) {
        this.v = v;
        this.l = null;
        this.r = null;
    }

    function insert(root, x) {
        if (root === null) return new Node(x);
        let t = root;
        while (true) {
            if (x < t.v) {
                if (t.l === null) {
                    t.l = new Node(x);
                    break;
                }
                t = t.l;
            } else {
                if (t.r === null) {
                    t.r = new Node(x);
                    break;
                }
                t = t.r;
            }
        }
        return root;
    }

    let root = null;

    for (let i = 0; i < N; i++) {
        root = insert(root, arr[i]);
    }

    function LCA(root, U, V) {
        let t = root;
        while (t !== null) {
            if (U < t.v && V < t.v) {
                t = t.l;
            } else if (U > t.v && V > t.v) {
                t = t.r;
            } else {
                return t.v;
            }
        }
        return -1;
    }

    console.log(LCA(root, U, V));
});
