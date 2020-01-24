module.exports = function(app) {
	
	app.get('/noticia', function(req, res){
	
		var connection = app.config.dbConnection();
		var noticiasModel = new app.app.models.NoticiasDAO(connection);

		noticiasModel.getNoticias(function(error, result){
			res.render("noticias/noticia", {noticia : result});
		});	
	});

};