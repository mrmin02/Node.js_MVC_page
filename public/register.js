document.getElementById('register').addEventListener('submit',(e)=>{
    //서버에 전송하지 않음.  이벤트 삭제
    var id = e.target.userId.value;
    var pwd = e.target.userPwd.value;
    var email = e.target.userEmail.value;
    var name = e.target.userName.value;
    var identity = e.target.userIdentity.value;
    var phone = e.target.userPhone.value;

    pwd = pwd.trim();
    id = id.trim();
    email = email.trim();
    name = name.trim();
    identity = identity.trim();
    phone = phone.trim();
    if(!id){
        e.preventDefault();
        return alert('아이디를 입력하세요');
    }
    if(!pwd){
        e.preventDefault();
        return alert('비밀번호를 입력하세요');
    }
    if(!email){
        e.preventDefault();
        return alert('이메일을 입력하세요');
    }
    if(!name){
        e.preventDefault();
        return alert('이름을 입력하세요');
    }
    if(!identity){
        e.preventDefault();
        return alert('주민등록번호를 입력하세요');
    }
    if(identity.length !=6){
        e.preventDefault();
        return alert('주민등록번호를 확인해 주세요. (6 자리)');
    }
    if(!phone){
        e.preventDefault();
        return alert('전화번호를 입력하세요');
    }

})