var mongoose = require('mongoose')
    , Schema = mongoose.Schema;

var FunnyNumberSchema = new Schema({
    value : Number
});

mongoose.model('FunnyNumber', FunnyNumberSchema);