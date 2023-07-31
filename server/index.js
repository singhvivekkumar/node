const httpModule = require("http");

const PORT = 3000;

const httpServer = httpModule.createServer( function exeCB( request , response){
	console.log(request.method);
	if (request.url == '/home') {
		response.end("this is home");
	} else if (request.url == '/faq') {
		response.end("this is faq");
	} else {
		response.end("this is end");
	}
});

httpServer.listen(PORT , function process(){
	console.log("server started on port", PORT) ;
})