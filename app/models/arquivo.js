var mongoose = require('mongoose');

module.exports = function () {
    var schema = mongoose.Schema({  
    
        categoria:{
            type: mongoose.Schema.ObjectId,
            ref: 'categoria',
            require: true
        },

        usuario:{
            type: mongoose.Schema.ObjectId,
            ref: 'usuario',
            require: true
        },

        descricao: {
            type: String,
            require: true
        }
                
    });

    return mongoose.model('arquivo', schema);
}