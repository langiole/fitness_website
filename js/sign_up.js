function validation() {
    'use strict';
    window.addEventListener('load', () => {
        var forms = document.getElementsByClassName('needs-validation');
        var validation = [].filter.call(forms, (form) => {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                else {
                    var requestBody = {};
                    var today = new Date();
                    var inputs = document.getElementsByClassName("form-control");
                    for (var i = 0; i < 4; i++) {
                        requestBody[inputs[i].name] = inputs[i].value;
                    }
                    requestBody["date_registered"] = moment().format('YYYY-MM-DD');
                    
                    $(document).ready(function() {
                        $.ajax({
                            url: "http://localhost:8080/api/users",
                            data: JSON.stringify(requestBody),
                            contentType: "application/json",
                            type: "POST",
                            success: function() {
                                $.ajax({
                                    url: "http://localhost:8080/api/login",
                                    data: JSON.stringify({
                                        "email" : requestBody["email"],
                                        "password" : requestBody["password"]
                                    }),
                                    contentType: "application/json",
                                    type: "POST",
                                    success: function(body) {
                                        document.cookie = "sesion_id=" + body;
                                    }
                                });
                            },
                            error: function(body) {
                                $('#emailExistsAlert').show();
                            },
                            dataType: "json"
                        });
                    });
                    // event.preventDefault();
                    // event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);

    var password = document.getElementsByClassName("password");
    [].forEach.call(password, (p) => {
        p.addEventListener('keyup', () => {
            password[0].parentElement.classList.add("was-validated");
        });
        p.addEventListener('keyup', () => {
            if (password[0].value != password[1].value) {
                password[1].setCustomValidity("Invalid field.");
                password[1].parentElement.classList.add("was-validated");
            }
            else {
                password[1].setCustomValidity("");
            }
        });
    });
}