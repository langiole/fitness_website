function bmi(ft, inch, mass) {
    inch = inch + (12 * ft);
    return (mass / (inch * inch) * 703);
}
