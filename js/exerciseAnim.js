window.onload=function() {
    let img=document.getElementById("exerciseAnim");
    img.src=`images/${window.location.search.split('&')[0].substr(1)}.gif`;
}