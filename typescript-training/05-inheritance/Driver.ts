import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myShape = new Shape(10, 15);
console.log(`Shape: ${myShape.getInfo()}`);

let myCircle = new Circle(20, 35, 7.5);
console.log(`Circle: ${myCircle.getInfo()}`);

let myRectangle = new Rectangle(50, 60, 8, 4);
console.log(`Rectangle: ${myRectangle.getInfo()}`);