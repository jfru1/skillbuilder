const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const moment = require("moment-timezone")




var location = moment.tz.guess()

const clientSchema = new Schema({

createdAt :{type:String, required:true, default:moment.tz(location).format()},
name: {type: String, required: true},
email:{type:String, required: true},
password: {type:String, required: true},
skill:{type:String, required:false},
goal:{type:String, required:false},
step1:{type:String, required:false},
step2:{type:String, required:false},
step3:{type:String, required:false},
step4:{type:String, required:false},
step5:{type:String, required:false},
Posts:{type:Array, required:false}

});


const Client = mongoose.model("Client", clientSchema);

module.exports = Client;
