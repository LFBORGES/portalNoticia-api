module.exports = function(app) {
    var controller = app.controllers.comentario;

    app.post('/comentario', controller.inserir);
    app.get('/comentario', controller.buscarTodos);
    app.get('/comentario/:id', controller.buscarUm);
    app.put('/comentario/:id', controller.alterar);
    app.delete('/comentario/:id', controller.deletar);
    
    return app;
};