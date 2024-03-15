const {Schema, model} = require('../connection')
const myschema = new Schema({
    name:String,
    email:String,
    subject:String,
    message:String

})
module.exports= model('Contact',myschema)
