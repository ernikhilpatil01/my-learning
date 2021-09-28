const mongoose  = require("mongoose");

const Questions  =  mongoose.Schema(
    {
        id: {type:Number},
        name : {type:String},
        description:{type:String},
        price : {type:Number},
        suggestions:[String]
    }
);
const questions = module.exports = mongoose.model('questions', Questions);