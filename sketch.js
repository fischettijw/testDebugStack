// Call STACK demo

function multiply(a, b) {
    let xx = 7;
    return a * b;
}

function square(n) {
    let xx = 6;
    return multiply(n, n);
}

function printSquare(s) {
    let xx = 5;
    let squared = square(s);
    console.log(squared);
}

let abc = 78;
console.clear();
printSquare(4);