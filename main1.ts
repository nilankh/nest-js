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

enum Color {Red, Green, Blue};
let c: Color = Color.Green;
console.log(c)


enum Color {Pink = 5, Black, Yellow};
let d: Color = Color.Black;
console.log(d)

// Any type
let randomValue: any = 10;
randomValue = true;
randomValue = 'Nilank';

let myVariable: any = 10;
console.log(myVariable.name);
myVariable();
myVariable.toUpperCase();

