"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var isBeginner = true;
var total = 0;
var name = 'Nilank Nikhil';
var sentence = "My name is " + name + "\nI am a beginner in Typescript";
console.log(sentence);
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var person1 = ['Nilank', 22];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c);
(function (Color) {
    Color[Color["Pink"] = 5] = "Pink";
    Color[Color["Black"] = 6] = "Black";
    Color[Color["Yellow"] = 7] = "Yellow";
})(Color || (Color = {}));
var d = Color.Black;
console.log(d);
// Any type
var randomValue = 10;
randomValue = true;
randomValue = 'Nilank';
var myVariable = 10;
// console.log(myVariable.name);
// myVariable();
// myVariable.toUpperCase();
// let myVar: unknown = 10;
// function hasName(obj: any): obj is { name: string}{
//     return !!obj && typeof obj === "object" && "name" in obj
// }
// if(hasName(myVar)){
//     console.log(myVar.name);
// }
// (myVar as string).toUpperCase();
var a;
a = 10;
a = true;
var b = 20;
var multiType;
multiType = 20;
multiType = true;
function add(num1, num2) {
    return num1 + num2;
}
// If you want to keep optional to any value
function add1(num1, num2) {
    return num1 + num2;
}
function add2(num1, num2) {
    if (num2)
        return num1 + num2;
    else
        return num1;
}
function add3(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    return num1 + num2;
}
add3(5, 10);
add3(20);
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: 'Nilank',
    lastName: 'Nikhil'
};
fullName(p);
function fullNamee(person) {
    console.log(person.firstName + " " + person.lastName);
}
var q = {
    firstName: 'Nilank',
    lastName: 'Nikhil'
};
fullNamee(q);
function fullNameee(person) {
    console.log(person.firstName + " " + person.lastName);
}
var r = {
    firstName: 'Nilank'
};
fullNameee(r);
// Classes & AccessModifiers
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.eName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good morning " + this.eName);
    };
    return Employee;
}());
var emp1 = new Employee('Neel Punj');
console.log(emp1.eName);
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating task");
    };
    return Manager;
}(Employee));
var m1 = new Manager('Arpit');
m1.delegateWork();
m1.greet();
console.log(m1.eName);
