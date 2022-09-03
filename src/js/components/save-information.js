// //dropdown
//
//
// (function () {
//
//     const employeeForm = document.getElementById("main-form");;
//     const formButton = document.getElementById("form-button");
// let formInputs = document.querySelectorAll("input");
//
// // console.log(formInputs)
//     function setCookie(c_name, value, exdays) {
//         let exdate = new Date();
//         exdate.setDate(exdate.getDate() + exdays);
//         let c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
//         document.cookie = c_name + "=" + c_value;
//     }
//
//     function getCookie(c_name) {
//         let c_value = document.cookie;
//         let c_start = c_value.indexOf(" " + c_name + "=");
//         if (c_start == -1) {
//             c_start = c_value.indexOf(c_name + "=");
//         }
//         if (c_start == -1) {
//             c_value = null;
//         } else {
//             c_start = c_value.indexOf("=", c_start) + 1;
//             let c_end = c_value.indexOf(";", c_start);
//             if (c_end == -1) {
//                 c_end = c_value.length;
//             }
//             c_value = unescape(c_value.substring(c_start, c_end));
//         }
//         return c_value;
//     }
//
//     function saveValue(input) {
//         // console.log("save value:")
//         // console.log(input)
//         let name = input.getAttribute('name');
//         let value = input.value;
//         setCookie(name,value);
//     }
//
//     function getValue(input) {
//     let name = input.getAttribute('name');
//     let value = getCookie(name);
//     // console.log(value)
//     if(value != null && value != "" ) {
//         return value;
//     }
// }
//
// formInputs.forEach((each)=>{
//     let valuse = getValue(each);
//      console.log(valuse)
//     each.value= valuse;
// });
//     formInputs.forEach((each)=>{
//         each.addEventListener("keyup",(aa)=>{
//             console.log(each)
//             if(aa.value != '' ) {
//                 // console.log("save in function")
//                 console.log(aa.target);
//                 saveValue(aa.target);
//             }
//         })
//     });
//
//
// })();
