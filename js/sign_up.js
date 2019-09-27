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