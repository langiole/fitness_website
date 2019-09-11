//use jquery's getJSON function to load json file
$.getJSON("data/abs.json",exerciseArr=>{
    //wait for the DOM to load
    $(document).ready(function(){
    generateExerciseHTML(exerciseArr);
    generateTable(exerciseArr);
    });
});

//Manipulate and reload the DOM based on the query passed
function generateExerciseHTML(exerciseArr){
    let index=window.location.search.substr(1);
    if(index =="") index=0;
    let muscle= Object.getOwnPropertyNames(exerciseArr)[0];

    document.getElementById("exerciseTitle").innerText=exerciseArr.abs[index].Exercise;
    document.getElementById("descrp").innerText=exerciseArr.abs[index].Descriptions;
    document.getElementById("yt_video").setAttribute("src",exerciseArr.abs[index].link);
    document.getElementById("buttonText").innerText=`Show more ${muscle} exercises`;
    document.getElementById("tableTitleId").innerText=`${muscle} Exercises`;
}
//Dynamically manipulate the table in our DOM
function generateTable(exerciseArr){
            let table= document.getElementById("exerTable");
            
            let i=0;
            while(i <exerciseArr.abs.length){
                    let tr= document.createElement("tr");
                    
                    for(let j=0; j<5; j++){
                       if(!(i <exerciseArr.abs.length)) break;
                    let element=exerciseArr.abs[i];
                    let td= document.createElement("td");
                    let a= document.createElement("a");
                    a.href=`?${i}`;
                    a.innerText = element.Exercise;
                    td.appendChild(a);
                    tr.appendChild(td);
                    i++;
                    }
                    table.appendChild(tr);
            }
}
            


