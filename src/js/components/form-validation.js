//
//
// (function () {
//     document.addEventListener("DOMContentLoaded", function() {
//         let container = document.querySelectorAll(".form-container");
//         if (container.length == 0) {
//             return;
//         }
// //validate for email
//         const employeeForm = document.getElementById("main-form");
//         const formButton = document.getElementById("form-button");
//         const formEmail = document.getElementById("email");
//         const formPhone = document.getElementById("phone");
//         const textFields = document.querySelectorAll("input[type=text]");
//         const select = document.querySelector(".first-page #team");
//
//         function ValidateForm(inputText) {
//             let format, enoughtLength;
//             if (inputText.getAttribute("type") === "tel") {
//                 // format = /^(\+?995)?(79\d{7}|5\d{8})*$/g; // without whiiitespace
//                 format = /1?(\+?995)[\s]?\d{3}[\s]?\d{2}[\s]?\d{2}[\s]?\d{2}/; // with whitespace
//                 enoughtLength = true;
//             }
//             if (inputText.getAttribute("type") === "email") {
//                 format = /^\w+([\.-]?\w+)*@(redberry.ge)+$/;
//                 enoughtLength = true;
//             }
//
//             if (inputText.getAttribute("type") === "text") {
//                 format = /[\u10A0-\u10FF]/g;
//                 // console.log("aaaaaaa")
//                 // console.log(inputText.value.length)
//                 enoughtLength = inputText.value.length >= 2;
//             }
//             // console.log(format)
//             // console.log(inputText.value.length)
//             // let mailformat = /^\w+([\.-]?\w+)*@(redberry.ge)+$/;
//             console.log(inputText.selectedIndex)
//             if (inputText.selectedIndex) {
//                 if (inputText.parentElement.classList.contains("invalid")) {
//                     inputText.parentElement.classList.remove("invalid");
//                 }
//             } else {
//                 if (!inputText.parentElement.classList.contains("invalid")) {
//                     inputText.parentElement.classList.add("invalid");
//                 }
//             }
//             if (inputText.value.match(format) && enoughtLength) {
//                 if (inputText.parentElement.classList.contains("invalid")) {
//                     inputText.parentElement.classList.remove("invalid");
//                 }
//                 return true;
//             } else {
//                 if (!inputText.parentElement.classList.contains("invalid")) {
//                     inputText.parentElement.classList.add("invalid");
//                 }
//                 return false;
//             }
//         }
//
//
// // function ValidatePhone(inputText) {
// //     console.log()
// //     let phoneFormat= /^(\+?995)?(79\d{7}|5\d{8})$/;
// //
// //     if(inputText.value.match(phoneFormat)) {
// //
// //         //add thiis class to paarent div .input-wrapper
// //         if(formPhone.parentElement.classList.contains("invalid")){
// //             formPhone.classList.remove("invalid");
// //         }
// //         return true;
// //     }
// //     else {
// //         if(!formPhone.parentElement.classList.contains("invalid")){
// //             formPhone.parentElement.classList.add("invalid");
// //         }
// //         return false;
// //     }
// // }
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
//     })
//     })()




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
                // console.log("aaaaaaa")
                // console.log(inputText.value.length)
                enoughtLength = inputText.value.length >= 2;
            }
            // console.log(format)
            // console.log(inputText.value.length)
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

        formButton.addEventListener('click', (e) => {
            e.preventDefault()
            textFields.forEach((each) => {
                ValidateForm(each);
            })
            ValidateForm(formEmail);
            ValidateForm(formPhone);
            ValidateForm(select);

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
