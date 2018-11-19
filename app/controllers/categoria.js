module.exports = function (app) {
    var Categoria = app.models.categoria;
    var controller = {};

    controller.inserir = function (req, res) {

        Categoria.create(req.body, function (erro, data) {
            if (erro) {
                res.status(500).json(erro);
            }
            else {
                res.status(200).json(data);
            }
        });
    };

    controller.buscarTodos = function (req, res) {
        Categoria.find(function (erro, data) {
            if (erro) {
                return res.status(500).json(err);
            }
            res.status(200).json(data);
        });
    };

    controller.buscarUm = function (req, res) {
        Categoria.findById(req.params.id, function (erro, data) {
            if (erro) {
                return res.status(500).json(erro);
            }
            if (!data) {
                return res.status(404).send('Nenhum Registro Encontrado');
            }
            res.status(200).json(data);
        });
    };

    controller.alterar = function (req, res) {
        Categoria.findOneAndUpdate({ _id: req.params.id }, req.body, function (erro, data) {
            if (erro) {
                return res.status(500).json(erro);

            }
            else {
                res.status(200).json(data);
            }
        })
    };

    controller.deletar = function (req, res) {
        Categoria.deleteOne({ _id: req.params.id }, function (erro, data) {
            if (erro) {
                res.status(500).json(erro);
            } else {
                res.status(200).json(data);
            };
        });
    };

    return controller;
};