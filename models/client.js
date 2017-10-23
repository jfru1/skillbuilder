const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clientSchema = new Schema({
name: {type: String, required: true},
email:{type:String, required: true},
password: {type:String, required: true},
skill:{type:String, required:false},
goal:{type:String, required:false},
steps:{type:Array, required:false},

});


const Client = mongoose.model("Client", clientSchema);

module.exports = Client;
