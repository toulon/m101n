/**
 * Created with JetBrains WebStorm.
 * User: toulon
 * Date: 7/4/13
 * Time: 9:54 PM
 * To change this template use File | Settings | File Templates.
 */

// Create a schema for our data
var MessageSchema = new Schema({
    message: String,
    date: Date
});
// Use the schema to register a model with MongoDb
mongoose.model('Message', MessageSchema);
var Message = mongoose.model('Message');
// - See more at: http://backbonetutorials.com/nodejs-restify-mongodb-mongoose/#sthash.9CrXag5k.dpuf