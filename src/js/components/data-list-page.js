
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
        let parent = document.querySelectorAll(".data-list-container")

            ajax("https://pcfy.redberryinternship.ge/api/laptops?token=a30757c352d7599efa2c95edf064574e\n", function (res){

                // let parent = document.querySelectorAll(".list-item");
                let data = JSON.parse(res); console.log(res)
                for (let item  of data.data){
                    console.log(item)
                    //list item
                    let itm= document.createElement('div');
                    itm.setAttribute('class','list-item');
                    //image-container
                    let  imageCont= document.createElement('div');
                    imageCont.setAttribute('class','image-container');
                    itm.appendChild(imageCont);
                    //image link
                    let imgLink= document.createElement('a');
                    imgLink.setAttribute('href','https://pcfy.redberryinternship.ge/api/laptop/'+item.laptop.id+'?token=a30757c352d7599efa2c95edf064574e');
                    imageCont.appendChild(imgLink);
                    //image
                    let img= document.createElement('img');
                    imgLink.setAttribute('src','https://pcfy.redberryinternship.ge/api/laptop/'+item.laptop.image + ''); // problem
                    imgLink.setAttribute('alt','laptop image'); // problem
                    imgLink.appendChild(img);

                    //text side

                    let infoSide= document.createElement('div');
                    infoSide.setAttribute('class','info-side');
                    //name
                    let person= document.createElement('h3');
                    person.setAttribute('class','person-name')
                    person.innerHTML = item.user.name;
                    infoSide.appendChild(person);
                    //laptop
                    let laptop= document.createElement('h3');
                    laptop.setAttribute('class','laptop-name')
                    person.innerHTML = item.user.surname;
                    infoSide.appendChild(laptop);
                    //see more

                    let more= document.createElement('a');
                    more.setAttribute('href','https://pcfy.redberryinternship.ge/api/laptop/'+item.laptop.id+'?token=a30757c352d7599efa2c95edf064574e');
                    infoSide.appendChild(more);



                    parent.appendChild(itm);
                    parent.appendChild(infoSide);
                }
            })


    })
})()