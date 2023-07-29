const axios = require('axios');

// console.log(require)

// axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=fe90cce7')
// .then( (response) => {
// 		console.log(response.data);
// 	})
	
async function fetch() {
	const response = await axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=fe90cce7');
	console.log(response?.data);
}
fetch();
	
// async function details() {
// 	const data = await fetch('http://www.omdbapi.com/?i=tt3896198&apikey=fe90cce7');
// 	const jsonData = await data.json();
// 	console.log(jsonData);
// }
// details();
