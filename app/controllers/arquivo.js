module.exports = function (app) {
    var Arquivo = app.models.arquivo;
    var controller = {};

    controller.inserir = function (req, res) {

        Arquivo.create(req.body, function (erro, data) {
            if (erro) {
                res.status(500).json(erro);
            }
            else {
                res.status(200).json(data);
            }
        });
    };

    controller.buscarTodos = function (req, res) {
        Arquivo.find().populate('categoria').populate('usuario').exec(function (erro, data) {
            if (erro) {
                return res.status(500).json(err);
            }
            res.status(200).json(data);
        });
    };

    controller.buscarUm = function (req, res) {
        Arquivo.findById(req.params.id, function (erro, data) {
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
        Arquivo.findOneAndUpdate({ _id: req.params.id }, req.body, function (erro, data) {
            if (erro) {
                return res.status(500).json(erro);

            }
            else {
                res.status(200).json(data);
            }
        })
    };

    controller.deletar = function (req, res) {
        Arquivo.findOneAndRemove({ _id: req.params.id }, function (erro, data) {
            if (erro) {
                res.status(500).json(erro);
            } else {
                res.status(200).json(data);
            };
        });
    };

    return controller;
};