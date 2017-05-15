var express = require('express');
var bodyParser = require('body-parser');

const path = require('path');


var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.static(path.join(__dirname, '../client/public')));

app.get('/', (req, res)=>{
	res.sendFile(path.join(__dirname, '../client/public/index.html'));
})

app.listen(3000, function(){
	console.log('Listening on port 3000');
})