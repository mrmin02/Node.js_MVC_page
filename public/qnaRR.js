window.onload = function(){
    console.log("실행");
    document.getElementById('qnaRR_submit').addEventListener('submit',(e)=>{
        const textArea = document.getElementById("RRTextArea").value;
        console.log("리스터 달음");
        console.log("수정클릭");
       if(!textArea.trim()){
           console.log("내용 없음");
           alert("내용을 입력해주세요.");
           e.preventDefault();
       }
    });        
        
 }
