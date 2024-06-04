const wrapper = document.querySelector('.wrapper')
const loginLink = document.querySelector('.login-link')
const registerLink = document.querySelector('.register-link')

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active')
})

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active')
})

const email = document.getElementById('email')
const password = document.getElementById('password')
const form_login = document.getElementById ('form_login')


const email_error = document.getElementById('email_error')
const pass_error = document.getElementById('pass_error')

const inputbox_email = document.querySelector('.inputbox_email')
const inputbox_pass = document.querySelector('.inputbox_pass')

var email_check = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/

var valid , tempvalid1, tempvalid2;
valid === tempvalid1 === tempvalid2 === 0;

form_login.addEventListener('submit', e=> {
    e.preventDefault();
    tempvalid1 === tempvalid2 === 0;
    if(!email.value.match(email_check)){
        email_error.innerText = "Please input a valid email address";
        inputbox_email.classList.add('error');
    }
    else{
        email_error.innerText = ""
        inputbox_email.classList.remove('error');
        tempvalid1 = 1;
    }

    if(password.value.length < 8){
        e.preventDefault();
        pass_error.innerText = "Password must be at least 8 characters";
        inputbox_pass.classList.add('error');
    }
    else{
        pass_error.innerText = "";
        inputbox_pass.classList.remove('error');
        tempvalid2 = 1;
    }

    if(tempvalid1 == tempvalid2 == 1){
        window.location.href = "../../../BitHub/HCI_RevisiHome_Jeisen/index.html"; 
    }

})

const form_register = document.getElementById('form_register')
const name = document.getElementById('name')
const confPass = document.getElementById('confPass')
const pass_regis = document.getElementById('pass-regis')
const email_regis = document.getElementById('email-regis')

const name_error = document.getElementById('name_error')
const confPass_error = document.getElementById('confPass_error')
const pass_regis_error = document.getElementById('pass-regis_error')
const email_regis_error = document.getElementById('email-regis_error')


const inputbox_name = document.querySelector('.inputbox_name')
const inputbox_confPass = document.querySelector('.inputbox_confPass')
const inputbox_pass_regis = document.querySelector('.inputbox_pass-regis')
const inputbox_email_regis = document.querySelector('.inputbox_email-regis')
var tempvalid3;
form_register.addEventListener('submit', e=> {
    e.preventDefault();
    valid == tempvalid1 == tempvalid2 == tempvalid3== 0;
    if(name.value.length < 3){
        name_error.innerText = "Username must be at least 3 characters"
        inputbox_name.classList.add('error')
    }
    else{
        name_error.innerText = ""
        inputbox_name.classList.remove('error')
        tempvalid3=1;
    }
    
    if(!email_regis.value.match(email_check)){
        e.preventDefault()
        email_regis_error.innerText = "Please input a valid email address"
        inputbox_email_regis.classList.add('error')
    }
    else{
        email_regis_error.innerText = ""
        inputbox_email_regis.classList.remove('error')
        valid = 1;
    }

    if(pass_regis.value.length < 8){
        e.preventDefault()
        pass_regis_error.innerText = "Password must be at least 8 characters"
        inputbox_pass_regis.classList.add('error')
    }
    else{
        pass_regis_error.innerText = ""
        inputbox_pass_regis.classList.remove('error')
        tempvalid1 = 1;
    }

    if(!confPass.value.match(pass_regis.value)){
        e.preventDefault()
        confPass_error.innerText = "Please input the same password"
        inputbox_confPass.classList.add('error')
    }
    else{
        confPass_error.innerText = ""
        inputbox_confPass.classList.remove('error')
        tempvalid2 = 1;
    }
    console.log(tempvalid1);
    console.log(valid);
    console.log(tempvalid2);
    console.log(tempvalid3);
    if(tempvalid1 == valid == tempvalid3== tempvalid2 == 1){
        window.location.href = "../../../BitHub/HCI_RevisiHome_Jeisen/index.html"; 
    }
})
