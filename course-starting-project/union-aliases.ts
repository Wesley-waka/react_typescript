type person = {
  name: string;
  age: number;
};

const person = {
  name: "Wesley",
  age: 30,
};

enum Size {
  length = 23,
  width = 24,
  Height = "29",
}

type ShapeCombinator = "triangle" | "square";
type SizeCombinator = number | string;
const shape: {
  name: string;
  side: number;
  size: SizeCombinator;
  area: ShapeCombinator;
} = {
  name: "polygon",
  side: 23,
  size: Size.Height,
  area: "triangle",
};
