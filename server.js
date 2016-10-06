// Dev Server
var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config');

var app = express();
var compiler = webpack(config);

// Apply Middleware
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('*', function(request, response) {
  response.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, 'localhost', function(error) {
	if (error) {
		console.log('Experienced an error:\n' + error);
		return;
	}
	console.log('\n\n---------------------------------------------------'
		+ '\nListening at http://localhost:3000'
		+ '\nOpen up your browser and go to the address to view the app.'
		+ '\n---------------------------------------------------');
});
