function moreButtonState()
        {
            
           let element = document.querySelector("#moreExercises");
            let currDisplay=getComputedStyle(element).display;
           
    
            if(currDisplay === "block"){
            document.getElementById("moreExercises").style.display = "none";
            document.getElementById("buttonText").innerHTML="Show more abs exercises";
                
           }
            else if(currDisplay === "none"){
                document.getElementById("moreExercises").style.display = "block";
                document.getElementById("buttonText").innerHTML="hide exercises";
            }
        }