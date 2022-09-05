
(function () {
    document.addEventListener("DOMContentLoaded", function() {
        let container = document.querySelectorAll(".form-container");
        if (container.length == 0) {
            return;
        }

        const employeeForm = document.getElementById("main-form");

        employeeForm.addEventListener("submit", function (e){

            e.preventDefault();

            let inv = document.querySelectorAll(".invalid");
            if (inv.length === 0) {
                // console.log("Asdsa");
            }
        })

    })
})()
