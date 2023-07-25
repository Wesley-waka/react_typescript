// import _ from "lodash";
// console.log(_.shuffle([1, 2, 3]));
import "reflect-metadata";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";

import { Product } from "./product.model";

const products = [
  { title: "A Carpet", price: 29.99 },
  { title: "A Book", price: 10.99 },
];

const newProd = new Product("", -5.99);
validate(newProd).then((errors) => {
  if (errors.length > 0) {
    console.log("VALIDATION ERRORS!");
    console.log(errors);
  } else {
    console.log(newProd.getInformation());
  }
});

// const p1 = new Product('A Book', 12.99);

// const loadedProducts = products.map(prod => {
//   return new Product(prod.title, prod.price);
// });

const loadedProducts = plainToClass(Product, products);

for (const prod of loadedProducts) {
  console.log(prod.getInformation());
}

enum StudentGender {
  male,
  female,
}

enum SchoolClass {
  class7,
  class8,
}

interface Student {
  gender: StudentGender;
  age: number;
  name: string;
  class: SchoolClass;
}

const student: Student = {
  gender: StudentGender.male,
  age: 14,
  name: "Wesley",
  class: SchoolClass.class8,
};
