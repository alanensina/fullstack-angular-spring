import { Shape } from "./Shape";

export class Circle extends Shape {

    constructor(private _theX: number, private _theY: number, private _radius: number) {
        super(_theX, _theY);
    }

    public get radius(): number {
        return this._radius;
    }

    public set radius(value: number) {
        this._radius = value;
    }

    getInfo(): string {
        return super.getInfo() + `, radius = ${this._radius}`;
    }

    calculateArea(): number {
        return Math.PI * Math.pow(this._radius, 2);
    }
}