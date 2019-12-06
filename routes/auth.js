const express =require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const { User } = require('../models');//DB 정보.


const router = express.Router();


router.post('/register',isNotLoggedIn, async (req,res,next)=>{
  try {
    console.log('회원가입 버튼 클릭 콜백');
    
    const {u_id} = req.body; 
    console.log('u_id' + u_id);
    const user = await User.findOne({where: {u_id}});
    const hash = await bcrypt.hash(req.body.password, 12); //해쉬 코드를 이용해서 암호화 12번 꼬아서.
    if(!user){// 값이 없으면
      User.create(
        {
        u_id:req.body.u_id,
        password:hash,
        email:req.body.email,
        name:req.body.name,
        identity_number:req.body.identity_number,
        phone:req.body.phone,
        gender:req.body.gender,
      }).then((result)=>{
        console.log(result);
      }).catch((err)=>{
        console.error(err);
        next(err);
      });
      console.log("회원가입 완료");
      return res.redirect('/');
    }else{
      console.log('이미 있는 아이디');
      req.flash('err','이미 가입된 아이디 입니다.');
      return res.redirect('/register')
    }  
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.post('/login', isNotLoggedIn,function(req, res, next) {
    console.log("-----------------2");
    passport.authenticate('local', function(err, user, info) {
      
        console.log("-----------------3");
        // console.log("user: ",user);
      if (err) { return next(err); }
      if (!user) {
        req.flash('message',info.message);
        return res.redirect('/login');
      }
      
      console.log("로그인 시도");


      req.logIn(user, 
        function(err) {
        if (err) { 
          console.log('로그인 시도 실패');
          req.flash('message',"로그인 실패");
          return next(err); 
        }
        return res.redirect('/');
      });
     
    })(req, res, next);
  });
    
  router.get('/logout',isLoggedIn,(req,res)=>{
    req.logout();

    req.session.destroy(function(err){
      res.redirect('/');
    });
    
    console.log("세션 제거 일단 완료?");
    
  });
    

module.exports = router;
