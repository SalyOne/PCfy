/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./components/form-validation */ "./src/js/components/form-validation.js");

__webpack_require__(/*! ./components/save-information */ "./src/js/components/save-information.js");

__webpack_require__(/*! ./components/get-info */ "./src/js/components/get-info.js");

__webpack_require__(/*! ./components/data-list-page */ "./src/js/components/data-list-page.js");

__webpack_require__(/*! ./components/dropzone */ "./src/js/components/dropzone.js");

__webpack_require__(/*! ./components/change-pages */ "./src/js/components/change-pages.js");

__webpack_require__(/*! ./components/send-info */ "./src/js/components/send-info.js");

/***/ }),

/***/ "./src/js/components/change-pages.js":
/*!*******************************************!*\
  !*** ./src/js/components/change-pages.js ***!
  \*******************************************/
/***/ (() => {

(function () {
  document.addEventListener("DOMContentLoaded", function () {
    var container = document.querySelectorAll(".form-container");

    if (container.length === 0) {
      return;
    }

    var formButton = document.getElementById("form-button");
    var first = document.querySelector('.first-page');
    var second = document.querySelector('.second-page');
    var back = document.querySelector('.back');
    var paginationItemFirst = document.querySelector('.pagination .first');
    var paginationItemSecond = document.querySelector('.pagination .second');
    formButton.addEventListener('click', function () {
      var inv = document.querySelectorAll(".invalid");

      if (inv.length === 0) {
        first.classList.remove("active");
        second.classList.add("active");
        paginationItemFirst.classList.remove("active");
        paginationItemSecond.classList.add("active");
      }
    });
    back.addEventListener('click', function () {
      second.classList.remove("active");
      first.classList.add("active");
      paginationItemSecond.classList.remove("active");
      paginationItemFirst.classList.add("active");
    });
  });
})();

/***/ }),

/***/ "./src/js/components/data-list-page.js":
/*!*********************************************!*\
  !*** ./src/js/components/data-list-page.js ***!
  \*********************************************/
/***/ (() => {

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(function () {
  document.addEventListener("DOMContentLoaded", function () {
    var container = document.querySelectorAll(".page-data-list");

    if (container.length === 0) {
      return;
    }

    function ajax(url, callback) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url);

      xhr.onload = function () {
        callback(xhr.responseText);
      };

      xhr.onerror = function () {
        console.log('onerror');
      };

      xhr.send();
    } //a30757c352d7599efa2c95edf064574e token


    ajax("https://pcfy.redberryinternship.ge/api/laptops?token=a30757c352d7599efa2c95edf064574e\n", function (res) {
      // let parent = document.querySelectorAll(".list-item");
      var parent = document.querySelector(".data-list-container");
      var data = JSON.parse(res); // console.log(res)

      var i = 0;

      var _iterator = _createForOfIteratorHelper(data.data),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;
          // console.log(item)
          //list item
          var itm = document.createElement('div');
          itm.setAttribute('class', 'list-item'); //image-container

          var imageCont = document.createElement('div');
          imageCont.setAttribute('class', 'image-container');
          itm.appendChild(imageCont); //image
          // let img= document.createElement('img');
          // img.setAttribute('src','https://pcfy.redberryinternship.ge/api/laptop'+item.laptop.image + ''); // problem
          // img.setAttribute('alt','laptop image'); // problem
          // imageCont.appendChild(img);
          //text side

          var infoSide = document.createElement('div');
          infoSide.setAttribute('class', 'info-side');
          itm.appendChild(infoSide); //name

          var person = document.createElement('h3');
          person.setAttribute('class', 'person-name');
          person.innerHTML = item.user.name + " " + item.user.surname;
          infoSide.appendChild(person); //laptop

          var laptop = document.createElement('p');
          laptop.setAttribute('class', 'laptop-name');
          laptop.innerHTML = item.laptop.name;
          infoSide.appendChild(laptop); //see more

          var more = document.createElement('span'); //problem

          more.innerHTML = "მეტის ნახვა";
          more.setAttribute('class', 'see-more');
          more.setAttribute('inner_id', "" + i + "");
          i++;
          infoSide.appendChild(more);
          parent.appendChild(itm);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }); //
    //     const link = document.querySelectorAll(".see-more");
    //     const image = document.getElementById("lap-image");
    //     const name = document.getElementById("info-name");
    //     const arrow = document.getElementById("popup-arrow");
    //     const eachLaptop = document.getElementById("each-laptop");
    //     link.forEach(each=>{
    //         console.log("asdsss")
    //         console.log(each)
    //         each.addEventListener("click",(e)=>{
    //             e.preventDefault()
    //             let id = each.getAttribute('inner_id')
    //             eachLaptop.classList.add("active");
    //             let  url="https://pcfy.redberryinternship.ge/api/laptop/"+id+"?token=a30757c352d7599efa2c95edf064574e"
    //             console.log(url)
    //             ajax(url, function (res){
    //
    //                 // let parent = document.querySelectorAll(".list-item");
    //                 let parent = document.querySelector(".data-list-container");
    //                 let data = JSON.parse(res);
    //                 // console.log(res);
    //                 for (let item  of data.data){
    //                     // console.log(item)
    //                     // image.setAttribute("src",  item.file);
    //                     name.innerHTML= item.name
    //                 }
    //             })
    //         })
    //
    //
    //     })
    //
    //     arrow.addEventListener('click', () => {
    //         eachLaptop.classList.remove("active");
    //     })
  });
})();

/***/ }),

/***/ "./src/js/components/dropzone.js":
/*!***************************************!*\
  !*** ./src/js/components/dropzone.js ***!
  \***************************************/
/***/ (() => {

(function () {
  document.addEventListener("DOMContentLoaded", function () {
    var container = document.querySelectorAll(".form-container");

    if (container.length === 0) {
      return;
    }

    var dragArea = document.querySelector('.preview-image-container');
    var file = document.querySelector('#file');
    var text = document.querySelector('.motionText');
    var brouseBtn = document.querySelector('#dropA');
    var myFiles;
    brouseBtn.addEventListener('click', function () {
      file.click();
    });
    file.addEventListener('change', function () {
      // console.log("aa")
      myFiles = this.files[0];
      dragArea.classList.add('dropped');
      showfile();
    });
    dragArea.addEventListener('dragover', function (e) {
      e.preventDefault();
      dragArea.classList.add('dropped');
      text.innerHTML = 'ჩააგდე ან ატვირთე ლეპტოპის ფოტო';
    });
    dragArea.addEventListener('dragleave', function () {
      dragArea.classList.remove('dropped');
      text.innerHTML = 'ჩააგდე და ატვირთე ლეპტოპის ფოტო';
    });
    dragArea.addEventListener('drop', function (e) {
      e.preventDefault();
      myFiles = e.dataTransfer.files[0];
      showfile();
    });

    function showfile() {
      var fileType = myFiles.type;
      var arr = ['image/png', 'image/jpeg', 'image/jpg'];

      if (arr.includes(fileType)) {
        var filereader = new FileReader();

        filereader.onload = function () {
          var imgUrl = filereader.result;
          var img = "<img src=\"".concat(imgUrl, "\" alt=\"\">");
          dragArea.innerHTML = img;
        };

        filereader.readAsDataURL(myFiles);
      } else {
        alert('format doesnt match');
      }
    }
  });
})();

/***/ }),

/***/ "./src/js/components/form-validation.js":
/*!**********************************************!*\
  !*** ./src/js/components/form-validation.js ***!
  \**********************************************/
/***/ (() => {

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(function () {
  document.addEventListener("DOMContentLoaded", function () {
    var container = document.querySelectorAll(".form-container");

    if (container.length == 0) {
      return;
    } //validate for email


    var employeeForm = document.getElementById("main-form");
    var formButton = document.getElementById("form-button");
    var formEmail = document.getElementById("email");
    var formPhone = document.getElementById("phone");
    var textFields = document.querySelectorAll(".first-page input[type=text]");
    var select = document.querySelector(".first-page #team"); //second-page

    var formButtonSubmit = document.getElementById("form-button-submit");
    var numberFields = document.querySelectorAll(".second-page .number");
    var selectFields = document.querySelectorAll(".second-page select");
    var laptopName = document.getElementById("laptop-name");
    var file = document.getElementById("file");
    var radioState = document.querySelectorAll('input[name="state"]');
    var radioMemory = document.querySelectorAll('input[name="memory"]');
    var imageCont = document.querySelector('.image-drop-container');
    var team = document.getElementById('team');
    var pos = document.getElementById('position');

    function ValidateForm(inputText) {
      var format, enoughtLength;

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
      } // let mailformat = /^\w+([\.-]?\w+)*@(redberry.ge)+$/;


      if (inputText.value.match(format) && enoughtLength || inputText.selectedIndex) {
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

    function validateLaptopInfo(inputInfo) {
      var format;

      if (inputInfo.classList.contains("number")) {
        format = /^[0-9]+$/;
      }

      if (inputInfo.getAttribute("id") === "laptop-name") {
        format = /^[\w!@#$%^&*()_+=]+$/;
      }

      if (inputInfo.value.match(format) && inputInfo.tagName.toLowerCase() !== "select" || inputInfo.selectedIndex) {
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

    function fileCheck(fl) {
      if (fl.value != "") {
        if (imageCont.classList.contains("invalid")) {
          imageCont.classList.remove("invalid");
        }
      } else {
        if (!imageCont.classList.contains("invalid")) {
          imageCont.classList.add("invalid");
        }
      }
    }

    formButton.addEventListener('click', function (e) {
      e.preventDefault();
      textFields.forEach(function (each) {
        ValidateForm(each);
      });
      ValidateForm(formEmail);
      ValidateForm(formPhone);
      ValidateForm(select);
    });
    formButtonSubmit.addEventListener('click', function (e) {
      e.preventDefault();
      numberFields.forEach(function (each) {
        validateLaptopInfo(each);
      });
      validateLaptopInfo(laptopName);
      selectFields.forEach(function (each) {
        validateLaptopInfo(each);
      });

      var _iterator = _createForOfIteratorHelper(radioMemory),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var each = _step.value;

          if (each.checked) {
            if (each.parentElement.parentElement.classList.contains("invalid")) {
              each.parentElement.parentElement.classList.remove("invalid");
            }

            break;
          } else {
            if (!each.parentElement.parentElement.classList.contains("invalid")) {
              each.parentElement.parentElement.classList.add("invalid");
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var _iterator2 = _createForOfIteratorHelper(radioState),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _each = _step2.value;

          if (_each.checked) {
            if (_each.parentElement.parentElement.classList.contains("invalid")) {
              _each.parentElement.parentElement.classList.remove("invalid");
            }

            break;
          } else {
            if (!_each.parentElement.parentElement.classList.contains("invalid")) {
              _each.parentElement.parentElement.classList.add("invalid");
            }
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      fileCheck(file);
      var name = document.querySelector('input[name="name"]').value;
      var surname = document.querySelector('input[name="surname"]').value;
      var teamId = team.options[team.selectedIndex].value;
      var posId = pos.options[pos.selectedIndex].value;
      var phone = document.querySelector('input[name="phone_number"]').value;
      var email = document.getElementById('email');
      var files = document.getElementById('file');
      var laptop_name = document.getElementById('laptop-name');
      var laptop_brand = document.getElementById('laptop-brand');
      var cpu = document.getElementById('cpu');
      var cpu_core = document.getElementById('cpu-core');
      var cpu_stream = document.getElementById('cpu-stream');
      var ram = document.getElementById('ram');
      var date = document.getElementById('date');
      var price = document.getElementById('price');
      var memory = document.querySelector('input[name="memory"]:checked');
      var state = document.querySelector('input[name="state"]:checked');
      var token = "a30757c352d7599efa2c95edf064574e";
      var inv = document.querySelectorAll(".invalid");

      if (inv.length === 0) {
        var aa = new FormData(employeeForm); // console.log(...aa)

        fetch('https://pcfy.redberryinternship.ge/api/laptop/create', {
          method: "POST",
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify({
            "name": name,
            "surname": surname,
            "email": email,
            "team_id": teamId,
            "position_id ": posId,
            "phone_number ": phone,
            "token": token,
            "laptop_name": laptop_name,
            "laptop_image": files,
            "laptop_brand_id": laptop_brand,
            "laptop_cpu": cpu,
            "laptop_cpu_cores": cpu_core,
            "laptop_cpu_threads": cpu_stream,
            "laptop_ram": ram,
            "laptop_hard_drive_type": memory,
            "laptop_state": state,
            "laptop_purchase_date": date,
            "laptop_price ": price
          })
        }).then(function (res) {
          return res.json();
        }).then(function (data) {
          return console.log(data);
        }).then(function (err) {
          return console.log(err);
        });
      }
    });
  });
})();

/***/ }),

/***/ "./src/js/components/get-info.js":
/*!***************************************!*\
  !*** ./src/js/components/get-info.js ***!
  \***************************************/
/***/ (() => {

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(function () {
  document.addEventListener("DOMContentLoaded", function () {
    var container = document.querySelectorAll(".form-container");

    if (container.length == 0) {
      return;
    }

    function ajax(url, callback) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url);

      xhr.onload = function () {
        callback(xhr.responseText);
      };

      xhr.onerror = function () {
        console.log('onerror');
      };

      xhr.send();
    }

    var myPromise = new Promise(function (resolve, reject) {
      // Resolve with "Done!" after 5 seconds
      setTimeout(function () {
        resolve("Done!");
      }, 5000);
    }).then(function (data) {// console.log(data); // "Done!"
    });
    ajax("https://pcfy.redberryinternship.ge/api/teams\n", function (res) {
      // console.log(res)
      var parent = document.getElementById("team");
      var data = JSON.parse(res); // let a = {...data}

      var _iterator = _createForOfIteratorHelper(data.data),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;
          var opt = document.createElement('option');
          opt.setAttribute("value", item.id);
          opt.innerHTML = item.name;
          parent.appendChild(opt);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    });
    var team = document.getElementById("team");
    var position = document.getElementById("position");
    var teams = document.querySelectorAll("#team option");
    team.addEventListener("change", function (each) {
      var teamId = each.target.options[each.target.selectedIndex].value;

      if (position.classList.contains("disabled")) {
        position.classList.remove("disabled");
      }

      ajax("https://pcfy.redberryinternship.ge/api/positions\n", function (res) {
        // console.log(res)
        var parent = document.getElementById("position");
        var data = JSON.parse(res); // let a = {...data}

        var _iterator2 = _createForOfIteratorHelper(data.data),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var item = _step2.value;
            var opt = void 0;

            if (item.team_id == teamId) {
              opt = document.createElement('option');
              opt.innerHTML = item.name;
              opt.setAttribute("value", item.id);
              opt.setAttribute("team-id", item.team_id);
              parent.appendChild(opt);
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      });
      var positions = document.querySelectorAll("#position option");
      positions.forEach(function (eachPos) {
        // console.log(eachPos)
        eachPos.remove();
      });
    });
    ajax("https://pcfy.redberryinternship.ge/api/cpus\n", function (res) {
      // console.log(res)
      var parent = document.getElementById("cpu");
      var data = JSON.parse(res); // let a = {...data}

      var _iterator3 = _createForOfIteratorHelper(data.data),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var item = _step3.value;
          var opt = document.createElement('option');
          opt.setAttribute("value", item.id);
          opt.innerHTML = item.name;
          parent.appendChild(opt);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    });
    ajax("https://pcfy.redberryinternship.ge/api/brands\n", function (res) {
      // console.log(res)
      var parent = document.getElementById("laptop-brand");
      var data = JSON.parse(res); // let a = {...data}

      var _iterator4 = _createForOfIteratorHelper(data.data),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var item = _step4.value;
          var opt = document.createElement('option');
          opt.setAttribute("value", item.id);
          opt.innerHTML = item.name;
          parent.appendChild(opt);
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    });
  });
})();

/***/ }),

/***/ "./src/js/components/save-information.js":
/*!***********************************************!*\
  !*** ./src/js/components/save-information.js ***!
  \***********************************************/
/***/ (() => {

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

/***/ }),

/***/ "./src/js/components/send-info.js":
/*!****************************************!*\
  !*** ./src/js/components/send-info.js ***!
  \****************************************/
/***/ (() => {

(function () {
  document.addEventListener("DOMContentLoaded", function () {
    var container = document.querySelectorAll(".form-container");

    if (container.length == 0) {
      return;
    }

    var employeeForm = document.getElementById("main-form");
    employeeForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var inv = document.querySelectorAll(".invalid");

      if (inv.length === 0) {// console.log("Asdsa");
      }
    });
  });
})();

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/assets/dist/app": 0,
/******/ 			"assets/dist/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkpcfy"] = self["webpackChunkpcfy"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["assets/dist/app"], () => (__webpack_require__("./src/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["assets/dist/app"], () => (__webpack_require__("./src/scss/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;