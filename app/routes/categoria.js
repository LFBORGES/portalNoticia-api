module.exports = function(app) {
    var controller = app.controllers.categoria;

    app.post('/categoria', controller.inserir);
    app.get('/categoria', controller.buscarTodos);
    app.get('/categoria/:id', controller.buscarUm);
    app.put('/categoria/:id', controller.alterar);
    app.delete('/categoria/:id', controller.deletar);
    
    return app;
};