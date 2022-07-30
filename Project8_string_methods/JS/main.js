function full_se() {
    var part_1 = "I have";
    var part_2 = " made this";
    var part_3 =" into a complete";
    var part_4 = " sentence.";
    var whole_s = part_1.concat(part_2,part_3,part_4);
    document.getElementById("con").innerHTML=whole_s;
}

function slice_m(){
    var sentence="all work and no play makes Johnny a dull boy";
    var section= sentence.slice(27,33);
    document.getElementById("slice").innerHTML=section;
}
function tall_f() {
let text = "Good morning";
let result = text.toUpperCase();

document.getElementById("tall").innerHTML = result;
}

function search_f() {
    let text="This morning it was a very misty morning, a bird was singing outside of a nearby house.";
    let position =text.search("a");
    document.getElementById("search").innerHTML=position;
}

function string_f() {
    var x=182;
    document.getElementById("numbers").innerHTML=x.toString();
}

function precision_m() {
    var x=134341.4134899387;
    document.getElementById("precision").innerHTML=x.toPrecision(10);
}

function fixed_f() {
    let num=3.56789;
    let n = num.toFixed();
    document.getElementById("fixed").innerHTML=n;
}

function value_f() {
    let text="Good afternoon!";
    let result=text.valueOf();
    document.getElementById("value").innerHTML=result;
}