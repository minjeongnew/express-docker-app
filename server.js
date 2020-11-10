const express = require("express");

const app = express();

const port = 3000;
var url = require('url');
const funcPrimeNumberModule = require("./prime_number"); 
app.get('/', function(req, res){
    res.send('<h1>'+req.query.input+': The largest prime factor is '+funcPrimeNumberModule.funcPrimeNumber(req.query.input)+'</h1>');
})

app.listen(port);
console.log("server is running:");
