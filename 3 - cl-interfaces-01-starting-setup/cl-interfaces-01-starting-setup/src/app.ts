// type AddFunc= (a: number, b: number) => number;

// function interface
interface AddFunc {
  (a: number, b: number): number;
}

let add: AddFunc;

interface Named {
  readonly name?: string;
  outputName?: string;
}

interface Greetable extends Named {
  //   readonly name: string;
  greet(phrase: string): void;
}

// interface Person {
//   name: string;
//   age: number;

//   greet(phrase: string): void;
// }

class Person implements Greetable {
  name?: string;
  age = 30;
  constructor(n?: string) {
    this.name = n;
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + " " + this.name);
    } else {
      console.log("Hi!");
    }
  }
}

let user1: Greetable;
user1 = new Person("");
// user1 = {
//   name: "Wesley",
//   age: 12,
//   greet(phrase: string) {
//     console.log(phrase + " " + this.name);
//   },
// };

user1.greet("Hi there - I am");
console.log(user1.name);
