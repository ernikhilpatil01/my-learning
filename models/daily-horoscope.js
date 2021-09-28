const mongoose = require('mongoose');



const DailyHoroscope = mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        date:{
            type:String,
            required:true
        },
        img:{
            data: Buffer,
            contentType : String
        },
        images:{
            small:{
                imageUrl:String,
                id:Number
            },
            large:{
                imageUrl:String,
                id:Number
            },
            medium:{
                imageUrl:String,
                id:Number
            },
        },
        urlSlug:{
            type:String,
            required:true
        }
    }
);

const dailyHoroscope = module.exports = mongoose.model('dailyHoroscope', DailyHoroscope);