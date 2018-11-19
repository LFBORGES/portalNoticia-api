var mongoose = require('mongoose');

module.exports = function () {
    var schema = mongoose.Schema({  
    
        usuario: {
            type: mongoose.Schema.ObjectId,
            ref: 'usuario',
            require: true
        },

        arquivo: {
            type: mongoose.Schema.ObjectId,
            ref: 'arquivo',
            require: true
        },

        conteudo: { 
            type: String,
            require: true 
        },
                
        data:{
            type: Date,
            required: true
        },

    });

    return mongoose.model('comentario', schema);
}