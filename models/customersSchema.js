const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// define the Schema (the structure of the article)
const userSchema = new Schema({
  fireName: String,
  lastName: String,
  Email: String,
  Telephone: String,
  Age: Number,
  Country: String,
  Gender: String,
}, { timestamps: true });




// Create a model based on that schema
const User = mongoose.model("customers", userSchema);




// export the model
module.exports = User












