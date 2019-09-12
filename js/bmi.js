function bmi() {
    var ft = document.forms["formBMI"]["ft"].value;
    var inch = document.forms["formBMI"]["inch"].value;
    var mass = document.forms["formBMI"]["mass"].value;
    var height = (inch * 1.0) + (12 * ft);
    var bmiPrime = (703.0/25.0) * (mass / (height * height));
    var bmiNum = bmiPrime * 25.0;
    bmiNum.toFixed(2);

    if(bmiPrime < .60){
        document.getElementById("bmiCat").innerHTML=("Very Severely Underweight");
    }
    else if(bmiPrime < .64){
        document.getElementById("bmiCat").innerHTML=("Severely Underweight");
    }
    else if(bmiPrime < .74){
        document.getElementById("bmiCat").innerHTML=("Underweight");
    }
    else if(bmiPrime < 1.0){
        document.getElementById("bmiCat").innerHTML=("Healthy Weight");
    }
    else if(bmiPrime < 1.2){
        document.getElementById("bmiCat").innerHTML=("Overweight");
    }
    else if(bmiPrime < 1.4){
        document.getElementById("bmiCat").innerHTML=("Moderately Obese");
    }
    else if(bmiPrime < 1.6){
        document.getElementById("bmiCat").innerHTML=("Severely Obese");
    }
    else if(bmiPrime < 1.8){
        document.getElementById("bmiCat").innerHTML=("Very Severely Obese");
    }
    else if(bmiPrime < 2.0){
        document.getElementById("bmiCat").innerHTML=("Morbidly Obese");
    }
    else if(bmiPrime < 2.4){
        document.getElementById("bmiCat").innerHTML=("Super Obese");
    }
    else if(bmiPrime >= 2.4){
        document.getElementById("bmiCat").innerHTML=("Hyper Obese");
    }
    else{
        document.getElementById("bmiCat").innerHTML=("");
    }

    document.getElementById("bmiLabel").innerHTML=(bmiNum);
}
