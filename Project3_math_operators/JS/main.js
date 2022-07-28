window.alert(Math.random()); //alert for top page//

function addition_Function() {
    var addition = 2+2;
    document.getElementById("add").innerHTML = "2+2 = " + addition;
}
 
function subtraction_Function() {
    var Subtraction = 5 - 2;
    document.getElementById("sub").innerHTML = "5 - 2= " + Subtraction;
}

function multiplication() {
    var simple_Math = 6* 8;
    document.getElementById("mult").innerHTML ="6 * 8 = " + simple_Math;
}

function divison() {
    var simple_Math = 90/9;
    document.getElementById("div").innerHTML = "90/9 =" + simple_Math;
}

function more_Math() {
    var simple_Math = (1+2)* 10 /2-5;
    document.getElementById("ex").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;
}

function modulus_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("per").innerHTML = "When you divide 25 by 6 you have a remainder of:"
    + simple_Math;
}

function negative_Operator() {
    var x =10;
    document.getElementById("neg").innerHTML = --x;
}

function positive_Operator() {
    var x=5;
    document.getElementById("pos").innerHTML = ++x;
}


