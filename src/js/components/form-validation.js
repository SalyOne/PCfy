
//validate for email
const employeeForm = document.getElementById("main-form");
const formButton = document.getElementById("form-button");
const formEmail = document.getElementById("email");
const formPhone = document.getElementById("phone");

function ValidateEmail(inputText) {
    let mailformat = /^\w+([\.-]?\w+)*@(redberry.ge)+$/;
    if(inputText.value.match(mailformat))
    {
        if(formEmail.classList.contains("invalid")){
            formEmail.classList.remove("invalid");
        }
        return true;
    }
    else
    {
        if(!formEmail.classList.contains("invalid")){
            formEmail.classList.add("invalid");
        }
        return false;
    }
}
function ValidatePhone(inputText) {
    let phoneFormat= /^(\+?995)?(79\d{7}|5\d{8})$/;

    if(inputText.value.match(phoneFormat)) {


        //add thiis class to paarent div .input-wrapper
        if(formPhone.classList.contains("invalid")){
            formPhone.classList.remove("invalid");
        }
        return true;
    }
    else {
        if(!formPhone.classList.contains("invalid")){
            formPhone.classList.add("invalid");
        }
        return false;
    }
}
employeeForm.addEventListener('submit', ()=>{
    event.preventDefault();
    ValidateEmail(formEmail);
    ValidatePhone(formPhone);
    console.log(formPhone.valueOf());
})