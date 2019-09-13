let i=0;
//Every 1.4 seconds increment the rep counter
setInterval(()=>{
    document.getElementById("reps").innerText=`${i}`;
    i++;
},1400);