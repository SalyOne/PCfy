

    window.onload = function(){
    let url = "https://pcfy.redberryinternship.ge/api/teams\n";
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
    const myPromise = new Promise(function(resolve, reject) {
        // Resolve with "Done!" after 5 seconds
        setTimeout(() => {
            resolve("Done!");
        }, 5000);
    }).then(data => {
        console.log(data); // "Done!"
    });

    ajax("https://pcfy.redberryinternship.ge/api/teams\n", function (res){
        // console.log(res)
        let parent = document.getElementById("team");
        let data = JSON.parse(res);
        // let a = {...data}
        for (let item  of data.data){
            let opt = document.createElement('option');
            opt.setAttribute("value",item.id);
            opt.innerHTML=item.name;
            parent.appendChild(opt)
        }
    })




    let team = document.getElementById("team")
    let position = document.getElementById("position")
    let teams = document.querySelectorAll("#team option")

    team.addEventListener("change",  (each)=>{
        let teamId = each.target.options[each.target.selectedIndex].value;
        if(position.classList.contains("disabled")){
            position.classList.remove("disabled")
        }

        ajax("https://pcfy.redberryinternship.ge/api/positions\n", function (res){
            // console.log(res)
            let parent = document.getElementById("position");
            let data = JSON.parse(res);
            // let a = {...data}
            for (let item  of data.data){
                let opt;
                if (item.team_id == teamId){
                   opt = document.createElement('option');
                    opt.innerHTML=item.name;
                    opt.setAttribute("value",item.id);
                    opt.setAttribute("team-id", item.team_id);
                    parent.appendChild(opt);
                }
            }
        })
        let positions = document.querySelectorAll("#position option");

            positions.forEach((eachPos)=>{
                console.log(eachPos)
                eachPos.remove();
            })
        // positions.forEach((eachPos)=>{
        //     // console.log(eachPos)
        //     if(eachPos.classList.contains("removeOption")){
        //         eachPos.classList.remove("removeOption")
        //     }
        // })
        // positions.forEach((eachPos)=>{
        //     // console.log(eachPos.getAttribute("team-id"))
        //     let posid=eachPos.getAttribute("team-id")
        //         if(teamId !== posid){
        //             eachPos.classList.add("removeOption");
        //         }
        //         else {
        //             position.value= eachPos.getAttribute('value');
        //         }
        // })
    })
}