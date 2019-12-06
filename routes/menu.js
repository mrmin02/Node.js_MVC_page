const express = require('express');
const { Qna, User } = require('../models');

const router = express.Router();



router.get('/qna',async (req,res)=>{
    res.render('qna',{user: req.user});
});
router.get('/home',async(req,res)=>{
    res.redirect('/',{user:req.user});
});
router.get('/hyonzi',async(req,res)=>{
    res.render('hyonzi',{user:req.user});
});
router.get('/introduce',async(req,res)=>{
    res.render('introduce',{user:req.user});
});
module.exports = router;