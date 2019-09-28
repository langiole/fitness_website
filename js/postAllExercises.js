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
                document.getElementById("req").innerHTML=`<h1>Status Code: ${textStatus}</h1> <h2>Data: <br>${JSON.stringify(data)}</h2>`;
            },
            error: function(jqXHR,textStatus,error){
                document.getElementById("req").innerText=`<h1>Status Code: ${textStatus}</h1> <h1>Error: <br>${error}</h1>`;
            }
        } 
        );
          });
    });
}
//array of all the muscles we have data on
let muscle=["abs","arms","chest","back","legs"];

//Iterate each muscle and calling the postMuscle() to make a post request for all the exercises
muscle.forEach(e=> postMuscle(e));