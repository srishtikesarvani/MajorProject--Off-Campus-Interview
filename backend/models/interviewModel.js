const {Schema, model, Types} = require('../connection')
const myschema = new Schema({
   company:{type : Types.ObjectId, ref : 'Company'},
   designation:String,
   requirement:String,
   location:String,
   createdAt:Date,
   applyLink:String,
   experience:String,
   salary:{type : String, default: 'Not Disclosed'},
   skill:String,
   noticePeriod:String


   
})
module.exports= model( 'Interview',myschema)