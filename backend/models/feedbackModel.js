const {Schema, model,Types} = require('../connection')
const myschema = new Schema({
    user:{type:Types.ObjectId,ref:"Users"},
    rating:Number,
    review:String
})
module.exports= model('Feedback',myschema)