module.exports = function(app) {
    var controller = app.controllers.usuario;

    app.post('/usuario', controller.inserir);
    app.get('/usuario', controller.buscarTodos);
    app.get('/usuario/:id', controller.buscarUm);
    app.put('/usuario/:id', controller.alterar);
    app.delete('/usuario/:id', controller.deletar);
    
    return app;
};