const express = require('express');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const { Qna, User } = require('../models');
const fs = require('fs');

const router = express.Router();


router.get('/',(req,res,next)=>{
    console.log("데이터 가져갈려함.");
    Qna.findAll({attributes:['id','q_title','answer'], order:[['time','DESC']], limit:6})
    .then((qnas)=>{
        console.log("데이터 가져감");
        console.log("데이터 가져감 qnas 로고",qnas);
        res.json(qnas);

    })
    .catch((err)=>{
        console.error(err);
        next(err);
    })
});
router.get('/item/:id',async(req,res,next)=>{
    try{
        const db = await Qna.findOne({where:{id:req.params.id}});
        // console.log('db: ',db);
        const {id,q_title,q_body,time,u_id, answer,answerInfo} = db;
        const body= fs.readFileSync(q_body+'.txt', 'utf8');

        const userName = await User.findOne({attributes:['name'], where:{u_id:u_id}});
        const {name} = userName;
        console.log("userName",userName);
        var answerBody = 0;
        if(answer==1){
            answerBody = fs.readFileSync(answerInfo+'.txt','utf8');
        }

        if(req.user){
            const user = await User.findOne({attributes:['admin'], where:{u_id:req.user.u_id}});
            const {admin} = user;
            console.log("name--------",name);
            res.render('qnaInfo',{id,q_title,body,time,u_id,admin,user:req.user,answer,answerBody,name});
        }else{
            console.log("name--------",name);
            res.render('qnaInfo',{id,q_title,body,time,u_id,answer,answerBody,name});
        }
    }catch(err){
        next(err);
    }

});
router.get('/allQna',(req,res,next)=>{
    res.render('qnaAll',{user:req.user});
  });
router.post('/submit',isLoggedIn,(req,res,next)=>{
    // if(isLoggedIn){
    //     var result={message:"로그인 후 이용해 주세요.",loginError:"로그인 에러"};
    //     res.status(201).json(result);
    //     return;
    // }
    //------------------현재 날짜 DB 에서 불러올 때 사용
    var date = new Date();
    var dateformat='';
   	dateformat+=date.getFullYear();
    if(date.getMonth()<10)
        dateformat+=0;
    dateformat+=date.getMonth()+1;
    if(date.getDate()<10)
        dateformat+=0;
    dateformat+=date.getDate();
    if(date.getHours()<10)
        dateformat+=0;
    dateformat+=date.getHours();
    if(date.getMinutes()<10)
        dateformat+=0;
    dateformat+=date.getMinutes();
    if(date.getSeconds()<10)
        dateformat+=0;
    dateformat+=date.getSeconds();
    // console.log(req.user.u_id);
    writeFile('./userQna',req.user.u_id,dateformat,req.body.q_body);
    //------   DB저장  ------//

    // console.log("date: ",date);
    Qna.create({
        q_title:req.body.q_title,
        q_body:'./userQna/'+dateformat+req.user.u_id,
        u_id:req.user.u_id,
        time:dateformat
    }).then((result)=>{
        result={message:"질문 등록이 완료되었습니다."}
        res.status(201).json(result);
    }).catch((err)=>{
        console.error(err);
        next(err);
    });
});
router.post('/adminAnswer',(req,res,next)=>{
    // console.log("일단 옴");
    
    writeFile('./adminAnswer',req.body.qNumber,req.user.u_id,req.body.textArea);

    Qna.update({answerInfo:'./adminAnswer/'+req.user.u_id+req.body.qNumber,answer:1},{where:{id:req.body.qNumber}})
    .then((result)=>{
        console.log("update : ",result);
        result = {textArea:req.body.textArea,message:"답글이 등록되었습니다.",redirect:"/qnas/allQna",check:0};
        res.json(result);
    }).catch((err)=>{
        console.error(err);
        next(err);
    })

    // 질문 번호 + 댓글 관리자 명, 댓글 내용.
});
router.patch('/adminAnswer',(req,res,next)=>{
    // console.log("일단 옴");
    writeFile('./adminAnswer',req.body.qNumber,req.user.u_id,req.body.textArea);
    result = {textArea:req.body.textArea,message:"수정이 완료되었습니다.",check:1};
    res.json(result);
    // 질문 번호 + 댓글 관리자 명, 댓글 내용.
});
router.post('/allQna/getItem',(req,res,next)=>{
    Qna.findAll({attributes:['id','q_title','answer'], order:[['time','DESC']], limit:10, offset:req.body.count*10})
    .then((result)=>{
    //   console.log('질문 전부 result',result);
      return res.json(result);
    }).catch((err)=>{
      console.error(err);
      next(err);
    })
});
router.post('/delete/:id',(req,res)=>{//html 파일에서 Ajax 사용 없이 method 로 delete 사용 불가능
    // console.log("질문 삭제 ",req.params.id);
    Qna.destroy({where:{id:req.params.id}})
    .then((result)=>{
        console.log("delete : ",result);
        console.log("리턴");
        console.log(req.body.delete200);
        if (req.body.delete200){//프로필에서 삭제 요청이 온 경우.
            return res.redirect('/profile/'+req.user.u_id+'/200');
        }else{
            return res.redirect('/qnas/allQna');
        }
        
    }).catch((err)=>{
        console.error(err);
        next(err);
    })
    
});
router.get('/qnaRR/item/:id',async(req,res,next)=>{ // 수정
    try{
        const db = await Qna.findOne({where:{id:req.params.id}});
        // console.log('db: ',db);
        const {q_body,id} = db;
        const body= fs.readFileSync(q_body+'.txt', 'utf8');
        res.render('qnaRR', {user:req.user,body,id});
    }catch(err){
        next(err);
    }
    
});
router.post('/qnaRR/reQna/:id',async(req,res,next)=>{// 수정 완료
    try{
        const db = await Qna.findOne({where:{id:req.params.id}});
        const {time} = db;
        writeFile('./userQna',req.user.u_id,time,req.body.textArea);
        res.redirect("/qnas/item/"+req.params.id);
    }catch(err){
        next(err);
    }
});
writeFile = function(url,userName,date,data){
    fs.access(url,fs.constants.F_OK | fs.constants.R_OK | fs.constants.W_OK, (err)=>{
        // F -> 읽기, 쓰기, 실행 권한 모두, R -> 읽기 권한, W -> 쓰기권한
        if(err){
            // console.log(err);
            if(err.code === 'ENOENT'){
                console.log("폴더 없음");
                fs.mkdir(url,(err)=>{
                    if(err){
                        throw err;
                    }   
                });
            }
        }
        // w -> 있으면 덮어씌우기, 없으면 생성
        fs.open(url+'/'+date+userName+'.txt','w',(err,fd)=>{
            if (err) throw err;
                console.log('Saved!');
            fs.writeFile(url+'/'+date+userName+'.txt',data,(err)=>{
            if(err)
                console.error(err);
            });
        });
        console.log('생성완료');
    });
}


module.exports = router;
