

var count =0;

window.onload = function(){
    getData()
}

function getData(){
    fetch('/qnas/allQna/getItem',{
        headers: {
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        credentials:'include',
        method:"POST",
        body: JSON.stringify({count:count})
    }).then((response)=>{ //response 는 서버에서 보내는 값.comments.js 에서 comments 임.
        if(response.status=='200'){
            return response.json();
        }
    }).then((result)=>{
        console.log(result); 
        console.log('실행---2');
        if(result.length==0){
            count--;
            alert("검색 결과 없음");
            return;
        }
        lodding(result);
    }).catch((error)=>{
        console.error('fetch 호출에서 에러발생: '+error.message);
    });
}

function lodding(result){
    if(!result)
    console.log("없음");
    var add = document.querySelector('#qnaAll_Div div');
    // if(add)
    add.innerHTML='';
    result.map((qnas)=>{
        var a = document.createElement('a');
        var id = qnas.id;
        var title;
        a.id="qnaAll_title";
        a.href="/qnas/item/"+id;
        console.log(qnas.answer);
        if(qnas.q_title.length <5)
            title = qnas.q_title;
        else
            title = qnas.q_title.substring(0,5)+"...";
        
        if (qnas.answer == 0){
            a.textContent = title;
            a.textContent+="\u00A0\u00A0\u00A0"
            a.textContent+="(답변 대기중)";
        }
        else{
            a.textContent = title;
            a.textContent+="\u00A0\u00A0\u00A0"
            a.textContent+="(답변 완료)";
        }
        add.appendChild(a);
    })
}
document.getElementById('toPre').addEventListener('submit',(e)=>{
    e.preventDefault();
    if(count==0){
        alert("현재 질문들이 가장 최근의 질문입니다.")
        return;
    }
    count--;
    getData();

});
document.getElementById('toNext').addEventListener('submit',(e)=>{
    e.preventDefault();
    count++;
    getData();

});





