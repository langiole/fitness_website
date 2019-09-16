//load exercise animation based on the type of page
window.onload=function() {
    let muscle= window.location.search.split('&')[0].substr(1);
    if(muscle=="") muscle="abs";
    let img=document.getElementById("exerciseAnim");
    img.src=`images/${muscle}.gif`;
}