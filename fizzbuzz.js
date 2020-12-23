// Loop
function fizzBuzz(maxNum) {
    for (var i = 1; i <= maxNum; i++) {
        console.log(divisible(i));
    }
}
// Logic
function divisible(i) {
    if (i % 3 == 0 && i % 5 == 0) {
        return "fizzBuzz";
    }
    if (i % 3 == 0) {
        return "fizz";
    }
    if (i % 5 == 0) {
        return "Buzz";
    }
    return i.toString();
}
// Main
var maxNum;
var readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question('Please enter max number: ', function (maxNum) {
    fizzBuzz(maxNum);
    readline.close();
});
// let maxNum : number = parseInt(window.prompt("Please enter max number: "));
