const express = require('express');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const { Qna, User, Homeimg } = require('../models');
const fs = require('fs');

const router = express.Router();

router.get('/', async(req, res, next)=>{
  try{
    const homeImg = await Homeimg.findAll({});
 
    res.render('home',{user: req.user,img:homeImg});
    console.log(homeImg);
  }catch(err){
    console.error(err);
    next(err);
  }
  
});



router.get('/login',isNotLoggedIn,(req,res,next)=>{    
  console.log('/(page)/login');
  res.render('login',{message:req.flash('message')});   
});

router.get('/register', isNotLoggedIn, (req, res,next) => {
  var message;
  if(req.flash)
    message= req.flash('err');
  else
    message="";

  res.render('register',{message});
});


module.exports = router;