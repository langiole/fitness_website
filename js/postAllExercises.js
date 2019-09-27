$.getJSON('../data/abs.json',exerciseArr=>{
    exerciseArr["abs"].forEach(e => {
        $.ajax("http://localhost:8080/api/exercises",{
            data: JSON.stringify({
                "name": e.Exercise,
                "description": e.Descriptions,
                "primary": "abs",
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
/*
$.ajax(url, {
    data : JSON.stringify(myJSObject),
    contentType : 'application/json',
    type : 'POST',
$.getJSON('../data/chest.json',exerciseArr=>{
    exerciseArr["chest"].forEach(e => {
        $.post("http://localhost:8080/api/exercises", 
        {
            name: e.Exercise,
            description: e.Descriptions,
            primary_muscle: "chest",
            secondary_muscle: e.Secondary,


        },(data, status)=>{
            alert("Data: " + data + "\nStatus: " + status);
          })
    });
});

$.getJSON('../data/arms.json',exerciseArr=>{
    exerciseArr["arms"].forEach(e => {
        $.post("http://localhost:8080/api/exercises", 
        {
            name: e.Exercise,
            description: e.Descriptions,
            primary_muscle: "arms",
            secondary_muscle: e.Secondary,


        },(data, status)=>{
            alert("Data: " + data + "\nStatus: " + status);
          })
    });
});

$.getJSON('../data/back.json',exerciseArr=>{
    exerciseArr["back"].forEach(e => {
        $.post("http://localhost:8080/api/exercises", 
        {
            name: e.Exercise,
            description: e.Descriptions,
            primary_muscle: "back",
            secondary_muscle: e.Secondary,


        },(data, status)=>{
            alert("Data: " + data + "\nStatus: " + status);
          })
    });
});

$.getJSON('../data/legs.json',exerciseArr=>{
    exerciseArr["legs"].forEach(e => {
        $.post("http://localhost:8080/api/exercises", 
        {
            name: e.Exercise,
            description: e.Descriptions,
            primary_muscle: "legs",
            secondary_muscle: e.Secondary,


        },(data, status)=>{
            alert("Data: " + data + "\nStatus: " + status);
          })
    });
});*/