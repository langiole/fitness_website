// get query parameter from url containing muscle type and exercise id
let queries=window.location.search.split('&');
let muscle= queries[0].substr(1), index= queries[1];

//edge case if no query receive set variables to default values
if(muscle=="") muscle="abs";
if(index==null || index=="") index=0;

const pathToJson=`http://localhost:8080/api/exercises/${muscle}`;         //same as "data/"+ muscle +".json"

//use jquery's getJSON function to load json file
if(window.location.pathname == "/body_part.html")
    $.getJSON(pathToJson,exerciseArr=>{
        //wait for the DOM to load
        $(document).ready(function(){
            // generateExerciseHTML(exerciseArr);
            generateBodyPartTable(exerciseArr);
        });
    });
else 
$.getJSON(pathToJson,exerciseArr=>{
    //wait for the DOM to load
    $(document).ready(function(){
        generateExerciseHTML(exerciseArr);
        generateTable(exerciseArr);
    });
});

//Manipulate and reload the DOM based on the query passed
function generateExerciseHTML(exerciseArr){
    document.getElementById("exerciseTitle").innerText=exerciseArr[muscle][index].Exercise;
    document.getElementById("descrp").innerText=exerciseArr[muscle][index].Descriptions;
    document.getElementById("yt_video").setAttribute("src",exerciseArr[muscle][index].link);
    document.getElementById("buttonText").innerText=`Show more ${muscle} exercises`;
    document.getElementById("tableTitleId").innerText=`${muscle} Exercises`;
    document.getElementById("dropdownMenu1").innerText=`${muscle}`;
}

//Dynamically manipulate the table in our DOM
function generateTable(exerciseArr){
            let table= document.getElementById("exerTable");
            
            let i=0;
            while(i <exerciseArr[muscle].length){
                    let tr= document.createElement("tr");
                    
                    for(let j=0; j<5; j++){
                       if(!(i <exerciseArr[muscle].length)) break;
                    
                        let element=exerciseArr[muscle][i];
                        let td= document.createElement("td");
                        let a= document.createElement("a");
                        //set the cell link and give it the muscle and id parameters
                        a.href=`?${muscle}&${i}`;
                        a.innerText = element.Exercise;
                        td.appendChild(a);
                        tr.appendChild(td);
                        i++;
                    }
                    table.appendChild(tr);
            }
}

//Dynamically manipulate the table in our DOM
function generateBodyPartTable(exerciseArr){
    let table= document.getElementById("exerTable");
    
    let i=0;
    while(i <exerciseArr[muscle].length){
            let tr= document.createElement("tr");
            
            for(let j=0; j<5; j++){
               if(!(i <exerciseArr[muscle].length)) break;
            
                let element=exerciseArr[muscle][i];
                let td= document.createElement("td");
                let a= document.createElement("a");
                //set the cell link and give it the muscle and id parameters
                a.href=`exercise.html?${muscle}&${i}`;
                a.innerText = element.Exercise;
                td.appendChild(a);
                tr.appendChild(td);
                i++;
            }
            table.appendChild(tr);
    }
}