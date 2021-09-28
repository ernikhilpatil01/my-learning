const mongoose  = require("mongoose");

const Reports = mongoose.Schema(
    {
        id : {type:Number},
        urlSlug : {type:String},
        namePrefix : {type:String},
        firstName : {type:String},
        lastName : {type:String},
        aboutme : {type:String},
        profilePicUrl : {type:String},
        experience : {type:Number},
        languages : [String],
        minimumCallDuration : {type:Number},
        minimumCallDurationCharges : {type:Number},
        additionalPerMinuteCharges : {type:Number},
        skills : [String],
        isOnCall : {type:Boolean},
        images : {
            large:{
                imageUrl:{type:String}, 
                id : {type:Number}
            },
            medium:{
                imageUrl:{type:String}, 
                id : {type:Number}
            }
        },
        availablity:{
            days:[String],
            slot:{
                toFormat:{type:String},
                fromFormat:{type:String},
                from:{type:String},
                to:{type:String}
            }
        }
    }
);
const reports = module.exports = mongoose.model('reports', Reports);