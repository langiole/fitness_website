var currFName = "henderson";
var currLName = "burgus";
var currEmail = "mail@mail.com";
var currPassword = "password";
var Nfirst = document.forms["RegForm"]["first"];
var Nlast = document.forms["RegForm"]["last"];
var Nmail = document.forms["RegForm"]["NEBox"];
var Npass = document.forms["RegForm"]["Pass"];
var NNpass = document.forms["RegForm"]["NPass"];
var NCpass = document.forms["RegForm"]["Opass"];

function CheckMember()
{
    
    if (Nmail.value == "" || Nmail.value.indexOf("@", 0) < 0 || Nmail.value.indexOf(".", 0) < 0)         
    { 
        window.alert("Please enter a valid e-mail address."); 
        Nmail.focus(); 
        return false; 
    } 
    if(Nfirst == "")
    {
       window.alert("Please enter a First Name."); 
        Nfirst.focus(); 
        return false; 
    }
   if(Nlast == "")
    {
       window.alert("Please enter a Last Name."); 
        Nlast.focus(); 
        return false; 
    }
    if(Npass.value != currPassword)
    {
        window.alert("wrong password."); 
        Npass.focus(); 
        return false; 
    }
    if(NNpass.value == "")
    {
       window.alert("Please enter your new password."); 
        NNpass.focus(); 
        return false; 
    }
    if(NNpass.value != NCpass.value)
    {
       window.alert("password does not match."); 
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
alert("info updated");
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
    document.getElementById("first").setAttribute("value", currFName);
    document.getElementById("last").setAttribute("value", currLName);
    
    document.getElementById("NEBox").setAttribute("value", currEmail);
    
    
}

