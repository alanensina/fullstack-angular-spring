"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var myCircle = new Circle_1.Circle(20, 35, 7.5);
var myRectangle = new Rectangle_1.Rectangle(50, 60, 8, 4);
// declare an empty array of shapes
var theShapes = [];
// add the shapes to the array
theShapes.push(myCircle);
theShapes.push(myRectangle);
for (var _i = 0, theShapes_1 = theShapes; _i < theShapes_1.length; _i++) {
    var shape = theShapes_1[_i];
    console.log(shape.getInfo());
    console.log("Area = " + shape.calculateArea());
    console.log();
}
