window.onload = function(){

    let signupForm = document.getElementById("signupForm");

    let alert = document.querySelectorAll(".alert");

    const signUpBtn = document.getElementById("signUpBtn");



    const emailForm = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    
    
    let canSignUp = true;


    signupForm.addEventListener("change", function(){
        let userName = document.getElementById("userName").value;
        let nickname = document.getElementById("nickname").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        let passwordCheck = document.getElementById("passwordCheck").value;

        

        let eng = password.search(/[a-z]/ig);
        let num = password.search(/[0-9]/g);
        let spe = password.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);


    
        if(userName === ""){
            alert[0].textContent = "필수 입력 항목입니다";
            canSignUp = false;
            alert[0].style.color = "red";
        }else{
            alert[0].textContent = "멋진 이름이네요!";
            canSignUp = true;
            alert[0].style.color = "lightgreen";
        }
    
        if(nickname.length < 2 || nickname.length > 5){
            alert[1].textContent = "닉네임은 2~5글자로 구성해주세요!";
            canSignUp = false;
            alert[1].style.color = "red";
        }else{
            alert[1].textContent = "멋진 닉네임이군요!";
            canSignUp = true;
            alert[1].style.color = "lightgreen";
        }
      
        if(!emailForm.test(email)){
            alert[2].textContent = "올바른 메일 형식이 아닙니다!";
            canSignUp = false;
            alert[2].style.color = "red";
        }else{
            alert[2].textContent = "올바른 메일 형식입니다!";
            canSignUp = true;
            alert[2].style.color = "lightgreen";
        }
    
        if(eng<0 || num<0 || spe<0){
            alert[3].textContent = "영어 + 숫자 + 특수문자를 조합하여 작성해주세요";
            canSignUp = false;
            alert[3].style.color = "red";
        }else{
            alert[3].textContent = "안전한 비밀번호입니다!";
            canSignUp = true;
            alert[3].style.color = "lightgreen";   

            if(passwordCheck !== password){
                alert[4].textContent = "비밀번호가 일치하지 않습니다";
                canSignUp = false;
                alert[4].style.color = "red";
            }else{
                alert[4].textContent = "비밀번호가 일치합니다!";
                canSignUp = true;
                alert[4].style.color = "lightgreen";
            }    
        }
  
        if(canSignUp === true){
            signUpBtn.style.backgroundColor = "#333";
        }else{
            signUpBtn.style.backgroundColor = "#848484";
        }
        
    });


    const modal = document.querySelector(".modal-container");
    signUpBtn.addEventListener("click", function(){
        modal.style.display = "block";
    });

    const close = document.getElementById("close");

    close.addEventListener("click", function() {
        modal.style.display = "none";
    })

}