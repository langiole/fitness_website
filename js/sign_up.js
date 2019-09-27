function validation() {
    'use strict';
    window.addEventListener('load', () => {
        var forms = document.getElementsByClassName('needs-validation');
        var validation = [].filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                else {
                    $(document).ready(function() {
                        const xhr = new XMLHttpRequest();
                        xhr.open("POST", "http://localhost:8080/api/users");
                        xhr.setRequestHeader('Content-Type', 'application/json');
                        xhr.send(JSON.stringify({
                            "user_id": 3,
                            "first_name": "Lee",
                            "last_name": "Angioleyyi",
                            "email": "SteveWhite@gmail.com",
                            "password": "mypassword",
                            "date_registered": "2019-07-10"
                        }));
                        /*
                        $.ajax({
                            url: "http://localhost:8080/api/users",
                            data: JSON.stringify({
                                "user_id": 3,
                                "first_name": "Lee",
                                "last_name": "Angioleyyi",
                                "email": "SteveWhite@gmail.com",
                                "password": "mypassword",
                                "date_registered": "2019-07-10"
                            }),
                            contentType: "application/json",
                            type: "POST",
                            success: null,
                            dataType: "json"
                        });
                        */
                    });
                    event.preventDefault();
                    event.stopPropagation();
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