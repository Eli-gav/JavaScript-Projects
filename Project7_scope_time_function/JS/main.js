var x=10;
function add_numbers_1() {
    document.write(20 + x + "<br>");
}

function add_numbers_2() {
    document.write(x+100);

}
add_numbers_1();
add_numbers_2();

/*variable "B" undefined********/

function mult_1() {
    var simple_Math=8*b;
    document.getElementById("multi").innerHTML =" 8 * b = " + simple_Math;
}

/*defined variable 'a' ***********/
function multiplication() {
    a=2
    var simple_Math = 6* a;
    document.getElementById("mult").innerHTML ="6 * a = " + simple_Math;
}


if (9>8) {
    document.write("The left number is greater than the right");
}

function get_Date() {
    if(new Date().getHours()<18);
    document.getElementById("hi").innerHTML="Good morning!";
}

function age_f() {
    age=document.getElementById("age").value;
    if (age>=21) {
        vote="You cannot enter micky mouse club house";
    }
    else {
        vote="enter";
    }
    document.getElementById("old").innerHTML=vote;
}

function time_f() {
    var time = new Date().getHours();
    var reply;
    if (time<12 ==time>0) {
        reply="it is morning time";
    }
    else if(time>=12==time<18) {
        reply="it is night";
    }
    document.getElementById("time_d").innerHTML=reply;
 }

