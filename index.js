const express = require('express');
const http = require('http');
const logger = require('morgan');

const app = express();

const server = http.createServer(app);

app.use(logger('dev'));

app.use('/', (req, res, next) => {
	res.send('Hello World!');
});

server.listen(3000, (err) => {
	if (err){
		console.log(err);
	} else {
		console.log('Server listening...');
	}
});