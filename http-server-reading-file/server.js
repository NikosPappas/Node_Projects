let http=require('http');
let fs=require('fs');

const server=http.createServer((req,res)=>{
	fs.readFile('index.html',(error,data)=>{
		res.status=200;
		res.setHeader('Content-Type','text/html');
		res.write(data);
		return res.end();
	});
});
server.listen(3000,()=>{});
