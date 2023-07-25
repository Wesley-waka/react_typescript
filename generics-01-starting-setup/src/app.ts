// Code goes here!
const People: Array<string> = [];
const promise: Promise<number> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 2000);
});

// promise.then((data) => {
//   // data.split(' ');
// });

function merge<T extends object, U extends object>(objA: T, ObjB: U) {
  return Object.assign(objA, ObjB);
}

const mergedObj = merge({ name: "Wesley", hobbies: ["rugby"] }, { age: 19 });
console.log(mergedObj);

interface Lengthy {
  length: number;
}

function lengthWord<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "have no value";
  if (element.length === 1) {
    descriptionText = "have 1 element";
  } else if (element.length > 1) {
    descriptionText = "have" + element.length + "elements";
  }

  return [element, descriptionText];
}
console.log(lengthWord("I am coming"));

// keyof constraints
function extractAndConvert<T extends Object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "value: " + obj[key];
}

extractAndConvert({ name: "Wesley" }, "name");

// Generic classes
class DataStorage<T extends string | number | boolean> {
  private items: T[] = [];

  addItem(item: T) {
    return [...this.items, item];
  }

  removeItem(item: T) {
    if (this.items.indexOf(item) === -1) {
      return;
    }
    this.items.splice(this.items.indexOf(item), 1);
  }

  getItems() {
    return [...this.items];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Max");
textStorage.addItem("Manu");
textStorage.removeItem("Max");
console.log(textStorage.getItems());

// const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// const maxObj = {name: 'Max'};
// objStorage.addItem(maxObj);
// objStorage.addItem({name: 'Manu'});
// // ...
// objStorage.removeItem(maxObj);
// console.log(objStorage.getItems());

// Utility types
interface Descriptor {
  title: string;
  description: string;
  date: Date;
}

function keyIn(title: string, description: string, date: Date): Descriptor {
  let descriptor: Partial<Descriptor> = {};
  descriptor.title = title;
  descriptor.description = description;
  descriptor.date = date;
  return descriptor as Descriptor;
}

const names: Readonly<string[]> = ["Max", "Anna"];
// names.push("manu")
