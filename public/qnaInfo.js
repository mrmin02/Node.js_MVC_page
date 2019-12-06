answerR = function(answer){
    console.log('바꾸는거 시도');
    if(document.getElementById('answerBody')){
        document.getElementById('answerBody').innerHTML = answer;
    console.log('바꾸는거 완료');
    }
    
}


document.getElementById('answer').addEventListener('submit',(e)=>{
    e.preventDefault();
    
    var textArea = e.target.textarea.value; 
    if(!textArea.trim()){
        return alert("내용을 입력하세요");
    }

    var userId = document.getElementById("AnswerUserId").textContent;
    // userId = userId.trim();
    var qNumber = document.getElementById("numberDiv").textContent;
    // qNumber = qNumber.trim();

    console.log("질문자 아이디",userId);
    console.log("질문 번호",qNumber);
    const button = 0;
    getData(textArea,userId,qNumber,button);

    e.target.textarea.value = '';
});
document.getElementById('reAnswer').addEventListener('submit',(e)=>{
    e.preventDefault();
    
    var textArea = e.target.textarea.value; 
    if(!textArea.trim()){
        return alert("내용을 입력하세요");
    }

    var userId = document.getElementById("AnswerUserId").textContent;
    // userId = userId.trim();
    var qNumber = document.getElementById("numberDiv").textContent;
    // qNumber = qNumber.trim();

    console.log("질문자 아이디",userId);
    console.log("질문 번호",qNumber);
    const button = 1;
    getData(textArea,userId,qNumber,button);

    e.target.textarea.value = '';
});


function getData(textArea,userId,qNumber,button){
    if(button==1)
        var method="PATCH";
    else
        var method="POST";
    fetch('/qnas/adminAnswer',{
        headers: {
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        credentials:'include',
        method: method,
        body: JSON.stringify({textArea,userId,qNumber,button})

    }).then((response)=>{ //response 는 서버에서 보내는 값.comments.js 에서 comments 임.
        if(response.status=='200'){
            return response.json();
        }
    }).then((result)=>{
        console.log(result);
        if(result.check==0){//답글 등록일 경우
            alert(result.message);
            window.location.href=result.redirect;
        }else{//수정일 경우.
            alert(result.message);
            answerR(result.textArea);
        }
    }).catch((error)=>{
        console.error('fetch 호출에서 에러발생: '+error.message);
    });
}