
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
        const team = document.getElementById('team');
        const pos = document.getElementById('position');



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
                    imageCont.classList.remove("invalid");
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


            const name = document.querySelector('input[name="name"]').value;
            const surname = document.querySelector('input[name="surname"]').value;
            const teamId = team.options[team.selectedIndex].value;
            const posId = pos.options[pos.selectedIndex].value;
            const phone = document.querySelector('input[name="phone_number"]').value;
            const email = document.getElementById('email');
            const files = document.getElementById('file');
            const laptop_name = document.getElementById('laptop-name');
            const laptop_brand = document.getElementById('laptop-brand');
            const cpu = document.getElementById('cpu');
            const cpu_core = document.getElementById('cpu-core');
            const cpu_stream = document.getElementById('cpu-stream');
            const ram = document.getElementById('ram');
            const date = document.getElementById('date');
            const price = document.getElementById('price');
            const memory = document.querySelector('input[name="memory"]:checked');
            const state = document.querySelector('input[name="state"]:checked');

            const token = "a30757c352d7599efa2c95edf064574e";

            let inv = document.querySelectorAll(".invalid");
            if (inv.length === 0) {
                const aa=new FormData(employeeForm);
                // console.log(...aa)

                fetch('https://pcfy.redberryinternship.ge/api/laptop/create',{
                    method:"POST",
                    headers:{
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(
                {
                            "name": name,
                            "surname": surname,
                            "email": email,
                            "team_id": teamId,
                            "position_id ": posId,
                            "phone_number ": phone,
                            "token": token,
                            "laptop_name":laptop_name,
                            "laptop_image":files,
                            "laptop_brand_id":laptop_brand,
                            "laptop_cpu":cpu,
                            "laptop_cpu_cores":cpu_core,
                            "laptop_cpu_threads":cpu_stream,
                            "laptop_ram":ram,
                            "laptop_hard_drive_type":memory,
                            "laptop_state":state,
                            "laptop_purchase_date":date,
                            "laptop_price ":price,

                        }
                    ),
                })
                    .then(res => res.json())
                    .then(data=>console.log(data))
                    .then(err => console.log(err))
            }

        })
    })
})()
