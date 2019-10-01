//This script it's not used, but can be used to generate insert into queries
function createSql(muscle){
$.getJSON(`../data/${muscle}.json`,data=>{
    data[`${muscle}`].forEach(e=> {
        let query= `INSERT INTO Exercises (name, description, primary_muscle, secondary_muscle, video_link) Values('${e.Exercise}', '${e.Descriptions}', '${e.primary}', '${e.Secondary}', '${e.link}');\n\n`;
        let element= document.createElement("h5");
        element.innerText=query;
        document.getElementById("req").appendChild(element);
    });
});
}

//create sql script for all the exercises
createSql("abs");
createSql("arms");
createSql("chest");
createSql("back");
createSql("legs");