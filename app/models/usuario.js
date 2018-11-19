var mongoose = require('mongoose');

module.exports = function () {
    var schema = mongoose.Schema({

        nome: {
            type: String,
            require: true,
        },

        email: {
            type: String,
            require: true
        },

        login: {
            type: String,
            require: true
        },

        senha: {
            type: String,
            require: true
        },
    });

    return mongoose.model('usuario', schema);
}