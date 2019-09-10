var currEmail = "mail@mail.com"

function CheckMember()
{
    var Nmail = document.forms["RegForm"]["NewEmail"];
    var Omail = document.forms["RegForm"]["OldEmail"];
    
    if (Omail.value != currEmail)                   
    { 
        window.alert("Please enter current e-mail address."); 
        Omail.focus(); 
        return false; 
    } 
    
    if (Nmail.value == "" )                           
    { 
        window.alert("Please enter a valid e-mail address."); 
        Nmail.focus(); 
        return false; 
    } 
    if (Nmail.value.indexOf("@", 0) < 0)                 
    { 
        window.alert("Please enter a valid e-mail address."); 
        Nmail.focus(); 
        return false; 
    } 
    if (Nmail.value.indexOf(".", 0) < 0)               
    { 
        window.alert("Please enter a valid e-mail address."); 
        Nmail.focus(); 
        return false; 
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
    document.getElementById("OEBox").Value = currEmail;
}
    