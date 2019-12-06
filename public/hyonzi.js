window.onload = function(){
    hyonzi_fetch(1);
    document.getElementById("hyonziMenu_1").style.background="dodgerblue";
}
var setColor_label = document.getElementById('grid').getElementsByTagName('label');



document.getElementById("hyonziMenu_1").addEventListener('click',(e)=>{
    e.preventDefault();
    hyonzi_fetch(1);
    setColor();
    e.target.style.background='dodgerblue';
});
document.getElementById("hyonziMenu_2").addEventListener('click',(e)=>{
    e.preventDefault();
    hyonzi_fetch(2);
    setColor();
    e.target.style.background='dodgerblue';
});
document.getElementById("hyonziMenu_3").addEventListener('click',(e)=>{
    e.preventDefault();
    hyonzi_fetch(3);
    setColor();
    e.target.style.background='dodgerblue';
});
document.getElementById("hyonziMenu_4").addEventListener('click',(e)=>{
    e.preventDefault();
    hyonzi_fetch(4);
    setColor();
    e.target.style.background='dodgerblue';
});
document.getElementById("hyonziMenu_5").addEventListener('click',(e)=>{
    e.preventDefault();
    hyonzi_fetch(5);
    setColor();
    e.target.style.background='dodgerblue';
});
document.getElementById("hyonziMenu_6").addEventListener('click',(e)=>{
    e.preventDefault();
    hyonzi_fetch(6);
    setColor();
    e.target.style.background='dodgerblue';
});
document.getElementById("hyonziMenu_7").addEventListener('click',(e)=>{
    e.preventDefault();
    hyonzi_fetch(7);
    setColor();
    e.target.style.background='dodgerblue';
});


function hyonzi_fetch(id){
    fetch('/hyonzi/hyonziMenu/'+id,{method: 'GET'})
    .then((response)=>{
        if(response.status == '200'){
            return response.json();
        }
    }).then((result)=>{ //response 는 서버에서 보내는 값.comments.js 에서 comments 임.
        console.log(result);

        var aa={a:{a1:1},b:{b1:2}};
        

        console.log(aa);
        console.log(aa.b.b1);

        setHyonzi_Div(result);
        

    }).catch((error)=>{
        console.error('fetch 호출에서 에러발생: '+error.message);
    });
}

function setHyonzi_Div(data){
    const div = document.getElementById('hyonziBody');
    div.innerHTML='';

    const label = document.createElement('label');
    const image = document.createElement('img');

    label.textContent = data.db.hyonText;
    label.style.display - 'inline-block';
    image.src= data.imdb.hyonImage;
    console.log(data.imdb.hyonImage);

    div.appendChild(image);
    div.appendChild(label);
}

function setColor(){
    for(var i=0;i<setColor_label.length;i++){
        setColor_label[i].style.background='#BDBDBD';
    }
}