const mongoose =require('mongoose')

const Schema =mongoose.Schema


const todoSchema = new Schema({
    text:{ type:String,required:true},
    isComplete:{type:Boolean,default:false},
    createAtDate:{type:Date,default:Date.now}
})

module.exports = mongoose.model('todo',todoSchema)