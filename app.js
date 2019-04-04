const http = require('http');
const moduleOne = require('./lb.js');
const fs = require('fs');
// const server = http.createServer((req,res)=>{
//   res.statusCode = 200;
//   res.setHeader('Content-Type','text/html');
//   res.end('<h1>Hello Nodejs</h1>');
// });
// server.listen(moduleOne.port,()=>{
//   console.log(`Server running at :${moduleOne.port}/`);
//   moduleOne.show();
// });
function onRequest(req,res){
  fs.readFile('./test1/demo.html',(err,data)=>{
    if(err){
      res.writeHead(400);
      res.write('File not Found!');
    } else{
      res.write(data);
    }
    res.end();
  })
};
http.createServer(onRequest).listen(8080);
