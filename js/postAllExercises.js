//make post request to our api for each exercise in muscle.json
function postMuscle(muscle){
$.getJSON(`../data/${muscle}.json`,exerciseArr=>{
    exerciseArr[`${muscle}`].forEach(e => {
        $.ajax("http://localhost:8080/api/exercises",{
            data: JSON.stringify({
                "name": e.Exercise,
                "description": e.Descriptions,
                "primary": `${muscle}`,
                "video_link": e.link,
                "secondary": e.Secondary,
            }),
            contentType : 'application/json',
            type: "POST",
            success: function(data,textStatus,jqXHR){
                let div= document.createElement("div");
                div.className="alert alert-success";
                div.innerHTML=`<h1>Status Code: <strong>${textStatus}</strong></h1>`;
                let h2=document.createElement("h2");
                h2.innerHTML=`<h2>Data: <br>${JSON.stringify(data)}</h2>`;
                document.getElementById("req").appendChild(div);
                document.getElementById("req").appendChild(h2);

            },
            error: function(jqXHR,textStatus,error){
                let div= document.createElement("div");
                div.className="alert alert-success";
                div.innerHTML=`<div class="alert alert-danger"><h1>Status Code: <strong${textStatus}</strong> <h1>Error: <br>${error}</h1></h1></div>`;
                document.getElementById("req").appendChild(div);
            }
        } 
        );
          });
    });
}
//array of all the muscles we have data on
let muscle=["abs","arms","chest","back","legs"];

//Iterate each muscle and creating a button for each that calls the postMuscle() to make a post request for all the exercises
muscle.forEach(e=> {
    let button= document.createElement("button");
    button.type="button";
    button.className="btn btn-primary mx-3";
    button.innerText=e;
    button.onclick=()=>postMuscle(e);
    document.getElementById("btns").appendChild(button);
});