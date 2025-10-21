console.log("Hello NodeJS from TypeScript!");

function printName(name: string): string {
    return `Your name is: ${name}`;
}

console.log(printName("Alice"));

// basic types, we usuaally specify types explicitly in TypeScript
let age: number = 30;
let firstName: string = "Bob";
let isDone: boolean = false;
let nums: number[] = [1, 2, 3, 4, 5]; // array of numbers

// alternative syntax for array 
let veggies: Array<string> = ["carrot", "broccoli", "spinach"]; // array of strings

let randomValue: any = 10; // can be of any type ; its better to avoid 'any' type when possible

let xyz: undefined = undefined; // variable of type undefined
let n: null = null; // variable of type null

enum Color {
    Red,
    Green,
    Blue
}

let c: Color = Color.Green; // accepts only values from Color enum

let tup: [string, number]; // tuple type
tup = ["hello", 10]; // correct assignment

// interfaces and types

interface User {
    name: string;
    age: number;
    email?: string; // optional property : may or may not be present
    readonly createdAt: Date; // readonly property ; cannot be changed after initialization
}

const user1: User = {
    name: "Charlie",
    age: 25,
    createdAt: new Date()
}

// type alias
type Point = {
    x: number;
    y: number;
}

const p1: Point = { x: 10, y: 20 };

// the difference between interface and type is that interfaces can be extended and merged, while types cannot

// functions with types

function add(a: number, b: number): number {
    return a + b;
}

const multiply = (a: number, b: number): number => a * b;

function greet(name: string, greeting?: string): string {
    return `${greeting || "Hello"}, ${name}!`;
}