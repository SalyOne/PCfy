
(function () {
    document.addEventListener("DOMContentLoaded", function() {
        let container = document.querySelectorAll(".page-data-list");

        if (container.length === 0) {
            return;
        }
        function ajax(url,callback){
            let xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.onload = function (){
                callback(xhr.responseText);
            }
            xhr.onerror = function (){
                console.log('onerror');
            }
            xhr.send();
        }
//a30757c352d7599efa2c95edf064574e token

        ajax("https://pcfy.redberryinternship.ge/api/laptops?token=a30757c352d7599efa2c95edf064574e\n", function (res){

                    // let parent = document.querySelectorAll(".list-item");
                    let parent = document.querySelector(".data-list-container");
                    let data = JSON.parse(res);
                    // console.log(res)
            let i=0;
                    for (let item  of data.data){
                        // console.log(item)
                        //list item
                        let itm= document.createElement('div');
                        itm.setAttribute('class','list-item');
                        //image-container
                        let  imageCont= document.createElement('div');
                        imageCont.setAttribute('class','image-container');
                        itm.appendChild(imageCont);
                        //image
                        // let img= document.createElement('img');
                        // img.setAttribute('src','https://pcfy.redberryinternship.ge/api/laptop'+item.laptop.image + ''); // problem
                        // img.setAttribute('alt','laptop image'); // problem
                        // imageCont.appendChild(img);

                        //text side
                        let infoSide= document.createElement('div');
                        infoSide.setAttribute('class','info-side');
                        itm.appendChild(infoSide);
                        //name
                        let person= document.createElement('h3');
                        person.setAttribute('class','person-name')
                        person.innerHTML = item.user.name + " " +item.user.surname;
                        infoSide.appendChild(person);
                        //laptop
                        let laptop= document.createElement('p');
                        laptop.setAttribute('class','laptop-name')
                        laptop.innerHTML = item.laptop.name;
                        infoSide.appendChild(laptop);
                        //see more

                        let more= document.createElement('span');
                        //problem
                        more.innerHTML="მეტის ნახვა";
                        more.setAttribute('class','see-more');
                        more.setAttribute('inner_id', ""+i+"");
                        i++;
                        infoSide.appendChild(more);

                        parent.appendChild(itm);
                    }
                })

    //
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
    })
})()