window.onload = function() {
    
    introducePage();
}

function introducePage() {
    var cnt = 0;

    document.getElementById('firstForm').addEventListener('click', (e) => {
        e.preventDefault();
        var name = e.target.getAttribute('name');
        console.log('name : ' + name);
        fetchFunc(name);
    });
    document.getElementById('secondForm').addEventListener('click', (e) => {
        e.preventDefault();
        var name = e.target.getAttribute('name');
        console.log('name : ' + name);
        fetchFunc(name);
        
    });
    document.getElementById('thirdForm').addEventListener('click', (e) => {
        e.preventDefault();
        var name = e.target.getAttribute('name');
        console.log('name : ' + name);
        fetchFunc(name);
    });
    document.getElementById('fourthForm').addEventListener('click', (e) => {
        e.preventDefault();
        var name = e.target.getAttribute('name');
        console.log('name : ' + name);
        fetchFunc(name);
    });
    document.getElementById('fifthForm').addEventListener('click', (e) => {
        e.preventDefault();
        var name = e.target.getAttribute('name');
        console.log('name : ' + name);
        fetchFunc(name);
    });

    function fetchFunc(name) {
        console.log('name : ' + name);
        
        fetch('/introduce/' + name, {method: 'GET'})
            .then((response) => {
                if(response.status == 200) {
                    console.log('받음?');
                    return response.json();
                }
            })
            .then((result) => {
                if(result == null) {
                    return;
                }
               
                cnt++;

                //db값에서 불러온 값 저장할 공간 생성
                var name = document.createElement('label');
                var birth = document.createElement('label');
                var phone = document.createElement('label');
                var email = document.createElement('label');
                var myIntroduce = document.createElement('label');
                
                //소개 타이틀
                var tagName = document.createElement('label');
                var tagBirth = document.createElement('label');
                var tagPhone = document.createElement('label');
                var tagEmail = document.createElement('label');
                var tagMyIntroduce = document.createElement('label');

                tagName.innerHTML = '이름';
                tagBirth.innerHTML = '생년월일';
                tagPhone.innerHTML = '전화번호';
                tagEmail.innerHTML = '메일주소';
                tagMyIntroduce.innerHTML = '소개';

                tagName.style.borderBottom = '2px solid #5CAAEF';
                tagBirth.style.borderBottom = '2px solid #5CAAEF';
                tagPhone.style.borderBottom = '2px solid #5CAAEF';
                tagEmail.style.borderBottom = '2px solid #5CAAEF';
                tagMyIntroduce.style.borderBottom = '2px solid #5CAAEF';

                //폰트 클래스 추가
                name.classList.add('font');
                birth.classList.add('font');
                phone.classList.add('font');
                email.classList.add('font');
                myIntroduce.classList.add('font');
                tagName.classList.add('font');
                tagBirth.classList.add('font');
                tagEmail.classList.add('font');
                tagMyIntroduce.classList.add('font');
                tagPhone.classList.add('font');

                //label 끼울 div
                var introduceDiv = document.createElement('div');
                introduceDiv.id = "introduce";
                // introduceDiv.style.backgroundColor = "blue";
                introduceDiv.style.height = "auto";
                introduceDiv.style.overflow = "hidden";
                introduceDiv.style.width = "100%";
                // introduceDiv.style.flex = "1";

                //db값 불러와서 각 label에 저장
                if(result != null) {
                    name.innerHTML = result.real_name;
                    birth.innerHTML = result.i_birth;
                    phone.innerHTML = result.i_phone;
                    email.innerHTML = result.i_email;
                    myIntroduce.innerHTML = result.introduce;
                }
                                
                //값 넣기 전에 초기화
                introduceDiv.innerHTML = '';
                //div에 label값 저장
                introduceDiv.appendChild(tagName);
                introduceDiv.appendChild(name);
                introduceDiv.appendChild(tagBirth);
                introduceDiv.appendChild(birth);
                introduceDiv.appendChild(tagPhone);
                introduceDiv.appendChild(phone);
                introduceDiv.appendChild(tagEmail);
                introduceDiv.appendChild(email);
                introduceDiv.appendChild(tagMyIntroduce);
                introduceDiv.appendChild(myIntroduce);

                // /introduce/~~~~
                const members = ['memberone', 'membertwo', 'memberthree', 'memberfour', 'memberfive'];
                // 이미지 파일 경로
                const imageSourcePath = '/images/';
                const imageExtension = '.jpg';

                //이미지 태그
                var images = document.getElementsByClassName('members');
                //
                var profileDiv = document.getElementById('profile');

                for(var i = 0; i < members.length ; i++) {
                    console.log(i + '번 멤버 : ' +members[i]);
                    //홀수는 멤버 한명만 포인트
                    if(cnt % 2 == 1) {
                        console.log('홀수 카운팅 : ' + cnt);

                        introduceDiv.style.display = 'inline-block';
                        
                        
                        if(result.i_name != members[i] && result.i_name != null) {
                            images[i].src = '';
                            
                        }
                        if(result.i_name == members[i]) {
                            profileDiv.appendChild(introduceDiv);
                        }

                        //짝수는 멤버 전체 포인트
                    } else if (cnt % 2 == 0) {
                        if(result != null) {
                            console.log('짝수 카운팅 : ' + cnt);
                            console.log('경로 : ' + images[i].src + '');

                            //이미지 경로 재설정
                            images[i].src = imageSourcePath + members[i] + imageExtension;        

                            //div의 display를 flex형태로 바꿔 재정렬
                            profileDiv.style.display = 'flex';

                            cnt = 0;
                        } else {
                            console.log('null입니당');
                            return;
                        }

                    }
                }
                if(cnt % 2 == 0) {
                    profileDiv.removeChild(document.getElementById("introduce"));
                }
            })
            .catch((err) => {
                console.error(err);
            });
    }
}