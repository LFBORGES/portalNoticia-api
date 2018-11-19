module.exports = function(app) {
    var controller = app.controllers.arquivo;

    app.post('/arquivo', controller.inserir);
    app.get('/arquivo', controller.buscarTodos);
    app.get('/arquivo/:id', controller.buscarUm);
    app.put('/arquivo/:id', controller.alterar);
    app.delete('/arquivo/:id', controller.deletar);
    
    return app;
};