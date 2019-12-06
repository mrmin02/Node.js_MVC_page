exports.isLoggedIn = (req, res, next) =>{ // 로그인.
    console.log("isLoggedIn  로그인 확인");
    if(req.isAuthenticated()){ // req.isAuthenticated()  : 로그인 중이면 true, 아니면 false  
        console.log('로그인 되어 있음');
        next();
    }else{
        // res.status(403).send('로그인 필요');
        res.redirect('/login');
    }
};
 
exports.isNotLoggedIn = (req, res,next)=>{ //로그인 된 상태.
    console.log("isNotLoggedIn 로그인 여부 확인");
    if(!req.isAuthenticated()){
        next();
    }else{
        console.log("로그인 되어 있으니 /로 감.");
        res.redirect('/');
    }
}