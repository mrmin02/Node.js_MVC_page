const express = require('express');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const { Qna, User, Hyon,Image } = require('../models');
const fs = require('fs');

const router = express.Router();


router.get('/hyonziMenu/:id',async(req,res,next)=>{
    try {

    
        const db = await Hyon.findOne({where:{id:req.params.id}});
        const imdb = await Image.findOne({where:{id:req.params.id}});
        var data = {db : db, imdb : imdb};
        res.json(data);

    } catch (err) {
        console.error(err);
    }
});

module.exports = router;