// My Code 

const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {

    let v = userInput[0]
    let p = userInput[1].split(" ")
    let count = p.filter((num) => num === '0').length
    //   console.log(count)

    if (p[0] == '0' && count == 2) {
        console.log(-1)
    }
    else if (count <= 1) {
        console.log(-1)
    }
    else {
        let vp = 0
        let pv = []
        for (let i = 0; i < p.length; i++) {
            if (p[i] === '0' && i != 0) {
                vp += 1
                pv.push(i)
            }
        }

        //   console.log("Index :",pv)
        let result = []

        //   console.log(pv)
        for (let j = 0; j <= pv[0]; j++) {
            if (p[j] != '0') {
                //   console.log("Result :",p[j])
                result.push(p[j])
            }
        }

        console.log(result.join(" "))
    }

});






// // Online Ref
// const readline = require("readline");

// const inp = readline.createInterface({
//     input: process.stdin
// });

// const userInput = [];

// inp.on("line", (data) => {
//     userInput.push(data);
// });

// inp.on("close", () => {
//     let N = parseInt(userInput[0]);
//     let arr = userInput[1].split(" ");

//     let firstZero = arr.indexOf('0');
//     let secondZero = arr.indexOf('0', firstZero + 1);

//     if (firstZero === -1 || secondZero === -1) {
//         console.log(-1);
//         return;
//     }

//     let result = arr.slice(firstZero + 1, secondZero);

//     if (result.length === 0) {
//         console.log(-1);
//     } else {
//         console.log(result.join(" "));
//     }
// });