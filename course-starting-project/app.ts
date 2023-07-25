function gen_error(message: string, code: number): never {
  throw { message: "the message is invalid", code: code };
}

let newNumber: unknown;
let anotherNumber: string;

newNumber = 3;
anotherNumber = "Wes";
function comparison(): void {
  if (typeof newNumber === "string") {
    newNumber = anotherNumber;
  }
}
