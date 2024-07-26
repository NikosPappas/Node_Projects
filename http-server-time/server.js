let http=require('http');
let fs=require('fs');

const server=http.createServer((req,res)=>{
	fs.readFile('index.html',(error,data)=>{
	res.statusCode=200;
	res.setHeader=('Content-Type','text/plain');
	res.write(data);
	res.end();
	});
});
server.listen(3000,()=>{});
