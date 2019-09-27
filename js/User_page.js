var currFName = '';
var currLName = '';
var currEmail = '';
var currPassword = '';
var Nfirst = document.forms["RegForm"]["first"];
var Nlast = document.forms["RegForm"]["last"];
var Nmail = document.forms["RegForm"]["NEBox"];
var Npass = document.forms["RegForm"]["Pass"];
var NNpass = document.forms["RegForm"]["NPass"];
var NCpass = document.forms["RegForm"]["Opass"];

function CheckMember()
{
  
    if(Nfirst.value == "")
    {
       if($("#userAlert").find("div#userbox").length==0){
    $("#userAlert").append("<div class=' alert alert-danger alert-dismissable' id='userbox'> <button type='button' class='close' data-dismiss='alert'  aria-hidden='true'>&times;</button><center><strong>enter first Name</strong></center></div>");
  }
  $("#userAlert").css("display", "");
document.getElementById("WarnType").innerHTML = "enter first Name"; 
        Nfirst.focus(); 
        return false; 
    }
    if(Nlast.value == "")
    {
       if($("#userAlert").find("div#userbox").length==0){
    $("#userAlert").append("<div class=' alert alert-danger alert-dismissable' id='userbox'> <button type='button' class='close' data-dismiss='alert'  aria-hidden='true'style='>&times;</button><center><strong>enter Last Name</strong></center></div>");
  }
  $("#userAlert").css("display", "");
document.getElementById("WarnType").innerHTML = "enter Last Name";  
        Nlast.focus(); 
        return false; 
    }
    if (Nmail.value == "" || Nmail.value.indexOf("@", 0) < 0 || Nmail.value.indexOf(".", 0) < 0)         
    { 
       if($("#userAlert").find("div#userbox").length==0){
    $("#userAlert").append("<div class=' alert alert-danger alert-dismissable' id='userbox'> <button type='button' class='close' data-dismiss='alert'  aria-hidden='true'>&times;</button><center><strong>enter valid email</strong></center></div>");
  }
  $("#userAlert").css("display", "");
document.getElementById("WarnType").innerHTML = "enter valid email";; 
        Nmail.focus(); 
        return false; 
    } 
    if(Npass.value != currPassword)
    {
        if($("#userAlert").find("div#userbox").length==0){
    $("#userAlert").append("<div class=' alert alert-danger alert-dismissable' id='userbox'> <button type='button' class='close' data-dismiss='alert'  aria-hidden='true'>&times;</button><center><strong>wrong password</strong></center></div>");
  }
  $("#userAlert").css("display", "");
document.getElementById("WarnType").innerHTML = "wrong password";  
        Npass.focus(); 
        return false; 
    }
    if(NNpass.value == "")
    {
       if($("#userAlert").find("div#userbox").length==0){
    $("#userAlert").append("<div class=' alert alert-danger alert-dismissable' id='userbox'> <button type='button' class='close' data-dismiss='alert'  aria-hidden='true'>&times;</button><center><strong>enter new password</strong></center></div>");
  }
  $("#userAlert").css("display", "");
document.getElementById("WarnType").innerHTML = "enter new password"; 
        NNpass.focus(); 
        return false; 
    }
    if(NNpass.value != NCpass.value)
    {
       if($("#userAlert").find("div#userbox").length==0){
    $("#userAlert").append("<div class=' alert alert-danger alert-dismissable' id='userbox'> <button type='button' class='close' data-dismiss='alert'  aria-hidden='true'style='>&times;</button><center><strong>password does not match</strong></center></div>");
  }
  $("#userAlert").css("display", "");
document.getElementById("WarnType").innerHTML = "password does not match";; 
       NNpass.focus(); 
        NCpass.focus(); 
        return false; 
    }
    else
    {
var newcurrFirst = Nfirst.value;
currFName = newcurrFirst;            
Nfirst.value = currFName;           

var newcurrLast = Nlast.value;
currLName = newcurrLast;            
Nlast.value = currLName; 
            
var newcurrEmail = Nmail.value;     
currEmail = newcurrEmail;            
Nmail.value = currEmail;
            
var newcurrpas = NNpass.value;
currPassword = newcurrpas;            
Npass.value = "";
   
NNpass.value = "";            
            
NCpass.value = "";
NCpass.style.border = "1.4px solid dimgray";                           
if($("#userAlert2").find("div#userbox2").length==0){
    $("#userAlert2").append("<div class=' alert alert-success alert-dismissable' id='userbox'> <button type='button' class='close' data-dismiss='alert'  aria-hidden='true'>&times;</button><center><strong>enter first Name</strong></center></div>");
  }
  $("#userAlert2").css("display", "");
document.getElementById("WarnType2").innerHTML = "info updated"; 
        
        $(document).ready(function()
        {
             $.ajax({
                    url: "http://localhost:8080/api/users",
                    data: JSON.stringify({
                                        "user_id": 1,
                                        "first_name": currFName,
                                        "last_name": currLName,
                                        "email": currEmail,
                                        "password": currPassword,        
                                         }),
                    contentType: "application/json",
                    type: "PUT",
                    success: null,
                    dataType: "json"
                    });             
        });
            
    }
}
function conpassvalid()
{
    if(NCpass.value == "")
        {
             NCpass.style.border = "1.4px solid dimgray";
        }
    else if(NCpass.value == NNpass.value)
    {
            NCpass.style.border = "1.4px solid green";
    }
    else
    {
        NCpass.style.border = "1.4px solid red";    
    }
    
}

function PresentWaring()
{
       
    if (!confirm("are you shure you wish to delete your acount ?")) 
        {
            alert("acount deletion cancel");
        }
       
    else
        {
            alert(" acount deletion confirmed");
        }
        
 }

function ShowPass() 
{
 
  if (Npass.type == "password") {
    Npass.type = "text";  
    NNpass.type = "text";
    NCpass.type = "text";
  } else {
    Npass.type = "Password";   
    NNpass.type = "password";
    NCpass.type = "password";
  }
}

function OpenTest()
{
    
    $(document).ready(function()
    {
         $.ajax({
                url: "http://localhost:8080/api/users/1",
                success: (data) =>{
                
                 document.getElementById("first").setAttribute("value", data["first_name"]);
                 currFName = data["first_name"];
                document.getElementById("last").setAttribute("value", data["last_name"]);
                  currLName = data["last_name"];
                  document.getElementById("NEBox").setAttribute("value", data["email"]);
                  currEmail = data["email"];
                 currPassword = data["password"];
                },
                contentType: "application/json",
                type: "GET",
                dataType: "json"
                }); 

               
    });
              
    

   
}

function Delete()
{
  $(document).ready(function()
  {
       $.ajax({
              url: "http://localhost:8080/api/users/1",
              data: JSON.stringify({
                                  "user_id": 1,  
                                   }),
              contentType: "application/json",
              type: "DELETE",
              success: null,
              dataType: "json"
              });             
  });
}

