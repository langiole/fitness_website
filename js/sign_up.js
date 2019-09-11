function validatePassword() {
    var password = document.forms["signupForm"]["Password"];
    var confirmPassword = document.forms["signupForm"]["cpassword"];
    if (confirmPassword.value == "") {
        colorBorder("cpassword", "#ccc");
        return false;
    }
    else if(password.value == confirmPassword.value) { 
        colorBorder("cpassword", "green");
        return true;
    }
    else {
        colorBorder("cpassword", "red");
        return false;
    }
}

function colorBorder(name, color) {
    document.forms["signupForm"][name].style.border = "1.4px solid " + color;
}

function validateForm() {
    var form = [document.forms["signupForm"]["First name"],
                document.forms["signupForm"]["Last name"],
                document.forms["signupForm"]["Email"],
                document.forms["signupForm"]["Password"]];

    // check if all inputs are filled out
    valid = true
    for (i = 0; i < form.length; i++) {
        if (form[i].value.trim() == "") {
            // show error message
            colorBorder(form[i].name, "red");
            document.getElementById(form[i].name + " err mssg").style.display = "block";
            document.getElementById(form[i].name + " err mssg").innerHTML = "Enter " + form[i].name.toLowerCase();
            valid = false
        }
        else {
            // clear message
            colorBorder(form[i].name, "#ccc");
            document.getElementById(form[i].name + " err mssg").style.background = "none";
            document.getElementById(form[i].name + " err mssg").innerHTML = "";
        }
    }
    
    if (!valid) { return false; }
    
    // check if passwords match
    if (!validatePassword()) {
        alert("Passwords must match");
        return false;
    }
    
    // check if user accepted the terms & conditions
    if (document.forms["signupForm"]["policy"].checked == false) {
        alert("Read and accept the terms and conditions to sign up");
        return false;
    }
    
    return false;
}