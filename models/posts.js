var mongoose = require("mongoose");
const Schema = mongoose.Schema;
const moment = require("moment-timezone")

var PostSchema = new Schema({
  // title: a string
  date: {
    type: String
  },
  // body: a string
  post: {
    type: String
  }
});
// Make a Note model with the NoteSchema
var Post = mongoose.model("Post", PostSchema);
// Export the Note model
module.exports = Post;
