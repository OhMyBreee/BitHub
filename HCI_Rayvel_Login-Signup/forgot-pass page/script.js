const email = document.getElementById('email')
const email_error = document.getElementById('email_error')
const form = document.getElementById('form')
const inputbox_email = document.querySelector('.inputbox')



var email_check = /^([A-Za-z0-9_\-\.])+@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/

form.addEventListener('submit', e => {
    e.preventDefault();
    if (!email.value.match(email_check)) {
        email_error.innerText = "Please input a valid email address";
        inputbox_email.classList.add('error');
    } else {
        email_error.innerText = ""
        inputbox_email.classList.remove('error');
        console.log("Valid email, redirecting...");
        window.location.href = "../../HCI_RevisiHome_Jeisen/index.html"; 
    }
})
