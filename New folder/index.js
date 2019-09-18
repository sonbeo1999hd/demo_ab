// var list_name = document.querySelectorAll("input[type='text']");

// function focusNext(e){
//     for(let i = 0; i<list_name.length; i++){
//         if(e.keyCode === 13 ){
//             list_name[i+1].focus();
//         }
//     }
// }

//validate Name


let name_value = document.querySelector("input[name='name']");

function updateName(event){
    if(event.keyCode == 13 || event.which == 13){
        name_value.value = validateName(name_value.value);
        document.getElementById("address").focus();
    }
}


function validateName(str){
    str = str.replace(/\s+/g, ' ');
    str.trim();
    let arr = str.toLowerCase().split(' ');
    let result = arr.map(function(val){
        return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
    })
    return result.join(' ');
}

// validateSex
function validateSex(){
    let male = document.querySelectorAll("input[name='male']");
    let female = document.querySelectorAll("input[name='female']");
    if(!male.checked && !female.checked){
        document.querySelector('.error_sex').style.display="block";
        document.querySelector('.error_sex').innerHTML = "Bạn chưa chọn giới tính"
    }else{
        document.querySelector('.error_sex').style.display="none";
    }
}

// validate Email
function validateEmail(){

    let email = document.querySelector("input[name='email']");
    let email_value =  email.value;
    if(email_value == "" || (/\S+@\S+\.\S+/).test(email_value) == false){
        document.querySelector('.error_email').style.display="block";
        document.querySelector('.error_email').innerHTML = "Email không hợp lệ"  
    }
    else{
        document.querySelector('.error_email').style.display="none";
        
    }
}
//validate userName
function validateUserName(){
    let userName = document.querySelector("input[name='username']");
    if(userName.value ==""){
        document.querySelector('.error_username').style.display="block";
        document.querySelector('.error_username').innerHTML = "Bạn chưa nhập tên"  
    }else{
        document.querySelector('.error_username').style.display="none";
    }
}

// validate Password
function validatePassword(){
    let error_password = document.querySelector('.error_password_again');
    let password = document.querySelector("input[name='password']");
    if(password.value == ""){
        document.querySelector('.error_password').style.display="block";
        document.querySelector('.error_password').innerHTML="Bạn chưa nhập mật khẩu"
    }else{
        document.querySelector('.error_password').style.display="none";
        let password_again = document.querySelector("input[name='password_again']");
        if(password.value !== password_again.value){
            error_password.style.display="block";
            error_password.innerHTML = "Mật khẩu gõ lại không đúng"
        }else{
            error_password.style.display="none";
        }
    }
    
    
}
function validateBirthday(){
    let birthday = document.querySelector("input[name='date_of_birth']");
    if(birthday.value == ""){
        document.querySelector('.error_birthday').style.display="block";
        document.querySelector('.error_birthday').innerHTML="Bạn chưa nhập ngày sinh"
    }else{
        document.querySelector('.error_birthday').style.display="none";
    }
}
function validate(){
    validateSex();
    validateBirthday();
    validateEmail();
    validateUserName()
    validatePassword();
}

// Auto focus next input
var idArr = ["address", "date_of_birth", "email", "phone", "username", "password", "password_again", "note"];
function focusNext(event){
    for(let i = 0; i<idArr.length; i++){
        if((event.keyCode == 13 || event.which == 13) && event.target.id === idArr[i]){
            document.querySelector(`#${idArr[i+1]}`).focus();
        }
    }
}