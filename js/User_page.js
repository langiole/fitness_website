var currEmail = "mail@mail.com";
var bool = true;
function CheckMember()
{
    var Nmail = document.forms["RegForm"]["NEBox"];
    var Omail = document.forms["RegForm"]["OEBox"];
    
    if (Omail.value != currEmail)                   
    { 
        window.alert("Please enter current e-mail address."); 
        Omail.focus(); 
         var bool = false;
        return false; 
    } 
    
    if (Nmail.value == "" )                           
    { 
        window.alert("Please enter a valid e-mail address."); 
        Nmail.focus(); 
        var bool = false;
        return false; 
    } 
    if (Nmail.value.indexOf("@", 0) < 0)                 
    { 
        window.alert("Please enter a valid e-mail address."); 
        Nmail.focus(); 
         var bool = false;
        return false; 
    } 
    if (Nmail.value.indexOf(".", 0) < 0)               
    { 
        window.alert("Please enter a valid e-mail address."); 
        Nmail.focus(); 
         var bool = false;
        return false; 
    } 
    else
        {
var newcurrEmail = document.forms["RegForm"]["NEBox"].value;     
currEmail = newcurrEmail;            
 document.getElementById("OEBox").value = currEmail;
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

function OpenTest()
{
    document.getElementById("OEBox").setAttribute("value", currEmail);
}

