var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.locals.root_path = __dirname;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// app.error = function(mgs,code) {
//         return {
//             'mgs':(!!msg)?msg:'page not found!',
//             'code':(!!code)?code:'404'
//         }
//     }
// Router
require('./server/config/routes')(app);

app.listen(3000,function() {
	console.log('http://localhost:3000');
});