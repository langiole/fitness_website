function bmi() {
    var ft = document.forms["formBMI"]["ft"].value;
    var inch = document.forms["formBMI"]["inch"].value;
    var mass = document.forms["formBMI"]["mass"].value;
    inch = inch + (12 * ft);
    document.getElementById("bmiLabel").innerHTML=((703 * mass) / (inch * inch));
}
