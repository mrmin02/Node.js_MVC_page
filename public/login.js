document.getElementById('login').addEventListener('submit',(e)=>{
    e.preventDefault();//서버에 전송하지 않음.  이벤트 삭제
    var id = e.target.userId.value;
    id = id.trim();
    var pwd = e.target.userPwd.value;
    pwd = pwd.trim();
    if(!id){
        return alert('아이디를 입력하세요');
    }
    if(!pwd){
        return alert('비밀번호를 입력하세요');
    }
    console.log('id')
    console.log('id:'+id);
    console.log('pwd:'+pwd);
    fetch('/auth/login',{
        headers: {
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        credentials:'include',
        method:"POST",
        body: JSON.stringify({u_id:id,password:pwd})

    }).then((response)=>{ //response 는 서버에서 보내는 값.comments.js 에서 comments 임.
        if(response.status==='200'){
            return response.json();
        }
    }).then((result)=>{
        console.log(result); 
        if(result){
            window.location.href=result.redirect;
            alert(result.message);
        }else{
            window.location.href="/";
            alert("이미 로그인 되어 있습니다.");
        }
        
    }).catch((error)=>{
        console.error('fetch 호출에서 에러발생: '+error.message);
    });
    e.target.userId.value = '';
    e.target.userPwd.value = '';
})