var idCheck = "";
var nameCheck= "";
var emailCheck= "";
var phoneCheck= "";

window.onload = function () {
    idText = document.getElementById('id');
    passwordText = document.getElementById('password');
    password2Text = document.getElementById('password2')
    emailText = document.getElementById('email');
    nameText = document.getElementById('name');
    phone1Text = document.getElementById('phone1');
    phone2Text = document.getElementById('phone2');
    phone3Text = document.getElementById('phone3');
}

function checkID() {
    var id = idText.value;
    var idReg = /^[a-z]+[a-z0-9]{5,19}$/;
    
        if (!idReg.test(id)) {
            alert("아이디에는 특수문자 사용 불가");
            idCheck = "";
        }
        else{
            alert(id + "은(는) 사용할수있는 ID입니다");
            idCheck = id;
        }
    }

function checkPassword(){
    var password = passwordText.value;
    var password2 = password2Text.value;

    var passReg =  /^.*(?=^.{4,12}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@$%^&*]).*$/;

    if(!passReg.test(password)){
        alert("비밀번호는 4~12자리의 영문,숫자, 최소 한개의 특수문자(!, @, $, %, ^,&,*)로 구성해야합니다.");
        return false;
    }
    else{
        if(password === password2){
            return true;
        }
        else{
            alert("비밀번호가 일치하지 않음.");
        }
    }
}

function checkName(){
    var name = nameText.value;
    var nameReg = /^[가-힣]{2,4}$/;

    if(!nameReg.test(name)){
        alert("올바른 이름을 입력하시오.");
        nameCheck = "";
        return false;
    }
    else{
        nameCheck = name;
        return true;
    }
}

function checkEmail(){
    var email = emailText.value;
    var emailReg = /^[a-z0-9_+.-]+@([a-z0-9-]+\.)+[a-z0-9]{2,4}$/;

    if(!emailReg.test(email)){
        alert("올바른 메일 주소를 입력하시오.");
        emailCheck = "";
        return false;
    }
    else{
        emailCheck = email;
        return true;
    }
}

function checkPhone(){
    var phone = phone1Text.value + '-' + phone2Text.value + '-' + phone3Text.value;
    var phoneReg = /^\d{3}-\d{3,4}-\d{4}$/;

    if(!phoneReg.test(phone)){
        alert("올바른 휴대폰번호를 입력하시오.");
        phoneCheck = "";
        return false;
    }
    else{
        phoneCheck = phone;
        return true;
    }
}

function checkInfo(){
    if(!idText.value){
        alert("아이디를 입력하시오.");
        return;
    }
    if(!checkPassword()) return;
    if(!checkName()) return;
    if(!checkEmail()) return;
    if(!checkPhone()) return;

    alert(
        '가입 정보\n\n' +
        '아이디 : ' + idCheck +
        '\n이름 : ' + nameCheck +
        '\n이메일 : ' + emailCheck +
        '\n휴대폰번호 : ' + phoneCheck
    );
}
