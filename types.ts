// console.log('Hello from Ts')
{
let myString: string;
let myNum: number;
let myBool: boolean;
let myVar: any;

/*
let strArr: string[];
let numArr: number[];
let boolArr: boolean[];
*/

let strArr: Array<string>;
let numArr: Array<number>;
let boolArr: Array<boolean>;

let strNumTuple: [string, number]

myString = 'Hello'.slice(0,3);
myNum = 1;
myBool = false;
myVar = true;

strArr = ['hello','world'];
numArr = [1,2,3];
boolArr = [true, false, true];

strNumTuple = ['Hello',4]

// let myVoid: void = null;
let myNull: null = null;
let myUndefined: undefined = null;

console.log(myVoid);
}