function CheckMember()
{
    
    var name = document.forms["RegForm"]["username"];
     var pasname = document.forms["RegForm"]["Pasword"];
        if(name.value == "") {
            window.alert("Please enter your name."); 
            name.focus(); 
            return false; 
        }
        if(pasname.value == "") {
            window.alert("Please enter your password."); 
            name.focus(); 
            return false; 
        }
}