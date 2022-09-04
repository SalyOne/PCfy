
(function () {
    document.addEventListener("DOMContentLoaded", function() {
        let container = document.querySelectorAll(".form-container");

        if (container.length === 0) {
            return;
        }
        const formButton = document.getElementById("form-button");
        let first = document.querySelector('.first-page');
        let second = document.querySelector('.second-page');
        let next = document.querySelector('.next-page');
        let back = document.querySelector('.back');
        let pagination = document.querySelector('.pagination');
        let paginationItem = document.querySelectorAll('.pagination li');


        formButton.addEventListener('click', () => {
            let inv = document.querySelectorAll(".invalid");

            if (inv.length === 0) {
                first.classList.remove("active")
                second.classList.add("active");
            }


        })

    })
})()