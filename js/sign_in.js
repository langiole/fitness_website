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

function showAlert(){
  if($("#myAlert").find("div#myAlert2").length==0){
    $("#myAlert").append("<div class='alert alert-success alert-dismissable' id='myAlert2'> <button type='button' class='close' data-dismiss='alert'  aria-hidden='true'>&times;</button> Success! message sent successfully.</div>");
  }
  $("#myAlert").css("display", "");
}