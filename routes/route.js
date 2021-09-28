const express = require('express');
const dailyHoroscope = require('../models/daily-horoscope');
const router = express.Router();


const DailyHoroscope = require('../models/daily-horoscope');

//retrieving daily horoscope
router.get('/daily-horoscope', (req, res, next)=>{
    DailyHoroscope.find(function(err, dailyHoroscopes){
        res.json(dailyHoroscopes);
    })
});

//adding daily horoscope
router.post('/daily-horoscope', (req, res, next)=>{
    let newDailyHoroscope = new DailyHoroscope({
        name: req.body.name,
        date: req.body.date,
        img: req.body.img,
        images:{
            small: {
                imageUrl: req.body.images.small.imageUrl,
                id: req.body.images.small.id
            },
            large:{
                imageUrl: req.body.images.large.imageUrl,
                id: req.body.images.large.id
            },
            medium: {
                imageUrl: req.body.images.medium.imageUrl,
                id: req.body.images.medium.id
            }
        },
        urlSlug: req.body.urlSlug
    });
    newDailyHoroscope.save((err, dailyhoroscope)=>{
        if(err){
            res.json({msg: 'Failed to add daily-horoscope'});
            console.log("Failed to add daily horoscope Error: "+err);
        }else{
            res.json({msg: 'Daily-horoscope added successfully'});
        }
    });
});

//getting
const Reports = require('../models/reports');

//retrieving reports
router.get('/reports', (req, res, next)=>{
    Reports.find(function(err, reports){
        res.json(reports);
    })
});

//adding reports
router.post('/reports', (req, res, next)=>{
    let newReports = new Reports({
        id : req.body.id,
        urlSlug : req.body.urlSlug,
        namePrefix : req.body.namePrefix,
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        aboutme : req.body.aboutme,
        profilePicUrl : req.body.profilePicUrl,
        experience : req.body.experience,
        languages : req.body.languages,
        minimumCallDuration : req.body.minimumCallDuration,
        minimumCallDurationCharges : req.body.minimumCallDurationCharges,
        additionalPerMinuteCharges : req.body.additionalPerMinuteCharges,
        skills : req.body.skills,
        isOnCall : req.body.isOnCall,
        images : {
            large:{
                imageUrl:req.body.images.large.imageUrl, 
                id : req.body.images.large.id
            },
            medium:{
                imageUrl:req.body.images.medium.imageUrl, 
                id : req.body.images.medium.id
            }
        },
        availablity:{
            days:req.body.availablity.days,
            slot:{
                toFormat:req.body.availablity.slot.toFormat,
                fromFormat:req.body.availablity.slot.fromFormat,
                from:req.body.availablity.slot.from,
                to:req.body.availablity.slot.to
            }
        }
    });

    newReports.save((err, reports)=>{
        if(err){
            res.json({msg: 'Failed to add reports'});
            console.log("Failed to add reports Error: "+err);
        }else{
            res.json({msg: 'Reports added successfully'});
        }
    });
});

//
const Questions = require('../models/question');
//retrieving questions
router.get('/questions',(req, res, next)=>
Questions.find(function(err, question){
    res.json(question);
})
);

//posting questions
router.post('/questions', (req, res, next)=>{
    let newQuestions = new Questions({
        id:req.body.id,
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        suggestions:req.body.suggestions
    });

    newQuestions.save((err, question)=>{
        if(err){
            res.json({msg: 'Failed to add Questions'});
            console.log("Failed to add questions Error: "+err);
        }else{
            res.json({msg: 'Questions added successfully'});
        }
    });
});


module.exports = router;