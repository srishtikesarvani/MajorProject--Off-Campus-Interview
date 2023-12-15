const {Schema, model, Types} = require('../connection')
const myschema = new Schema({
   company:{type : Types.ObjectId, ref : 'Company'},
   designation:String,
   requirement:String,
   location:String,
   createdAt:Date,
   apply:String
})
module.exports= model( 'Interview',myschema)