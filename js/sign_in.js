function CheckMember()
{
var name = document.forms["RegForm"]["user"];
var pasname = document.forms["RegForm"]["pass"];
    if(name.value == "") 
    {
     if($("#userAlert").find("div#userbox").length==0){
    $("#userAlert").append("<div class=' alert alert-danger alert-dismissable' id='userbox'> <button type='button' class='close' data-dismiss='alert'  aria-hidden='true'>&times;</button><center><strong>username incorect</strong></center></div>");
  }
  $("#userAlert").css("display", "");
document.getElementById("WarnType").innerHTML = "username incorect";
         name.focus(); 
         return false; 
        }
        if(pasname.value == "") {
           if($("#userAlert").find("div#userbox").length==0){
    $("#userAlert").append("<div class='alert alert-danger alert-dismissable' id='userbox'> <button type='button' class='close' data-dismiss='alert'  aria-hidden='true'>&times;</button><center><strong>password incorect</strong></center></div>");
  }
  $("#userAlert").css("display", "");
            
document.getElementById("WarnType").innerHTML = "password incorect";
            pasname.focus(); 
            return false; 
        }
}

function ShowPass() 
{
 
  if (document.forms["RegForm"]["pass"].type == "password") 
  {
   document.forms["RegForm"]["pass"].type = "text"
  } else {
    document.forms["RegForm"]["pass"].type = "password"
  }
}