console.log("Hello NodeJS from TypeScript!");

function printName(name: string): string {
    return `Your name is: ${name}`;
}

console.log(printName("Alice"));