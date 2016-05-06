var express = require('express');
var load = require('express-load');

module.exports = function() {

	var app = express();

	app.set('view engine', 'ejs');
	app.set('views', './app/views');

	load('routes', {cwd: 'app'})//cwd:'app' indica que o node deve procurar a rota direto em app e não procurar em todas as pastas.
		.then('infra')
		.into(app);

	return app;
};
