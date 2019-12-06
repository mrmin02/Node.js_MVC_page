window.onload = function(){
    console.log('실행.');
    latestQna();
}

function latestQna(){
    console.log('실행.2');
    fetch('/qnas',{method: 'GET'})
    .then((response)=>{
        console.log(response.status);
        if(response.status == '200'){
            console.log("---------");
            return response.json();
        }
    })
    .then((result)=>{
        console.log("---------result:",result);
        // console.log(qnas);
        const qnas = result;
        console.log(qnas);
        if(!qnas) //없으면 리턴.
            return;
        var add= document.querySelector('#addQna div');
        add.innerHTML='';
        console.log("시험시험시험, qnas", qnas);
        qnas.map((qna)=>{
            // console.
            console.log("qna: ",qna);
            
            var a = document.createElement('a');
            var id = qna.id;
            a.id="qnaA";

            a.href ="/qnas/item/"+id;

            var label = document.createElement('label');
            var br = document.createElement('br');
            var div = document.createElement('div');
            var title;
            div.id="qnaAdiv";

            if(qna.q_title.length <5)
                title = qna.q_title;
            else
                title = qna.q_title.substring(0,5)+"...";

            if(qna.answer==0){
                a.textContent = title 
                a.textContent+="\u00A0\u00A0\u00A0"
                a.textContent+="(답변 대기중)"
            }
            else{
                a.textContent = title 
                a.textContent+="\u00A0\u00A0\u00A0"
                a.textContent+="(답변 완료)"  
            }

            
            add.appendChild(a);
            
            
            
            
        });
    })
    .catch((err)=>{

    })
}


document.getElementById('qna').addEventListener('submit',(e)=>{
    e.preventDefault();
    var q_title = e.target.q_title.value; 
    var q_body = e.target.q_body.value;
    console.log("q_title: ",q_title.trim());
    if(!q_title.trim()){
        return alert("제목을 입력하세요");
    }else if(!q_body.trim()){
        return alert("내용을 입력하세요.");
    }

    fetch('/qnas/submit',{
        headers: {
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        credentials:'include',
        method:"POST",
        body: JSON.stringify({q_title:q_title,q_body:q_body})

    }).then((response)=>{ //response 는 서버에서 보내는 값.comments.js 에서 comments 임.
        if(response.status=='201'){
            return response.json();
        }
    }).then((result)=>{
        console.log(result); 
        if(result){
            latestQna()
            //함수 최근 것들 출력.
        }
    }).catch((error)=>{
        console.error('fetch 호출에서 에러발생: '+error.message);
    });
    e.target.q_title.value = '';
    e.target.q_body.value = '';

});