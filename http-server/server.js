let http=require('http');

const server=http.createServer( function(req,res){
	res.statusCode=200;
	res.setHeader('Content-type','text/plain');
	res.end('Hello World!');
}).listen(3000,()=>{
   console.log('Server running at http://localhost:3000/');
});
