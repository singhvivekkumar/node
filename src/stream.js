const fs = require('fs');
const transformStream = require('stream');

let fileStream = fs.createReadStream(__dirname+ '/input.txt')
let outputStream = process.stdout;

let middleStream = new transformStream.Transform({
	transform(chunk, encoding, nextCallBack) {
		let modifiedChunk = chunk.toString().toUpperCase();
		this.push(modifiedChunk);
		setTimeout(() => {
			nextCallBack
		}, 2000);
	}
})

let newReadableStream = fileStream.pipe(middleStream);
newReadableStream.pipe(outputStream); 