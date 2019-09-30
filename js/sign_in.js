var curremail = '';
var currpass = '';

function CheckMember()
{

var name = document.forms["RegForm"]["user"];
var pasname = document.forms["RegForm"]["pass"];

    if(name.value != curremail) 
    {
     if($("#userAlert").find("div#userbox").length==0){
    $("#userAlert").append("<div class=' alert alert-danger alert-dismissable' id='userbox'> <button type='button' class='close' data-dismiss='alert'  aria-hidden='true'>&times;</button><center><strong>username incorect</strong></center></div>");
  }
  $("#userAlert").css("display", "");
document.getElementById("WarnType").innerHTML = "username incorect";
         name.focus(); 
         return false; 
        }
        if(pasname.value != currpass) {
           if($("#userAlert").find("div#userbox").length==0){
    $("#userAlert").append("<div class='alert alert-danger alert-dismissable' id='userbox'> <button type='button' class='close' data-dismiss='alert'  aria-hidden='true'>&times;</button><center><strong>password incorect</strong></center></div>");
  }
  $("#userAlert").css("display", "");
            
document.getElementById("WarnType").innerHTML = "password incorect";
            pasname.focus(); 
            return false; 
        }
        else
        {
          $(document).ready(function() {
            $.ajax({
                url: "http://localhost:8080/api/login",
                data: JSON.stringify({
                    "email" : name.value,
                    "password" : pasname.value
                }),
                contentType: "application/json",
                type: "POST",
                success: function(body) {
                    document.cookie = "sesion_id=" + body;
                }
            });
          });
         // window.location.href = 'home.html'
        }
}

function OpenTest()
{
    
    $(document).ready(function()
    {
         $.ajax({
                url: "http://localhost:8080/api/users/1",
                success: (data) =>{
                
                  curremail = data["email"];
                 currpass = data["password"];
                },
                contentType: "application/json",
                type: "GET",
                dataType: "json"
                }); 

               
    });
              
    

   
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