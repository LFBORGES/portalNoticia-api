var mongoose = require('mongoose');

module.exports = function () {
    var schema = mongoose.Schema({  
    
        descricao: {
            type: String, 
            require: true
        },
                
    });

    return mongoose.model('categoria', schema);
}