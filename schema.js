const mongoose = require("mongoose");
 


const registerSchema = mongoose.Schema({
  name: { type: String, requried: true },
  email: { type: String, requried: true },
  password: {type:String, requried: true},
  conformpassword: {type:String, requried: true}
});



module.exports = mongoose.model("register", registerSchema);