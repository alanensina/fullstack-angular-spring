import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myCircle = new Circle(20, 35, 7.5);
let myRectangle = new Rectangle(50, 60, 8, 4);

// declare an empty array of shapes
let theShapes: Shape[] = [];

// add the shapes to the array
theShapes.push(myCircle);
theShapes.push(myRectangle);

for (let shape of theShapes) {
    console.log(shape.getInfo());
    console.log(`Area = ${shape.calculateArea()}`);
    console.log();
}