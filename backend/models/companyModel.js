const {Schema, model} = require( '../connection')
const myschema = new Schema({
   name:{type:String, require:true},
   image:{type:String, default:'defaultimg.jpg'},
   category:String,
   description:{type:String, default:'No Description Provided'},
   createdAt:Date,
   email:{type:String, require:true},
   password:{type:String, require:true},
   location:String,
   contact:Number,
   employee:String,
   sfdescription:String,
   servicedescription:String,
   vision:String,
   mission:String

})
module.exports= model('Company',myschema)