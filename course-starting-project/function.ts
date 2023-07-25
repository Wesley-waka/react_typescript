// Function types
let Carrier: (a: number, b: number) => number;

function add(a: number, b: number) {
  return a + b;
}

function printResult(num: number): void {
  console.log("Result: " + num);
}

Carrier = add;
// Carrier = printResult;

// function types and callback

function addAndHandle(a: number, b: number, cb: (a: number) => void) {
  let result = a + b;
  cb(result);
}

addAndHandle(1, 2, (data) => {
  console.log(data);
});
