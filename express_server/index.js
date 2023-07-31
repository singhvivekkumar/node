const express = require('express');
const PORT = 3000;

const app = express();

app.get('/', function (request, response) {
	response.send('hello world');
})

app.listen(PORT, function () {
	console.log("Server is started on", PORT);
})