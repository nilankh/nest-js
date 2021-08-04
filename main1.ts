export {};
let isBeginner: boolean = true;
let total: number = 0;
let name: string = 'Nilank Nikhil';

let sentence: string = `My name is ${name}
I am a beginner in Typescript`;

console.log(sentence);

let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;

let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

let person1: [string, number] = ['Nilank', 22];

enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;
console.log(c);

enum Color {
  Pink = 5,
  Black,
  Yellow,
}
let d: Color = Color.Black;
console.log(d);

// Any type
let randomValue: any = 10;
randomValue = true;
randomValue = 'Nilank';

let myVariable: any = 10;
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

let a;
a = 10;
a = true;

let b = 20;

let multiType: number | boolean;
multiType = 20;
multiType = true;

function add(num1: number, num2: number): number {
  return num1 + num2;
}

// If you want to keep optional to any value
function add1(num1: number, num2?: number): number {
  return num1 + num2;
}

function add2(num1: number, num2?: number): number {
  if (num2) return num1 + num2;
  else return num1;
}

function add3(num1: number, num2: number = 10): number {
  return num1 + num2;
}
add3(5, 10);
add3(20);

function fullName(person: { firstName: string; lastName: string }) {
  console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
  firstName: 'Nilank',
  lastName: 'Nikhil',
};

fullName(p);

interface Person {
  firstName: string;
  lastName: string;
}
function fullNamee(person: Person) {
  console.log(`${person.firstName} ${person.lastName}`);
}

let q = {
  firstName: 'Nilank',
  lastName: 'Nikhil',
};

fullNamee(q);

// properties can be optional too
interface Personn {
  firstName: string;
  lastName?: string;
}
function fullNameee(person: Personn) {
  console.log(`${person.firstName} ${person.lastName}`);
}

let r = {
  firstName: 'Nilank',
};

fullNameee(r);


// Classes & AccessModifiers
class Employee{
    eName: string;
    constructor(name: string){
        this.eName = name;
    }
    greet(){
        console.log(`Good morning ${this.eName}`);
    }
}
let emp1 = new Employee('Neel Punj');
console.log(emp1.eName);
emp1.greet();

class Manager extends Employee{
    constructor(managerName: string){
        super(managerName);
    }

    delegateWork(){
        console.log(`Manager delegating task`);
    }
}

let m1 = new Manager('Arpit');
m1.delegateWork();
m1.greet();
console.log(m1.eName);