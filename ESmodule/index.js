import toggle, { searching } from "./searching.js";

// const search = require("./searching.js")

function printing() {
	console.log("this print");
}
printing();
// console.log(toggle, searching );

console.log(process.argv);
console.log(process.argv[2].split("").slice(3,5));

function readLine() {
	return inputString[currentLine++];
}

process.stdout.write("hiiiii")