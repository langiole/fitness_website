$.getJSON("data/abs.json",exerciseArr=>{
    $(document).ready(function(){
    generateExerciseHTML(exerciseArr);
    generateTable(exerciseArr);
    });
});
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
            
function generateTable(exerciseArr){
            let table= document.getElementById("exerTable");
            
            exerciseArr.abs.forEach((element,counter) => {
            
                    let tr= document.createElement("tr");
                    
                    for(let i=0; i<5; i++){
                    let td= document.createElement("td");
                    let a= document.createElement("a");
                    a.href=`?${counter}`;
                    
                    a.innerText = element.Exercise;
                    td.appendChild(a);
                    tr.appendChild(td);
                    }
                    table.appendChild(tr);
                
            });
}
            


