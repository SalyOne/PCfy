
(function () {
    document.addEventListener("DOMContentLoaded", function() {
        let container = document.querySelectorAll(".form-container");
        if (container.length == 0) {
            return;
        }
//validate for email
        const employeeForm = document.getElementById("main-form");
        const formButton = document.getElementById("form-button");
        const formEmail = document.getElementById("email");
        const formPhone = document.getElementById("phone");
        const textFields = document.querySelectorAll(".first-page input[type=text]");
        const select = document.querySelector(".first-page #team");
//second-page
        const formButtonSubmit = document.getElementById("form-button-submit");
        const numberFields = document.querySelectorAll(".second-page .number");
        const selectFields = document.querySelectorAll(".second-page select");
        const laptopName = document.getElementById("laptop-name");
        const file = document.getElementById("file");
        const radioState = document.querySelectorAll('input[name="state"]');
        const radioMemory = document.querySelectorAll('input[name="memory"]');
        const imageCont = document.querySelector('.image-drop-container');

        function ValidateForm(inputText) {
            let format, enoughtLength;
            if (inputText.getAttribute("type") === "tel") {
                // format = /^(\+?995)?(79\d{7}|5\d{8})*$/g; // without whiiitespace
                format = /1?(\+?995)[\s]?\d{3}[\s]?\d{2}[\s]?\d{2}[\s]?\d{2}/; // with whitespace
                enoughtLength = true;
            }
            if (inputText.getAttribute("type") === "email") {
                format = /^\w+([\.-]?\w+)*@(redberry.ge)+$/;
                enoughtLength = true;
            }
            if (inputText.getAttribute("type") === "text") {
                format = /[\u10A0-\u10FF]/g;
                enoughtLength = inputText.value.length >= 2;
            }
            // let mailformat = /^\w+([\.-]?\w+)*@(redberry.ge)+$/;

            if ((inputText.value.match(format) && enoughtLength )||inputText.selectedIndex) {
                if (inputText.parentElement.classList.contains("invalid")) {
                    inputText.parentElement.classList.remove("invalid");
                }
                return true;
            } else {
                if (!inputText.parentElement.classList.contains("invalid")) {
                    inputText.parentElement.classList.add("invalid");
                }
                return false;
            }
        }
        function validateLaptopInfo(inputInfo){
            let format;

            if (inputInfo.classList.contains("number")) {
                format = /^[0-9]+$/;
            }
            if (inputInfo.getAttribute("id") === "laptop-name") {
                format =/^[\w!@#$%^&*()_+=]+$/;
            }


            if ((inputInfo.value.match(format) && inputInfo.tagName.toLowerCase() !== "select")|| inputInfo.selectedIndex) {

                if (inputInfo.parentElement.classList.contains("invalid")) {
                    inputInfo.parentElement.classList.remove("invalid");
                }
                return true;
            } else {
                if (!inputInfo.parentElement.classList.contains("invalid")) {
                    inputInfo.parentElement.classList.add("invalid");
                }
                return false;
            }
        }
        function fileCheck(fl){
            if(fl.value != "") {
                if (imageCont.classList.contains("invalid")) {
                    fimageContove("invalid");
                }
            }
            else {
                if (!imageCont.classList.contains("invalid")) {
                    imageCont.classList.add("invalid");
                }
            }
        }

        formButton.addEventListener('click', (e) => {
            e.preventDefault()
            textFields.forEach((each) => {
                ValidateForm(each);
            })
            ValidateForm(formEmail);
            ValidateForm(formPhone);
            ValidateForm(select);

        })
        formButtonSubmit.addEventListener('click', (e) => {

            e.preventDefault()
            numberFields.forEach((each) => {
                validateLaptopInfo(each);
            })
            validateLaptopInfo(laptopName);

            selectFields.forEach((each) => {
                validateLaptopInfo(each);
            })
            for (let each of radioMemory){
                if(each.checked){
                    if (each.parentElement.parentElement.classList.contains("invalid")) {
                        each.parentElement.parentElement.classList.remove("invalid");
                    }
                    break;
                }
                else {
                    if (!each.parentElement.parentElement.classList.contains("invalid")) {
                        each.parentElement.parentElement.classList.add("invalid");
                    }
                }
            }
            for (let each of radioState){
                if(each.checked){
                    if (each.parentElement.parentElement.classList.contains("invalid")) {
                        each.parentElement.parentElement.classList.remove("invalid");
                    }
                    break;
                }
                else {
                    if (!each.parentElement.parentElement.classList.contains("invalid")) {
                        each.parentElement.parentElement.classList.add("invalid");
                    }
                }
            }
            fileCheck(file);
            let inv = document.querySelectorAll(".invalid");
            if (inv.length === 0) {
                employeeForm.submit();
            }

        })
        //         formButton.addEventListener('click', (e) => {
//             e.preventDefault();
//             textFields.forEach((each) => {
//                 ValidateForm(each);
//             })
//             ValidateForm(formEmail);
//             ValidateForm(formPhone);
//             ValidateForm(select);
//
//         })
    })
})()
