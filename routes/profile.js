const express = require('express');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const { Qna, User, Logoimg } = require('../models');
const bcrypt = require('bcrypt');

const router = express.Router();


/* router.get('/:id',isLoggedIn,(req,res)=>{
    if(!req.user.u_id===req.params.id){

      console.log("로그인 된 회원과 정보가 다른 접속임");
      res.redirect('/');
    }
      // 실제 사용자 이외의 사용자가 접근한 경우
          
      
    //사용자 가 맞는 경우.
    res.render('profile',{user:req.user});
}); */
router.get('/:id/100',isLoggedIn,(req,res,next)=>{//자기소개
    if(req.user.admin==0){//관리자가 아니면. 
      return res.render('/',{user:req.user});
    }
    User.findAll({attributes: ['u_id','name','gender','admin']})
    .then((result)=>{
        res.render('profile100',{user:req.user,result});
    })
    .catch((err)=>{
      console.error(err);
      next(err);
    });
    
});
router.post('/:id/100/addAdmin',isLoggedIn,(req,res,next)=>{
  console.log("--------------------------------------------------ooo");
    User.update({admin:1},{where:{u_id:req.params.id}})
    .then((result)=>{
      console.log("--------------------------------------------------0000000");
        return res.redirect('/profile/'+req.user.u_id+'/100');    
    })
    .catch((err)=>{
        console.error(err);
        next(err);
    });
    // return res.redirect('/profile/'+req.user.u_id+'/100');   
});
router.post('/:id/100/remAdmin',isLoggedIn,(req,res,next)=>{
  console.log("--------------------------------------------------xxxx");
  console.log('ttttttttttttttttttttttt',req.params.id);
  console.log('ttttttttttttttttttttttt',req.user.u_id);
    if(req.user.u_id===req.params.id)
        return res.redirect('/profile/'+req.user.u_id+'/100');    
    User.update({admin:0},{where:{u_id:req.params.id}})
    .then((result)=>{
        return res.redirect('/profile/'+req.user.u_id+'/100');    
    })
    .catch((err)=>{
        console.error(err);
        next(err);
    });
    // return res.redirect('/profile/'+req.user.u_id+'/100');   
});
router.get('/:id/200',isLoggedIn,(req,res,next)=>{//질문
    Qna.findAll({where:{u_id:req.params.id}})
    .then((result)=>{// 배열 형식으로 가져옴.
      res.render('profile200',{user:req.user,result}); 
    })
    .catch((err)=>{
      console.error(err);
      next(err);
    });
});
router.get('/:id/300',isLoggedIn,(req,res,next)=>{//이름 변경

    res.render('profile300',{user:req.user});
});
router.post('/:id/300',isLoggedIn,(req,res,next)=>{
    User.update({name:req.body.name},{where:{u_id:req.params.id}})
    .then((result)=>{
      res.redirect("/profile/"+req.params.id+"/300");
    }).catch((err)=>{
      console.error(err);
      next(err);
    });
});
router.get('/:id/400',isLoggedIn,(req,res,next)=>{//비밀번호 변경
    res.render('profile400',{user:req.user, message:req.flash('message')});
});
router.post('/:id/400',isLoggedIn,async(req,res,next)=>{//비밀번호 변경
  try {
    console.log("req.body.password400_0",req.body.userPwd);
    console.log("req.user.password",req.user.password);
    const result = await bcrypt.compare(req.body.userPwd, req.user.password);
    console.log("result",result);
      if(!result){
        req.flash("message","비밀번호를 다시 확인해 주세요.");
        return res.redirect('/profile/'+req.params.id+'/400');
      }
      const password = await bcrypt.hash(req.body.newPwd, 12)
      User.update({password:password},{where:{u_id:req.params.id}})
      .then((result)=>{
        req.flash("message","비밀번호가 변경되었습니다.");
        return res.redirect('/profile/'+req.params.id+'/400');
      }).catch((err)=>{
        console.error(err);
        next(err);
      });
  } catch (err) {
    console.error(err);
    next(err);
  }
});


module.exports = router;