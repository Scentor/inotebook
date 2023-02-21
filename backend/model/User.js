const mongoose = require('mongoose');
const { Schema } = mongoose;
  
const userSchema = new Schema(
    {
        name:{type:String }, // String is shorthand for {type: String}
        email: {type:String ,unique:true},
        password:  String,
        date:{type:Date,default:Date.now} 
    }
); 
const User = mongoose.model("user",userSchema)

module.exports = User