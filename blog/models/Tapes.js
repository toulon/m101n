/**
 * Created with JetBrains WebStorm.
 * User: toulon
 * Date: 7/1/13
 * Time: 9:56 PM
 * To change this template use File | Settings | File Templates.
 */

var mongoose = require('mongoose')
    , Schema = mongoose.Schema;

var TapesSchema = new Schema({
    name : string,
    label : string,
    created : string,
    expires : string,
    type : string,
    status : string,
    id : string

});

mongoose.model('Tapes', TapesSchema);

