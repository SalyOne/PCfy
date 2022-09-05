
(function () {
    document.addEventListener("DOMContentLoaded", function() {
        let container = document.querySelectorAll(".form-container");

        if (container.length === 0) {
            return;
        }
        const formButton = document.getElementById("form-button");
        let first = document.querySelector('.first-page');
        let second = document.querySelector('.second-page');
        let back = document.querySelector('.back');
        let paginationItemFirst = document.querySelector('.pagination .first');
        let paginationItemSecond = document.querySelector('.pagination .second');


        formButton.addEventListener('click', () => {
            let inv = document.querySelectorAll(".invalid");
            if (inv.length === 0) {
                first.classList.remove("active")
                second.classList.add("active");
                paginationItemFirst.classList.remove("active")
                paginationItemSecond.classList.add("active");
            }
        })
        back.addEventListener('click', () => {
                second.classList.remove("active")
                first.classList.add("active");
                paginationItemSecond.classList.remove("active")
                paginationItemFirst.classList.add("active");
        })
    })
})()