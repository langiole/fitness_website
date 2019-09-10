function validatePassword() {
    var password = document.getElementById("pword");
    var confirmPassword = document.getElementById("cpword");
    if (confirmPassword.value == "") {
       document.getElementById("cpword").style.border = "1px solid #ccc" ;
    }
    else if(password.value == confirmPassword.value) { 
        document.getElementById("cpword").style.border = "1.4px solid green";
    }
    else {
        document.getElementById("cpword").style.border = "1.4px solid red";
    }
}

function validateForm() {
    var firstName = document.forms["signupForm"]["firstname"].value;
    var lastName = document.forms["signupForm"]["lastname"].value;
    var email = document.forms["signupForm"]["email"].value;
    var password = document.forms["signupForm"]["password"].value;
    var cPassword = document.forms["signupForm"]["cPassword"].value;
  
    if (firstName == "" || firstName == " ") {
        alert("First name must be filled out");
    }
    else if (lastName == "") {
        alert("Last name must be filled out");
    }
}