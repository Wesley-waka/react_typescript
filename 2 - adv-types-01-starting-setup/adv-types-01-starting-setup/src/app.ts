// Code goes here!
type Employee = {
  name: string;
  privileges: string[];
};

type Colleague = {
  name: string;
  startDate: Date;
};

type CompetentEmployee = Employee & Colleague;

const el: CompetentEmployee = {
  name: "Wesley",
  privileges: ["doctor", "lawyer"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = string | boolean;

// function overloads
function add(a: string, b: string): string;
function add(a: number, b: string): string;
function add(a: number, b: number): number;
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add("Max", "Shwezz");
type Universal = Combinable & Numeric;

type HiredEmployee = Employee | Colleague;

function Hireable(emp: HiredEmployee) {
  if ("priviledges" in emp) {
    console.log("Priviledges " + emp.priviledges);
  }
  console.log("name:" + emp.name);
}

class Car {
  drive() {
    console.log("I am driving...");
  }
}

class Truck {
  drive() {
    console.log("I am driving...");
  }

  cargo() {
    console.log("I am loading...");
  }
}

type Drivable = Car | Truck;

function DriveIn(drv: Drivable) {
  if ("cargo" in drv) {
    drv.cargo();
  }
  console.log(drv.drive);
  //   if (drv instanceof Truck ) {
  //     drv.cargo();
  //   }
  console.log(drv.drive);
}

// Discriminated unions
interface Horse {
  type: "horse";
  runningSpeed: number;
}

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

type animal = Horse | Bird;

function character(anim: animal) {
  let speed;
  switch (anim.type) {
    case "bird":
      speed = anim.flyingSpeed;
      break;
    case "horse":
      speed = anim.runningSpeed;
  }
  console.log("Moving at speed: " + speed);
}

// type casting
character({ type: "horse", runningSpeed: 34 });
const entry = document.querySelector("input")! as HTMLInputElement;
// const entry = <HTMLInputElement> document.querySelector("input")!;
entry.value = "I love you";

// index properties
type ErrorContainer = {
  [props: string]: string;
};

const ErrorBag: ErrorContainer = {
  email: "wesleywaka77@gmail.com",
  username: "Wesley Waka",
};

// optional chaining
const fetchedUserData = {
  id: "u1",
  name: "Max",
  job: { title: "CEO", description: "My own company" },
};

console.log(fetchedUserData?.job?.title);

const userInput = undefined;

// nullish coalescing
const storedData = userInput ?? "Default";
console.log(storedData);
